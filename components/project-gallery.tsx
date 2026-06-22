"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
}

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + images.length) % images.length
        );
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % images.length
        );
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <motion.div
            key={`${projectName}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg bg-muted"
          >
            <button
              onClick={() => setSelectedIndex(index)}
              className="block w-full h-full"
              aria-label={`View image ${index + 1} of ${images.length}`}
            >
              <Image
                src={image}
                alt={`${projectName} - Image ${index + 1}`}
                width={600}
                height={400}
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                <div className="rounded-full bg-white/90 p-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <svg
                    className="size-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image */}
              <div className="relative w-full bg-black rounded-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <Image
                    src={images[selectedIndex]}
                    alt={`${projectName} - Image ${selectedIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -right-12 -top-12 p-2 text-white/60 transition-colors hover:text-white"
                aria-label="Close lightbox"
              >
                <X className="size-8" />
              </button>

              {/* Navigation Buttons */}
              <div className="absolute inset-0 flex items-center justify-between px-6 py-4">
                <button
                  onClick={() =>
                    setSelectedIndex(
                      (prev) =>
                        (prev! - 1 + images.length) % images.length
                    )
                  }
                  className="flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  onClick={() =>
                    setSelectedIndex((prev) => (prev! + 1) % images.length)
                  }
                  className="flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white">
                {selectedIndex + 1} / {images.length}
              </div>

              {/* Thumbnail Strip */}
              <div className="mt-6 flex justify-center gap-2 overflow-x-auto px-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`relative flex-shrink-0 rounded-md overflow-hidden transition-all ${
                      selectedIndex === index
                        ? "ring-2 ring-accent"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={60}
                      className="h-16 w-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
