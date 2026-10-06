export const portfolioData = {
  personal: {
    name: 'Shubham Harad',
    role: 'Full-Stack Software Engineer',
    subRole: 'MERN Stack | Node.js | React | AI Systems | Distributed Task Queues',
    location: 'Mumbai, India',
    email: 'shubhamharad25@gmail.com',
    phone: '+91-8830331309',
    linkedin: 'https://www.linkedin.com/in/shubham-harad-a25797250',
    github: 'https://github.com/shubhamharad',
    status: 'Available for Full-Stack & Backend Engineering Roles',
    avatar: '/assets/avatar.jpg',
    summary:
      'Full-Stack Software Engineer with 2+ years of professional experience in designing, building, and deploying scalable web applications, microservices, and AI-powered enterprise platforms. Extensive expertise across the MERN stack (React.js, Node.js, Express.js, MongoDB), distributed background task queues (Redis, BullMQ), real-time WebSocket systems (Socket.io), and Generative AI pipelines. Proven track record in architecting mission-critical B2B supply chain & auction platforms, automated background verification engines, and omnichannel marketing systems with secure multi-payment gateway integrations (PayU, Razorpay, Cashfree).',
  },

  metrics: [
    {
      value: '2+ Years',
      label: 'Production Experience',
      desc: 'Building high-concurrency enterprise apps & AI pipelines',
      trend: '+100% On-time delivery',
      color: 'cyan',
    },
    {
      value: '80%',
      label: 'Procurement Speedup',
      desc: 'Automated RFQ to GST Invoicing workflow at Mytek',
      trend: 'From 5 days to 2 hrs',
      color: 'emerald',
    },
    {
      value: '40%',
      label: 'API Latency Cut',
      desc: 'Optimized MongoDB aggregation pipelines & Redis caching',
      trend: 'Sub-150ms P95',
      color: 'indigo',
    },
    {
      value: '95%+',
      label: 'OCR Accuracy',
      desc: 'Azure Form Recognizer for Govt Document BGV verification',
      trend: 'Zero false-passes',
      color: 'amber',
    },
  ],

  skills: {
    languages: [
      { name: 'JavaScript (ES6+)', level: 95, tag: 'Core' },
      { name: 'TypeScript', level: 85, tag: 'Frontend/Backend' },
      { name: 'PHP / Core PHP', level: 80, tag: 'Backend' },
      { name: 'SQL', level: 85, tag: 'Relational DB' },
    ],
    frontend: [
      { name: 'React.js (React 19)', level: 95, icon: 'React' },
      { name: 'Vite', level: 90, icon: 'Zap' },
      { name: 'Redux Toolkit', level: 88, icon: 'Layers' },
      { name: 'Tailwind CSS', level: 92, icon: 'Palette' },
      { name: 'Material UI (MUI)', level: 85, icon: 'Layout' },
      { name: 'Radix UI', level: 82, icon: 'Component' },
      { name: 'Fabric.js (Canvas)', level: 85, icon: 'Image' },
      { name: 'HTML5 / Modern CSS3', level: 95, icon: 'Code' },
    ],
    backend: [
      { name: 'Node.js', level: 95, icon: 'Server' },
      { name: 'Express.js', level: 92, icon: 'Cpu' },
      { name: 'RESTful API Architecture', level: 95, icon: 'Network' },
      { name: 'Microservices Design', level: 88, icon: 'Boxes' },
      { name: 'Laravel', level: 75, icon: 'Code2' },
      { name: 'JWT Authentication & RBAC', level: 92, icon: 'ShieldCheck' },
    ],
    databases: [
      { name: 'MongoDB (Mongoose, Aggregations)', level: 92, icon: 'Database' },
      { name: 'Redis (Caching, Pub/Sub, Rate Limiting)', level: 90, icon: 'Zap' },
      { name: 'MySQL', level: 85, icon: 'HardDrive' },
    ],
    queuesAndRealtime: [
      { name: 'BullMQ Distributed Queues', level: 92, icon: 'ListOrdered' },
      { name: 'Socket.io (Real-Time Bid & Stream)', level: 92, icon: 'Activity' },
      { name: 'Agenda & Node-cron', level: 88, icon: 'Clock' },
    ],
    cloudMediaAndTools: [
      { name: 'AWS (S3, CloudFront, EC2)', level: 85, icon: 'Cloud' },
      { name: 'Puppeteer & Playwright', level: 90, icon: 'FileText' },
      { name: 'FFmpeg Media Transcoding', level: 85, icon: 'Video' },
      { name: 'PDF-Lib Certificate Gen', level: 88, icon: 'FileCheck' },
      { name: 'Docker & Git Workflows', level: 85, icon: 'Terminal' },
      { name: 'Postman API Testing', level: 90, icon: 'Send' },
    ],
    aiAndIntegrations: [
      { name: 'Google Gemini & OpenAI APIs', level: 90, icon: 'Sparkles' },
      { name: 'Anthropic Claude & Groq LLMs', level: 88, icon: 'Bot' },
      { name: 'PixVerse AI Video Generation', level: 85, icon: 'Film' },
      { name: 'Azure AI Form Recognizer (OCR)', level: 90, icon: 'Eye' },
      { name: 'WhatsApp Business API Automation', level: 88, icon: 'MessageSquare' },
      { name: 'Payment Gateways (PayU, Razorpay, Cashfree, PhonePe)', level: 92, icon: 'CreditCard' },
    ],
  },

  experiences: [
    {
      company: 'MYTEK INNOVATIONS PVT. LTD.',
      role: 'Full-Stack Developer',
      location: 'Mumbai, India',
      period: 'Nov 2024 – Present',
      type: 'Full-time',
      badge: 'Current Role',
      overview:
        'Key driver of backend microservices, real-time auction marketplace infrastructure, automated identity verification engines, and generative AI content workflows.',
      projectsInRole: [
        {
          name: 'B2B Supply Chain & Real-Time Auction Marketplace (DP Platform)',
          highlights: [
            'Architected a high-concurrency real-time reverse bidding auction system using React, Node.js, and Socket.io, enabling sub-second bid updates and dynamic supplier ranking.',
            'Automated the complete procurement workflow (RFQ, Quotation, Purchase Order, Goods Received Note, and GST Tax Invoicing), reducing order processing time by 80%.',
            'Integrated PayU Payment Gateway and Escrow workflows to secure milestone-based fund release upon delivery verification.',
            'Built interactive route mapping and supplier warehouse visualization using Leaflet and MapLibre GL.',
          ],
          tech: ['React.js', 'Node.js', 'Socket.io', 'PayU Escrow', 'Leaflet', 'MongoDB', 'Redis'],
        },
        {
          name: 'Open4All – Enterprise Background Verification (BGV) & API Hub',
          highlights: [
            'Integrated Setu & Government verification APIs for real-time validation of PAN, Aadhaar, Driving License, Court records, and Company CIN.',
            'Developed an asynchronous report generation service using BullMQ and Puppeteer, generating tamper-proof PDF verification certificates without blocking API threads.',
            'Integrated Cashfree and PhonePe payment gateways with automated webhook reconciliation for wallet-based API billing.',
            'Implemented Redis rate limiting and optimized MongoDB aggregation pipelines, reducing API response times by 40%.',
          ],
          tech: ['Node.js', 'Express', 'BullMQ', 'Puppeteer', 'Redis', 'Cashfree', 'PhonePe', 'Azure OCR'],
        },
        {
          name: 'Mytek AI – Generative AI Content Studio & WhatsApp CRM',
          highlights: [
            'Built an AI content generation pipeline integrating PixVerse, Google Gemini, Claude, and OpenAI APIs with AWS S3 asset storage.',
            'Implemented real-time progress streaming to clients via Socket.io during AI video rendering.',
            'Developed an automated WhatsApp Campaign Manager using BullMQ queues and Redis to handle scheduled bulk broadcasts with rate-limiting protection.',
          ],
          tech: ['Google Gemini', 'Claude AI', 'PixVerse', 'BullMQ', 'Socket.io', 'AWS S3', 'WhatsApp API'],
        },
      ],
    },
    {
      company: 'MEDIAWORKS',
      role: 'Full-Stack Developer',
      location: 'Mumbai, India',
      period: 'Feb 2023 – Nov 2024',
      type: 'Full-time',
      badge: '1 yr 10 mos',
      overview:
        'Engineered high-conversion e-commerce applications, payment systems, and optimized full-stack web architectures.',
      projectsInRole: [
        {
          name: 'E-Commerce Platform & High-Throughput Checkout Architecture',
          highlights: [
            'Developed custom e-commerce web applications with a multi-step checkout workflow, decreasing cart abandonment by 18%.',
            'Integrated Razorpay payment gateway, automated GST invoice generation, and transactional email services.',
            'Implemented frontend code splitting, lazy loading, and Redis server-side caching, improving page load speed by 35%.',
            'Architected secure user authentication and authorization using JWT with HTTP-only cookies and role-based access control (RBAC).',
          ],
          tech: ['React.js', 'Node.js', 'Express', 'Razorpay', 'Redis Caching', 'JWT / RBAC', 'MySQL / MongoDB'],
        },
      ],
    },
  ],

  projects: [
    {
      id: 'b2b-auction-dp',
      title: 'B2B Supply Chain & Real-Time Reverse Auction Marketplace',
      tagline: 'High-concurrency reverse bidding platform with sub-second WebSocket updates & automated procurement workflow.',
      image: '/assets/auction_platform.jpg',
      category: 'Real-Time & Enterprise B2B',
      featured: true,
      stats: [
        { label: 'Latency', value: '<50ms' },
        { label: 'Time Saved', value: '80%' },
        { label: 'Security', value: 'Escrow Protected' },
      ],
      description:
        'Engineered an enterprise reverse auction system where multiple suppliers compete live for industrial purchase orders. Integrated full lifecycle procurement from automated RFQ generation to GRN tracking, PayU escrow milestones, and PDF tax invoices.',
      architecture: [
        'React frontend connected to Socket.io cluster for sub-second live bid broadcasts and rank calculations.',
        'Node.js & Redis pub/sub layer handling distributed bid synchronization and race condition prevention.',
        'Automated PO -> GRN -> GST Invoicing state machine reducing manual processing cycles.',
        'Interactive geospatial route tracking and supplier warehouse visualization with Leaflet.',
      ],
      tags: ['React 19', 'Node.js', 'Socket.io', 'PayU Escrow', 'Leaflet', 'MongoDB', 'Redis', 'PDF-Lib'],
      liveDemoType: 'auction',
    },
    {
      id: 'open4all-bgv',
      title: 'Open4All – Enterprise Background Verification & API Gateway',
      tagline: 'High-throughput async verification engine with Azure OCR, Govt APIs, and tamper-proof PDF reporting.',
      image: '/assets/bgv_verification.jpg',
      category: 'Fintech & Identity Verification',
      featured: true,
      stats: [
        { label: 'OCR Accuracy', value: '95%+' },
        { label: 'P95 Latency', value: '-40%' },
        { label: 'Throughput', value: 'Async BullMQ' },
      ],
      description:
        'Built a complete identity validation infrastructure connecting PAN, Aadhaar, Driving License, Court Records, and CIN APIs. Designed an asynchronous PDF generation worker pool utilizing BullMQ and Puppeteer to generate verified reports without thread blocking.',
      architecture: [
        'Distributed BullMQ queue worker handles Puppeteer PDF certificate compilation in isolated background processes.',
        'Azure AI Form Recognizer pipeline extracts entity data from IDs with automated checksum & fraud checks.',
        'Wallet-based API consumption model with Cashfree & PhonePe automated webhook reconciliation.',
        'Redis-backed token bucket rate limiting to prevent API exhaustion under heavy client bursts.',
      ],
      tags: ['Node.js', 'Express', 'BullMQ', 'Puppeteer', 'Azure OCR', 'Redis', 'Cashfree', 'PhonePe', 'MongoDB'],
      liveDemoType: 'bgv',
    },
    {
      id: 'mytek-genai-studio',
      title: 'Mytek AI – Generative AI Content Studio & WhatsApp Campaign CRM',
      tagline: 'Multi-model AI video/image generator with live WebSocket streaming and bulk broadcast engine.',
      image: '/assets/auction_platform.jpg', // Fallback or themed image
      category: 'Generative AI & Media',
      featured: true,
      stats: [
        { label: 'Models', value: 'Gemini, Claude, PixVerse' },
        { label: 'Media Pipeline', value: 'FFmpeg + S3' },
        { label: 'Delivery', value: 'Socket.io Stream' },
      ],
      description:
        'An end-to-end creative studio enabling marketing teams to generate commercial video campaigns and run targeted WhatsApp broadcasts with rate-limit compliance.',
      architecture: [
        'Multi-model AI routing layer orchestrating Gemini, Claude, Groq, and PixVerse APIs.',
        'Canvas layout composition engine using Fabric.js with server-side FFmpeg transcoding and AWS S3 storage.',
        'Bi-directional WebSocket streaming giving users frame-by-frame progress updates during render.',
        'Queue-based WhatsApp CRM broadcasting engine with scheduled batches and number health tracking.',
      ],
      tags: ['Google Gemini', 'Anthropic Claude', 'PixVerse', 'Fabric.js', 'FFmpeg', 'AWS S3', 'BullMQ', 'Socket.io'],
      liveDemoType: 'queue',
    },
    {
      id: 'mediaworks-ecommerce',
      title: 'High-Conversion E-Commerce & Checkout Optimization Platform',
      tagline: 'Optimized multi-step checkout workflow with Razorpay integration and 35% speedup.',
      image: '/assets/bgv_verification.jpg',
      category: 'E-Commerce & Performance',
      featured: false,
      stats: [
        { label: 'Drop-off Reduction', value: '-18%' },
        { label: 'Page Speed', value: '+35%' },
        { label: 'Auth', value: 'JWT + RBAC' },
      ],
      description:
        'Revamped full-stack architecture for an enterprise e-commerce platform, implementing atomic cart updates, lazy-loaded components, Redis caching, and automated GST billing.',
      architecture: [
        'Optimized frontend bundle splitting and image virtualization for under-second interactive loads.',
        'Razorpay webhook listener with idempotent payment verification and instant invoice dispatch.',
        'Role-Based Access Control (RBAC) security layer with HTTP-only cookie JWT tokens.',
      ],
      tags: ['React.js', 'Node.js', 'Express', 'Razorpay', 'Redis', 'JWT', 'MongoDB'],
      liveDemoType: null,
    },
  ],

  architectures: [
    {
      id: 'reverse-auction',
      name: 'Sub-Second Reverse Auction WebSocket Architecture',
      badge: 'High Concurrency',
      nodes: [
        { id: '1', title: 'React Client (Bidders/Buyers)', type: 'Frontend', desc: 'Real-time UI with optimistic bid rendering & audio alerts' },
        { id: '2', title: 'Socket.io Gateway Cluster', type: 'Transport', desc: 'Sticky-session WebSocket gateway handling 10k+ concurrent connections' },
        { id: '3', title: 'Redis Pub/Sub & Atomic Lock', type: 'State Layer', desc: 'Single-thread atomic decrement & L1 price validation via Lua scripts' },
        { id: '4', title: 'Express & MongoDB Engine', type: 'Persistence', desc: 'Asynchronous audit logging, RFQ status transition & invoice creation' },
        { id: '5', title: 'PayU Escrow Webhook', type: 'Payment', desc: 'Milestone escrow fund holding and automated release on GRN delivery' },
      ],
    },
    {
      id: 'bgv-bullmq',
      name: 'Asynchronous Background Verification & PDF Generator',
      badge: 'Distributed Queue',
      nodes: [
        { id: '1', title: 'Enterprise API Client', type: 'Ingress', desc: 'Submits PAN/Aadhaar/CIN verification batch payload' },
        { id: '2', title: 'Redis Rate Limiter & Validator', type: 'Security', desc: 'Token-bucket rate protection & wallet credit pre-authorization' },
        { id: '3', title: 'Azure OCR & Govt Setu Hub', type: 'AI / Govt APIs', desc: 'Real-time ID data extraction & 95%+ confidence entity scoring' },
        { id: '4', title: 'BullMQ Distributed Worker Pool', type: 'Queue Worker', desc: 'Decoupled worker nodes processing tamper-proof PDF generation via Puppeteer' },
        { id: '5', title: 'AWS S3 & Webhook Dispatcher', type: 'Delivery', desc: 'Encrypted PDF storage with signed URLs and instant client webhook callback' },
      ],
    },
    {
      id: 'genai-pipeline',
      name: 'Multi-Model Generative AI & Video Transcoding Pipeline',
      badge: 'AI Systems',
      nodes: [
        { id: '1', title: 'Fabric.js Visual Editor', type: 'Frontend', desc: 'Interactive canvas layout, typography, and timeline composition' },
        { id: '2', title: 'AI Model Orchestrator', type: 'Orchestration', desc: 'Dynamic routing between Gemini, Claude, Groq, and PixVerse' },
        { id: '3', title: 'FFmpeg Transcoding Pipeline', type: 'Media Core', desc: 'Serverless / containerized video stitcher with audio track layering' },
        { id: '4', title: 'BullMQ WhatsApp Campaign Hub', type: 'CRM Broadcast', desc: 'Throttled message broadcasting with deliverability health monitoring' },
      ],
    },
  ],

  education: {
    degree: 'Bachelor of Science in Information Technology (B.Sc. IT)',
    institution: 'D G Ruparel College | Mumbai University',
    location: 'Mumbai, India',
    period: '2022 – 2024',
    cgpa: '7.50 / 10',
    highlights: [
      'Core coursework in Distributed Systems, Data Structures, Relational & NoSQL Databases, Computer Networks, and Software Engineering Principles.',
      'Led academic project on Real-time collaborative web systems.',
    ],
  },

  achievements: [
    {
      title: 'Conqueror of the Month Award',
      issuer: 'Mytek Innovations Pvt. Ltd.',
      desc: 'Awarded for outstanding project delivery, system architecture, and high-velocity technical execution across the DP Auction & BGV platforms.',
      date: '2025',
      icon: 'Trophy',
    },
    {
      title: 'Mission-Critical Milestone Delivery',
      issuer: 'Mytek Innovations',
      desc: 'Engineered complete RFQ to GST Tax Invoicing workflow in record time, speeding up business operations by 80%.',
      date: '2025',
      icon: 'Award',
    },
    {
      title: 'B.Sc. IT Excellence',
      issuer: 'Mumbai University (D G Ruparel College)',
      desc: 'Graduated with 7.50 / 10 CGPA with specialization in Information Technology and Web Architectures.',
      date: '2024',
      icon: 'GraduationCap',
    },
  ],
};
