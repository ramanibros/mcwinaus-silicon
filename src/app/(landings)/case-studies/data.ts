export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  industry: string;
  country: string;
  image: string;
  overview: string;
  challenge: string[];
  solution: string[];
  services: string[];
  techStack: string[];
  results: string[];
  clientOverview?: string;
  clientHeading?: string;
  snapshot?: {
    label: string;
    value: string;
  }[];
  challengeIntro?: string[];
  solutionRationale?: string;
  approachIntro?: string;
  strategyHeading?: string;
  approachHeading?: string;
  resultsIntro?: string[];
  approach?: {
    title: string;
    description: string;
  }[];
  metrics?: {
    value: string;
    label: string;
  }[];
  conclusion?: string;
  cta?: {
    title: string;
    description: string;
  };
  deliveryHeading?: string;
  deliverySubheading?: string;
  resultsHeading?: string;
  additionalSections?: {
    title: string;
    paragraphs: string[];
  }[];
  testimonial?: {
    quote: string;
    author: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'genixhr-anvaya-hr-transformation',
    title: 'GenixHR',
    subtitle: "Bringing Anvaya's HR Operations Together",
    category: 'Custom Software Development',
    date: 'July 2026',
    industry: 'Infrastructure & Engineering',
    country: 'India',
    image: '/images/blog/jun8.png',
    overview: 'From Scattered Spreadsheets to One Connected System',
    clientOverview:
      'Anvaya is an infrastructure and engineering consultancy in India, working across water, roads, industrial, and renewable energy projects. As the company grew, so did the complexity of managing its workforce — spanning recruitment, employee records, payroll, leave, and project-related documentation like tender submissions.',
    clientHeading: 'A growing consultancy with increasingly complex HR operations',
    snapshot: [
      { label: 'Platform', value: 'GenixHR' },
      { label: 'Focus', value: 'Custom HR software' },
      { label: 'Scope', value: 'HR & tender workflows' },
    ],
    challengeIntro: [
      'HR operations ran entirely on spreadsheets and manual documents — no centralized system connected any part of the process.',
      'Salary, leave, and attendance were each tracked in separate sheets with no link between them.',
      'Before every payroll cycle, HR had to manually cross-check leave records to confirm whether an employee had taken leave — a repetitive manual step every single month.',
      'Recruitment was a major pain point — job postings, candidate applications, and interview tracking were all handled manually, with no organized way to track candidates through the hiring process.',
      "As part of Anvaya's tender process, documents and funds are submitted along with each bid.",
      "If a tender wasn't awarded, its approval status had to be tracked manually, with no system to flag pending follow-ups.",
      'After a 3-month window on unapproved tenders, submitted documents and funds needed to be formally reclaimed — this relied entirely on manual memory and paper trails.',
    ],
    challenge: [
      'Leave, attendance, payroll, and employee data lived in disconnected spreadsheets.',
      'Recruitment tracking was manual with no unified candidate workflow.',
      'Tender approvals and 3-month reclaim follow-ups were handled through manual reminders.',
      'Onboarding, offboarding, and document handling lacked process consistency.',
    ],
    solution: [
      "Built a custom HR management platform aligned to Anvaya's day-to-day process.",
      'Connected payroll with leave and attendance for cycle-ready salary processing.',
      'Added a purpose-built tender management module for approvals and reclaim alerts.',
      'Introduced structured recruitment, onboarding, offboarding, and document workflows.',
    ],
    solutionRationale:
      "Anvaya evaluated ready-made HR software before deciding to build a custom platform. Off-the-shelf tools could handle standard HR functions, but none could be configured to support a workflow as specific as tender tracking — monitoring bid approvals and flagging documents and funds for reclaim after a fixed window simply isn't a feature generic HR software is built for. This gap, combined with the day-to-day friction of disconnected leave, payroll, and recruitment tracking, made custom HR software development the only viable path forward. As an HR software development company, McWIN iTECH built a platform around Anvaya's exact process instead of forcing them into a generic tool.",
    strategyHeading: "A custom platform built around Anvaya's workflow",
    approachIntro:
      "To solve these challenges, McWIN iTECH built GenixHR — a custom HR management software platform designed entirely around Anvaya's own workflow rather than a generic template. Delivered as a cloud based HR management software solution, GenixHR functions as a complete HR SaaS platform, bringing every core HR process into one connected HR management information system instead of scattered spreadsheets.",
    approachHeading: 'Key modules and features',
    approach: [
      {
        title: 'Recruitment',
        description:
          'Manages job postings, candidate applications, and interview tracking in one organized workflow.',
      },
      {
        title: 'Onboarding',
        description:
          'Organizes offer letters, documentation, and training schedules so new hires settle in without delays.',
      },
      {
        title: 'Offboarding',
        description:
          'Handles resignations, final settlements, exit interviews, and clearance through a structured, automated exit workflow.',
      },
      {
        title: 'Employee Management',
        description:
          'Centralizes employee records, job roles, performance details, and attendance in one online employee management system.',
      },
      {
        title: 'Payroll',
        description:
          'Automates salary calculations, tax deductions, and payslip generation as part of an integrated employee payroll management system, linked directly to leave records.',
      },
      {
        title: 'Leave & Attendance',
        description:
          'Provides real-time attendance tracking through an employee time management system, with simplified leave approvals via a dedicated employee leave management system and clear reporting.',
      },
      {
        title: 'Document Management',
        description:
          'Stores employee contracts, policy documents, and compliance records securely with role-based access.',
      },
      {
        title: 'Task Management (custom)',
        description: 'Tracks work assignments across teams.',
      },
      {
        title: 'Correspondence Records (custom)',
        description: 'Keeps official communication organized and easy to reference.',
      },
      {
        title: 'Tender Management (custom)',
        description:
          'Tracks tender submissions, monitors approval status, and flags documents and funds due for reclaim after the 3-month window.',
      },
    ],
    services: [
      "Recruitment chaos → Recruitment Module: Job postings, candidate applications, and interview tracking were brought into a single organized workflow, replacing what had been Anvaya's biggest manual pain point in hiring.",
      'Disconnected leave & payroll → Payroll + Leave & Attendance Modules: Leave records and payroll were linked directly, so salaries are now calculated with real-time leave data instead of manual cross-checking every cycle.',
      'Scattered employee records → Employee Management Module: Employee information, job roles, performance data, and attendance were centralized into one system, removing the need for manual record-keeping.',
      'Untracked tenders → Custom Tender Management Module: A purpose-built module was created to track tender submissions, monitor approval status, and flag documents and funds due for reclaim after the 3-month window — solving a workflow no standard HR software supports.',
      'Unorganized work & communication → Task Management + Correspondence Records Modules: Two additional custom modules were built to give teams a structured way to track assignments and official communication in one place.',
      'Manual onboarding/offboarding → Onboarding & Offboarding Modules: Offer letters, documentation, training schedules, and exit formalities (final settlements, exit interviews, clearances) were structured into automated workflows.',
      'Paper-based records → Document Management Module: Contracts, policy documents, and compliance records were moved into secure digital storage with role-based access control.',
    ],
    techStack: [
      'Backend — Java, Spring Boot, Hibernate, JPA: Powers the core business logic, database operations, and secure API layer of GenixHR.',
      'Frontend — Thymeleaf, HTML, CSS, JavaScript: Delivers a clean, responsive interface for HR admins and employees to interact with the system.',
      'Database — PostgreSQL: Handles reliable, structured storage for all employee, payroll, leave, and tender-related data.',
    ],
    deliveryHeading: 'How we solved each challenge',
    deliverySubheading: 'Connected workflows',
    resultsHeading: 'Business impact',
    results: [
      'Leave and payroll are now linked — HR no longer has to manually cross-check leave records before every salary cycle.',
      'Recruitment is now organized and trackable — job postings, applications, and interviews are managed in one place, fixing what was previously the biggest hiring bottleneck.',
      'Tender tracking is no longer a manual memory task — submission status, approvals, and the 3-month document/fund reclaim window are tracked within the system.',
      'Employee records are centralized — job roles, performance details, and attendance are all stored in one system instead of scattered spreadsheets.',
      'Onboarding and offboarding are structured processes now — new hires settle in faster, and exits are handled through automated workflows for settlements and clearances.',
      'Task management and correspondence records are centralized, giving teams one place to track work and communication.',
      'HR documents are now secure and digital — contracts, policies, and compliance records are stored with role-based access.',
    ],
    resultsIntro: [
      "With GenixHR in place, Anvaya's HR function moved from a fully manual, spreadsheet-based setup to a single connected system. Recruitment, payroll, leave, employee records, and tender tracking — all previously handled separately and manually — now run through one platform, cutting down repetitive work across the board.",
    ],
    additionalSections: [
      {
        title: 'Product Screenshots / System Walkthrough',
        paragraphs: [
          "Screenshots to be added by the team — include a 1–2 line caption under each screenshot explaining what the screen shows and its role in Anvaya's workflow.",
        ],
      },
    ],
    conclusion:
      "GenixHR has moved Anvaya's HR operations away from spreadsheets and manual tracking into a single, connected system. From recruitment and payroll to leave management and tender tracking, the platform was built around Anvaya's specific way of working — including custom modules for challenges that standard HR software simply isn't built to handle. The result is an HR function that's easier to manage, less dependent on manual follow-up, and built to scale with Anvaya as they grow.",
    cta: {
      title: 'Looking to move your HR operations away from spreadsheets and manual tracking?',
      description:
        'McWIN iTECH is an HR software development company specializing in custom HR software development — from HR manager software for growing teams to a complete HR management system for small business and larger organizations alike. Get in touch to see how GenixHR can be adapted for your team.',
    },
    testimonial: {
      quote:
        'The HR management system has helped us bring our HR processes together in one place, making employee management, attendance, leave, payroll, recruitment, and onboarding much easier to manage. What we particularly appreciated was the team’s ability to understand our specific requirements and customize the system around our workflow, including our tender tracking and correspondence needs. Whenever we faced an issue or needed a change, the team was always cooperative and quick to support us. Their flexibility, responsiveness, and continued support made the entire experience smooth and effective',
      author: 'Anvaya Team',
    },
  },
  {
    slug: 'quinns-rocks-tool-hire-seo-growth',
    title: 'Quinns Rocks Tool Hire',
    subtitle: 'Growing Local Visibility Through a Focused SEO Strategy',
    category: 'SEO Case Study',
    date: '2026',
    industry: 'Tool & Equipment Hire',
    country: 'Australia',
    image: '/images/blog/jun7.png',
    overview:
      'From limited online visibility to a stronger local search presence through an eight-month SEO campaign built around technical foundations, keyword expansion, content, local SEO, and backlinks.',
    clientOverview:
      "Quinns Rocks Tool Hire is a local equipment and tool hire business based in Quinns Rocks, Western Australia, serving customers across Perth's northern suburbs. With over 19 years of experience, the business provides tools and equipment for DIY projects, construction, landscaping, concrete work, drilling, fencing, and more — backed by reliable equipment, competitive rental options, and convenient delivery and pickup.",
    challengeIntro: [
      'As a local tool and equipment hire business, Quinns Rocks Tool Hire operates in a highly location-driven search market — customers search using terms like "tool hire near me," "equipment hire Perth," or specific equipment plus their suburb. The challenge wasn\'t just to rank for the business name; it was to show up for the everyday, commercial searches people actually use when they\'re ready to hire equipment.',
      "Before this campaign, the website had limited visibility for these non-branded searches, thin keyword coverage across product and service pages, minimal supporting content, and a backlink profile that wasn't strong enough to compete for relevant terms. On top of that, indexing and technical health hadn't been actively monitored, meaning potential ranking opportunities were likely being missed.",
    ],
    challenge: [
      'Limited visibility for the everyday, commercial searches customers use when they are ready to hire equipment.',
      'Thin keyword coverage across product, service, and category pages.',
      'Minimal supporting content and a backlink profile that was not strong enough to compete for relevant terms.',
      'Technical indexing and search health were not being actively monitored.',
    ],
    solution: [
      'Built an eight-month SEO strategy around organic visibility, local SEO, wider keyword coverage, and long-term authority.',
      'Connected technical, on-page, content, local SEO, and backlink work into one continuous campaign.',
      'Tracked clicks, impressions, rankings, and indexing weekly to guide ongoing optimization.',
    ],
    approach: [
      {
        title: 'Technical & on-page foundations',
        description:
          'Crawled the site, fixed indexing issues, and reviewed the technical structure. Titles, meta descriptions, headings, and content were then aligned across key service, product, and category pages.',
      },
      {
        title: 'Keyword strategy built around real search behavior',
        description:
          'Targeted local terms such as Tool Hire Perth and Equipment Hire Quinns Rocks, product searches such as jackhammer hire and core drill hire, and location modifiers across Mindarie, Alkimos, Butler, and Joondalup.',
      },
      {
        title: 'Content that answers real questions',
        description:
          'Created supporting blog content around equipment comparisons, tool selection guides, and rental advice, including mitre saws vs. chop saws and choosing the right jackhammer trolley.',
      },
      {
        title: 'Local SEO & Google Business Profile',
        description:
          'Optimized the Google Business Profile, published regular updates, and strengthened consistent business information and local content across the site.',
      },
      {
        title: 'Backlinks & ongoing monitoring',
        description:
          'Built relevant industry placements and citations while monitoring search performance weekly to determine the next optimization opportunities.',
      },
    ],
    approachIntro:
      'We built an 8-month SEO strategy for Quinns Rocks Tool Hire around four goals: increase organic visibility, strengthen local SEO, widen keyword coverage, and build long-term organic authority. Rather than treating these as separate tasks, we ran them together as one connected campaign.',
    services: [
      'Technical SEO audits and indexing fixes',
      'On-page optimization across core pages',
      'Keyword strategy for local + product queries',
      'Google Business Profile optimization',
      'Backlink outreach and authority growth',
      'Weekly performance tracking and optimization',
    ],
    techStack: [
      'SEO Tools: Ahrefs, Semrush',
      'Analytics: Google Analytics 4',
      'Search Data: Google Search Console',
      'Reporting: Looker Studio',
    ],
    results: [
      'First-page rankings for competitive, non-branded terms — including "best tool hire company in Perth," where a supporting blog page ranks on page 1 — showing the strategy is winning visibility beyond the core service pages too',
      "Broader keyword coverage — the site now targets commercial, product-specific, and location-based searches across Perth's northern suburbs, not just its own business name",
      'A stronger content footprint — supporting blog content now captures searches at the research stage, not just when customers are ready to book',
      "A healthier, more authoritative website — technical issues are monitored proactively, and a growing backlink profile supports the site's ability to compete for relevant terms",
    ],
    resultsIntro: [
      'Eight months into the campaign, Quinns Rocks Tool Hire has moved from limited online visibility to genuinely competing for the searches that matter most to their business — including going head-to-head with a large national competitor for the term "tool hire in Perth," where the site now ranks directly beneath it, ahead of every other local competitor:',
      'Together, these improvements have given Quinns Rocks Tool Hire a stronger foundation for local visibility, organic traffic, and long-term growth — with the SEO strategy continuing to build on this month over month.',
    ],
    metrics: [
      { value: '3.69K', label: 'Google Search clicks' },
      { value: '341K', label: 'Search impressions' },
      { value: '1.1%', label: 'Average click-through rate' },
      { value: '33.5', label: 'Average search position' },
    ],
    conclusion:
      'By combining technical SEO, on-page optimization, keyword-driven content, local SEO, and backlink development into one connected strategy, the campaign has given Quinns Rocks Tool Hire first-page visibility for competitive local search terms — and a solid foundation to keep growing from here.',
    cta: {
      title: 'Looking to grow your business through SEO?',
      description:
        'A strong SEO strategy is more than ranking for a few keywords — it takes technical optimization, relevant content, local visibility, and continuous performance analysis working together. McWIN iTECH helps businesses build sustainable search visibility through SEO strategies designed around their industry, audience, and goals.',
    },
    testimonial: {
      quote:
        "Working with McWIN iTECH has been a great experience for our business. They took the time to understand how we work and improved our online visibility in a clear, structured way. Since the campaign started, we've noticed more enquiries coming through — and they've been responsive, proactive, and easy to work with at every step. We appreciate their ongoing support in helping our website perform better in search.",
      author: 'Quinns Rocks Tool Hire Team',
    },
  },
];

export const getCaseStudyBySlug = (slug: string) => {
  return caseStudies.find(item => item.slug === slug);
};
