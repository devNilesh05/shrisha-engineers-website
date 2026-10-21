"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
}

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length
    );
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <motion.div
            key={`${projectName}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.35 }}
            viewport={{ once: true, margin: "-40px" }}
            className="group relative overflow-hidden rounded-2xl border border-border/80 bg-muted aspect-[4/3] shadow-sm transition-all duration-300 hover:border-accent/50 hover:shadow-xl"
          >
            <button
              onClick={() => setSelectedIndex(index)}
              className="relative block size-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`View photo ${index + 1} of ${images.length} - ${projectName}`}
            >
              <Image
                src={image}
                alt={`${projectName} - Construction Photo ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between p-4">
                <span className="text-xs font-semibold text-white/90">
                  Photo {index + 1} of {images.length}
                </span>
                <span className="flex size-9 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
                  <ZoomIn className="size-4" />
                </span>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex flex-col items-center justify-center w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 sm:top-2 sm:right-2 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
                aria-label="Close lightbox"
              >
                <X className="size-5" />
              </button>

              {/* Main Image Display */}
              <div className="relative w-full aspect-[16/10] max-h-[70vh] bg-black/50 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={images[selectedIndex]}
                  alt={`${projectName} - Photo ${selectedIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Prev / Next buttons */}
              <div className="absolute inset-y-0 -left-3 sm:-left-6 flex items-center">
                <button
                  onClick={handlePrev}
                  className="flex size-11 items-center justify-center rounded-full bg-black/70 border border-white/20 text-white backdrop-blur transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-6" />
                </button>
              </div>

              <div className="absolute inset-y-0 -right-3 sm:-right-6 flex items-center">
                <button
                  onClick={handleNext}
                  className="flex size-11 items-center justify-center rounded-full bg-black/70 border border-white/20 text-white backdrop-blur transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>

              {/* Bottom Metadata & Thumbnails */}
              <div className="mt-4 flex flex-col items-center gap-3 w-full">
                <div className="rounded-full bg-black/80 border border-white/15 px-4 py-1 text-xs font-semibold text-white/90">
                  {projectName} • Image {selectedIndex + 1} of {images.length}
                </div>

                {/* Thumbnails strip */}
                <div className="flex justify-center gap-2 overflow-x-auto max-w-full py-2 px-4 scrollbar-none">
                  {images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedIndex(idx)}
                      className={`relative size-14 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedIndex === idx
                          ? "border-accent ring-2 ring-accent/40 scale-105"
                          : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
