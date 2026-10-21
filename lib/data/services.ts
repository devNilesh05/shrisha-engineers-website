export interface ServiceItem {
  id: string
  title: string
  slug: string
  shortDesc: string
  fullDesc: string
  icon: 'building' | 'hard-hat' | 'factory' | 'clipboard' | 'traffic-cone' | 'wrench'
  features: string[]
  stats?: string
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'civil-construction',
    slug: 'civil-construction',
    title: 'Civil & Structural Construction',
    shortDesc:
      'Turnkey civil engineering and structural contracting for residential complexes, commercial developments, and high-rise towers.',
    fullDesc:
      'From deep foundation excavation to super-structure finishing, we implement earthquake-resistant, RCC frame designs with world-class formwork and concrete technology.',
    icon: 'building',
    features: [
      'High-rise residential and commercial towers',
      'RCC framed & post-tensioned slab construction',
      'Precision formwork & monolithic concrete pouring',
      'Seismic compliance & load-bearing certification',
    ],
    stats: '50+ Structures Delivered',
  },
  {
    id: 'structural-engineering',
    slug: 'structural-engineering',
    title: 'Structural Design & Analysis',
    shortDesc:
      'Robust, code-compliant structural modeling, load optimization, and rigorous engineering analysis engineered to withstand extreme loads.',
    fullDesc:
      'Our team uses state-of-the-art structural simulation tools to produce optimized bar-bending schedules, steel reinforcement layouts, and structural audit reports.',
    icon: 'hard-hat',
    features: [
      'STAAD.Pro & ETABS structural simulations',
      'Soil mechanics & deep foundation optimization',
      'Structural health auditing & load capacity testing',
      'IS Code & National Building Code (NBC) compliance',
    ],
    stats: '100% Code Compliance',
  },
  {
    id: 'industrial-projects',
    slug: 'industrial-projects',
    title: 'Industrial Facilities & Warehousing',
    shortDesc:
      'Heavy-duty industrial structures, pre-engineered buildings (PEBs), manufacturing plants, and high-bay logistics warehouses.',
    fullDesc:
      'Engineering industrial facilities engineered for heavy machinery, specialized chemical flooring, overhead gantry cranes, and uninterrupted logistic operations.',
    icon: 'factory',
    features: [
      'Pre-Engineered Steel Buildings (PEB) design',
      'Industrial grade laser-screed flooring (FM2 / DM)',
      'Heavy-equipment foundation & crane gantry setups',
      'Factory regulatory approvals & fire safety integration',
    ],
    stats: 'Heavy Duty Standards',
  },
  {
    id: 'project-management',
    slug: 'project-management',
    title: 'EPC & Project Management (PMC)',
    shortDesc:
      'Disciplined turnkey planning, budget management, timeline governance, and rigorous on-site quality assurance from ground-breaking to handover.',
    fullDesc:
      'End-to-end execution oversight ensuring strict adherence to milestones, vendor coordination, cost efficiency, and zero-compromise safety protocols.',
    icon: 'clipboard',
    features: [
      'Critical Path Method (CPM) project scheduling',
      'Real-time material procurement & cost monitoring',
      'Strict Zero-Harm on-site safety management',
      'Statutory NOCs, clearances, and handover dossiers',
    ],
    stats: '98% On-Time Milestones',
  },
  {
    id: 'infrastructure-development',
    slug: 'infrastructure-development',
    title: 'Infrastructure & Urban Works',
    shortDesc:
      'Road networks, storm water drainage, utility conduits, retaining structures, and institutional campus development built for longevity.',
    fullDesc:
      'Delivering heavy civil infrastructure that serves communities, including asphalt/concrete roads, culverts, sewage networks, and boundary protection.',
    icon: 'traffic-cone',
    features: [
      'Concrete & bitumen road construction',
      'Subsurface utilities & storm-water conduits',
      'Retaining walls, piling & slope stabilization',
      'Institutional campuses (e.g. IIT Bombay projects)',
    ],
    stats: 'Built for Longevity',
  },
  {
    id: 'renovation-maintenance',
    slug: 'renovation-maintenance',
    title: 'Retrofitting & Asset Modernization',
    shortDesc:
      'Structural retrofitting, carbon-fiber wrapping, waterproofing solutions, and facility modernization extending structural lifespan.',
    fullDesc:
      'Specialized engineering interventions that restore structural integrity, seal waterproofing deficiencies, and upgrade aging facilities into contemporary spaces.',
    icon: 'wrench',
    features: [
      'Micro-concreting & structural column jacketing',
      'Polymer modified mortar (PMM) repairs',
      'Advanced multi-layer PU waterproofing systems',
      'Facade restoration and architectural upgrades',
    ],
    stats: 'Life Extension Guaranteed',
  },
]
