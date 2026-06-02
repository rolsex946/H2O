/* ============================================
   H2O Singur — Premium Fitness Studio SPA
   Complete JavaScript Application
   ============================================ */

// ============================================
// GLOBAL CONFIGURATION
// ============================================
const CONFIG = {
  WHATSAPP_NUMBER: "919804819829",
  WHATSAPP_BASE_URL: "https://wa.me/",
  SITE_NAME: "H2O Singur",
  ANIMATION_DURATION: 800,
  COUNTER_DURATION: 2000,
  TOAST_DURATION: 4000,
  SCROLL_OFFSET: 100,
};

// ============================================
// DATA: PRODUCTS
// ============================================
const PRODUCTS = [
  {
    id: 1,
    name: "Elite Whey Protein",
    category: "protein",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://picsum.photos/seed/protein1/600/600",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 324,
    description:
      "Premium whey protein isolate with 25g protein per serving. Fast absorbing, great tasting, and engineered for serious athletes.",
    sizes: ["1lb", "2lb", "5lb"],
    flavors: ["Chocolate", "Vanilla", "Strawberry"],
  },
  {
    id: 2,
    name: "Creatine Monohydrate",
    category: "supplements",
    price: 29.99,
    originalPrice: null,
    image: "https://picsum.photos/seed/creatine1/600/600",
    badge: null,
    rating: 4.9,
    reviews: 218,
    description:
      "Micronized creatine monohydrate for increased strength, power, and muscle volume. 5g per serving, 60 servings.",
    sizes: ["200g", "500g"],
    flavors: ["Unflavored"],
  },
  {
    id: 3,
    name: "Pre-Workout Ignite",
    category: "supplements",
    price: 44.99,
    originalPrice: 54.99,
    image: "https://picsum.photos/seed/preworkout1/600/600",
    badge: "Sale",
    rating: 4.7,
    reviews: 189,
    description:
      "Explosive energy formula with caffeine, beta-alanine, and citrulline. Take 20 minutes before training.",
    sizes: ["30 servings", "60 servings"],
    flavors: ["Fruit Punch", "Blue Raspberry", "Watermelon"],
  },
  {
    id: 4,
    name: "BCAA Recovery",
    category: "supplements",
    price: 34.99,
    originalPrice: null,
    image: "https://picsum.photos/seed/bcaa1/600/600",
    badge: null,
    rating: 4.6,
    reviews: 156,
    description:
      "Branch chain amino acids in optimal 2:1:1 ratio. Supports muscle recovery and reduces soreness.",
    sizes: ["30 servings", "60 servings"],
    flavors: ["Lemon Lime", "Grape", "Orange"],
  },
  {
    id: 5,
    name: "Performance Shorts",
    category: "apparel",
    price: 49.99,
    originalPrice: null,
    image: "https://picsum.photos/seed/shorts1/600/600",
    badge: "New",
    rating: 4.5,
    reviews: 87,
    description:
      "Moisture-wicking performance shorts with 4-way stretch. Built for intense training sessions.",
    sizes: ["S", "M", "L", "XL"],
    flavors: [],
  },
  {
    id: 6,
    name: "Compression Tank Top",
    category: "apparel",
    price: 39.99,
    originalPrice: 49.99,
    image: "https://picsum.photos/seed/tank1/600/600",
    badge: "Sale",
    rating: 4.4,
    reviews: 63,
    description:
      "Seamless compression tank with targeted ventilation zones. Enhances blood flow and performance.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    flavors: [],
  },
  {
    id: 7,
    name: "Training Gloves Pro",
    category: "accessories",
    price: 24.99,
    originalPrice: null,
    image: "https://picsum.photos/seed/gloves1/600/600",
    badge: null,
    rating: 4.3,
    reviews: 142,
    description:
      "Premium leather training gloves with wrist support and padded palms. Superior grip and durability.",
    sizes: ["S", "M", "L", "XL"],
    flavors: [],
  },
  {
    id: 8,
    name: "Lifting Belt Elite",
    category: "accessories",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://picsum.photos/seed/belt1/600/600",
    badge: "Sale",
    rating: 4.8,
    reviews: 201,
    description:
      "Competition-grade leather lifting belt. 10mm thickness with single-prong buckle for maximum support.",
    sizes: ["S", "M", "L", "XL"],
    flavors: [],
  },
  {
    id: 9,
    name: "Resistance Band Set",
    category: "accessories",
    price: 19.99,
    originalPrice: null,
    image: "https://picsum.photos/seed/bands1/600/600",
    badge: null,
    rating: 4.6,
    reviews: 298,
    description:
      "Set of 5 resistance bands with varying tensions. Perfect for warm-ups, rehab, and accessory work.",
    sizes: ["Light", "Medium", "Heavy"],
    flavors: [],
  },
  {
    id: 10,
    name: "Shaker Bottle Pro",
    category: "accessories",
    price: 14.99,
    originalPrice: null,
    image: "https://picsum.photos/seed/shaker1/600/600",
    badge: null,
    rating: 4.2,
    reviews: 445,
    description:
      "BPA-free shaker with mixing ball and storage compartment. Leak-proof lid, 28oz capacity.",
    sizes: ["28oz", "32oz"],
    flavors: [],
  },
  {
    id: 11,
    name: "Mass Gainer Formula",
    category: "protein",
    price: 54.99,
    originalPrice: 69.99,
    image: "https://picsum.photos/seed/massgainer1/600/600",
    badge: "Sale",
    rating: 4.5,
    reviews: 167,
    description:
      "High-calorie mass gainer with 50g protein and 250g carbs per serving. For serious size gains.",
    sizes: ["5lb", "10lb"],
    flavors: ["Chocolate", "Vanilla", "Cookies & Cream"],
  },
  {
    id: 12,
    name: "Training Hoodie",
    category: "apparel",
    price: 59.99,
    originalPrice: null,
    image: "https://picsum.photos/seed/hoodie1/600/600",
    badge: "New",
    rating: 4.7,
    reviews: 52,
    description:
      "Technical fleece hoodie with thumb holes and zippered pockets. Perfect for warm-ups and cool-downs.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    flavors: [],
  },
  {
    id: 13,
    name: "Omega-3 Fish Oil",
    category: "supplements",
    price: 24.99,
    originalPrice: null,
    image: "https://picsum.photos/seed/omega1/600/600",
    badge: null,
    rating: 4.4,
    reviews: 176,
    description:
      "Ultra-pure fish oil with high EPA/DHA content. Supports joint health, heart health, and recovery.",
    sizes: ["90 softgels", "180 softgels"],
    flavors: [],
  },
  {
    id: 14,
    name: "Gym Bag Tactical",
    category: "accessories",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://picsum.photos/seed/gymbag1/600/600",
    badge: "Sale",
    rating: 4.6,
    reviews: 89,
    description:
      "Durable tactical gym bag with shoe compartment, wet pocket, and multiple organizer pockets.",
    sizes: ["40L", "60L"],
    flavors: [],
  },
  {
    id: 15,
    name: "Plant Protein Vegan",
    category: "protein",
    price: 49.99,
    originalPrice: null,
    image: "https://picsum.photos/seed/veganprotein1/600/600",
    badge: "Vegan",
    rating: 4.3,
    reviews: 134,
    description:
      "Complete plant-based protein from pea and rice. 22g protein per serving, naturally sweetened.",
    sizes: ["1lb", "2lb"],
    flavors: ["Chocolate", "Vanilla", "Berry"],
  },
  {
    id: 16,
    name: "Yoga Mat Premium",
    category: "accessories",
    price: 39.99,
    originalPrice: null,
    image: "https://picsum.photos/seed/yogamat1/600/600",
    badge: null,
    rating: 4.5,
    reviews: 203,
    description:
      "Extra thick 6mm non-slip yoga mat with alignment markings. Eco-friendly TPE material.",
    sizes: ["Standard", "Extra Long"],
    flavors: [],
  },
];

// ============================================
// DATA: BLOG POSTS
// ============================================
const BLOG_POSTS = [
  {
    id: "post-1",
    title: "The Science of Muscle Recovery: What Actually Works",
    excerpt:
      "Discover evidence-based strategies for optimizing your recovery and maximizing muscle growth between training sessions.",
    image: "https://picsum.photos/seed/blog1/800/450",
    category: "Nutrition",
    author: "Dr. Sarah Mitchell",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    content: `<p>Recovery is perhaps the most misunderstood aspect of fitness. While many athletes focus exclusively on their training intensity, the truth is that muscles grow and adapt during rest periods, not during the workout itself.</p>
        <h2>Understanding Muscle Recovery</h2>
        <p>When you exercise, you create microscopic tears in your muscle fibers. This is a normal and necessary process. During recovery, your body repairs these tears, making the muscles stronger and more resilient than before. This process is called muscular hypertrophy.</p>
        <blockquote>The quality of your recovery determines the quality of your next performance. Treat rest with the same intensity as your training.</blockquote>
        <h2>Key Recovery Strategies</h2>
        <p>Nutrition plays a crucial role. Consuming adequate protein within the anabolic window (1-2 hours post-workout) provides the amino acids necessary for muscle repair. Aim for 20-40g of high-quality protein per meal.</p>
        <p>Sleep is perhaps the single most important recovery tool available. During deep sleep, growth hormone release peaks, promoting tissue repair and muscle growth. Aim for 7-9 hours of quality sleep per night.</p>
        <h2>Active Recovery</h2>
        <p>Light movement on rest days—such as walking, swimming, or gentle yoga—increases blood flow to muscles, delivering nutrients and removing waste products more efficiently than complete rest.</p>
        <p>Remember, recovery is not laziness. It is an essential component of any successful training program. The strongest athletes are those who have mastered the art of recovery.</p>`,
  },
  {
    id: "post-2",
    title: "Progressive Overload: The Only Training Principle You Need",
    excerpt:
      "Why progressive overload is the foundation of all strength and muscle gains, and how to implement it correctly in your program.",
    image: "https://picsum.photos/seed/blog2/800/450",
    category: "Training",
    author: "Coach Marcus Rivera",
    date: "Jan 10, 2025",
    readTime: "6 min read",
    content: `<p>If there is one principle that separates those who make consistent gains from those who stall, it is progressive overload. This fundamental concept is the backbone of all effective training programs.</p>
        <h2>What Is Progressive Overload?</h2>
        <p>Progressive overload is the gradual increase of stress placed on the body during exercise. This stress can come in many forms: increased weight, more repetitions, additional sets, or decreased rest periods.</p>
        <h2>How to Implement It</h2>
        <p>The simplest method is to add small increments of weight to your lifts each week. Even 1-2kg additions compound over months into significant strength gains. The key is consistency and patience.</p>
        <blockquote>It is not the most intense training session that builds the greatest strength, but the most consistent progressive approach over months and years.</blockquote>
        <p>Track your workouts meticulously. Without records, you cannot know if you are truly progressing. Use a training log or app to monitor every set, rep, and weight.</p>
        <p>When you cannot increase weight, increase reps. When you cannot increase reps, increase sets. There is always a variable to manipulate to keep the progress going.</p>`,
  },
  {
    id: "post-3",
    title: "Mindset of a Champion: Mental Training for Peak Performance",
    excerpt:
      "How mental conditioning and psychological strategies can elevate your physical performance beyond what you thought possible.",
    image: "https://picsum.photos/seed/blog3/800/450",
    category: "Mindset",
    author: "Coach Elena Vasquez",
    date: "Jan 5, 2025",
    readTime: "7 min read",
    content: `<p>The difference between good athletes and great ones is rarely physical. At the elite level, everyone has talent and work ethic. What separates champions is their mindset—the way they think, prepare, and respond to adversity.</p>
        <h2>The Growth Mindset</h2>
        <p>Champions view failure not as a reflection of their worth, but as information. Every missed lift, every lost race, every setback is data that can be used to improve. This growth mindset transforms obstacles into opportunities.</p>
        <h2>Visualization</h2>
        <p>Mental rehearsal activates many of the same neural pathways as physical practice. Spend 5-10 minutes daily visualizing your perfect performance. See it, feel it, hear it. Your brain does not distinguish between vivid imagination and reality.</p>
        <blockquote>Your body achieves what your mind believes. The limits you perceive are often self-imposed, not physical.</blockquote>
        <p>Develop a pre-performance routine that signals to your brain that it is time to compete. This could be a specific warm-up sequence, a breathing pattern, or a power phrase. Consistency in routine breeds consistency in performance.</p>
        <p>Remember: mental training is not a replacement for physical preparation, but a multiplier. When combined with disciplined training, a champion mindset can unlock performance levels you never thought possible.</p>`,
  },
  {
    id: "post-4",
    title: "Complete Guide to Meal Prep for Muscle Building",
    excerpt:
      "Step-by-step meal prep strategies to fuel muscle growth without spending hours in the kitchen every day.",
    image: "https://picsum.photos/seed/blog4/800/450",
    category: "Nutrition",
    author: "Chef & Coach David Kim",
    date: "Dec 28, 2024",
    readTime: "10 min read",
    content: `<p>Nutrition is the foundation upon which all training results are built. You cannot out-train a poor diet, and consistency in eating is just as important as consistency in training.</p>
        <h2>The Meal Prep Framework</h2>
        <p>Successful meal prep comes down to three pillars: planning, batch cooking, and smart storage. Dedicate 2-3 hours on Sunday to prepare your meals for the week, and you will never be caught without quality fuel.</p>
        <h2>Macros for Muscle</h2>
        <p>Aim for 1.6-2.2g of protein per kg of bodyweight, 4-6g of carbs per kg for training days, and 0.8-1g of fat per kg. These ranges allow flexibility while ensuring adequate fuel for growth.</p>
        <blockquote>The best diet is the one you can stick to consistently. Perfection is the enemy of progress in nutrition.</blockquote>
        <p>Keep your meals simple and repeatable. You do not need culinary masterpieces every day—you need consistent, nutritious food that supports your goals. Save the elaborate meals for weekends and social occasions.</p>`,
  },
  {
    id: "post-5",
    title: "Functional Training: Why It Matters Beyond the Gym",
    excerpt:
      "Understanding how functional movements translate to real-world strength and quality of life improvements.",
    image: "https://picsum.photos/seed/blog5/800/450",
    category: "Training",
    author: "Coach Lisa Park",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    content: `<p>In an era of specialized machines and isolated exercises, functional training stands out as an approach that prepares you for the demands of real life, not just the gym floor.</p>
        <h2>What Makes Training "Functional"?</h2>
        <p>Functional training involves movements that mimic everyday activities: squatting, hinging, pushing, pulling, rotating, and carrying. These compound movements engage multiple muscle groups simultaneously, just as real-world tasks do.</p>
        <h2>Real-World Benefits</h2>
        <p>Functional training improves balance, coordination, agility, and proprioception. It reduces the risk of injury in daily activities and enhances overall quality of movement.</p>
        <blockquote>The gym should prepare you for life outside the gym. If your training does not translate to real-world capability, it is time to reassess your approach.</blockquote>
        <p>Incorporate movements like farmer carries, Turkish get-ups, and single-leg exercises. These challenge your stability and coordination in ways that seated machine exercises simply cannot replicate.</p>`,
  },
  {
    id: "post-6",
    title: "Sleep Optimization: The Hidden Key to Fat Loss",
    excerpt:
      "How improving your sleep quality can dramatically accelerate fat loss and improve body composition.",
    image: "https://picsum.photos/seed/blog6/800/450",
    category: "Mindset",
    author: "Dr. Sarah Mitchell",
    date: "Dec 15, 2024",
    readTime: "6 min read",
    content: `<p>While most people focus on diet and exercise for fat loss, sleep is the often-overlooked third pillar that can make or break your results. Poor sleep disrupts hormones, increases cravings, and reduces your body's ability to burn fat.</p>
        <h2>The Hormone Connection</h2>
        <p>Sleep deprivation increases ghrelin (the hunger hormone) and decreases leptin (the satiety hormone). This double hit makes you feel hungrier and less satisfied after eating, leading to overconsumption.</p>
        <h2>Practical Tips</h2>
        <p>Maintain a consistent sleep schedule, even on weekends. Keep your bedroom cool, dark, and quiet. Avoid screens for at least 30 minutes before bed. These simple changes can dramatically improve sleep quality.</p>
        <blockquote>Sleep is not a luxury—it is a biological necessity. Treat your bedtime with the same discipline you bring to your training.</blockquote>
        <p>Aim for 7-9 hours of quality sleep per night. If you are consistently getting less, you are undermining every other effort you make toward your fitness goals.</p>`,
  },
];

// ============================================
// DATA: TRAINERS
// ============================================
const TRAINERS = [
  {
    id: 1,
    name: "Marcus Rivera",
    role: "Head Strength Coach",
    image: "https://picsum.photos/seed/trainer1/600/800",
    specializations: [
      "Powerlifting",
      "Olympic Lifting",
      "Strength Programming",
    ],
    experience: "12+ years",
    bio: "Former national powerlifting champion turned elite strength coach. Marcus has helped over 500 athletes achieve competition-ready strength levels.",
  },
  {
    id: 2,
    name: "Elena Vasquez",
    role: "HIIT & Conditioning Specialist",
    image: "https://picsum.photos/seed/trainer2/600/800",
    specializations: ["HIIT", "Cardio Conditioning", "Fat Loss"],
    experience: "8+ years",
    bio: "Known for her high-energy sessions, Elena transforms bodies with scientifically-designed HIIT protocols that maximize calorie burn.",
  },
  {
    id: 3,
    name: "David Kim",
    role: "Boxing & MMA Coach",
    image: "https://picsum.photos/seed/trainer3/600/800",
    specializations: ["Boxing", "Muay Thai", "MMA"],
    experience: "15+ years",
    bio: "Professional MMA background with championship experience. David brings authentic combat sports training to every session.",
  },
  {
    id: 4,
    name: "Lisa Park",
    role: "Yoga & Mobility Expert",
    image: "https://picsum.photos/seed/trainer4/600/800",
    specializations: ["Vinyasa Yoga", "Mobility", "Recovery"],
    experience: "10+ years",
    bio: "Certified RYT-500 instructor who bridges the gap between traditional yoga practice and modern athletic performance needs.",
  },
  {
    id: 5,
    name: "James Okonkwo",
    role: "CrossFit Level 3 Trainer",
    image: "https://picsum.photos/seed/trainer5/600/800",
    specializations: ["CrossFit", "Functional Fitness", "Competition Prep"],
    experience: "9+ years",
    bio: "CrossFit Games competitor turned coach. James programs and coaches with the intensity and precision needed for elite performance.",
  },
  {
    id: 6,
    name: "Sarah Mitchell",
    role: "Sports Nutritionist & PT",
    image: "https://picsum.photos/seed/trainer6/600/800",
    specializations: [
      "Nutrition Planning",
      "Body Recomposition",
      "Lifestyle Coaching",
    ],
    experience: "11+ years",
    bio: "PhD in Sports Nutrition combined with personal training certification. Sarah takes a holistic approach to body transformation.",
  },
];

// ============================================
// DATA: PROGRAMS
// ============================================
const PROGRAMS = [
  {
    id: "strength",
    name: "Strength Training",
    category: "strength",
    image: "https://picsum.photos/seed/program1/800/500",
    icon: "fas fa-dumbbell",
    shortDesc: "Build raw strength with progressive overload methodology",
    description:
      "Our signature strength program is built on proven progressive overload principles. Whether you are a beginner learning the fundamentals or an advanced lifter chasing new PRs, our structured programming will take your strength to the next level.",
    duration: "12 weeks",
    frequency: "4x per week",
    level: "All Levels",
    features: [
      "Personalized programming",
      "Form analysis sessions",
      "Progress tracking",
      "Nutrition guidance",
    ],
  },
  {
    id: "hiit",
    name: "Cardio & HIIT",
    category: "cardio",
    image: "https://picsum.photos/seed/program2/800/500",
    icon: "fas fa-heartbeat",
    shortDesc: "Torch calories and boost cardiovascular endurance",
    description:
      "High-intensity interval training designed to maximize calorie burn, improve cardiovascular health, and transform your body composition. Each session is carefully programmed to push your limits while maintaining proper form.",
    duration: "8 weeks",
    frequency: "3-5x per week",
    level: "Intermediate",
    features: [
      "Heart rate monitoring",
      "Varied workout formats",
      "Progressive intensity",
      "Recovery protocols",
    ],
  },
  {
    id: "yoga",
    name: "Yoga & Flexibility",
    category: "yoga",
    image: "https://picsum.photos/seed/program3/800/500",
    icon: "fas fa-spa",
    shortDesc: "Enhance mobility, reduce stress, and find balance",
    description:
      "A comprehensive yoga program that combines traditional vinyasa flow with modern mobility work. Perfect for athletes looking to improve flexibility, reduce injury risk, and develop mental clarity.",
    duration: "Ongoing",
    frequency: "3-5x per week",
    level: "All Levels",
    features: [
      "Multiple yoga styles",
      "Mobility assessments",
      "Breathwork sessions",
      "Meditation guidance",
    ],
  },
  {
    id: "boxing",
    name: "Boxing & MMA",
    category: "boxing",
    image: "https://picsum.photos/seed/program4/800/500",
    icon: "fas fa-fist-raised",
    shortDesc: "Learn combat skills while getting in peak condition",
    description:
      "Authentic boxing and MMA training from experienced fighters. Learn technique, build confidence, and achieve elite-level conditioning through combat sports training.",
    duration: "12 weeks",
    frequency: "3-4x per week",
    level: "All Levels",
    features: [
      "Technical instruction",
      "Sparring sessions",
      "Bag work",
      "Conditioning drills",
    ],
  },
  {
    id: "crossfit",
    name: "CrossFit",
    category: "crossfit",
    image: "https://picsum.photos/seed/program5/800/500",
    icon: "fas fa-fire-alt",
    shortDesc: "Varied functional fitness at maximum intensity",
    description:
      "Constantly varied functional movements performed at high intensity. Our CrossFit program builds comprehensive fitness that prepares you for any physical challenge life throws your way.",
    duration: "Ongoing",
    frequency: "5x per week",
    level: "Intermediate-Advanced",
    features: [
      "Daily WODs",
      "Skill sessions",
      "Open gym access",
      "Competition prep",
    ],
  },
  {
    id: "personal",
    name: "Personal Training",
    category: "personal",
    image: "https://picsum.photos/seed/program6/800/500",
    icon: "fas fa-user-friends",
    shortDesc: "One-on-one coaching tailored to your exact goals",
    description:
      "Completely personalized training with a dedicated coach. Every session, every exercise, every meal plan is designed specifically for you and your goals. The fastest path to transformation.",
    duration: "Custom",
    frequency: "3-5x per week",
    level: "All Levels",
    features: [
      "100% personalized",
      "Flexible scheduling",
      "Body composition tracking",
      "24/7 coach access",
    ],
  },
];

// ============================================
// DATA: REVIEWS
// ============================================
const REVIEWS = [
  {
    id: 1,
    name: "Alex Thompson",
    avatar: "https://picsum.photos/seed/rev1/100/100",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely transformed my physique in 12 weeks. The trainers are world-class and the community is incredible. Best investment I have ever made in myself.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    avatar: "https://picsum.photos/seed/rev2/100/100",
    rating: 5,
    date: "1 month ago",
    text: "The yoga program here is unlike anything I have experienced. Lisa is an incredible instructor who truly understands the body. My flexibility and mental clarity have improved dramatically.",
  },
  {
    id: 3,
    name: "Michael Chen",
    avatar: "https://picsum.photos/seed/rev3/100/100",
    rating: 5,
    date: "3 weeks ago",
    text: "Marcus helped me add 100lbs to my squat in 6 months. The programming is smart, the coaching is attentive, and the results speak for themselves. H2O Singur is the real deal.",
  },
  {
    id: 4,
    name: "Sofia Rodriguez",
    avatar: "https://picsum.photos/seed/rev4/100/100",
    rating: 4,
    date: "1 month ago",
    text: "Great facility, amazing energy, and the HIIT classes kick your butt in the best way possible. Only giving 4 stars because parking can be tricky during peak hours.",
  },
  {
    id: 5,
    name: "James Wilson",
    avatar: "https://picsum.photos/seed/rev5/100/100",
    rating: 5,
    date: "2 months ago",
    text: "The boxing program is phenomenal. Coach David brings real fight knowledge and creates an authentic training environment. I am in the best shape of my life.",
  },
  {
    id: 6,
    name: "Emily Foster",
    avatar: "https://picsum.photos/seed/rev6/100/100",
    rating: 5,
    date: "3 weeks ago",
    text: "Clean facility, premium equipment, and trainers who actually care about your progress. Worth every penny. The community events are a great bonus too.",
  },
  {
    id: 7,
    name: "Raj Patel",
    avatar: "https://picsum.photos/seed/rev7/100/100",
    rating: 5,
    date: "1 month ago",
    text: "Lost 30lbs in 3 months with their combined nutrition and training program. The holistic approach makes all the difference. Dr. Mitchell is brilliant.",
  },
  {
    id: 8,
    name: "Amanda Lee",
    avatar: "https://picsum.photos/seed/rev8/100/100",
    rating: 4,
    date: "2 months ago",
    text: "CrossFit program is intense but well-structured. Coach James knows his stuff and scales workouts appropriately for all levels. Great vibes all around.",
  },
];

// ============================================
// DATA: TRANSFORMATIONS
// ============================================
const TRANSFORMATIONS = [
  {
    id: 1,
    name: "Alex Thompson",
    beforeImage: "https://picsum.photos/seed/before1/600/750",
    afterImage: "https://picsum.photos/seed/after1/600/750",
    duration: "12 Weeks",
    weightBefore: "220 lbs",
    weightAfter: "185 lbs",
    bodyFatBefore: "28%",
    bodyFatAfter: "14%",
    quote:
      "H2O Singur did not just change my body—they changed my entire relationship with fitness.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    beforeImage: "https://picsum.photos/seed/before2/600/750",
    afterImage: "https://picsum.photos/seed/after2/600/750",
    duration: "16 Weeks",
    weightBefore: "155 lbs",
    weightAfter: "135 lbs",
    bodyFatBefore: "32%",
    bodyFatAfter: "20%",
    quote:
      "I walked in wanting to lose weight. I walked out gaining confidence, strength, and a new lifestyle.",
  },
  {
    id: 3,
    name: "Michael Chen",
    beforeImage: "https://picsum.photos/seed/before3/600/750",
    afterImage: "https://picsum.photos/seed/after3/600/750",
    duration: "24 Weeks",
    weightBefore: "165 lbs",
    weightAfter: "195 lbs",
    bodyFatBefore: "18%",
    bodyFatAfter: "10%",
    quote:
      "Gained 30 lbs of muscle while getting leaner. The programming here is next level.",
  },
  {
    id: 4,
    name: "Sofia Rodriguez",
    beforeImage: "https://picsum.photos/seed/before4/600/750",
    afterImage: "https://picsum.photos/seed/after4/600/750",
    duration: "20 Weeks",
    weightBefore: "180 lbs",
    weightAfter: "148 lbs",
    bodyFatBefore: "35%",
    bodyFatAfter: "19%",
    quote:
      "Every session pushed me beyond what I thought was possible. The results exceeded my wildest expectations.",
  },
];

// ============================================
// DATA: FAQS
// ============================================
const FAQS = [
  {
    question: "What makes H2O Singur different from other gyms?",
    answer:
      "H2O Singur is not just a gym—it is a performance center. We combine world-class coaching, premium equipment, personalized programming, and a supportive community to deliver results that ordinary gyms simply cannot match. Every member receives a custom training plan and access to our full range of specialized programs.",
  },
  {
    question: "Do I need to be experienced to join?",
    answer:
      "Not at all. We welcome all fitness levels, from complete beginners to elite athletes. Our trainers are skilled at scaling workouts and programming to meet you where you are. Every program has modifications and progressions built in, so you always train at the right intensity for your current level.",
  },
  {
    question: "What is included in a membership?",
    answer:
      "All memberships include unlimited access to group classes, open gym hours, initial fitness assessment, custom training program, nutrition guidance, and access to our member app for tracking progress. Premium and Elite tiers include additional personal training sessions, priority booking, and exclusive workshops.",
  },
  {
    question: "Can I try before I commit?",
    answer:
      "Absolutely. We offer a complimentary 7-day trial that includes full access to our facilities, group classes, and a consultation with one of our coaches. No credit card required, no obligation. We want you to experience the H2O Singur difference before making a decision.",
  },
  {
    question: "What are your hours of operation?",
    answer:
      "We are open Monday through Saturday from 5:00 AM to 11:00 PM, and Sunday from 7:00 AM to 9:00 PM. Members with Elite memberships also have 24/7 access to the facility including holidays.",
  },
  {
    question: "Do you offer nutrition coaching?",
    answer:
      "Yes. Our Sports Nutritionist, Dr. Sarah Mitchell, provides comprehensive nutrition coaching as part of our Premium and Elite memberships. This includes custom meal plans, macro tracking, supplement recommendations, and bi-weekly check-ins. Starter members can add nutrition coaching for an additional fee.",
  },
  {
    question: "What should I bring to my first session?",
    answer:
      "Just comfortable workout clothes, athletic shoes, a water bottle, and a positive attitude. We provide towels, shower facilities with premium amenities, and lockers. Your coach will guide you through everything else on your first visit.",
  },
  {
    question: "Is there a cancellation policy for memberships?",
    answer:
      "We require 30 days notice for membership cancellations. There are no long-term contracts—you can cancel anytime with proper notice. We also offer membership freezes for up to 3 months per year if you need to take a break due to travel, injury, or other circumstances.",
  },
  {
    question: "Do you offer corporate or group discounts?",
    answer:
      "Yes, we offer special rates for corporate groups of 5 or more, as well as student, military, and first responder discounts. Contact us for a custom quote based on your group size and needs.",
  },
  {
    question: "How do I book personal training sessions?",
    answer:
      "Personal training sessions can be booked through our member app, website, or at the front desk. Premium members receive 4 PT sessions per month included, and additional sessions can be purchased individually or in discounted packages.",
  },
];

// ============================================
// DATA: SCHEDULE
// ============================================
const SCHEDULE_DATA = [
  {
    time: "5:30 AM",
    class: "Morning Burn HIIT",
    trainer: "Elena Vasquez",
    day: "Mon/Wed/Fri",
    duration: "45 min",
    spots: "8 left",
    status: "available",
  },
  {
    time: "6:30 AM",
    class: "Strength Foundations",
    trainer: "Marcus Rivera",
    day: "Mon/Tue/Thu",
    duration: "60 min",
    spots: "5 left",
    status: "limited",
  },
  {
    time: "7:30 AM",
    class: "Vinyasa Flow Yoga",
    trainer: "Lisa Park",
    day: "Tue/Thu/Sat",
    duration: "60 min",
    spots: "12 left",
    status: "available",
  },
  {
    time: "8:30 AM",
    class: "CrossFit WOD",
    trainer: "James Okonkwo",
    day: "Mon-Fri",
    duration: "60 min",
    spots: "3 left",
    status: "limited",
  },
  {
    time: "10:00 AM",
    class: "Boxing Fundamentals",
    trainer: "David Kim",
    day: "Mon/Wed/Fri",
    duration: "60 min",
    spots: "10 left",
    status: "available",
  },
  {
    time: "12:00 PM",
    class: "Lunch Express HIIT",
    trainer: "Elena Vasquez",
    day: "Mon-Fri",
    duration: "30 min",
    spots: "6 left",
    status: "available",
  },
  {
    time: "4:00 PM",
    class: "Mobility & Recovery",
    trainer: "Lisa Park",
    day: "Wed/Fri",
    duration: "45 min",
    spots: "15 left",
    status: "available",
  },
  {
    time: "5:00 PM",
    class: "Powerlifting Program",
    trainer: "Marcus Rivera",
    day: "Mon/Wed/Fri",
    duration: "90 min",
    spots: "0 left",
    status: "full",
  },
  {
    time: "5:30 PM",
    class: "MMA Conditioning",
    trainer: "David Kim",
    day: "Tue/Thu",
    duration: "60 min",
    spots: "4 left",
    status: "limited",
  },
  {
    time: "6:00 PM",
    class: "CrossFit Competition",
    trainer: "James Okonkwo",
    day: "Tue/Thu",
    duration: "75 min",
    spots: "2 left",
    status: "limited",
  },
  {
    time: "7:00 PM",
    class: "Evening Strength",
    trainer: "Marcus Rivera",
    day: "Mon/Wed",
    duration: "60 min",
    spots: "7 left",
    status: "available",
  },
  {
    time: "7:30 PM",
    class: "Restorative Yoga",
    trainer: "Lisa Park",
    day: "Mon/Wed",
    duration: "60 min",
    spots: "14 left",
    status: "available",
  },
];

// ============================================
// CART STATE
// ============================================
let cart = [];

// ============================================
// ROUTER
// ============================================
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("DOMContentLoaded", () => this.handleRoute());
  }

  on(path, handler) {
    this.routes[path] = handler;
    return this;
  }

  navigate(path) {
    window.location.hash = path;
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || "/home";
    const [path, queryString] = hash.split("?");
    const params = {};
    if (queryString) {
      queryString.split("&").forEach((param) => {
        const [key, value] = param.split("=");
        params[key] = decodeURIComponent(value || "");
      });
    }

    // Check for blog post routes
    if (path.startsWith("/blog/post-")) {
      const postId = path.replace("/blog/", "");
      const blogPost = BLOG_POSTS.find((p) => p.id === postId);
      if (blogPost) {
        this.currentRoute = path;
        this.renderPage("blog-detail", { post: blogPost, params });
        return;
      }
    }

    // Check for shop product routes
    if (path.startsWith("/shop/product-")) {
      const productId = parseInt(path.replace("/shop/product-", ""));
      const product = PRODUCTS.find((p) => p.id === productId);
      if (product) {
        this.currentRoute = path;
        this.renderPage("product-detail", { product, params });
        return;
      }
    }

    // Check for program detail routes
    if (path.startsWith("/programs/") && path !== "/programs") {
      const programId = path.replace("/programs/", "");
      const program = PROGRAMS.find((p) => p.id === programId);
      if (program) {
        this.currentRoute = path;
        this.renderPage("program-detail", { program, params });
        return;
      }
    }

    const handler = this.routes[path];
    if (handler) {
      this.currentRoute = path;
      handler(params);
    } else {
      this.renderPage("404");
    }
  }

  renderPage(pageName, data = {}) {
    const app = document.getElementById("app");
    window.scrollTo({ top: 0, behavior: "instant" });

    const pageRenderer = PageRenderer[pageName];
    if (pageRenderer) {
      app.innerHTML = pageRenderer(data);
    } else {
      app.innerHTML = PageRenderer["404"]();
    }

    // Update nav active state
    this.updateNavState();

    // Re-initialize page-specific functionality
    this.initPageComponents(pageName, data);

    // Trigger reveal animations
    setTimeout(() => initRevealAnimations(), 100);
  }

  updateNavState() {
    const hash = window.location.hash.slice(1) || "/home";
    const mainPath = hash.split("?")[0];
    document.querySelectorAll("[data-nav]").forEach((link) => {
      const linkPath = link.getAttribute("href").replace("#", "").split("?")[0];
      link.classList.toggle(
        "active",
        linkPath === mainPath ||
          (mainPath.startsWith(linkPath) && linkPath !== "/"),
      );
    });
  }

  initPageComponents(pageName, data) {
    initBeforeAfterSliders();
    initFAQAccordions();
    initCounterAnimations();
    initReviewSliders();
    if (pageName === "shop") initShopFilters();
    if (pageName === "product-detail") initProductDetail(data);
  }
}

// ============================================
// PAGE RENDERER
// ============================================
const PageRenderer = {
  // ========== HOME PAGE ==========
  home: () => `
        <section class="hero">
            <div class="hero-bg">
                <img src="https://picsum.photos/seed/herobg1/1920/1080" alt="Gym Interior" class="hero-bg-image">
                <div class="hero-bg-overlay"></div>
                <div class="hero-bg-gradient"></div>
            </div>
            <div class="hero-particles">
                ${Array.from({ length: 20 }, (_, i) => `<div class="hero-particle" style="left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 6}s;animation-duration:${4 + Math.random() * 4}s"></div>`).join("")}
            </div>
            <div class="container">
                <div class="hero-content">
                    <div class="hero-badge"><i class="fas fa-bolt"></i> Premium Fitness Studio</div>
                    <h1 class="hero-title">Forge Your<br><span class="accent-word">Strongest</span> Self</h1>
                    <p class="hero-subtitle">Where champions are built. World-class coaching, premium facilities, and a community that pushes you beyond limits. Your transformation starts here.</p>
                    <div class="hero-actions">
                        <a href="#/pricing" data-nav class="btn btn-primary btn-lg">Start Your Journey <i class="fas fa-arrow-right"></i></a>
                        <button class="btn btn-outline btn-lg" onclick="document.getElementById('fab-appointment').click()">Book Free Trial <i class="fas fa-calendar-check"></i></button>
                    </div>
                    <div class="hero-stats">
                        <div class="hero-stat">
                            <div class="hero-stat-number counter-value" data-target="2500">0</div>
                            <div class="hero-stat-label">Active Members</div>
                        </div>
                        <div class="hero-stat">
                            <div class="hero-stat-number counter-value" data-target="15">0</div>
                            <div class="hero-stat-label">Expert Coaches</div>
                        </div>
                        <div class="hero-stat">
                            <div class="hero-stat-number counter-value" data-target="98">0</div>
                            <div class="hero-stat-label">% Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-scroll-indicator">
                <span>Scroll</span>
                <div class="scroll-line"></div>
            </div>
        </section>

        <!-- Marquee -->
        <div class="marquee-section">
            <div class="marquee-track">
                ${Array(2)
                  .fill(
                    [
                      "STRENGTH",
                      "HIIT",
                      "YOGA",
                      "BOXING",
                      "CROSSFIT",
                      "PERSONAL TRAINING",
                      "NUTRITION",
                      "RECOVERY",
                    ]
                      .map(
                        (t) =>
                          `<span class="marquee-item">${t}<span class="accent-dot">◆</span></span>`,
                      )
                      .join(""),
                  )
                  .join("")}
            </div>
        </div>

        <!-- Features -->
        <section class="section" id="home-features">
            <div class="container">
                <div class="section-header reveal">
                    <span class="section-badge"><i class="fas fa-star"></i> Why Choose Us</span>
                    <h2 class="section-title">The H2O Singur <span class="text-accent">Difference</span></h2>
                    <p class="section-subtitle">More than a gym—we are a complete performance ecosystem designed to transform every aspect of your fitness.</p>
                </div>
                <div class="grid-3">
                    ${[
                      {
                        icon: "fas fa-crown",
                        title: "Premium Coaching",
                        desc: "Every trainer holds advanced certifications and 8+ years experience. No guesswork—just expert guidance.",
                      },
                      {
                        icon: "fas fa-robot",
                        title: "Smart Programming",
                        desc: "AI-powered training programs that adapt to your progress, ensuring continuous improvement without plateaus.",
                      },
                      {
                        icon: "fas fa-chart-line",
                        title: "Progress Tracking",
                        desc: "Real-time performance analytics, body composition monitoring, and visual progress tracking through our app.",
                      },
                      {
                        icon: "fas fa-users",
                        title: "Elite Community",
                        desc: "Surround yourself with driven individuals who elevate your standards. Our community trains together, grows together.",
                      },
                      {
                        icon: "fas fa-apple-alt",
                        title: "Nutrition Lab",
                        desc: "In-house nutritionist, meal prep workshops, and supplement guidance to fuel your transformation from the inside out.",
                      },
                      {
                        icon: "fas fa-shield-alt",
                        title: "Recovery Suite",
                        desc: "Cryotherapy, infrared sauna, massage therapy, and mobility sessions to optimize your body between workouts.",
                      },
                    ]
                      .map(
                        (f, i) => `
                        <div class="feature-card reveal stagger-${(i % 6) + 1}">
                            <div class="feature-icon"><i class="${f.icon}"></i></div>
                            <h3 class="feature-title">${f.title}</h3>
                            <p class="feature-desc">${f.desc}</p>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
        </section>

        <!-- Programs Showcase -->
        <section class="section" style="background:var(--bg-secondary)">
            <div class="container">
                <div class="section-header reveal">
                    <span class="section-badge"><i class="fas fa-fire"></i> Our Programs</span>
                    <h2 class="section-title">Train With <span class="text-accent">Purpose</span></h2>
                    <p class="section-subtitle">Specialized programs designed by experts, proven by results. Find the one that matches your goals.</p>
                </div>
                <div class="programs-scroll">
                    ${PROGRAMS.map(
                      (p) => `
                        <a href="#/programs/${p.id}" data-nav class="program-card premium-card reveal">
                            <div class="card-image">
                                <img src="${p.image}" alt="${p.name}" loading="lazy">
                                <div class="card-image-overlay"></div>
                            </div>
                            <div class="card-body">
                                <span class="card-tag"><i class="${p.icon}"></i> ${p.category}</span>
                                <h3 class="card-title">${p.name}</h3>
                                <p class="card-text">${p.shortDesc}</p>
                                <div class="program-card-features">
                                    <span class="program-card-feature"><i class="fas fa-circle"></i> ${p.duration}</span>
                                    <span class="program-card-feature"><i class="fas fa-circle"></i> ${p.frequency}</span>
                                    <span class="program-card-feature"><i class="fas fa-circle"></i> ${p.level}</span>
                                </div>
                            </div>
                        </a>
                    `,
                    ).join("")}
                </div>
                <div style="text-align:center;margin-top:var(--space-2xl)" class="reveal">
                    <a href="#/programs" data-nav class="btn btn-outline-accent">View All Programs <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </section>

        <!-- Stats Counter -->
        <section class="stats-section">
            <div class="container">
                <div class="stats-grid">
                    ${[
                      { value: 2500, suffix: "+", label: "Active Members" },
                      {
                        value: 15000,
                        suffix: "+",
                        label: "Sessions Completed",
                      },
                      { value: 98, suffix: "%", label: "Client Satisfaction" },
                      { value: 500, suffix: "+", label: "Transformations" },
                    ]
                      .map(
                        (s) => `
                        <div class="stat-item reveal">
                            <div class="stat-number counter-value" data-target="${s.value}" data-suffix="${s.suffix}">0</div>
                            <div class="stat-label">${s.label}</div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
        </section>

        <!-- Before/After Transformations Preview -->
        <section class="section">
            <div class="container">
                <div class="section-header reveal">
                    <span class="section-badge"><i class="fas fa-exchange-alt"></i> Real Results</span>
                    <h2 class="section-title">Proven <span class="text-accent">Transformations</span></h2>
                    <p class="section-subtitle">Slide to see the incredible changes our members have achieved. Real people, real results.</p>
                </div>
                <div class="transformation-grid">
                    ${TRANSFORMATIONS.slice(0, 2)
                      .map(
                        (t) => `
                        <div class="reveal">
                            <div class="transformation-slider" data-slider>
                                <div class="ba-layer ba-before"><img src="${t.beforeImage}" alt="Before"></div>
                                <div class="ba-layer ba-after"><img src="${t.afterImage}" alt="After"></div>
                                <div class="ba-divider"><div class="ba-divider-handle"><i class="fas fa-arrows-alt-h"></i></div></div>
                                <span class="ba-label ba-label-before">Before</span>
                                <span class="ba-label ba-label-after">After</span>
                            </div>
                            <div class="transformation-detail-card" style="margin-top:var(--space-lg)">
                                <div class="transformation-detail-body">
                                    <h3 class="transformation-detail-name">${t.name}</h3>
                                    <span class="transformation-detail-duration"><i class="fas fa-clock"></i> ${t.duration} Transformation</span>
                                    <div class="transformation-detail-stats">
                                        <div class="transformation-stat">
                                            <div class="transformation-stat-value">${t.weightBefore}</div>
                                            <div class="transformation-stat-label">Before</div>
                                        </div>
                                        <div class="transformation-stat">
                                            <div class="transformation-stat-value">${t.weightAfter}</div>
                                            <div class="transformation-stat-label">After</div>
                                        </div>
                                        <div class="transformation-stat">
                                            <div class="transformation-stat-value">${t.bodyFatBefore} → ${t.bodyFatAfter}</div>
                                            <div class="transformation-stat-label">Body Fat</div>
                                        </div>
                                    </div>
                                    <blockquote class="transformation-quote">"${t.quote}"</blockquote>
                                </div>
                            </div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
                <div style="text-align:center;margin-top:var(--space-2xl)" class="reveal">
                    <a href="#/transformations" data-nav class="btn btn-outline-accent">See All Transformations <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </section>

        <!-- Google Reviews -->
        <section class="section reviews-section" style="background:var(--bg-secondary)">
            <div class="container">
                <div class="section-header reveal">
                    <span class="section-badge"><i class="fas fa-star"></i> Testimonials</span>
                    <h2 class="section-title">What Members <span class="text-accent">Say</span></h2>
                    <p class="section-subtitle">Real reviews from real members who have experienced the H2O Singur difference.</p>
                </div>
                <div class="google-rating-summary reveal">
                    <div class="google-rating-score">
                        <div class="google-rating-logo"><i class="fab fa-google"></i> Google Reviews</div>
                        <div class="google-rating-number">4.9</div>
                        <div class="google-rating-stars">${'<i class="fas fa-star"></i>'.repeat(5)}</div>
                        <div class="google-rating-count">Based on 847 reviews</div>
                    </div>
                    <div class="google-rating-bars">
                        ${[
                          { stars: 5, percent: 82 },
                          { stars: 4, percent: 12 },
                          { stars: 3, percent: 4 },
                          { stars: 2, percent: 1 },
                          { stars: 1, percent: 1 },
                        ]
                          .map(
                            (b) => `
                            <div class="google-rating-bar-row">
                                <span class="google-rating-bar-label">${b.stars}</span>
                                <i class="fas fa-star" style="color:var(--star-color);font-size:10px"></i>
                                <div class="google-rating-bar-track"><div class="google-rating-bar-fill" style="width:${b.percent}%"></div></div>
                                <span class="google-rating-bar-percent">${b.percent}%</span>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
                <div class="reviews-slider" id="home-reviews-slider">
                    ${REVIEWS.map(
                      (r) => `
                        <div class="review-card reveal">
                            <div class="review-header">
                                <img src="${r.avatar}" alt="${r.name}" class="review-avatar" loading="lazy">
                                <div>
                                    <div class="review-author">${r.name}</div>
                                    <div class="review-date">${r.date}</div>
                                </div>
                                <svg class="review-google-icon" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                            </div>
                            <div class="review-stars">${'<i class="fas fa-star"></i>'.repeat(r.rating)}${'<i class="far fa-star"></i>'.repeat(5 - r.rating)}</div>
                            <p class="review-text">${r.text}</p>
                        </div>
                    `,
                    ).join("")}
                </div>
                <div class="reviews-nav">
                    <button class="reviews-nav-btn" id="reviews-prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
                    <div class="reviews-dots" id="reviews-dots">
                        ${REVIEWS.map((_, i) => `<span class="reviews-dot ${i === 0 ? "active" : ""}" data-index="${i}"></span>`).join("")}
                    </div>
                    <button class="reviews-nav-btn" id="reviews-next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="section cta-section">
            <div class="container">
                <div class="cta-inner reveal">
                    <h2 class="cta-title">Ready to <span class="text-accent">Transform?</span></h2>
                    <p class="cta-text">Join thousands who have already changed their lives. Your first week is free—no commitments, no excuses.</p>
                    <div class="cta-actions">
                        <a href="#/pricing" data-nav class="btn btn-primary btn-lg">View Plans <i class="fas fa-arrow-right"></i></a>
                        <button class="btn btn-outline btn-lg" onclick="document.getElementById('fab-appointment').click()">Book Free Trial</button>
                    </div>
                </div>
            </div>
        </section>
    `,

  // ========== ABOUT PAGE ==========
  about: () => `
        <div class="page-header">
            <div class="container">
                <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><span>About</span></div>
                <h1 class="page-title">Our <span class="text-accent">Story</span></h1>
                <p class="page-subtitle">Built by athletes, for athletes. Discover the passion and purpose behind H2O Singur.</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="about-story">
                    <div class="about-story-image reveal-left">
                        <img src="https://picsum.photos/seed/about1/800/600" alt="Our Story" loading="lazy">
                    </div>
                    <div class="reveal-right">
                        <span class="section-badge"><i class="fas fa-book-open"></i> Our Journey</span>
                        <h2 style="font-family:var(--font-display);font-size:var(--font-size-4xl);font-weight:700;margin-bottom:var(--space-lg);line-height:var(--line-height-tight)">Founded on <span class="text-accent">Discipline</span></h2>
                        <p style="color:var(--text-secondary);line-height:var(--line-height-relaxed);margin-bottom:var(--space-lg)">H2O Singur was born in 2018 from a simple belief: that everyone deserves access to world-class fitness coaching and facilities. Our founders, former competitive athletes themselves, were frustrated by the gap between commercial gyms and elite performance centers.</p>
                        <p style="color:var(--text-secondary);line-height:var(--line-height-relaxed);margin-bottom:var(--space-lg)">They envisioned a space where a complete beginner and a professional athlete could train side by side, each receiving the same level of expert guidance and personalized attention. That vision became H2O Singur.</p>
                        <p style="color:var(--text-secondary);line-height:var(--line-height-relaxed);margin-bottom:var(--space-xl)">Today, we are proud to have helped over 2,500 members transform their bodies, minds, and lives. But our mission remains the same: to forge the strongest version of every person who walks through our doors.</p>
                        <div class="spotlight-list">
                            ${[
                              {
                                icon: "fas fa-bullseye",
                                title: "Our Mission",
                                text: "To provide the most effective, science-backed training in an environment that inspires excellence.",
                              },
                              {
                                icon: "fas fa-eye",
                                title: "Our Vision",
                                text: "To be the global standard for what a premium fitness experience looks and feels like.",
                              },
                              {
                                icon: "fas fa-heart",
                                title: "Our Values",
                                text: "Discipline, integrity, community, and relentless pursuit of improvement guide everything we do.",
                              },
                            ]
                              .map(
                                (v) => `
                                <div class="spotlight-list-item">
                                    <div class="spotlight-list-icon"><i class="${v.icon}"></i></div>
                                    <div class="spotlight-list-text"><strong>${v.title}</strong>${v.text}</div>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section" style="background:var(--bg-secondary)">
            <div class="container">
                <div class="section-header reveal">
                    <span class="section-badge"><i class="fas fa-gem"></i> Core Values</span>
                    <h2 class="section-title">What Drives <span class="text-accent">Us</span></h2>
                </div>
                <div class="about-values-grid">
                    ${[
                      {
                        icon: "fas fa-fist-raised",
                        title: "Discipline",
                        desc: "Consistency over motivation. We show up every day and put in the work, no excuses.",
                      },
                      {
                        icon: "fas fa-handshake",
                        title: "Integrity",
                        desc: "We do the right thing, even when no one is watching. Honest coaching, honest results.",
                      },
                      {
                        icon: "fas fa-users",
                        title: "Community",
                        desc: "Together we are stronger. Every member lifts up those around them.",
                      },
                      {
                        icon: "fas fa-flask",
                        title: "Innovation",
                        desc: "We stay at the cutting edge of fitness science and constantly evolve our methods.",
                      },
                      {
                        icon: "fas fa-trophy",
                        title: "Excellence",
                        desc: "Good enough is never enough. We pursue the highest standard in everything we do.",
                      },
                      {
                        icon: "fas fa-seedling",
                        title: "Growth",
                        desc: "We believe in the infinite potential of every human being to improve and transform.",
                      },
                    ]
                      .map(
                        (v, i) => `
                        <div class="value-card reveal stagger-${(i % 6) + 1}">
                            <div class="value-icon"><i class="${v.icon}"></i></div>
                            <h3 class="value-title">${v.title}</h3>
                            <p class="value-desc">${v.desc}</p>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
        </section>

        <!-- Team -->
        <section class="section">
            <div class="container">
                <div class="section-header reveal">
                    <span class="section-badge"><i class="fas fa-users"></i> Our Team</span>
                    <h2 class="section-title">Meet the <span class="text-accent">Coaches</span></h2>
                    <p class="section-subtitle">World-class trainers dedicated to helping you achieve your personal best.</p>
                </div>
                <div class="grid-3">
                    ${TRAINERS.map(
                      (t, i) => `
                        <div class="trainer-card reveal stagger-${(i % 6) + 1}">
                            <div class="trainer-image">
                                <img src="${t.image}" alt="${t.name}" loading="lazy">
                                <div class="trainer-social-overlay">
                                    <a href="#" class="trainer-social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                                    <a href="#" class="trainer-social-link" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="trainer-info">
                                <h3 class="trainer-name">${t.name}</h3>
                                <span class="trainer-role">${t.role}</span>
                                <p class="trainer-desc">${t.bio}</p>
                            </div>
                        </div>
                    `,
                    ).join("")}
                </div>
            </div>
        </section>

        <!-- Timeline -->
        <section class="section" style="background:var(--bg-secondary)">
            <div class="container">
                <div class="section-header reveal">
                    <span class="section-badge"><i class="fas fa-history"></i> Our Journey</span>
                    <h2 class="section-title">Milestones</h2>
                </div>
                <div style="max-width:700px;margin:0 auto">
                    <div class="timeline reveal">
                        ${[
                          {
                            date: "2018",
                            title: "The Beginning",
                            desc: "H2O Singur opens its doors with 5 coaches and a mission to redefine fitness.",
                          },
                          {
                            date: "2019",
                            title: "First 500 Members",
                            desc: "Reached 500 active members within the first year, surpassing all projections.",
                          },
                          {
                            date: "2020",
                            title: "Digital Launch",
                            desc: "Launched online coaching platform, keeping our community connected through challenging times.",
                          },
                          {
                            date: "2021",
                            title: "Facility Expansion",
                            desc: "Doubled our training floor space and added dedicated recovery suite.",
                          },
                          {
                            date: "2022",
                            title: "2,000 Members",
                            desc: "Hit the 2,000 member milestone with a 97% retention rate.",
                          },
                          {
                            date: "2023",
                            title: "Award Winning",
                            desc: 'Named "Best Premium Fitness Studio" by Fitness Industry Awards.',
                          },
                          {
                            date: "2024",
                            title: "Franchise Launch",
                            desc: "Opening second location and launching our certified coach training program.",
                          },
                        ]
                          .map(
                            (m) => `
                            <div class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-date">${m.date}</div>
                                <h3 class="timeline-title">${m.title}</h3>
                                <p class="timeline-desc">${m.desc}</p>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        </section>
    `,

  // ========== PROGRAMS PAGE ==========
  programs: (data) => `
        <div class="page-header">
            <div class="container">
                <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><span>Programs</span></div>
                <h1 class="page-title">Our <span class="text-accent">Programs</span></h1>
                <p class="page-subtitle">Expert-designed training programs for every goal and fitness level.</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="tab-nav" id="program-tabs">
                    <button class="tab-btn active" data-filter="all">All Programs</button>
                    <button class="tab-btn" data-filter="strength">Strength</button>
                    <button class="tab-btn" data-filter="cardio">Cardio</button>
                    <button class="tab-btn" data-filter="yoga">Yoga</button>
                    <button class="tab-btn" data-filter="boxing">Boxing</button>
                    <button class="tab-btn" data-filter="crossfit">CrossFit</button>
                    <button class="tab-btn" data-filter="personal">Personal</button>
                </div>
                <div class="grid-3" id="programs-grid">
                    ${PROGRAMS.map(
                      (p, i) => `
                        <a href="#/programs/${p.id}" data-nav class="program-card premium-card reveal stagger-${(i % 6) + 1}" data-category="${p.category}">
                            <div class="card-image">
                                <img src="${p.image}" alt="${p.name}" loading="lazy">
                                <div class="card-image-overlay"></div>
                            </div>
                            <div class="card-body">
                                <span class="card-tag"><i class="${p.icon}"></i> ${p.category}</span>
                                <h3 class="card-title">${p.name}</h3>
                                <p class="card-text">${p.shortDesc}</p>
                                <div class="program-card-features">
                                    <span class="program-card-feature"><i class="fas fa-circle"></i> ${p.duration}</span>
                                    <span class="program-card-feature"><i class="fas fa-circle"></i> ${p.frequency}</span>
                                    <span class="program-card-feature"><i class="fas fa-circle"></i> ${p.level}</span>
                                </div>
                            </div>
                        </a>
                    `,
                    ).join("")}
                </div>
            </div>
        </section>
    `,

  // ========== PROGRAM DETAIL PAGE ==========
  "program-detail": (data) => {
    const p = data.program;
    return `
            <div class="page-header">
                <div class="container">
                    <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><a href="#/programs" data-nav>Programs</a><span class="separator">/</span><span>${p.name}</span></div>
                    <h1 class="page-title">${p.name}</h1>
                </div>
            </div>
            <section class="section">
                <div class="container">
                    <div class="program-detail-hero">
                        <div class="program-detail-image reveal-left">
                            <img src="${p.image}" alt="${p.name}" loading="lazy">
                        </div>
                        <div class="program-detail-info reveal-right">
                            <span class="section-badge"><i class="${p.icon}"></i> ${p.category}</span>
                            <div class="program-detail-meta">
                                <span class="program-meta-item"><i class="fas fa-clock"></i> ${p.duration}</span>
                                <span class="program-meta-item"><i class="fas fa-calendar-alt"></i> ${p.frequency}</span>
                                <span class="program-meta-item"><i class="fas fa-signal"></i> ${p.level}</span>
                            </div>
                            <p class="program-detail-desc">${p.description}</p>
                            <div class="program-highlights">
                                ${p.features.map((f) => `<span class="program-highlight"><i class="fas fa-check-circle"></i> ${f}</span>`).join("")}
                            </div>
                            <div style="display:flex;gap:var(--space-lg);flex-wrap:wrap;margin-top:var(--space-xl)">
                                <button class="btn btn-primary btn-lg" onclick="document.getElementById('fab-appointment').click()">Enroll Now <i class="fas fa-arrow-right"></i></button>
                                <a href="#/pricing" data-nav class="btn btn-outline btn-lg">View Pricing</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section cta-section">
                <div class="container"><div class="cta-inner reveal">
                    <h2 class="cta-title">Ready to Start <span class="text-accent">${p.name}</span>?</h2>
                    <p class="cta-text">Book a free consultation with one of our coaches to discuss if this program is right for you.</p>
                    <div class="cta-actions"><button class="btn btn-primary btn-lg" onclick="document.getElementById('fab-appointment').click()">Book Free Consultation</button></div>
                </div></div>
            </section>
        `;
  },

  // ========== TRAINERS PAGE ==========
  trainers: () => `
        <div class="page-header">
            <div class="container">
                <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><span>Trainers</span></div>
                <h1 class="page-title">Expert <span class="text-accent">Coaches</span></h1>
                <p class="page-subtitle">Meet the team that will push you beyond your limits.</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="grid-3">
                    ${TRAINERS.map(
                      (t, i) => `
                        <div class="trainer-card reveal stagger-${(i % 6) + 1}">
                            <div class="trainer-image">
                                <img src="${t.image}" alt="${t.name}" loading="lazy">
                                <div class="trainer-social-overlay">
                                    <a href="#" class="trainer-social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                                    <a href="#" class="trainer-social-link" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="trainer-info">
                                <h3 class="trainer-name">${t.name}</h3>
                                <span class="trainer-role">${t.role}</span>
                                <p class="trainer-desc" style="margin-bottom:var(--space-md)">${t.bio}</p>
                                <div style="display:flex;flex-wrap:wrap;gap:var(--space-xs)">
                                    ${t.specializations.map((s) => `<span class="tag">${s}</span>`).join("")}
                                </div>
                                <p style="font-size:var(--font-size-sm);color:var(--text-tertiary);margin-top:var(--space-sm)"><i class="fas fa-award" style="color:var(--accent)"></i> ${t.experience} experience</p>
                            </div>
                        </div>
                    `,
                    ).join("")}
                </div>
            </div>
        </section>
    `,

  // ========== TRANSFORMATIONS PAGE ==========
  transformations: () => `
        <div class="page-header">
            <div class="container">
                <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><span>Transformations</span></div>
                <h1 class="page-title">Real <span class="text-accent">Results</span></h1>
                <p class="page-subtitle">See the incredible transformations achieved by our members.</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="transformation-grid">
                    ${TRANSFORMATIONS.map(
                      (t, i) => `
                        <div class="reveal stagger-${(i % 4) + 1}">
                            <div class="transformation-slider" data-slider>
                                <div class="ba-layer ba-before"><img src="${t.beforeImage}" alt="Before ${t.name}"></div>
                                <div class="ba-layer ba-after"><img src="${t.afterImage}" alt="After ${t.name}"></div>
                                <div class="ba-divider"><div class="ba-divider-handle"><i class="fas fa-arrows-alt-h"></i></div></div>
                                <span class="ba-label ba-label-before">Before</span>
                                <span class="ba-label ba-label-after">After</span>
                            </div>
                            <div class="transformation-detail-card" style="margin-top:var(--space-lg)">
                                <div class="transformation-detail-body">
                                    <h3 class="transformation-detail-name">${t.name}</h3>
                                    <span class="transformation-detail-duration"><i class="fas fa-clock"></i> ${t.duration} Transformation</span>
                                    <div class="transformation-detail-stats">
                                        <div class="transformation-stat">
                                            <div class="transformation-stat-value">${t.weightBefore}</div>
                                            <div class="transformation-stat-label">Before Weight</div>
                                        </div>
                                        <div class="transformation-stat">
                                            <div class="transformation-stat-value">${t.weightAfter}</div>
                                            <div class="transformation-stat-label">After Weight</div>
                                        </div>
                                        <div class="transformation-stat">
                                            <div class="transformation-stat-value">${t.bodyFatBefore} → ${t.bodyFatAfter}</div>
                                            <div class="transformation-stat-label">Body Fat</div>
                                        </div>
                                    </div>
                                    <blockquote class="transformation-quote">"${t.quote}"</blockquote>
                                </div>
                            </div>
                        </div>
                    `,
                    ).join("")}
                </div>
            </div>
        </section>
        <section class="section cta-section">
            <div class="container"><div class="cta-inner reveal">
                <h2 class="cta-title">Start Your <span class="text-accent">Transformation</span></h2>
                <p class="cta-text">Your before photo is just the beginning. Let us help you write your after story.</p>
                <div class="cta-actions"><button class="btn btn-primary btn-lg" onclick="document.getElementById('fab-appointment').click()">Book Free Consultation</button></div>
            </div></div>
        </section>
    `,

  // ========== PRICING PAGE ==========
  pricing: () => `
        <div class="page-header">
            <div class="container">
                <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><span>Pricing</span></div>
                <h1 class="page-title">Membership <span class="text-accent">Plans</span></h1>
                <p class="page-subtitle">Invest in yourself. Choose the plan that matches your commitment level.</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="pricing-grid">
                    ${[
                      {
                        tier: "Starter",
                        name: "Starter Membership",
                        price: "49",
                        period: "/month",
                        features: [
                          { text: "Unlimited group classes", included: true },
                          { text: "Open gym access", included: true },
                          {
                            text: "Initial fitness assessment",
                            included: true,
                          },
                          { text: "Basic training program", included: true },
                          { text: "Member app access", included: true },
                          {
                            text: "Personal training sessions",
                            included: false,
                          },
                          { text: "Nutrition coaching", included: false },
                          { text: "Recovery suite access", included: false },
                        ],
                      },
                      {
                        tier: "Premium",
                        name: "Premium Membership",
                        price: "99",
                        period: "/month",
                        featured: true,
                        features: [
                          { text: "Everything in Starter", included: true },
                          {
                            text: "4 personal training sessions/month",
                            included: true,
                          },
                          { text: "Custom training program", included: true },
                          { text: "Nutrition guidance", included: true },
                          {
                            text: "Recovery suite access (3x/week)",
                            included: true,
                          },
                          { text: "Priority class booking", included: true },
                          { text: "Exclusive workshops", included: true },
                          { text: "24/7 gym access", included: false },
                        ],
                      },
                      {
                        tier: "Elite",
                        name: "Elite Membership",
                        price: "149",
                        period: "/month",
                        features: [
                          { text: "Everything in Premium", included: true },
                          {
                            text: "Unlimited personal training",
                            included: true,
                          },
                          { text: "Full nutrition coaching", included: true },
                          { text: "Unlimited recovery suite", included: true },
                          { text: "24/7 gym access", included: true },
                          { text: "Guest passes (2/month)", included: true },
                          { text: "Exclusive member events", included: true },
                          { text: "24/7 coach support", included: true },
                        ],
                      },
                    ]
                      .map(
                        (plan) => `
                        <div class="pricing-card ${plan.featured ? "featured" : ""} reveal">
                            ${plan.featured ? '<span class="pricing-popular-badge">Popular</span>' : ""}
                            <span class="pricing-tier">${plan.tier}</span>
                            <h3 class="pricing-name">${plan.name}</h3>
                            <div class="pricing-amount">
                                <span class="pricing-currency">$</span><span class="pricing-value">${plan.price}</span><span class="pricing-period">${plan.period}</span>
                            </div>
                            <div class="pricing-features">
                                ${plan.features
                                  .map(
                                    (f) => `
                                    <div class="pricing-feature ${f.included ? "" : "disabled"}">
                                        <i class="fas ${f.included ? "fa-check" : "fa-times"}"></i>
                                        <span>${f.text}</span>
                                    </div>
                                `,
                                  )
                                  .join("")}
                            </div>
                            <button class="btn ${plan.featured ? "btn-primary" : "btn-outline-accent"} btn-lg" style="width:100%" onclick="document.getElementById('fab-appointment').click()">Get Started</button>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
        </section>
        <section class="section" style="background:var(--bg-secondary)">
            <div class="container" style="text-align:center;max-width:700px">
                <div class="reveal">
                    <h2 style="font-family:var(--font-display);font-size:var(--font-size-3xl);font-weight:700;margin-bottom:var(--space-lg)">Frequently Asked <span class="text-accent">Questions</span></h2>
                    <div class="faq-list">
                        ${FAQS.slice(0, 5)
                          .map(
                            (f) => `
                            <div class="faq-item">
                                <button class="faq-question"><span>${f.question}</span><i class="fas fa-chevron-down"></i></button>
                                <div class="faq-answer"><div class="faq-answer-inner">${f.answer}</div></div>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                    <a href="#/faq" data-nav class="btn btn-outline-accent" style="margin-top:var(--space-xl)">View All FAQs <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </section>
    `,

  // ========== SHOP PAGE ==========
  shop: () => `
        <div class="page-header">
            <div class="container">
                <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><span>Shop</span></div>
                <h1 class="page-title">Elite <span class="text-accent">Shop</span></h1>
                <p class="page-subtitle">Premium supplements, apparel, and accessories for serious athletes.</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <button class="mobile-filter-toggle" id="mobile-filter-toggle"><i class="fas fa-filter"></i> Filters</button>
                <div class="shop-layout">
                    <aside class="shop-filters" id="shop-filters">
                        <h4 style="font-weight:700;margin-bottom:var(--space-xl);display:flex;align-items:center;justify-content:space-between">Filters <button id="filter-close" style="display:none;color:var(--accent);font-size:var(--font-size-lg)"><i class="fas fa-times"></i></button></h4>
                        <div class="filter-group">
                            <h5 class="filter-title">Category</h5>
                            ${[
                              "protein",
                              "supplements",
                              "apparel",
                              "accessories",
                            ]
                              .map(
                                (c) => `
                                <div class="filter-option active" data-filter-type="category" data-filter-value="${c}">
                                    <span class="filter-checkbox"></span>
                                    <span>${c.charAt(0).toUpperCase() + c.slice(1)}</span>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                        <div class="filter-group">
                            <h5 class="filter-title">Price Range</h5>
                            <div class="price-range-slider">
                                <input type="range" class="price-range-input" id="price-range" min="0" max="100" value="100">
                                <div class="price-range-labels"><span>$0</span><span id="price-range-display">$100</span></div>
                            </div>
                        </div>
                        <div class="filter-group">
                            <h5 class="filter-title">Rating</h5>
                            ${[4, 3, 2]
                              .map(
                                (r) => `
                                <div class="filter-option active" data-filter-type="rating" data-filter-value="${r}">
                                    <span class="filter-checkbox"></span>
                                    <span>${r}+ Stars ${'<i class="fas fa-star" style="color:var(--star-color);font-size:10px"></i>'.repeat(1)}</span>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                        <button class="btn btn-outline-accent btn-sm" style="width:100%;margin-top:var(--space-md)" id="reset-filters">Reset Filters</button>
                    </aside>
                    <div class="shop-main">
                        <div class="shop-toolbar">
                            <span class="shop-results-count" id="shop-results-count">${PRODUCTS.length} products</span>
                            <div class="shop-sort">
                                <select id="shop-sort-select">
                                    <option value="featured">Featured</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                    <option value="name">Name A-Z</option>
                                </select>
                            </div>
                        </div>
                        <div class="product-grid" id="product-grid">
                            ${PRODUCTS.map((p) => renderProductCard(p)).join("")}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

  // ========== PRODUCT DETAIL PAGE ==========
  "product-detail": (data) => {
    const p = data.product;
    return `
            <div class="page-header">
                <div class="container">
                    <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><a href="#/shop" data-nav>Shop</a><span class="separator">/</span><span>${p.name}</span></div>
                </div>
            </div>
            <section class="section">
                <div class="container">
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-3xl);align-items:start">
                        <div class="reveal-left">
                            <div style="aspect-ratio:1;border-radius:var(--radius-lg);overflow:hidden;background:var(--bg-tertiary)">
                                <img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover" loading="lazy">
                            </div>
                        </div>
                        <div class="reveal-right">
                            <span class="card-tag">${p.category}</span>
                            <h1 style="font-family:var(--font-display);font-size:var(--font-size-4xl);font-weight:700;margin:var(--space-md) 0">${p.name}</h1>
                            <div style="display:flex;align-items:center;gap:var(--space-md);margin-bottom:var(--space-lg)">
                                <div class="product-rating"><span class="stars">${'<i class="fas fa-star"></i>'.repeat(Math.floor(p.rating))}${p.rating % 1 ? '<i class="fas fa-star-half-alt"></i>' : ""}</span> ${p.rating} (${p.reviews} reviews)</div>
                            </div>
                            <div class="product-price" style="margin-bottom:var(--space-xl)">
                                <span class="product-price-current" style="font-size:var(--font-size-3xl)">$${p.price.toFixed(2)}</span>
                                ${p.originalPrice ? `<span class="product-price-original" style="font-size:var(--font-size-xl)">$${p.originalPrice.toFixed(2)}</span>` : ""}
                            </div>
                            <p style="color:var(--text-secondary);line-height:var(--line-height-relaxed);margin-bottom:var(--space-xl)">${p.description}</p>
                            ${
                              p.sizes.length
                                ? `
                                <div style="margin-bottom:var(--space-lg)">
                                    <label style="font-weight:600;display:block;margin-bottom:var(--space-sm)">Size</label>
                                    <div style="display:flex;gap:var(--space-sm);flex-wrap:wrap">
                                        ${p.sizes.map((s, i) => `<button class="btn ${i === 0 ? "btn-outline-accent" : "btn-outline"} btn-sm product-size-btn" data-size="${s}">${s}</button>`).join("")}
                                    </div>
                                </div>
                            `
                                : ""
                            }
                            ${
                              p.flavors.length
                                ? `
                                <div style="margin-bottom:var(--space-lg)">
                                    <label style="font-weight:600;display:block;margin-bottom:var(--space-sm)">Flavor</label>
                                    <div style="display:flex;gap:var(--space-sm);flex-wrap:wrap">
                                        ${p.flavors.map((f, i) => `<button class="btn ${i === 0 ? "btn-outline-accent" : "btn-outline"} btn-sm product-flavor-btn" data-flavor="${f}">${f}</button>`).join("")}
                                    </div>
                                </div>
                            `
                                : ""
                            }
                            <div class="quickview-qty" style="margin-bottom:var(--space-xl)">
                                <button class="qty-btn" onclick="changeDetailQty(-1)">−</button>
                                <span class="qty-value" id="detail-qty">1</span>
                                <button class="qty-btn" onclick="changeDetailQty(1)">+</button>
                            </div>
                            <div style="display:flex;gap:var(--space-md);flex-wrap:wrap">
                                <button class="btn btn-primary btn-lg" onclick="addToCartFromDetail(${p.id})"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
                                <button class="btn btn-outline btn-lg" onclick="buyNowWhatsApp(${p.id})"><i class="fab fa-whatsapp"></i> Buy via WhatsApp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
  },

  // ========== BLOG PAGE ==========
  blog: () => `
        <div class="page-header">
            <div class="container">
                <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><span>Blog</span></div>
                <h1 class="page-title">Fitness <span class="text-accent">Insights</span></h1>
                <p class="page-subtitle">Expert articles on training, nutrition, mindset, and performance optimization.</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="blog-grid">
                    ${BLOG_POSTS.map(
                      (post, i) => `
                        <a href="#/${post.id}" data-nav class="blog-card reveal stagger-${(i % 3) + 1}">
                            <div class="blog-card-image">
                                <img src="${post.image}" alt="${post.title}" loading="lazy">
                            </div>
                            <div class="blog-card-body">
                                <div class="blog-card-meta">
                                    <span><i class="fas fa-tag"></i> ${post.category}</span>
                                    <span><i class="fas fa-clock"></i> ${post.readTime}</span>
                                </div>
                                <h3 class="blog-card-title">${post.title}</h3>
                                <p class="blog-card-excerpt">${post.excerpt}</p>
                                <span class="blog-card-link">Read More <i class="fas fa-arrow-right"></i></span>
                            </div>
                        </a>
                    `,
                    ).join("")}
                </div>
            </div>
        </section>
    `,

  // ========== BLOG DETAIL PAGE ==========
  "blog-detail": (data) => {
    const post = data.post;
    return `
            <div class="blog-detail">
                <div class="page-breadcrumb" style="padding-top:var(--space-xl)"><a href="#/home" data-nav>Home</a><span class="separator">/</span><a href="#/blog" data-nav>Blog</a><span class="separator">/</span><span>${post.title}</span></div>
                <div class="blog-detail-hero reveal-scale">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                </div>
                <div class="blog-detail-meta reveal">
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                    <span><i class="fas fa-calendar"></i> ${post.date}</span>
                    <span><i class="fas fa-clock"></i> ${post.readTime}</span>
                    <span><i class="fas fa-tag"></i> ${post.category}</span>
                </div>
                <h1 class="blog-detail-title reveal">${post.title}</h1>
                <div class="blog-detail-content reveal">${post.content}</div>
                <div style="margin-top:var(--space-3xl);padding-top:var(--space-2xl);border-top:1px solid var(--border-primary)" class="reveal">
                    <a href="#/blog" data-nav class="btn btn-outline-accent"><i class="fas fa-arrow-left"></i> Back to Blog</a>
                </div>
            </div>
        `;
  },

  // ========== CLASSES PAGE ==========
  classes: () => `
        <div class="page-header">
            <div class="container">
                <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><span>Classes</span></div>
                <h1 class="page-title">Group <span class="text-accent">Classes</span></h1>
                <p class="page-subtitle">High-energy group sessions led by expert coaches.</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                ${PROGRAMS.map(
                  (p) => `
                    <div class="class-card reveal">
                        <div class="class-card-image">
                            <img src="${p.image}" alt="${p.name}" loading="lazy">
                        </div>
                        <div class="class-card-body">
                            <div class="class-card-meta">
                                <span><i class="fas fa-clock"></i> ${p.duration}</span>
                                <span><i class="fas fa-calendar-alt"></i> ${p.frequency}</span>
                                <span><i class="fas fa-signal"></i> ${p.level}</span>
                            </div>
                            <h3 class="class-card-title">${p.name}</h3>
                            <p class="class-card-desc">${p.shortDesc}</p>
                            <div style="margin-top:var(--space-lg)"><a href="#/programs/${p.id}" data-nav class="btn btn-outline-accent btn-sm">Learn More <i class="fas fa-arrow-right"></i></a></div>
                        </div>
                    </div>
                `,
                ).join("")}
            </div>
        </section>
    `,

  // ========== SCHEDULE PAGE ==========
  schedule: () => `
        <div class="page-header">
            <div class="container">
                <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><span>Schedule</span></div>
                <h1 class="page-title">Class <span class="text-accent">Schedule</span></h1>
                <p class="page-subtitle">Plan your week with our complete class timetable.</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="schedule-filters">
                    <button class="schedule-filter-btn active" data-day="all">All Days</button>
                    <button class="schedule-filter-btn" data-day="Mon">Monday</button>
                    <button class="schedule-filter-btn" data-day="Tue">Tuesday</button>
                    <button class="schedule-filter-btn" data-day="Wed">Wednesday</button>
                    <button class="schedule-filter-btn" data-day="Thu">Thursday</button>
                    <button class="schedule-filter-btn" data-day="Fri">Friday</button>
                    <button class="schedule-filter-btn" data-day="Sat">Saturday</button>
                </div>
                <div class="schedule-table-wrap">
                    <table class="schedule-table">
                        <thead><tr><th>Time</th><th>Class</th><th>Trainer</th><th>Day(s)</th><th>Duration</th><th>Availability</th></tr></thead>
                        <tbody>
                            ${SCHEDULE_DATA.map(
                              (s) => `
                                <tr data-day="${s.day}">
                                    <td><strong>${s.time}</strong></td>
                                    <td class="schedule-class-name">${s.class}</td>
                                    <td class="schedule-trainer">${s.trainer}</td>
                                    <td>${s.day}</td>
                                    <td>${s.duration}</td>
                                    <td><span class="schedule-badge ${s.status}">${s.spots}</span></td>
                                </tr>
                            `,
                            ).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    `,

  // ========== GALLERY PAGE ==========
  gallery: () => `
        <div class="page-header">
            <div class="container">
                <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><span>Gallery</span></div>
                <h1 class="page-title">Our <span class="text-accent">Gallery</span></h1>
                <p class="page-subtitle">A glimpse into the H2O Singur experience.</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="gallery-grid">
                    ${Array.from(
                      { length: 12 },
                      (_, i) => `
                        <div class="gallery-item reveal stagger-${(i % 6) + 1}">
                            <img src="https://picsum.photos/seed/gallery${i + 1}/600/600" alt="Gallery ${i + 1}" loading="lazy">
                            <div class="gallery-item-overlay"><i class="fas fa-expand"></i></div>
                        </div>
                    `,
                    ).join("")}
                </div>
            </div>
        </section>
    `,

  // ========== FAQ PAGE ==========
  faq: () => `
        <div class="page-header">
            <div class="container">
                <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><span>FAQ</span></div>
                <h1 class="page-title">Frequently Asked <span class="text-accent">Questions</span></h1>
                <p class="page-subtitle">Find answers to the most common questions about H2O Singur.</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="faq-list">
                    ${FAQS.map(
                      (f, i) => `
                        <div class="faq-item reveal stagger-${(i % 4) + 1}">
                            <button class="faq-question"><span>${f.question}</span><i class="fas fa-chevron-down"></i></button>
                            <div class="faq-answer"><div class="faq-answer-inner">${f.answer}</div></div>
                        </div>
                    `,
                    ).join("")}
                </div>
                <div style="text-align:center;margin-top:var(--space-3xl)" class="reveal">
                    <p style="color:var(--text-secondary);margin-bottom:var(--space-lg)">Still have questions? We are here to help.</p>
                    <div style="display:flex;gap:var(--space-lg);justify-content:center;flex-wrap:wrap">
                        <a href="#/contact" data-nav class="btn btn-outline-accent"><i class="fas fa-envelope"></i> Contact Us</a>
                        <button class="btn btn-primary" onclick="document.getElementById('fab-appointment').click()"><i class="fas fa-calendar-check"></i> Book a Visit</button>
                    </div>
                </div>
            </div>
        </section>
    `,

  // ========== CONTACT PAGE ==========
  contact: () => `
        <div class="page-header">
            <div class="container">
                <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><span>Contact</span></div>
                <h1 class="page-title">Get In <span class="text-accent">Touch</span></h1>
                <p class="page-subtitle">We would love to hear from you. Reach out anytime.</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="contact-grid">
                    <div class="reveal-left">
                        <div class="contact-info-card">
                            <div class="contact-info-icon"><i class="fas fa-map-marker-alt"></i></div>
                            <div><div class="contact-info-label">Visit Us</div><div class="contact-info-value">123 Elite Avenue, Downtown, NY 10001</div></div>
                        </div>
                        <div class="contact-info-card">
                            <div class="contact-info-icon"><i class="fas fa-phone"></i></div>
                            <div><div class="contact-info-label">Call Us</div><div class="contact-info-value">+1 (980) 481-9829</div></div>
                        </div>
                        <div class="contact-info-card">
                            <div class="contact-info-icon"><i class="fas fa-envelope"></i></div>
                            <div><div class="contact-info-label">Email Us</div><div class="contact-info-value">hello@forgeelite.com</div></div>
                        </div>
                        <div class="contact-info-card">
                            <div class="contact-info-icon"><i class="fas fa-clock"></i></div>
                            <div><div class="contact-info-label">Hours</div><div class="contact-info-value">Mon-Sat: 5AM - 11PM<br>Sun: 7AM - 9PM</div></div>
                        </div>
                        <div class="contact-map"><i class="fas fa-map" style="font-size:48px;opacity:0.2"></i><p style="margin-top:var(--space-md);color:var(--text-tertiary)">Interactive Map</p></div>
                    </div>
                    <div class="reveal-right">
                        <h3 style="font-family:var(--font-display);font-size:var(--font-size-2xl);font-weight:700;margin-bottom:var(--space-lg)">Send Us a Message</h3>
                        <form class="premium-form" id="contact-form" novalidate>
                            <div class="form-grid">
                                <div class="form-group"><label for="contact-name">Name <span class="required">*</span></label><div class="input-wrapper"><i class="fas fa-user"></i><input type="text" id="contact-name" name="name" placeholder="Your name" required></div></div>
                                <div class="form-group"><label for="contact-email">Email <span class="required">*</span></label><div class="input-wrapper"><i class="fas fa-envelope"></i><input type="email" id="contact-email" name="email" placeholder="your@email.com" required></div></div>
                                <div class="form-group"><label for="contact-phone">Phone</label><div class="input-wrapper"><i class="fas fa-phone"></i><input type="tel" id="contact-phone" name="phone" placeholder="+1 234 567 890"></div></div>
                                <div class="form-group"><label for="contact-subject">Subject</label><div class="input-wrapper"><i class="fas fa-tag"></i><input type="text" id="contact-subject" name="subject" placeholder="How can we help?"></div></div>
                                <div class="form-group full-width"><label for="contact-message">Message <span class="required">*</span></label><div class="input-wrapper textarea-wrapper"><i class="fas fa-comment-alt"></i><textarea id="contact-message" name="message" rows="5" placeholder="Tell us what you need..." required></textarea></div></div>
                            </div>
                            <button type="submit" class="form-submit-btn"><span>Send Message via WhatsApp</span><i class="fab fa-whatsapp"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `,

  // ========== PRIVACY POLICY ==========
  "privacy-policy": () =>
    renderPolicyPage(
      "Privacy Policy",
      "Last updated: January 15, 2025",
      `
        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly to us, including your name, email address, phone number, date of birth, fitness goals, and health information when you register for an account, book appointments, or contact us.</p>
        <h3>Personal Information</h3>
        <ul>
            <li>Name, email address, and contact details</li>
            <li>Date of birth and gender</li>
            <li>Fitness goals and preferences</li>
            <li>Health and medical information you voluntarily share</li>
            <li>Payment information for membership and purchases</li>
        </ul>
        <h3>Automatically Collected Information</h3>
        <ul>
            <li>Device information and IP address</li>
            <li>Browser type and operating system</li>
            <li>Pages visited and features used</li>
            <li>Referring website and search terms</li>
        </ul>
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send you communications, and respond to your requests.</p>
        <ul>
            <li>To create and manage your membership account</li>
            <li>To schedule and confirm appointments</li>
            <li>To process payments and send receipts</li>
            <li>To personalize your fitness experience</li>
            <li>To communicate about schedule changes, promotions, and updates</li>
            <li>To improve our services and develop new features</li>
        </ul>
        <h2>3. Information Sharing</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and providing our services, subject to confidentiality agreements.</p>
        <h2>4. Data Security</h2>
        <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
        <h2>5. Your Rights</h2>
        <p>You have the right to access, correct, update, or delete your personal information. You may also opt out of marketing communications at any time by contacting us or using the unsubscribe link in our emails.</p>
        <h2>6. Cookies</h2>
        <p>We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.</p>
        <h2>7. Third-Party Links</h2>
        <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites and encourage you to read their privacy policies.</p>
        <h2>8. Children's Privacy</h2>
        <p>Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children.</p>
        <h2>9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
        <h2>10. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at privacy@forgeelite.com or +1 (980) 481-9829.</p>
    `,
    ),

  // ========== TERMS & CONDITIONS ==========
  terms: () =>
    renderPolicyPage(
      "Terms & Conditions",
      "Last updated: January 15, 2025",
      `
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the H2O Singur website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
        <h2>2. Membership</h2>
        <p>Membership at H2O Singur is subject to availability and approval. All members must complete a registration form and agree to follow our facility rules and guidelines.</p>
        <ul>
            <li>Membership fees are billed monthly on a recurring basis</li>
            <li>30 days written notice is required for cancellation</li>
            <li>Membership is non-transferable</li>
            <li>We reserve the right to revoke membership for violation of rules</li>
        </ul>
        <h2>3. Payment Terms</h2>
        <p>All payments are processed securely through our payment partners. Prices are subject to change with 30 days notice. Refunds are handled according to our Refund Policy.</p>
        <h2>4. Health and Safety</h2>
        <p>You are responsible for ensuring you are physically fit to participate in our programs. We recommend consulting a physician before beginning any exercise program. You must inform our staff of any medical conditions that may affect your training.</p>
        <h2>5. Liability</h2>
        <p>H2O Singur is not liable for any injuries sustained during training, except where caused by our negligence. You assume all risks associated with physical exercise and use of our facilities.</p>
        <h2>6. Intellectual Property</h2>
        <p>All content on our website, including text, images, logos, and training programs, is the property of H2O Singur and protected by copyright laws. Unauthorized use is prohibited.</p>
        <h2>7. Code of Conduct</h2>
        <p>All members and visitors must treat staff and other members with respect. Harassment, intimidation, or disruptive behavior will not be tolerated and may result in membership termination.</p>
        <h2>8. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.</p>
        <h2>9. Governing Law</h2>
        <p>These terms are governed by the laws of the State of New York. Any disputes will be resolved in the courts of New York.</p>
        <h2>10. Contact</h2>
        <p>For questions about these Terms, contact us at legal@forgeelite.com.</p>
    `,
    ),

  // ========== REFUND POLICY ==========
  "refund-policy": () =>
    renderPolicyPage(
      "Refund Policy",
      "Last updated: January 15, 2025",
      `
        <h2>1. Membership Refunds</h2>
        <p>We want you to be completely satisfied with your H2O Singur experience. If you are not satisfied, we offer the following refund options:</p>
        <ul>
            <li><strong>7-Day Trial Period:</strong> Full refund within 7 days of signing up, no questions asked.</li>
            <li><strong>Monthly Memberships:</strong> Pro-rated refund for unused full weeks remaining in the billing cycle.</li>
            <li><strong>Annual Memberships:</strong> Pro-rated refund minus a 10% administrative fee.</li>
        </ul>
        <h2>2. Product Refunds</h2>
        <p>Physical products purchased from our shop can be returned within 30 days of purchase, provided they are unused and in original packaging.</p>
        <ul>
            <li>Supplements: Unopened and sealed only</li>
            <li>Apparel: Unworn with tags attached</li>
            <li>Accessories: In original condition and packaging</li>
        </ul>
        <h2>3. How to Request a Refund</h2>
        <p>To request a refund, please contact us at billing@forgeelite.com or speak with our front desk team. Please include your membership ID or order number and reason for the refund.</p>
        <h2>4. Processing Time</h2>
        <p>Refunds are processed within 5-10 business days. The refund will be credited to the original payment method used for the purchase.</p>
        <h2>5. Non-Refundable Items</h2>
        <ul>
            <li>Personal training sessions that have been completed</li>
            <li>Used or opened supplements</li>
            <li>Custom training programs that have been delivered</li>
            <li>Gift cards and promotional items</li>
        </ul>
        <h2>6. Cancellation Fee</h2>
        <p>There is no cancellation fee for monthly memberships with proper 30-day notice. Early cancellation of annual memberships may incur a fee as described above.</p>
    `,
    ),

  // ========== COOKIE POLICY ==========
  "cookie-policy": () =>
    renderPolicyPage(
      "Cookie Policy",
      "Last updated: January 15, 2025",
      `
        <h2>1. What Are Cookies</h2>
        <p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.</p>
        <h2>2. Types of Cookies We Use</h2>
        <ul>
            <li><strong>Essential Cookies:</strong> Required for basic site functionality such as page navigation and secure access. These cannot be disabled.</li>
            <li><strong>Performance Cookies:</strong> Collect anonymous information about how visitors use our site, helping us improve performance and content.</li>
            <li><strong>Functionality Cookies:</strong> Remember your preferences and settings to provide a personalized experience.</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness.</li>
        </ul>
        <h2>3. How to Manage Cookies</h2>
        <p>You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, blocking essential cookies may affect site functionality.</p>
        <h2>4. Third-Party Cookies</h2>
        <p>Some third-party services we use, such as analytics and payment providers, may set their own cookies. We do not control these cookies and recommend reviewing their privacy policies.</p>
        <h2>5. Updates to This Policy</h2>
        <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
    `,
    ),

  // ========== DISCLAIMER ==========
  disclaimer: () =>
    renderPolicyPage(
      "Disclaimer",
      "Last updated: January 15, 2025",
      `
        <h2>1. General Disclaimer</h2>
        <p>The information provided on the H2O Singur website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the website or the information, products, services, or related graphics contained on the website.</p>
        <h2>2. Fitness and Health Disclaimer</h2>
        <p>The fitness and nutritional information provided by H2O Singur is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
        <ul>
            <li>Never disregard professional medical advice or delay in seeking it.</li>
            <li>Consult a physician before starting any exercise or nutrition program.</li>
            <li>If you experience chest pain, nausea, dizziness, or shortness of breath, stop exercising immediately and seek medical help.</li>
        </ul>
        <h2>3. Results Disclaimer</h2>
        <p>Individual results may vary. Testimonials and transformation stories on our website represent individual experiences and are not guaranteed. Your results depend on your dedication, genetics, diet, and other factors.</p>
        <h2>4. Limitation of Liability</h2>
        <p>In no event shall H2O Singur be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website and our services.</p>
        <h2>5. External Links</h2>
        <p>Through this website, you may be able to link to other websites which are not under the control of H2O Singur. We have no control over the nature, content, and availability of those sites.</p>
    `,
    ),

  // ========== 404 PAGE ==========
  404: () => `
        <section class="section" style="min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center">
            <div class="reveal">
                <h1 style="font-family:var(--font-display);font-size:clamp(4rem,10vw,8rem);font-weight:900;color:var(--accent);line-height:1">404</h1>
                <h2 style="font-family:var(--font-display);font-size:var(--font-size-3xl);font-weight:700;margin-bottom:var(--space-lg)">Page Not Found</h2>
                <p style="color:var(--text-secondary);max-width:500px;margin:0 auto var(--space-2xl)">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <a href="#/home" data-nav class="btn btn-primary btn-lg">Back to Home <i class="fas fa-arrow-right"></i></a>
            </div>
        </section>
    `,
};

// ============================================
// HELPER: Render Policy Page
// ============================================
function renderPolicyPage(title, updatedDate, content) {
  return `
        <div class="page-header">
            <div class="container">
                <div class="page-breadcrumb"><a href="#/home" data-nav>Home</a><span class="separator">/</span><span>${title}</span></div>
                <h1 class="page-title">${title}</h1>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="policy-content reveal">
                    <p class="policy-updated"><i class="fas fa-calendar-alt"></i> ${updatedDate}</p>
                    ${content}
                </div>
            </div>
        </section>
    `;
}

// ============================================
// HELPER: Render Product Card
// ============================================
function renderProductCard(p) {
  return `
        <div class="product-card" data-category="${p.category}" data-price="${p.price}" data-rating="${p.rating}" data-id="${p.id}">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
                <div class="product-actions-overlay">
                    <button class="product-action-btn" onclick="event.stopPropagation(); addToCart(${p.id})"><i class="fas fa-shopping-bag"></i> Add</button>
                    <button class="product-action-btn wishlist-btn" onclick="event.stopPropagation(); showToast('Added to Wishlist', 'success')"><i class="fas fa-heart"></i></button>
                    <button class="product-action-btn wishlist-btn" onclick="event.stopPropagation(); quickView(${p.id})"><i class="fas fa-eye"></i></button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${p.category}</div>
                <h3 class="product-name">${p.name}</h3>
                <div class="product-price">
                    <span class="product-price-current">$${p.price.toFixed(2)}</span>
                    ${p.originalPrice ? `<span class="product-price-original">$${p.originalPrice.toFixed(2)}</span>` : ""}
                </div>
                <div class="product-rating">
                    <span class="stars">${'<i class="fas fa-star"></i>'.repeat(Math.floor(p.rating))}${p.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ""}</span>
                    <span>(${p.reviews})</span>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Router
  const router = new Router();

  // Register Routes
  router
    .on("/home", () => router.renderPage("home"))
    .on("/about", () => router.renderPage("about"))
    .on("/programs", () => router.renderPage("programs"))
    .on("/trainers", () => router.renderPage("trainers"))
    .on("/transformations", () => router.renderPage("transformations"))
    .on("/pricing", () => router.renderPage("pricing"))
    .on("/shop", () => router.renderPage("shop"))
    .on("/classes", () => router.renderPage("classes"))
    .on("/schedule", () => router.renderPage("schedule"))
    .on("/gallery", () => router.renderPage("gallery"))
    .on("/faq", () => router.renderPage("faq"))
    .on("/contact", () => router.renderPage("contact"))
    .on("/blog", () => router.renderPage("blog"))
    .on("/privacy-policy", () => router.renderPage("privacy-policy"))
    .on("/terms", () => router.renderPage("terms"))
    .on("/refund-policy", () => router.renderPage("refund-policy"))
    .on("/cookie-policy", () => router.renderPage("cookie-policy"))
    .on("/disclaimer", () => router.renderPage("disclaimer"));

  // Preloader
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.classList.add("hidden");
      setTimeout(() => preloader.remove(), 600);
    }
  }, 1500);

  // Initialize general components
  initCursor();
  initHeaderScroll();
  initMobileMenu();
  initThemePanel();
  initFloatingActions();
  initAppointmentModal();
  initCartSidebar();
  initBackToTop();
});

// ============================================
// CURSOR FOLLOWER
// ============================================
function initCursor() {
  const dot = document.getElementById("cursor-dot");
  const outline = document.getElementById("cursor-outline");

  if (!dot || !outline || window.innerWidth < 1024) return;

  let mouseX = 0,
    mouseY = 0;
  let outlineX = 0,
    outlineY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX - 3}px`;
    dot.style.top = `${mouseY - 3}px`;
  });

  const animateOutline = () => {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    outline.style.left = `${outlineX - 18}px`;
    outline.style.top = `${outlineY - 18}px`;
    requestAnimationFrame(animateOutline);
  };
  animateOutline();

  document
    .querySelectorAll(
      "a, button, input, select, textarea, .product-card, .premium-card",
    )
    .forEach((el) => {
      el.addEventListener("mouseenter", () => outline.classList.add("hover"));
      el.addEventListener("mouseleave", () =>
        outline.classList.remove("hover"),
      );
    });
}

// ============================================
// HEADER SCROLL
// ============================================
function initHeaderScroll() {
  const header = document.getElementById("main-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("mobile-menu-close");

  if (!menuBtn || !mobileMenu) return;

  const toggleMenu = () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  };

  menuBtn.addEventListener("click", toggleMenu);
  if (closeBtn) closeBtn.addEventListener("click", toggleMenu);

  mobileMenu.querySelectorAll("a[data-nav]").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      mobileMenu.classList.remove("open");
      document.body.classList.remove("no-scroll");
    });
  });
}

// ============================================
// THEME PANEL
// ============================================
function initThemePanel() {
  const panel = document.getElementById("theme-panel");
  const toggle = document.getElementById("theme-panel-toggle");
  const accentBtns = document.querySelectorAll(".accent-btn");
  const baseBtns = document.querySelectorAll(".base-theme-btn");
  const customAccent = document.getElementById("custom-accent");
  const hexDisplay = document.getElementById("color-hex-display");
  const radiusSlider = document.getElementById("radius-slider");
  const fontSlider = document.getElementById("font-slider");

  if (!panel || !toggle) return;

  toggle.addEventListener("click", () => panel.classList.toggle("open"));

  accentBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      accentBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const color = btn.dataset.accent;
      setAccentColor(color);
      if (customAccent) customAccent.value = color;
      if (hexDisplay) hexDisplay.textContent = color;
    });
  });

  if (customAccent) {
    customAccent.addEventListener("input", (e) => {
      const color = e.target.value;
      accentBtns.forEach((b) => b.classList.remove("active"));
      setAccentColor(color);
      if (hexDisplay) hexDisplay.textContent = color;
    });
  }

  baseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      baseBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      document.documentElement.setAttribute("data-theme", btn.dataset.base);
    });
  });

  if (radiusSlider) {
    radiusSlider.addEventListener("input", (e) => {
      document.documentElement.style.setProperty(
        "--radius-md",
        `${e.target.value}px`,
      );
      document.documentElement.style.setProperty(
        "--radius-lg",
        `${parseInt(e.target.value) + 4}px`,
      );
      document.documentElement.style.setProperty(
        "--radius-xl",
        `${parseInt(e.target.value) + 12}px`,
      );
    });
  }

  if (fontSlider) {
    fontSlider.addEventListener("input", (e) => {
      document.documentElement.style.setProperty(
        "--font-size-base",
        `${e.target.value}px`,
      );
    });
  }
}

function setAccentColor(color) {
  const root = document.documentElement.style;
  root.setProperty("--accent", color);

  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  root.setProperty("--accent-rgb", `${r}, ${g}, ${b}`);

  const hoverR = Math.min(255, r + 30);
  const hoverG = Math.min(255, g + 30);
  const hoverB = Math.min(255, b + 30);
  root.setProperty(
    "--accent-hover",
    `#${hoverR.toString(16).padStart(2, "0")}${hoverG.toString(16).padStart(2, "0")}${hoverB.toString(16).padStart(2, "0")}`,
  );

  const darkR = Math.max(0, r - 40);
  const darkG = Math.max(0, g - 40);
  const darkB = Math.max(0, b - 40);
  root.setProperty(
    "--accent-dark",
    `#${darkR.toString(16).padStart(2, "0")}${darkG.toString(16).padStart(2, "0")}${darkB.toString(16).padStart(2, "0")}`,
  );

  root.setProperty("--accent-light", `rgba(${r}, ${g}, ${b}, 0.15)`);
  root.setProperty("--accent-glow", `rgba(${r}, ${g}, ${b}, 0.4)`);
  root.setProperty("--shadow-accent", `0 4px 20px rgba(${r}, ${g}, ${b}, 0.3)`);
  root.setProperty(
    "--shadow-accent-lg",
    `0 8px 40px rgba(${r}, ${g}, ${b}, 0.4)`,
  );
  root.setProperty("--badge-bg", `rgba(${r}, ${g}, ${b}, 0.15)`);
  root.setProperty("--border-focus", `rgba(${r}, ${g}, ${b}, 0.5)`);
}

// ============================================
// FLOATING ACTION BUTTONS
// ============================================
function initFloatingActions() {
  const fabAppointment = document.getElementById("fab-appointment");
  const appointmentModal = document.getElementById("appointment-modal");

  if (fabAppointment && appointmentModal) {
    fabAppointment.addEventListener("click", () => {
      appointmentModal.classList.add("active");
      document.body.classList.add("no-scroll");
    });
  }
}

// ============================================
// APPOINTMENT MODAL
// ============================================
function initAppointmentModal() {
  const modal = document.getElementById("appointment-modal");
  const closeBtn = document.getElementById("appointment-modal-close");
  const form = document.getElementById("appointment-form");

  if (!modal || !closeBtn || !form) return;

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (
      !data.fullName ||
      !data.email ||
      !data.phone ||
      !data.gender ||
      !data.program
    ) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    let message = `🏋️ *NEW APPOINTMENT / ENQUIRY* 🏋️%0A%0A`;
    message += `*Name:* ${data.fullName}%0A`;
    message += `*Email:* ${data.email}%0A`;
    message += `*Phone:* ${data.phone}%0A`;
    if (data.age) message += `*Age:* ${data.age}%0A`;
    message += `*Gender:* ${data.gender}%0A`;
    message += `*Program:* ${data.program}%0A`;
    if (data.timeSlot) message += `*Preferred Time:* ${data.timeSlot}%0A`;
    if (data.fitnessGoal) message += `*Fitness Goal:* ${data.fitnessGoal}%0A`;
    if (data.experience) message += `*Experience:* ${data.experience}%0A`;
    if (data.referralSource) message += `*Referral:* ${data.referralSource}%0A`;
    if (data.startDate) message += `*Start Date:* ${data.startDate}%0A`;
    if (data.medicalConditions)
      message += `*Medical Conditions:* ${data.medicalConditions}%0A`;
    if (data.message) message += `*Message:* ${data.message}%0A`;
    message += `%0A_Sent from H2O Singur Website_`;

    window.open(
      `${CONFIG.WHATSAPP_BASE_URL}${CONFIG.WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
    );
    showToast("Redirecting to WhatsApp...", "success");
    form.reset();

    setTimeout(() => {
      modal.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }, 500);
  });
}

// ============================================
// CART SIDEBAR
// ============================================
function initCartSidebar() {
  const cartIconBtn = document.getElementById("cart-icon-btn");
  const cartSidebar = document.getElementById("cart-sidebar");
  const cartOverlay = document.getElementById("cart-overlay");
  const closeBtn = document.getElementById("cart-sidebar-close");
  const checkoutBtn = document.getElementById("cart-checkout-btn");

  if (!cartIconBtn || !cartSidebar) return;

  const openCart = () => {
    cartSidebar.classList.add("open");
    if (cartOverlay) cartOverlay.classList.add("active");
    document.body.classList.add("no-scroll");
  };

  const closeCart = () => {
    cartSidebar.classList.remove("open");
    if (cartOverlay) cartOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  };

  cartIconBtn.addEventListener("click", openCart);
  if (closeBtn) closeBtn.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        showToast("Your cart is empty.", "error");
        return;
      }

      let message = `🛒 *I AM INTERESTED TO BUY THESE PRODUCTS* 🛒%0A%0A`;
      let total = 0;

      cart.forEach((item) => {
        const p = PRODUCTS.find((prod) => prod.id === item.id);
        if (p) {
          const itemTotal = p.price * item.qty;
          total += itemTotal;
          message += `*${p.name}*%0A`;
          message += `  Qty: ${item.qty} x $${p.price.toFixed(2)} = $${itemTotal.toFixed(2)}%0A`;
          if (item.size) message += `  Size: ${item.size}%0A`;
          if (item.flavor) message += `  Flavor: ${item.flavor}%0A`;
          message += `%0A`;
        }
      });

      message += `*TOTAL: $${total.toFixed(2)}*%0A%0A`;
      message += `_Please confirm availability and payment details._%0A`;
      message += `_Sent from H2O Singur Website_`;

      window.open(
        `${CONFIG.WHATSAPP_BASE_URL}${CONFIG.WHATSAPP_NUMBER}?text=${message}`,
        "_blank",
      );
      showToast("Redirecting to WhatsApp for order...", "success");
    });
  }
}

// ============================================
// CART MANAGEMENT
// ============================================
function addToCart(productId, size = null, flavor = null, qty = 1) {
  const existingItemIndex = cart.findIndex(
    (item) =>
      item.id === productId && item.size === size && item.flavor === flavor,
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].qty += qty;
  } else {
    cart.push({ id: productId, qty: qty, size: size, flavor: flavor });
  }

  updateCartUI();
  const product = PRODUCTS.find((p) => p.id === productId);
  showToast(`${product ? product.name : "Item"} added to cart!`, "success");
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartItemQty(index, newQty) {
  if (newQty <= 0) {
    removeFromCart(index);
  } else {
    cart[index].qty = newQty;
  }
  updateCartUI();
}

function updateCartUI() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotalAmount = document.getElementById("cart-total-amount");
  const checkoutBtn = document.getElementById("cart-checkout-btn");

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
                <a href="#/shop" data-nav class="btn-outline-accent" style="padding:8px 20px;border:2px solid var(--accent);border-radius:var(--radius-md);color:var(--accent);display:inline-block;margin-top:16px">Browse Shop</a>
            </div>
        `;
    if (cartCount) cartCount.textContent = "0";
    if (cartTotalAmount) cartTotalAmount.textContent = "$0.00";
    if (checkoutBtn) checkoutBtn.disabled = true;
  } else {
    let html = "";
    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {
      const p = PRODUCTS.find((prod) => prod.id === item.id);
      if (!p) return;

      const itemTotal = p.price * item.qty;
      total += itemTotal;
      count += item.qty;

      html += `
                <div class="cart-item">
                    <div class="cart-item-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
                    <div class="cart-item-details">
                        <h4 class="cart-item-name">${p.name}</h4>
                        <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
                        ${item.size ? `<div style="font-size:var(--font-size-xs);color:var(--text-tertiary)">Size: ${item.size}</div>` : ""}
                        ${item.flavor ? `<div style="font-size:var(--font-size-xs);color:var(--text-tertiary)">Flavor: ${item.flavor}</div>` : ""}
                        <div class="cart-item-qty">
                            <button onclick="updateCartItemQty(${index}, ${item.qty - 1})">−</button>
                            <span>${item.qty}</span>
                            <button onclick="updateCartItemQty(${index}, ${item.qty + 1})">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
    });

    cartItemsContainer.innerHTML = html;
    if (cartCount) cartCount.textContent = count.toString();
    if (cartTotalAmount) cartTotalAmount.textContent = `$${total.toFixed(2)}`;
    if (checkoutBtn) checkoutBtn.disabled = false;
  }
}

// ============================================
// PRODUCT DETAIL HELPERS
// ============================================
let detailQty = 1;

function changeDetailQty(amount) {
  detailQty = Math.max(1, detailQty + amount);
  const qtyEl = document.getElementById("detail-qty");
  if (qtyEl) qtyEl.textContent = detailQty;
}

function addToCartFromDetail(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const activeSizeBtn = document.querySelector(
    ".product-size-btn.btn-outline-accent",
  );
  const activeFlavorBtn = document.querySelector(
    ".product-flavor-btn.btn-outline-accent",
  );

  const size = activeSizeBtn ? activeSizeBtn.dataset.size : null;
  const flavor = activeFlavorBtn ? activeFlavorBtn.dataset.flavor : null;

  addToCart(productId, size, flavor, detailQty);
  detailQty = 1;
}

function buyNowWhatsApp(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const activeSizeBtn = document.querySelector(
    ".product-size-btn.btn-outline-accent",
  );
  const activeFlavorBtn = document.querySelector(
    ".product-flavor-btn.btn-outline-accent",
  );
  const size = activeSizeBtn ? activeSizeBtn.dataset.size : "";
  const flavor = activeFlavorBtn ? activeFlavorBtn.dataset.flavor : "";

  let message = `🛒 *I AM INTERESTED TO BUY THIS PRODUCT* 🛒%0A%0A`;
  message += `*Product:* ${product.name}%0A`;
  message += `*Price:* $${product.price.toFixed(2)}%0A`;
  message += `*Quantity:* ${detailQty}%0A`;
  if (size) message += `*Size:* ${size}%0A`;
  if (flavor) message += `*Flavor:* ${flavor}%0A`;
  message += `%0A_Please confirm availability and payment details._`;

  window.open(
    `${CONFIG.WHATSAPP_BASE_URL}${CONFIG.WHATSAPP_NUMBER}?text=${message}`,
    "_blank",
  );
  showToast("Redirecting to WhatsApp...", "success");
}

// ============================================
// QUICKVIEW MODAL
// ============================================
function quickView(productId) {
  const modal = document.getElementById("quickview-modal");
  const content = document.getElementById("quickview-content");
  const closeBtn = document.getElementById("quickview-close");

  if (!modal || !content) return;

  const p = PRODUCTS.find((prod) => prod.id === productId);
  if (!p) return;

  content.innerHTML = `
        <div class="quickview-image">
            <img src="${p.image}" alt="${p.name}">
        </div>
        <div class="quickview-details">
            <span class="quickview-category">${p.category}</span>
            <h2 class="quickview-name">${p.name}</h2>
            <div class="quickview-price">$${p.price.toFixed(2)} ${p.originalPrice ? `<span style="font-size:var(--font-size-base);color:var(--text-tertiary);text-decoration:line-through">$${p.originalPrice.toFixed(2)}</span>` : ""}</div>
            <div class="product-rating" style="margin-bottom:var(--space-lg)"><span class="stars">${'<i class="fas fa-star"></i>'.repeat(Math.floor(p.rating))}</span> (${p.reviews})</div>
            <p class="quickview-desc">${p.description}</p>
            <div class="quickview-qty">
                <button class="qty-btn" onclick="this.nextElementSibling.textContent=Math.max(1,parseInt(this.nextElementSibling.textContent)-1)">−</button>
                <span class="qty-value" id="qv-qty">1</span>
                <button class="qty-btn" onclick="this.previousElementSibling.textContent=parseInt(this.previousElementSibling.textContent)+1">+</button>
            </div>
            <button class="btn btn-primary btn-lg" style="width:100%" onclick="addToCart(${p.id}, null, null, parseInt(document.getElementById('qv-qty').textContent)); document.getElementById('quickview-modal').classList.remove('active'); document.body.classList.remove('no-scroll');">
                <i class="fas fa-shopping-bag"></i> Add to Cart
            </button>
        </div>
    `;

  modal.classList.add("active");
  document.body.classList.add("no-scroll");

  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.classList.remove("active");
      document.body.classList.remove("no-scroll");
    };
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
}

// ============================================
// BACK TO TOP
// ============================================
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const icons = {
    success: "fas fa-check-circle",
    error: "fas fa-exclamation-circle",
    info: "fas fa-info-circle",
  };

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
        <div class="toast-icon"><i class="${icons[type] || icons.info}"></i></div>
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
    `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("removing");
    setTimeout(() => toast.remove(), 300);
  }, CONFIG.TOAST_DURATION);
}

// ============================================
// REVEAL ANIMATIONS
// ============================================
function initRevealAnimations() {
  const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale",
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("revealed"));
  }
}

// ============================================
// BEFORE / AFTER SLIDERS
// ============================================
function initBeforeAfterSliders() {
  const sliders = document.querySelectorAll(".transformation-slider");

  sliders.forEach((slider) => {
    const afterLayer = slider.querySelector(".ba-after");
    const divider = slider.querySelector(".ba-divider");
    let isDragging = false;

    const updateSlider = (x) => {
      const rect = slider.getBoundingClientRect();
      let pos = (x - rect.left) / rect.width;
      pos = Math.max(0.05, Math.min(0.95, pos));
      afterLayer.style.clipPath = `inset(0 ${100 - pos * 100}% 0 0)`;
      divider.style.left = `${pos * 100}%`;
    };

    slider.addEventListener("mousedown", () => (isDragging = true));
    slider.addEventListener("touchstart", () => (isDragging = true));

    window.addEventListener("mouseup", () => (isDragging = false));
    window.addEventListener("touchend", () => (isDragging = false));

    slider.addEventListener("mousemove", (e) => {
      if (isDragging) updateSlider(e.clientX);
    });
    slider.addEventListener("touchmove", (e) => {
      if (isDragging) updateSlider(e.touches[0].clientX);
    });
    slider.addEventListener("click", (e) => updateSlider(e.clientX));
  });
}

// ============================================
// FAQ ACCORDIONS
// ============================================
function initFAQAccordions() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (!question) return;

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll(".faq-item.active").forEach((activeItem) => {
          if (activeItem !== item) activeItem.classList.remove("active");
        });
      }
      item.classList.toggle("active", !isActive);
    });
  });
}

// ============================================
// COUNTER ANIMATIONS
// ============================================
function initCounterAnimations() {
  const counters = document.querySelectorAll(".counter-value");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target);
            const suffix = el.dataset.suffix || "";
            const duration = CONFIG.COUNTER_DURATION;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
              current += step;
              if (current >= target) {
                el.textContent = target.toLocaleString() + suffix;
                observer.unobserve(el);
              } else {
                el.textContent = Math.floor(current).toLocaleString() + suffix;
                requestAnimationFrame(updateCounter);
              }
            };
            requestAnimationFrame(updateCounter);
          }
        });
      },
      { threshold: 0.5 },
    );

    counters.forEach((counter) => observer.observe(counter));
  }
}

// ============================================
// REVIEWS SLIDER
// ============================================
function initReviewSliders() {
  const slider = document.getElementById("home-reviews-slider");
  const prevBtn = document.getElementById("reviews-prev");
  const nextBtn = document.getElementById("reviews-next");
  const dotsContainer = document.getElementById("reviews-dots");

  if (!slider) return;

  const cards = slider.querySelectorAll(".review-card");
  if (cards.length === 0) return;

  let currentIndex = 0;
  const cardWidth = 420;

  const updateSlider = () => {
    slider.scrollTo({
      left: currentIndex * (cards[0].offsetWidth + 24),
      behavior: "smooth",
    });
    if (dotsContainer) {
      dotsContainer.querySelectorAll(".reviews-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    }
  };

  if (nextBtn)
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateSlider();
    });
  if (prevBtn)
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateSlider();
    });

  if (dotsContainer) {
    dotsContainer.querySelectorAll(".reviews-dot").forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateSlider();
      });
    });
  }
}

// ============================================
// SHOP FILTERS
// ============================================
function initShopFilters() {
  const categoryFilters = document.querySelectorAll(
    '.filter-option[data-filter-type="category"]',
  );
  const ratingFilters = document.querySelectorAll(
    '.filter-option[data-filter-type="rating"]',
  );
  const priceRange = document.getElementById("price-range");
  const priceDisplay = document.getElementById("price-range-display");
  const sortSelect = document.getElementById("shop-sort-select");
  const resetBtn = document.getElementById("reset-filters");
  const mobileFilterToggle = document.getElementById("mobile-filter-toggle");
  const filterCloseBtn = document.getElementById("filter-close");
  const shopFilters = document.getElementById("shop-filters");

  let activeCategories = ["protein", "supplements", "apparel", "accessories"];
  let maxPrice = 100;
  let minRating = 4;

  const applyFilters = () => {
    let filtered = PRODUCTS.filter(
      (p) =>
        activeCategories.includes(p.category) &&
        p.price <= maxPrice &&
        p.rating >= minRating,
    );

    if (sortSelect) {
      const sortVal = sortSelect.value;
      if (sortVal === "price-low") filtered.sort((a, b) => a.price - b.price);
      else if (sortVal === "price-high")
        filtered.sort((a, b) => b.price - a.price);
      else if (sortVal === "rating")
        filtered.sort((a, b) => b.rating - a.rating);
      else if (sortVal === "name")
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    const grid = document.getElementById("product-grid");
    const countEl = document.getElementById("shop-results-count");

    if (grid) {
      grid.innerHTML =
        filtered.length > 0
          ? filtered.map((p) => renderProductCard(p)).join("")
          : `<div class="empty-state" style="grid-column:1/-1"><div class="empty-state-icon"><i class="fas fa-search"></i></div><h3 class="empty-state-title">No Products Found</h3><p class="empty-state-text">Try adjusting your filters.</p></div>`;
    }
    if (countEl) countEl.textContent = `${filtered.length} products`;
  };

  categoryFilters.forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.dataset.filterValue;
      btn.classList.toggle("active");
      activeCategories = btn.classList.contains("active")
        ? [...activeCategories, val]
        : activeCategories.filter((c) => c !== val);
      applyFilters();
    });
  });

  ratingFilters.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      minRating = 1;
      ratingFilters.forEach((b) => {
        if (b.classList.contains("active"))
          minRating = Math.min(minRating, parseInt(b.dataset.filterValue));
      });
      if (!ratingFilters.some((b) => b.classList.contains("active")))
        minRating = 0;
      applyFilters();
    });
  });

  if (priceRange)
    priceRange.addEventListener("input", (e) => {
      maxPrice = parseInt(e.target.value);
      if (priceDisplay) priceDisplay.textContent = `$${maxPrice}`;
      applyFilters();
    });
  if (sortSelect) sortSelect.addEventListener("change", applyFilters);

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      activeCategories = ["protein", "supplements", "apparel", "accessories"];
      maxPrice = 100;
      minRating = 4;
      categoryFilters.forEach((b) => b.classList.add("active"));
      ratingFilters.forEach((b) => b.classList.add("active"));
      if (priceRange) priceRange.value = 100;
      if (priceDisplay) priceDisplay.textContent = "$100";
      if (sortSelect) sortSelect.value = "featured";
      applyFilters();
    });
  }

  if (mobileFilterToggle && shopFilters) {
    mobileFilterToggle.addEventListener("click", () => {
      shopFilters.classList.add("open");
      if (filterCloseBtn) filterCloseBtn.style.display = "block";
      document.body.classList.add("no-scroll");
    });
  }
  if (filterCloseBtn && shopFilters) {
    filterCloseBtn.addEventListener("click", () => {
      shopFilters.classList.remove("open");
      document.body.classList.remove("no-scroll");
    });
  }
}

// ============================================
// SCHEDULE FILTERS
// ============================================
function initScheduleFilters() {
  const filterBtns = document.querySelectorAll(".schedule-filter-btn");
  const rows = document.querySelectorAll(".schedule-table tbody tr");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const day = btn.dataset.day;
      rows.forEach((row) => {
        row.style.display =
          day === "all" || row.dataset.day.includes(day) ? "" : "none";
      });
    });
  });
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name || !data.email || !data.message) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    let message = `✉️ *NEW CONTACT MESSAGE* ✉️%0A%0A`;
    message += `*Name:* ${data.name}%0A*Email:* ${data.email}%0A`;
    if (data.phone) message += `*Phone:* ${data.phone}%0A`;
    if (data.subject) message += `*Subject:* ${data.subject}%0A`;
    message += `*Message:* ${data.message}%0A%0A_Sent from H2O Singur Website_`;

    window.open(
      `${CONFIG.WHATSAPP_BASE_URL}${CONFIG.WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
    );
    showToast("Redirecting to WhatsApp...", "success");
    form.reset();
  });
}

// ============================================
// PAGE COMPONENT INITIALIZATION TRIGGER
// ============================================
Router.prototype.initPageComponents = function (pageName, data) {
  initBeforeAfterSliders();
  initFAQAccordions();
  initCounterAnimations();
  initReviewSliders();
  initScheduleFilters();
  initContactForm();

  if (pageName === "shop") initShopFilters();
  if (pageName === "product-detail") {
    detailQty = 1;
  }

  // Product size/flavor selection listeners
  document
    .querySelectorAll(".product-size-btn, .product-flavor-btn")
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const siblings = e.target.parentElement.querySelectorAll("button");
        siblings.forEach((s) => {
          s.classList.remove("btn-outline-accent");
          s.classList.add("btn-outline");
        });
        e.target.classList.remove("btn-outline");
        e.target.classList.add("btn-outline-accent");
      });
    });

  // Program tabs logic
  const programTabs = document.querySelectorAll("#program-tabs .tab-btn");
  const programCards = document.querySelectorAll(
    "#programs-grid .program-card",
  );

  programTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      programTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.dataset.filter;
      programCards.forEach((card) => {
        card.style.display =
          filter === "all" || card.dataset.category === filter ? "" : "none";
      });
    });
  });

  // Re-bind cursor hover for new elements
  initCursor();
};
