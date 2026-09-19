export type Link = { label: string; href: string };
export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  points: string[];
  secondary?: boolean;
};
export type Project = {
  title: string;
  domain: string;
  summary: string;
  outcome?: string;
  technologies: string[];
  professional?: boolean;
  href?: string;
};

export const profile = {
  name: 'Kanish S',
  role: 'Java Backend Engineer',
  location: 'Bengaluru, India',
  email: 'kanish.sridhar.dev@gmail.com',
  headline: 'Building fast, reliable systems for trading, banking, and financial transactions.',
  summary:
    'I design and build production-grade backend systems using Java, Kotlin, Spring Boot, Kafka, Redis, PostgreSQL, and event-driven microservices. My work spans trading order-management systems, market-data processing, digital wallets, payments, accounting, and settlement workflows.',
  links: {
    github: 'https://github.com/Kanish2002',
    linkedin: 'https://www.linkedin.com/in/kanish-sridhar',
    leetcode: 'https://leetcode.com/u/kanish2208',
    resume: '/Kanish-S-Resume.pdf'
  }
};

export const snapshots = [
  { value: '3+ years', label: 'Backend engineering experience' },
  { value: '35–50%', label: 'API latency reduction' },
  { value: '~600 ticks/sec', label: 'Market-data ingestion' },
  { value: '9.48/10', label: 'B.Tech CGPA' },
  { value: 'Trading + Banking', label: 'Financial-domain experience' },
  { value: 'Java + Kafka', label: 'Primary specialization' }
];

export const experiences: Experience[] = [
  {
    company: 'Barq Technology Lab',
    location: 'Bengaluru, India',
    role: 'Software Development Engineer – I',
    period: 'Apr 2026 — Jul 2026',
    points: [
      'Developed Java, Spring Boot, and Kafka microservices for a digital-wallet platform.',
      'Contributed to Cash-In, Cash-Out, Refund, Rollback, and P2P transaction workflows across Payment, Wallet, Accounting, and Settlement services.',
      'Built backend APIs and Retool integrations for Finance and Operations workflows, with a focus on consistency and reliability.'
    ]
  },
  {
    company: 'Zentropy Technologies',
    location: 'Chennai, India',
    role: 'Senior Member Technical',
    period: 'Apr 2025 — Feb 2026',
    points: [
      'Built a low-latency, highly available Order Management System for NSE and BSE, including order lifecycles and algorithmic trading workflows.',
      'Applied concurrency control and Neo4j graph workflows; contributed to HLD/LLD and led reviews for performance-sensitive services.',
      'Mentored engineers and reduced API latency by approximately 35–50% with Redis caching and response compression.'
    ]
  },
  {
    company: 'Zentropy Technologies',
    location: 'Chennai, India',
    role: 'Member Technical',
    period: 'May 2023 — Mar 2025',
    points: [
      'Designed a paper-trading broker platform with Java, Kotlin, Spring Boot, and microservices.',
      'Built order-simulation, trading, and market-data APIs across AWS and DigitalOcean infrastructure.',
      'Automated tick ingestion at approximately 600 ticks per second with retry and backpressure handling.'
    ]
  },
  {
    company: 'Zentropy Technologies',
    location: 'Chennai, India',
    role: 'Software Engineering Intern',
    period: 'Nov 2022 — Apr 2023',
    points: [
      'Supported Spring Boot and REST services, internal tools, debugging, testing, Linux operations, and production deployments.'
    ]
  },
  {
    company: 'Sona College of Technology',
    location: 'Salem, India',
    role: 'Research Intern · Part-time academic research',
    period: 'Dec 2020 — Apr 2023',
    points: [
      'Developed an Augmented Reality Sandbox using Azure Kinect DK and Python for real-time depth, motion, and terrain visualization.'
    ]
  },
  {
    company: 'Vee Technologies',
    location: 'Salem, India',
    role: 'Software Engineering Intern · Additional experience',
    period: 'Mar 2021 — Jun 2021',
    points: [
      'Contributed to a browser-based code editor and simulator for HTML, CSS, JavaScript, and React applications.'
    ],
    secondary: true
  }
];

export const projects: Project[] = [
  {
    title: 'Trading Order Management System',
    domain: 'Capital markets · Low latency',
    summary:
      'Distributed services for end-to-end order lifecycles, proprietary order types, execution workflows, P&L, concurrency control, and resilient exchange-facing operations.',
    outcome: 'Reduced API latency by approximately 35–50% using Redis caching and response compression.',
    technologies: ['Java', 'Kotlin', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Neo4j'],
    professional: true
  },
  {
    title: 'Paper Trading Broker Platform',
    domain: 'Trading simulation · Cloud',
    summary:
      'Backend services for realistic order simulation, trading APIs, and market-data processing, supported by storage, compute, and serverless components.',
    technologies: ['Java', 'Kotlin', 'Spring Boot', 'AWS', 'DigitalOcean'],
    professional: true
  },
  {
    title: 'Real-Time Market Data Pipeline',
    domain: 'Streaming · Reliability',
    summary:
      'Tick-level ingestion and event processing designed around retry strategies, backpressure, fault tolerance, and predictable throughput.',
    outcome: 'Handled approximately 600 market-data ticks per second.',
    technologies: ['Kafka', 'Kafka Streams', 'Redis', 'RocksDB'],
    professional: true
  },
  {
    title: 'Core Banking & Digital Wallet',
    domain: 'Payments · Transaction processing',
    summary:
      'Cash-In, Cash-Out, refunds, rollbacks, and P2P workflows spanning Payment, Wallet, Accounting, and Settlement services, plus operational tooling.',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Retool'],
    professional: true
  },
  {
    title: 'Augmented Reality Sandbox',
    domain: 'Computer vision · Academic research',
    summary:
      'An interactive terrain-visualization system combining depth sensing, motion tracking, and real-time sensor-data processing with Azure Kinect DK.',
    technologies: ['Python', 'Azure Kinect DK', 'pyKinectAzure', 'Computer Vision'],
    href: 'https://github.com/Kanish2002/Augmented-Reality-Sandbox'
  }
];

export const expertise = [
  { group: 'Languages', skills: ['Java', 'Kotlin', 'Python', 'C', 'C++'] },
  { group: 'Backend & APIs', skills: ['Spring Boot', 'WebFlux', 'Spring Security', 'Spring Data', 'REST', 'gRPC', 'Microservices'] },
  { group: 'Distributed systems', skills: ['Apache Kafka', 'Kafka Streams', 'RabbitMQ', 'Event-driven architecture', 'Low latency', 'High availability'] },
  { group: 'Data', skills: ['PostgreSQL', 'Redis', 'Neo4j', 'RocksDB', 'pgvector', 'Apache Arrow'] },
  { group: 'Cloud & delivery', skills: ['AWS', 'DigitalOcean', 'Docker', 'Kubernetes', 'Linux', 'Gradle', 'Maven'] },
  { group: 'Quality & reliability', skills: ['JUnit', 'Mockito', 'MockK', 'Retries', 'Backpressure', 'Transactional consistency', 'Performance optimization'] },
  { group: 'AI engineering', skills: ['RAG', 'LLM integrations', 'Spring AI', 'Vector databases', 'Prompt engineering'] }
];

export const approach = [
  'Understand the business and transaction workflow',
  'Define service boundaries and data ownership',
  'Choose synchronous and asynchronous communication',
  'Design for consistency, concurrency, retries, and failure',
  'Measure latency, throughput, and production behavior',
  'Test, deploy, observe, and improve'
];

export const achievements = [
  'Dr. APJ Abdul Kalam Award for Best Engineering College Student',
  'IEI Best Student Award',
  'ISTE Best Student Award',
  'Best Outgoing Student of the department',
  'Chairman of Sona Programming Club',
  'Led technical initiatives and mentored peers',
  'Contributed to funded academic projects'
];
