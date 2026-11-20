// Single source of truth for all portfolio content, directly extracted from PORTFOLIO.pdf.

export interface VisualAsset {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  caption?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface VideoItem {
  id: string;
  poster: string;
  title: string;
  creator?: string;
  views: string;
  tag: string;
  videoSrc?: string;
}

export interface RoleSection {
  title: string;
  bullets: string[];
}

export interface SceneDetail {
  number: string; // "01", "02", ...
  kicker: string; // "SCENE 01"
  title: string;
  category: string;
  role: string;
  organization?: string;
  timeline?: string;
  accountHandle?: string;
  accountStats?: string;
  phoneMockup?: VisualAsset;
  resultStat: {
    value: string;
    label: string;
  };
  additionalStats?: StatItem[];
  overview: string;
  bullets?: string[];
  roleSections?: RoleSection[];
  learned: string;
  learnedParagraphs?: string[];
  cutout?: string;
  projectScriptLabel?: string;
  heroImage: VisualAsset;
  galleryImages: VisualAsset[];
  featuredVideos?: VideoItem[];
  logo?: VisualAsset;
  externalLink?: {
    label: string;
    url: string;
  };
}

export interface SkillRowItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ToolItem {
  id: string;
  name: string;
  iconSrc: string;
  width: number;
  height: number;
  category: string;
}

export interface TimelineItem {
  org: string;
  role: string;
  period: string;
  type: "experience" | "education";
}

export const PERSONAL_INFO = {
  name: "Nguyen Phuong Nguyen",
  monogram: "NPN",
  dob: "05/06/2005",
  location: "Ho Chi Minh City",
  university: "Ton Duc Thang University",
  degree: "Bachelor of Business Administration - Marketing",
  email: "npnguyen9597@gmail.com",
  phone: "079 351 8837",
  phoneTel: "tel:+84793518837",
  threadsUrl: "https://www.threads.net/@ursonlyonee",
  threadsHandle: "@ursonlyonee",
  canvaCvUrl: "https://www.canva.com/design/DAHat0Aox1I/lOo3RP5lxuRCaNuSdOTVRQ/edit",
  portfolioPdfUrl: "/PORTFOLIO.pdf",
};

export const HERO_CONTENT = {
  eyebrow: "Content Marketing · Influencer Marketing · Social Media",
  line1: "NGUYEN",
  line2: "PHUONG",
  line3: "NGUYEN",
  scriptAccent: "portfolio",
  ctaText: "View Projects",
  ctaHref: "#projects",
  portraitSrc: "/source/portrait-about.webp",
  cutoutSrc: "/source/cutout-white.webp",
};

export const RUNNING_RIBBONS_TEXT =
  "CONTENT MARKETING · INFLUENCER MARKETING · SOCIAL MEDIA · KOC BOOKING · SHORT-FORM VIDEO · BRAND COLLABORATION · STORYTELLING · ";

export const ABOUT_CONTENT = {
  eyebrow: "About me",
  headline: "Crafting content that makes people stop scrolling",
  portrait1: {
    src: "/source/portrait-about.webp",
    alt: "Nguyen Phuong Nguyen portrait in warm light",
  },
  portrait2: {
    src: "/source/cutout-sitting.webp",
    alt: "Nguyen Phuong Nguyen creative profile",
  },
  items: [
    {
      badge: "01",
      title: "Who I am",
      text: "A senior at Ton Duc Thang University, majoring in Marketing, with hands-on experience across Influencer Marketing, Content Marketing, and Social Media.",
    },
    {
      badge: "02",
      title: "How I think",
      text: "I became interested in Marketing through a simple question: What makes people stop scrolling, pay attention, and connect with a brand? My approach combines audience understanding, content creativity, communication, and practical execution.",
    },
    {
      badge: "03",
      title: "What I do",
      text: "From researching and connecting with creators for influencer campaigns to developing social media content and managing everyday communications, I enjoy exploring different ways to make brand messages more engaging, authentic, and relatable.",
    },
  ],
  timeline: [
    {
      org: "KOC Booking",
      role: "Freelancer",
      period: "Jul 2025 – Sep 2026",
      type: "experience" as const,
    },
    {
      org: "Vietnam Finland International School (VFIS)",
      role: "Communications Collaborator",
      period: "Dec 2023 – May 2026",
      type: "experience" as const,
    },
    {
      org: "MLAND Coastal",
      role: "Content Marketing Intern",
      period: "Jun 2025 – Sep 2025",
      type: "experience" as const,
    },
    {
      org: "Ton Duc Thang University",
      role: "Bachelor of Business Administration – Marketing",
      period: "2023 – 2027",
      type: "education" as const,
    },
  ],
};

export const SKILLS_ROWS: SkillRowItem[] = [
  {
    id: "strategy",
    title: "CONTENT STRATEGY & PLANNING",
    description: "Developing channel roadmaps, topic clusters, and content calendars aligned with audience psychology.",
    iconName: "Compass",
  },
  {
    id: "short-form",
    title: "SHORT-FORM CONTENT CREATION",
    description: "Filming, pacing, visual hooks, and editing high-retention TikTok, Reels, and short-form storytelling.",
    iconName: "Video",
  },
  {
    id: "koc",
    title: "INFLUENCER & CREATOR RESEARCH",
    description: "Screening 300+ KOC profiles across platforms with criteria: engagement, average views, brand fit.",
    iconName: "Users",
  },
  {
    id: "storytelling",
    title: "SCRIPTWRITING & STORYTELLING",
    description: "Writing natural, engaging scripts and hooks that transform brand messages into relatable narratives.",
    iconName: "PenTool",
  },
  {
    id: "engagement",
    title: "AUDIENCE ENGAGEMENT",
    description: "Community seeding, conversational comment management, and authentic audience relationship building.",
    iconName: "MessageCircleHeart",
  },
  {
    id: "negotiation",
    title: "COMMUNICATION & NEGOTIATION",
    description: "Handling creator briefs, booking negotiations, deliverables, and campaign timelines smoothly.",
    iconName: "Sparkles",
  },
];

export const TOOLS_LIST: ToolItem[] = [
  {
    id: "capcut",
    name: "CapCut",
    iconSrc: "/source/tool-capcut.webp",
    width: 154,
    height: 154,
    category: "Video Editing",
  },
  {
    id: "canva",
    name: "Canva",
    iconSrc: "/source/tool-canva.webp",
    width: 180,
    height: 180,
    category: "Visual Design",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    iconSrc: "/source/tool-chatgpt.webp",
    width: 150,
    height: 150,
    category: "AI Ideation",
  },
  {
    id: "word",
    name: "Word",
    iconSrc: "/source/tool-word.webp",
    width: 119,
    height: 105,
    category: "Copywriting",
  },
  {
    id: "excel",
    name: "Excel",
    iconSrc: "/source/tool-excel.webp",
    width: 119,
    height: 105,
    category: "Data Tracking",
  },
  {
    id: "powerpoint",
    name: "PowerPoint",
    iconSrc: "/source/tool-powerpoint.webp",
    width: 118,
    height: 103,
    category: "Presentations",
  },
];

export const SCENES: SceneDetail[] = [
  {
    number: "01",
    kicker: "Project 01",
    projectScriptLabel: "Project 01:",
    cutout: "/source/cutout-sitting.webp",
    title: "Influencer Marketing",
    category: "KOC Booking & Creator Coordination",
    role: "Freelancer · Creator Sourcing, Casting, Negotiation & Campaign Coordination",
    timeline: "Jul 2025 – Sep 2026",
    resultStat: {
      value: "300+",
      label: "KOC profiles researched & screened",
    },
    additionalStats: [
      { value: "70+", label: "creators directly contacted & coordinated" },
      { value: "10+", label: "influencer campaigns supported" },
    ],
    overview:
      "Supported Influencer Marketing activities by researching, evaluating, and connecting with KOCs across Facebook, TikTok, and Threads. The main focus was identifying suitable creators based on brand positioning, campaign objectives, and budget requirements.",
    bullets: [
      "Researched and screened 300+ KOC profiles across Facebook, TikTok, and Threads based on engagement, average views, and content style.",
      "Prepared casting lists of 50–100 creators per campaign; directly contacted and coordinated with 70+ creators handling booking fees and deliverables.",
      "Supported 10+ Influencer Marketing campaigns across different industries, coordinating creator sourcing to meet launch deadlines.",
    ],
    roleSections: [
      {
        title: "1. CREATOR RESEARCH & SOURCING",
        bullets: [
          "Researched and screened 300+ KOC profiles across Facebook, TikTok, and Threads based on engagement, average views, and content style.",
          "Evaluated creator profiles based on content categories, engagement rate, average views, and brand relevance.",
          "Built a pool of potential creators tailored for different campaign requirements.",
        ],
      },
      {
        title: "2. CASTING & PROFILE EVALUATION",
        bullets: [
          "Prepared casting lists of approximately 50–100 creators per campaign.",
          "Compared profiles using key criteria: Engagement, Average Views, Content Quality, and Brand Fit.",
          "Selected potential creators based on campaign briefs and target audiences.",
        ],
      },
      {
        title: "3. BOOKING & NEGOTIATION",
        bullets: [
          "Directly contacted and coordinated with 70+ creators.",
          "Discussed booking fees, content deliverables, and affiliate commissions.",
          "Followed up on collaboration requirements and booking progress.",
        ],
      },
      {
        title: "4. CAMPAIGN COORDINATION",
        bullets: [
          "Supported 10+ Influencer Marketing campaigns across different industries.",
          "Coordinated creator sourcing and booking timelines to meet strict campaign launch deadlines.",
        ],
      },
    ],
    learned:
      "Finding the right creator is not simply about follower counts or engagement rates — it requires looking beyond numbers to understand content style and how naturally they connect with a brand.",
    learnedParagraphs: [
      "This experience taught me that finding the right creator is not simply about choosing profiles with high follower counts or engagement rates. It requires looking beyond the numbers to understand each creator's content style, audience, and how naturally they can connect with a brand's message. I also learned that the right choice can look different from one campaign to another, depending on its objectives and target audience.",
      "Being involved in the booking process gave me a better understanding of the work behind each collaboration. From reaching out and discussing fees to clarifying deliverables and following up on timelines, I learned to communicate more thoughtfully, pay attention to details, and adapt to different working styles and expectations.",
      "Most importantly, this project helped me become more comfortable working with people, handling unexpected changes, and taking responsibility for the small details that keep a campaign moving forward.",
    ],
    heroImage: {
      src: "/source/s01-hero.webp",
      alt: "Threads seeding and brand campaigns showcase",
      caption: "Brand collaborations & Threads seeding execution",
    },
    galleryImages: [
      {
        src: "/source/brands.webp",
        alt: "Brand collaboration logos wall",
        caption: "Brand partners across campaigns",
      },
      {
        src: "/source/s01-seeding.webp",
        alt: "Threads seeding post engagement",
        caption: "Organic Threads seeding reach and discussion",
      },
    ],
    logo: {
      src: "/source/icon-tiktok.webp",
      alt: "TikTok icon",
    },
    featuredVideos: [
      {
        id: "v-179k",
        poster: "/source/s01-video-4.webp",
        title: "KOC Collab Highlight",
        creator: "Top Performing Creator",
        views: "179K views",
        tag: "High Engagement",
      },
      {
        id: "v-29k",
        poster: "/source/s01-video-3.webp",
        title: "Creator Product Feature",
        creator: "Campaign Creator",
        views: "29.2K views",
        tag: "Viral Hook",
      },
      {
        id: "v-24k",
        poster: "/source/s01-video-2.webp",
        title: "Short-form Lifestyle Review",
        creator: "Lifestyle KOC",
        views: "24.2K views",
        tag: "Organic Reach",
      },
      {
        id: "v-14k",
        poster: "/source/s01-video-1.webp",
        title: "Seeding & Product Intro",
        creator: "Beauty/Fashion KOC",
        views: "14.4K views",
        tag: "Direct Conversion",
      },
    ],
  },
  {
    number: "02",
    kicker: "Project 02",
    projectScriptLabel: "Project 02:",
    cutout: "/source/cutout-vfis.webp",
    title: "VFIS Social Media & Communications",
    category: "Education Communications",
    role: "Communications Collaborator · Vietnam Finland International School",
    timeline: "Dec 2023 – May 2026",
    resultStat: {
      value: "20K+",
      label: "views on highest-performing video",
    },
    additionalStats: [
      { value: "30+", label: "content pieces produced and edited" },
      { value: "2–3", label: "posts published per week consistently" },
    ],
    accountHandle: "vfis.athletics / vfis_spikers",
    accountStats: "677 Follower · 115.4K Lượt thích",
    phoneMockup: {
      src: "/source/s02-profile.webp",
      alt: "VFIS official TikTok profile",
    },
    overview:
      "Supported content development and social media communications across Facebook, Instagram, and TikTok for Vietnam Finland International School (VFIS). The content focused on school activities, events, and everyday moments to strengthen connections between the school, students, and parents.",
    bullets: [
      "Managed and developed content across Facebook, Instagram, and TikTok maintaining a consistent posting frequency of 2–3 posts per week.",
      "Produced and edited 60+ communication materials, adapting written posts, visuals, and video content for diverse school community audiences.",
      "Supported organization and promotion of seasonal and holiday-themed school events, building stronger engagement within the student and parent community.",
    ],
    roleSections: [
      {
        title: "1. SOCIAL MEDIA MANAGEMENT",
        bullets: [
          "Managed and developed content across Facebook, Instagram, and TikTok.",
          "Maintained a posting frequency of 2–3 posts per week.",
          "Supported consistent communication across social media channels.",
        ],
      },
      {
        title: "2. CONTENT CREATION",
        bullets: [
          "Produced and edited 60+ communication materials.",
          "Developed written posts, visuals, and content featuring school activities.",
          "Adapted content to different platforms and target audiences.",
        ],
      },
      {
        title: "3. EVENT COMMUNICATION",
        bullets: [
          "Supported the organization and promotion of seasonal and holiday-themed school events.",
          "Assisted in preparing communication materials before and during events.",
          "Contributed to building stronger engagement within the school community.",
        ],
      },
    ],
    learned:
      "Through this experience, I learned that managing social media is not just about posting content regularly, but also about understanding what the audience cares about and how they prefer to receive information. Working across Facebook, Instagram, and TikTok helped me recognize that each platform has its own way of communicating, so content needs to be adapted to fit both the platform and its audience.",
    learnedParagraphs: [
      "Through this experience, I learned that managing social media is not just about posting content regularly, but also about understanding what the audience cares about and how they prefer to receive information. Working across Facebook, Instagram, and TikTok helped me recognize that each platform has its own way of communicating, so content needs to be adapted to fit both the platform and its audience.",
      "I also came to appreciate the value of everyday moments in storytelling. Sometimes, simple and relatable content about school activities or student experiences can create a stronger connection than overly formal communication. This experience taught me to pay closer attention to content details, maintain consistency, and think more carefully about how each post contributes to the overall communication of the school.",
    ],
    heroImage: {
      src: "/source/p3_035.png",
      alt: "VFIS Matchday video showcase",
      caption: "MATCHDAY CINEMATIC RECAP · 15.6K+ views",
    },
    galleryImages: [
      {
        src: "/source/s02-profile.webp",
        alt: "VFIS TikTok channel profile",
        caption: "VFIS official TikTok profile",
      },
      {
        src: "/source/cutout-vfis.webp",
        alt: "On-site school communications work",
        caption: "Capturing authentic school moments",
      },
    ],
    featuredVideos: [
      {
        id: "v-vfis-20k",
        poster: "/source/p3_035.png",
        title: "School Life Reel",
        creator: "VFIS Communications",
        views: "20K+ views",
        tag: "Top School Video",
      },
      {
        id: "v-vfis-event",
        poster: "/source/p3_036.png",
        title: "Holiday Celebration Event",
        creator: "VFIS Communications",
        views: "12K+ views",
        tag: "Community Event",
      },
      {
        id: "v-vfis-student",
        poster: "/source/s02-video-3.webp",
        title: "Student Experience Feature",
        creator: "VFIS Communications",
        views: "10K+ views",
        tag: "Student Life",
      },
    ],
    logo: {
      src: "/source/s02-logo.webp",
      alt: "VFIS logo",
    },
    externalLink: {
      label: "View TikTok Channel",
      url: "https://www.tiktok.com",
    },
  },
  {
    number: "03",
    kicker: "Project 03",
    projectScriptLabel: "Project 03:",
    cutout: "/source/cutout-white.webp",
    title: "MLAND Coastal Content Marketing",
    category: "Real Estate Digital Content",
    role: "Content Marketing Intern · MLAND Coastal",
    timeline: "Jun 2025 – Sep 2025",
    resultStat: {
      value: "CapCut",
      label: "short-form video production & editing",
    },
    additionalStats: [
      { value: "100%", label: "hands-on ideation, filming & editing" },
    ],
    overview:
      "Supported Content Marketing activities in the real estate industry, focusing on short-form video production for TikTok to support digital communication efforts and brand discovery.",
    bullets: [
      "Supported content development and ideation for real estate marketing activities tailored to short-form algorithms.",
      "Participated directly in filming TikTok videos based on approved creative directions and property walkthroughs.",
      "Edited short-form video content using CapCut with concise pacing, text overlays, and engaging audio tracks.",
    ],
    roleSections: [
      {
        title: "1. CONTENT DEVELOPMENT",
        bullets: [
          "Supported content development and ideation for real estate marketing activities tailored to short-form algorithms.",
        ],
      },
      {
        title: "2. TIKTOK FILMING & PRODUCTION",
        bullets: [
          "Participated directly in filming TikTok videos based on approved creative directions and property walkthroughs.",
        ],
      },
      {
        title: "3. CAPCUT VIDEO EDITING",
        bullets: [
          "Edited short-form video content using CapCut with concise pacing, text overlays, and engaging audio tracks.",
        ],
      },
      {
        title: "4. PRODUCTION COORDINATION",
        bullets: [
          "Assisted in coordinating content production and release schedules for social media.",
        ],
      },
    ],
    learned:
      "Producing short-form video requires knowing what key information needs to be communicated and presenting it cleanly to keep viewers interested.",
    learnedParagraphs: [
      "This experience gave me a closer look at the process of creating short-form video content, from preparing ideas and filming to editing the final videos. I learned that producing a video is not just about putting visuals together, but also about understanding what information needs to be communicated and how to present it in a way that keeps viewers interested.",
      "Working with real estate content also helped me realize that different industries require different content approaches. Information needs to be clear and relevant, while the video itself should still feel engaging and easy to follow. Although this was an early hands-on experience, it helped me become more familiar with the content production process and more confident in turning ideas into actual social media content.",
    ],
    heroImage: {
      src: "/source/s03-channel.webp",
      alt: "MLAND Coastal TikTok channel overview",
      caption: "MLAND Coastal short-form real estate content",
    },
    galleryImages: [
      {
        src: "/source/s03-hero.webp",
        alt: "MLAND Coastal TikTok project highlight",
        caption: "MLAND short-form video production",
      },
      {
        src: "/source/s03-plan.webp",
        alt: "Content plan and production schedule",
        caption: "Structured production schedule",
      },
      {
        src: "/source/s03-channel.webp",
        alt: "MLAND TikTok channel overview",
        caption: "Channel identity and video layout",
      },
      {
        src: "/source/s03-lessons.webp",
        alt: "Featured lessons learned in video editing",
        caption: "Key takeaways in visual pacing",
      },
    ],
    featuredVideos: [
      {
        id: "v-mland-1",
        poster: "/source/s03-video-1.webp",
        title: "Real Estate Walkthrough Hook",
        creator: "MLAND TikTok",
        views: "Featured",
        tag: "Property Tour",
      },
      {
        id: "v-mland-2",
        poster: "/source/s03-video-2.webp",
        title: "Market Insights Short",
        creator: "MLAND TikTok",
        views: "Featured",
        tag: "Market Update",
      },
    ],
    logo: {
      src: "/source/s03-logo.webp",
      alt: "MLAND Coastal logo",
    },
  },
  {
    number: "04",
    kicker: "Project 04",
    projectScriptLabel: "Project 04:",
    cutout: "/source/cutout-marathon.webp",
    title: "HCMC Marathon 2025 (Eximbank)",
    category: "Large-Scale Sports Event Operations",
    role: "Event Operations & On-site Coordination",
    timeline: "Jan 2025",
    resultStat: {
      value: "1,000+",
      label: "participants welcomed & assisted",
    },
    additionalStats: [
      { value: "100%", label: "peak-hour support & attendee satisfaction" },
    ],
    overview:
      "Supported event operations and on-site coordination for HCMC Marathon 2025 sponsored by Eximbank, welcoming over 1,000 enthusiastic participants.",
    bullets: [
      "Assisted with event operations, crowd check-in, and on-site coordination in a high-energy live environment.",
      "Provided critical team support during early morning and peak finisher hours.",
      "Helped maintain seamless event operations and an uplifting, memorable runner experience.",
    ],
    roleSections: [
      {
        title: "1. ON-SITE EVENT OPERATIONS",
        bullets: [
          "Assisted with event operations, crowd check-in, and on-site coordination for 1,000+ participants in a dynamic sports environment.",
        ],
      },
      {
        title: "2. PEAK-HOUR COORDINATION",
        bullets: [
          "Supported the operations team during early morning registration and peak finisher hours.",
        ],
      },
      {
        title: "3. PARTICIPANT EXPERIENCE",
        bullets: [
          "Helped maintain seamless event operations, runner assistance, and an uplifting, memorable experience.",
        ],
      },
    ],
    learned:
      "Behind a smooth event are countless small tasks requiring careful preparation, clear communication, and agile teamwork.",
    learnedParagraphs: [
      "Being part of HCMC Marathon 2025 gave me a better understanding of what goes into running a large-scale event. I realized that behind a smooth event experience, there are many small tasks that require careful preparation, clear communication, and close coordination among team members.",
      "Working on-site also taught me to stay attentive, adapt to changing situations, and be willing to step in wherever support was needed, especially during busy hours. More importantly, this experience helped me appreciate the importance of teamwork and taking responsibility for my assigned tasks, even when they may seem small in the overall event.",
    ],
    heroImage: {
      src: "/source/s04-hero.webp",
      alt: "HCMC Marathon 2025 celebration stage",
      caption: "HCMC Marathon 2025 — celebration and finisher awards",
    },
    galleryImages: [
      {
        src: "/source/s04-team.webp",
        alt: "HCMC Marathon event coordination team",
        caption: "Event operations coordination team",
      },
      {
        src: "/source/s04-medal.webp",
        alt: "Finisher medal close-up",
        caption: "Official finisher medal",
      },
      {
        src: "/source/s04-stage.webp",
        alt: "HCMC Marathon celebration stage",
        caption: "Celebration stage and finish area",
      },
      {
        src: "/source/cutout-marathon.webp",
        alt: "On-site coordination in action",
        caption: "On-ground operations support",
      },
    ],
    logo: {
      src: "/source/s04-logo.webp",
      alt: "Eximbank sponsor logo",
    },
  },
  {
    number: "05",
    kicker: "Project 05",
    projectScriptLabel: "Project 05:",
    cutout: "/source/s05-team.webp",
    title: "Culture Start 2026",
    category: "Marketing & Business Ideation Competition",
    role: "Team Tứ Bản Sắc · Organized by USSH",
    timeline: "April 2026",
    resultStat: {
      value: "Top 4",
      label: "finalist among all participating university teams",
    },
    additionalStats: [
      { value: "USSH", label: "University of Social Sciences & Humanities" },
    ],
    overview:
      "Participated in Culture Start 2026, an intensive university-level competition providing a real-world arena to explore business ideas, apply strategic marketing knowledge, and pitch innovative cultural concepts.",
    bullets: [
      "Collaborated with team members throughout all competition stages, developing culturally grounded product and marketing concepts.",
      "Contributed to market research, creative concept ideation, and the final stage presentation pitch.",
      "Worked collaboratively under tight deadlines to satisfy all competition criteria and jury evaluations.",
    ],
    roleSections: [
      {
        title: "1. TEAM COLLABORATION",
        bullets: [
          "Collaborated with team members throughout all competition stages, developing culturally grounded product and marketing concepts.",
        ],
      },
      {
        title: "2. STRATEGIC MARKETING IDEATION",
        bullets: [
          "Applied marketing knowledge, consumer insights, and creative thinking to develop cultural business ideas.",
        ],
      },
      {
        title: "3. PRESENTATION & DEFENSE",
        bullets: [
          "Co-developed presentation deck, financial estimations, and defended project concepts before the judging panel.",
        ],
      },
      {
        title: "4. DELIVERABLE EXECUTION",
        bullets: [
          "Worked collaboratively under tight deadlines to complete all jury criteria and prototype requirements.",
        ],
      },
    ],
    learned:
      "A creative idea is only the beginning — thorough research, critical thinking, and teamwork turn concepts into viable reality.",
    learnedParagraphs: [
      "Participating in Culture Start 2026 gave me the opportunity to step outside the classroom and experience how ideas can be developed into a business concept. I learned that having a creative idea is only the starting point; it also takes research, critical thinking, and a clear understanding of the problem being addressed to make that idea meaningful and practical.",
      "Working through the competition also helped me appreciate the value of teamwork. Listening to different perspectives, exchanging ideas, and learning how to approach challenges together showed me that a good outcome often comes from collaboration rather than individual effort.",
      "Most importantly, this experience encouraged me to be more open to new perspectives, more confident in sharing my ideas, and more willing to learn from challenges along the way.",
    ],
    heroImage: {
      src: "/source/s05-hero.webp",
      alt: "Culture Start 2026 finalists stage",
      caption: "Culture Start 2026 — finalists group photo at USSH",
    },
    galleryImages: [
      {
        src: "/source/s05-hero.webp",
        alt: "Culture Start 2026 finalists stage",
        caption: "Finalists group photo at USSH",
      },
      {
        src: "/source/s05-team.webp",
        alt: "Team Tứ Bản Sắc members",
        caption: "Team Tứ Bản Sắc",
      },
      {
        src: "/source/s05-pitch.webp",
        alt: "Pitching project before the judges",
        caption: "Stage pitch and defense",
      },
      {
        src: "/source/s05-stage.webp",
        alt: "Culture Start 2026 award stage",
        caption: "Finalist award stage",
      },
      {
        src: "/source/s05-product.webp",
        alt: "Product concept exhibition",
        caption: "Cultural product prototype display",
      },
    ],
    logo: {
      src: "/source/s05-logo.webp",
      alt: "Culture Start 2026 logo",
    },
  },
  {
    number: "06",
    kicker: "PERSONAL PROJECT",
    projectScriptLabel: "Personal Project:",
    cutout: "/source/threads-portrait.webp",
    title: "“Phương Nguyên Thường Nhật”",
    category: "Personal Brand & Authentic Storytelling",
    role: "Content Creator · Threads @ursonlyonee",
    timeline: "Ongoing",
    accountHandle: "@ursonlyonee",
    accountStats: "115 Followers · 121,000+ Views",
    phoneMockup: {
      src: "/source/threads-profile.webp",
      alt: "Threads channel @ursonlyonee",
    },
    resultStat: {
      value: "121.700+",
      label: "total profile views in 7 days",
    },
    additionalStats: [
      { value: "74.600+", label: "unique viewers reached in 7 days" },
      { value: "+125.406%", label: "increase in profile views within 7 days" },
      { value: "115", label: "engaged followers community" },
    ],
    overview:
      "A diary-style personal content channel on Threads documenting everyday moments, personal experiences, university life, and reflections through an authentic, relatable conversational voice.",
    bullets: [
      "Developed and published daily short-form written posts in a natural, conversational friend's diary tone.",
      "Tested and refined content pillars: Personal Journey, Daily Life, University Experiences, and Relatable Thoughts.",
      "Iterated rapidly based on real-time viewer interactions, leading to viral reach of 121K+ views in a single week.",
    ],
    roleSections: [
      {
        title: "1. CONTENT CREATION",
        bullets: [
          "Develop and publish daily content based on personal experiences and everyday observations.",
          "Write short-form posts in a natural, conversational, and relatable tone.",
          "Explore trending topics and relatable discussions to create engaging content.",
        ],
      },
      {
        title: "2. DEVELOPMENT & ITERATION",
        bullets: [
          "Experiment with different writing styles, topics, and storytelling approaches.",
          "Identify content themes that resonate deeply with audiences.",
          "Refine content direction based on real-time post performance and audience interactions.",
        ],
      },
    ],
    learned:
      "Consistency, an authentic personal voice, and real dialogue resonate much deeper with audiences than overly polished corporate messaging.",
    learnedParagraphs: [
      "My goal is to build a personal space where everyday experiences become relatable content. The writing style is casual, conversational, and authentic, allowing audiences to connect with my thoughts and daily stories as if they were reading a friend's diary.",
      "The content prioritizes consistency, personal voice, and audience interaction rather than overly polished or promotional communication. This project reinforced that real resonance comes from staying true to who you are and sharing sincere everyday observations.",
    ],
    heroImage: {
      src: "/source/threads-profile.webp",
      alt: "Threads channel @ursonlyonee",
      caption: "Personal diary channel @ursonlyonee",
    },
    galleryImages: [
      {
        src: "/source/threads-profile.webp",
        alt: "Threads profile @ursonlyonee",
        caption: "Threads profile layout",
      },
      {
        src: "/source/threads-insights-1.webp",
        alt: "Threads analytics 7-day view insights",
        caption: "121.7K profile views in 7 days",
      },
      {
        src: "/source/threads-insights-2.webp",
        alt: "Threads viewers growth graph",
        caption: "+125.406% profile views growth",
      },
      {
        src: "/source/threads-portrait.webp",
        alt: "Personal portrait for Threads channel",
        caption: "Authentic creator persona",
      },
    ],
    logo: {
      src: "/source/icon-threads.webp",
      alt: "Threads icon",
    },
    externalLink: {
      label: "Visit @ursonlyonee on Threads",
      url: "https://www.threads.net/@ursonlyonee",
    },
  },
];

export const ALL_VIDEOS: VideoItem[] = [
  {
    id: "v1",
    poster: "/source/s01-video-4.webp",
    title: "KOC Booking Highlight",
    creator: "Creator Collaboration",
    views: "179K views",
    tag: "Influencer Marketing",
  },
  {
    id: "v2",
    poster: "/source/s01-video-3.webp",
    title: "Viral Product Story",
    creator: "Seeding Campaign",
    views: "29.2K views",
    tag: "Influencer Marketing",
  },
  {
    id: "v3",
    poster: "/source/s01-video-2.webp",
    title: "Organic Creator Review",
    creator: "Lifestyle KOC",
    views: "24.2K views",
    tag: "Influencer Marketing",
  },
  {
    id: "v4",
    poster: "/source/s01-video-1.webp",
    title: "Campaign Seeding Feature",
    creator: "Fashion KOC",
    views: "14.4K views",
    tag: "Influencer Marketing",
  },
  {
    id: "v5",
    poster: "/source/p3_035.png",
    title: "VFIS Campus Life Highlight",
    creator: "VFIS Communications",
    views: "20K+ views",
    tag: "School Social Media",
  },
  {
    id: "v6",
    poster: "/source/p3_036.png",
    title: "Holiday Celebration Reel",
    creator: "VFIS Communications",
    views: "12K+ views",
    tag: "Event Storytelling",
  },
  {
    id: "v7",
    poster: "/source/s03-video-1.webp",
    title: "Real Estate Walkthrough Hook",
    creator: "MLAND Coastal",
    views: "Featured",
    tag: "Short-form Video",
  },
  {
    id: "v8",
    poster: "/source/s03-video-2.webp",
    title: "Digital Property Spotlight",
    creator: "MLAND Coastal",
    views: "Featured",
    tag: "CapCut Production",
  },
];
