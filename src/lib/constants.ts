export const SITE_CONFIG = {
  name: "Dusty Tunes",
  tagline: "Piano Lessons with Keon Wu",
  description:
    "Learn piano with Keon Wu in Ourimbah, NSW. Face-to-face lessons, online sessions, sheet music and learning resources for all skill levels.",
  url: "https://dustytunes.rogueindustries.au",
  teacher: {
    name: "Keon Wu",
    bio: "Just a country boy who loves playing piano and writing songs. Faith, music, and a dusty old piano — that's all I need.",
    location: "Ourimbah, NSW",
    region: "Central Coast, NSW",
  },
  social: {
    instagram: "https://www.instagram.com/_keon_music_/",
    facebook: "https://www.facebook.com/keonwu.music",
    youtube: "https://www.youtube.com/@KeonWu_Music",
  },
  contact: {
    email: "hello@dustytunes.rogueindustries.au",
    location: "Ourimbah, NSW 2258, Australia",
    hours: "Mon–Sat: 9am – 6pm",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Lessons", href: "/lessons" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Adult Beginner",
    quote:
      "Keon made me feel comfortable from the very first lesson. I never thought I'd be playing actual songs within a month, but here I am!",
    rating: 5,
  },
  {
    name: "Tom & Lisa R.",
    role: "Parents of Student (Age 8)",
    quote:
      "Our daughter looks forward to piano lessons every single week. Keon has a gift for connecting with kids and keeping them excited about music.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Intermediate Player",
    quote:
      "I'd been stuck at the same level for years. Keon identified exactly what I needed to work on and my playing has improved dramatically.",
    rating: 5,
  },
  {
    name: "Margaret W.",
    role: "Retired Learner",
    quote:
      "It's never too late to learn! Keon is patient, encouraging, and genuinely passionate about teaching. Best decision I've made this year.",
    rating: 5,
  },
] as const;

export const SERVICES = [
  {
    title: "Face-to-Face Lessons",
    description:
      "One-on-one piano lessons at my studio in Ourimbah, NSW. Personalised instruction tailored to your goals and skill level.",
    icon: "piano" as const,
    href: "/lessons#face-to-face",
  },
  {
    title: "Online Live Lessons",
    description:
      "Can't make it in person? Join live online sessions from anywhere. Same quality teaching, from the comfort of your home.",
    icon: "video" as const,
    href: "/lessons#online",
  },
  {
    title: "Sheet Music & Resources",
    description:
      "Download sheet music, practice guides, and learning materials. From beginner exercises to advanced arrangements.",
    icon: "music" as const,
    href: "/resources",
  },
] as const;

export const PRICING = [
  {
    name: "Single Lesson",
    price: 60,
    interval: "per session",
    description: "Perfect for trying out or casual learning",
    features: [
      "30-minute one-on-one session",
      "Personalised lesson plan",
      "Practice notes after each lesson",
      "Face-to-face or online",
    ],
    highlighted: false,
  },
  {
    name: "Monthly Package",
    price: 200,
    interval: "per month",
    description: "Most popular — consistent weekly progress",
    features: [
      "4 x 30-minute sessions per month",
      "Structured progression plan",
      "Practice notes & resources included",
      "Priority booking",
      "Free access to digital resources",
    ],
    highlighted: true,
  },
  {
    name: "Intensive Package",
    price: 350,
    interval: "per month",
    description: "For serious students ready to accelerate",
    features: [
      "4 x 60-minute sessions per month",
      "Advanced repertoire selection",
      "Theory & composition coaching",
      "Performance preparation",
      "All digital resources included",
      "Email support between lessons",
    ],
    highlighted: false,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What ages do you teach?",
    answer:
      "I teach students of all ages, from 6 years old to retirees. It's never too early or too late to start learning piano. Each lesson is tailored to the student's age, experience, and learning style.",
  },
  {
    question: "Do I need my own piano at home?",
    answer:
      "Having a keyboard or piano at home is strongly recommended for practice between lessons. A basic 88-key weighted digital piano is a great starting point — I can advise on what to get within your budget.",
  },
  {
    question: "What styles of music do you teach?",
    answer:
      "I cover a wide range including classical, contemporary, country, pop, hymns, and songwriting. My teaching approach adapts to what inspires you — whether that's Bach or Billy Joel.",
  },
  {
    question: "How long before I can play songs?",
    answer:
      "Most beginners are playing simple songs within the first few weeks. Within 3-6 months of consistent practice, you'll have a solid repertoire. Every student progresses differently, and I meet you wherever you are.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "I ask for at least 24 hours notice for cancellations. Lessons cancelled with less notice may be charged at the full rate. I understand things come up — just let me know as early as you can.",
  },
  {
    question: "Do you prepare students for exams?",
    answer:
      "Yes! I prepare students for AMEB exams and other graded assessments if that's a goal. However, exams aren't for everyone — many of my students simply enjoy learning for the love of music.",
  },
] as const;

export const RESOURCES_DATA = [
  {
    slug: "beginner-chord-progressions",
    title: "Beginner Chord Progressions",
    description:
      "Essential chord progressions every beginner should know. Includes major, minor, and common pop progressions with fingering diagrams.",
    category: "Sheet Music",
    level: "Beginner" as const,
    price: 0,
    featured: true,
  },
  {
    slug: "country-piano-essentials",
    title: "Country Piano Essentials",
    description:
      "Learn the signature country piano techniques — honky-tonk rhythms, walkdowns, and classic Nashville sounds.",
    category: "Sheet Music",
    level: "Intermediate" as const,
    price: 12,
    featured: true,
  },
  {
    slug: "hymn-arrangements-vol-1",
    title: "Hymn Arrangements Vol. 1",
    description:
      "Beautiful, playable arrangements of 10 classic hymns. Perfect for church services or personal worship.",
    category: "Sheet Music",
    level: "Intermediate" as const,
    price: 15,
    featured: true,
  },
  {
    slug: "practice-routine-guide",
    title: "The Practice Routine Guide",
    description:
      "A structured PDF guide to building an effective daily practice routine. Includes warm-ups, technique exercises, and scheduling templates.",
    category: "PDF Guide",
    level: "All Levels" as const,
    price: 0,
    featured: false,
  },
  {
    slug: "music-theory-fundamentals",
    title: "Music Theory Fundamentals",
    description:
      "Everything you need to know about scales, intervals, chords, and keys. Clear explanations with piano-specific examples.",
    category: "PDF Guide",
    level: "Beginner" as const,
    price: 10,
    featured: false,
  },
  {
    slug: "advanced-improvisation-techniques",
    title: "Advanced Improvisation Techniques",
    description:
      "Take your playing to the next level with jazz voicings, modal improvisation, and creative chord substitutions.",
    category: "Sheet Music",
    level: "Advanced" as const,
    price: 18,
    featured: false,
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "why-its-never-too-late-to-learn-piano",
    title: "Why It's Never Too Late to Learn Piano",
    excerpt:
      "Think you're too old to start? Think again. Here's why adult learners often make the fastest progress — and how to get started.",
    category: "Inspiration",
    date: "2026-02-15",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "5-practice-habits-that-actually-work",
    title: "5 Practice Habits That Actually Work",
    excerpt:
      "Forget practising for hours. These five science-backed habits will help you improve faster with less time at the keys.",
    category: "Practice Tips",
    date: "2026-02-01",
    readTime: "4 min read",
    featured: true,
  },
  {
    slug: "choosing-your-first-digital-piano",
    title: "Choosing Your First Digital Piano",
    excerpt:
      "Weighted keys, polyphony, built-in sounds — what actually matters when buying your first keyboard? A no-nonsense guide.",
    category: "Gear",
    date: "2026-01-20",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "understanding-chord-inversions",
    title: "Understanding Chord Inversions",
    excerpt:
      "Chord inversions are the secret to smooth, professional-sounding playing. Here's how to use them effectively.",
    category: "Music Theory",
    date: "2026-01-10",
    readTime: "5 min read",
    featured: false,
  },
] as const;
