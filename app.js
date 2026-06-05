/* ============================================
   H2O FITNESS SINGUR — Main Application Script
   ============================================
   Structure:
   1.  DATA LAYER (Products, Reviews, Blog, etc.)
   2.  ROUTING SYSTEM
   3.  NAVIGATION
   4.  THEME SYSTEM
   5.  PRELOADER
   6.  CUSTOM CURSOR
   7.  ANIMATIONS (Intersection Observer)
   8.  HERO SECTION (Particles, Counter)
   9.  BEFORE/AFTER SLIDER
   10. REVIEWS SLIDER
   11. PRICING
   12. FAQ
   13. SHOP (Cart, Filters, Quick View)
   14. BLOG
   15. GALLERY & LIGHTBOX
   16. APPOINTMENT FORM (WhatsApp)
   17. CONTACT FORM (WhatsApp)
   18. CART CHECKOUT (WhatsApp)
   19. NEWSLETTER
   20. COOKIE CONSENT
   21. TOAST NOTIFICATIONS
   22. SCROLL TO TOP
   23. POLICY PAGES CONTENT
   24. INITIALIZATION
   ============================================ */

(function () {
  "use strict";

  /* ============================================
       1. DATA LAYER
       All content data stored here for easy editing
       ============================================ */

  // ---- WHATSAPP CONFIG ----
  const WHATSAPP_NUMBER = "919804819829";

  // ---- SHOP PRODUCTS ----
  const PRODUCTS = [
    {
      id: 1,
      name: "Whey Gold Protein",
      category: "supplements",
      price: 2999,
      originalPrice: 3999,
      badge: "Best Seller",
      rating: 4.8,
      reviews: 245,
      image: "https://picsum.photos/seed/protein1/400/400.jpg",
      desc: "Premium whey protein isolate with 25g protein per scoop. Fast absorption, zero sugar. Available in Chocolate, Vanilla, Strawberry flavors.",
      popular: true,
    },
    {
      id: 2,
      name: "Pre-Workout Ignite",
      category: "supplements",
      price: 1499,
      originalPrice: 1999,
      badge: "New",
      rating: 4.6,
      reviews: 128,
      image: "https://picsum.photos/seed/preworkout/400/400.jpg",
      desc: "Explosive energy formula with beta-alanine, caffeine, and creatine. Take 20 mins before training.",
      popular: true,
    },
    {
      id: 3,
      name: "BCAA Recovery",
      category: "supplements",
      price: 1299,
      originalPrice: 1699,
      badge: "",
      rating: 4.5,
      reviews: 89,
      image: "https://picsum.photos/seed/bcaa/400/400.jpg",
      desc: "Branch chain amino acids for faster recovery. 2:1:1 ratio with electrolytes.",
      popular: false,
    },
    {
      id: 4,
      name: "Forge Tank Top",
      category: "apparel",
      price: 899,
      originalPrice: 1199,
      badge: "Trending",
      rating: 4.7,
      reviews: 312,
      image: "https://picsum.photos/seed/tanktop/400/400.jpg",
      desc: "Premium moisture-wicking tank top with H2O FITNESS SINGUR branding. Breathable athletic fit. Sizes: S, M, L, XL, XXL.",
      popular: true,
    },
    {
      id: 5,
      name: "Training Shorts Pro",
      category: "apparel",
      price: 1199,
      originalPrice: 1599,
      badge: "",
      rating: 4.4,
      reviews: 167,
      image: "https://picsum.photos/seed/shorts/400/400.jpg",
      desc: "4-way stretch training shorts with zip pockets. Quick-dry technology. Sizes: S, M, L, XL.",
      popular: false,
    },
    {
      id: 6,
      name: "Compression Tee",
      category: "apparel",
      price: 1499,
      originalPrice: 1899,
      badge: "",
      rating: 4.3,
      reviews: 98,
      image: "https://picsum.photos/seed/compression/400/400.jpg",
      desc: "Tight-fit compression shirt for maximum performance. UV protection and anti-odor technology.",
      popular: false,
    },
    {
      id: 7,
      name: "Adjustable Dumbbells 24kg",
      category: "equipment",
      price: 8999,
      originalPrice: 12999,
      badge: "30% Off",
      rating: 4.9,
      reviews: 87,
      image: "https://picsum.photos/seed/dumbbells/400/400.jpg",
      desc: "Quick-change adjustable dumbbells from 2.5kg to 24kg per hand. Space-saving design.",
      popular: true,
    },
    {
      id: 8,
      name: "Resistance Band Set",
      category: "equipment",
      price: 699,
      originalPrice: 999,
      badge: "",
      rating: 4.5,
      reviews: 204,
      image: "https://picsum.photos/seed/bands/400/400.jpg",
      desc: "Set of 5 resistance bands with varying tensions. Includes door anchor and carry bag.",
      popular: false,
    },
    {
      id: 9,
      name: "Yoga Mat Premium",
      category: "equipment",
      price: 1299,
      originalPrice: 1799,
      badge: "",
      rating: 4.6,
      reviews: 156,
      image: "https://picsum.photos/seed/yogamat/400/400.jpg",
      desc: "6mm thick eco-friendly TPE yoga mat. Non-slip, dual-color. Includes carry strap.",
      popular: false,
    },
    {
      id: 10,
      name: "Forge Shaker 700ml",
      category: "accessories",
      price: 399,
      originalPrice: 599,
      badge: "",
      rating: 4.2,
      reviews: 445,
      image: "https://picsum.photos/seed/shaker/400/400.jpg",
      desc: "BPA-free shaker with mixing ball and storage compartment. Leak-proof lid.",
      popular: false,
    },
    {
      id: 11,
      name: "Gym Gloves Pro",
      category: "accessories",
      price: 599,
      originalPrice: 799,
      badge: "",
      rating: 4.4,
      reviews: 189,
      image: "https://picsum.photos/seed/gloves/400/400.jpg",
      desc: "Padded palm gym gloves with wrist support. Breathable mesh back. Sizes: S, M, L, XL.",
      popular: false,
    },
    {
      id: 12,
      name: "Gym Bag Tactical",
      category: "accessories",
      price: 1999,
      originalPrice: 2999,
      badge: "33% Off",
      rating: 4.7,
      reviews: 73,
      image: "https://picsum.photos/seed/gymbag/400/400.jpg",
      desc: "40L tactical gym bag with shoe compartment, wet pocket, and laptop sleeve. Water-resistant.",
      popular: true,
    },
    {
      id: 13,
      name: "Creatine Monohydrate",
      category: "supplements",
      price: 999,
      originalPrice: 1399,
      badge: "",
      rating: 4.7,
      reviews: 198,
      image: "https://picsum.photos/seed/creatine/400/400.jpg",
      desc: "Micronized creatine monohydrate 5g per serving. 60 servings. Unflavored.",
      popular: false,
    },
    {
      id: 14,
      name: "Multivitamin Sport",
      category: "supplements",
      price: 799,
      originalPrice: 1099,
      badge: "",
      rating: 4.3,
      reviews: 145,
      image: "https://picsum.photos/seed/multi/400/400.jpg",
      desc: "Complete sports multivitamin with minerals, omega-3, and probiotics. 90 tablets.",
      popular: false,
    },
    {
      id: 15,
      name: "Hoodie Forge Black",
      category: "apparel",
      price: 1899,
      originalPrice: 2499,
      badge: "Limited",
      rating: 4.8,
      reviews: 56,
      image: "https://picsum.photos/seed/hoodie/400/400.jpg",
      desc: "Premium heavyweight cotton hoodie with embroidered H2O FITNESS SINGUR logo. Oversized fit. Sizes: S, M, L, XL, XXL.",
      popular: true,
    },
    {
      id: 16,
      name: "Foam Roller Pro",
      category: "equipment",
      price: 899,
      originalPrice: 1299,
      badge: "",
      rating: 4.5,
      reviews: 112,
      image: "https://picsum.photos/seed/roller/400/400.jpg",
      desc: "High-density textured foam roller for deep tissue massage. 45cm length.",
      popular: false,
    },
    {
      id: 17,
      name: "Lifting Belt Leather",
      category: "accessories",
      price: 2499,
      originalPrice: 3499,
      badge: "",
      rating: 4.9,
      reviews: 64,
      image: "https://picsum.photos/seed/belt/400/400.jpg",
      desc: "Genuine leather powerlifting belt. 10mm thickness, single prong. Sizes: S, M, L, XL.",
      popular: false,
    },
    {
      id: 18,
      name: "Jump Rope Speed",
      category: "accessories",
      price: 499,
      originalPrice: 699,
      badge: "",
      rating: 4.3,
      reviews: 221,
      image: "https://picsum.photos/seed/jumprope/400/400.jpg",
      desc: "Adjustable speed jump rope with ball bearings. Lightweight aluminum handles.",
      popular: false,
    },
  ];

  // ---- PRICING PLANS ----
  const PRICING_PLANS = [
    {
      name: "Starter",
      monthly: 1499,
      yearly: 14390,
      desc: "Perfect for beginners starting their fitness journey.",
      features: [
        { text: "Gym floor access", included: true },
        { text: "Locker room access", included: true },
        { text: "Basic fitness assessment", included: true },
        { text: "2 group classes/week", included: true },
        { text: "Personal training", included: false },
        { text: "Nutrition consultation", included: false },
        { text: "Recovery lounge", included: false },
        { text: "Sauna & steam", included: false },
      ],
      featured: false,
    },
    {
      name: "Pro",
      monthly: 2999,
      yearly: 28790,
      desc: "For dedicated athletes who want more out of their training.",
      features: [
        { text: "Full gym access 24/7", included: true },
        { text: "Locker room + towel service", included: true },
        { text: "Comprehensive fitness assessment", included: true },
        { text: "Unlimited group classes", included: true },
        { text: "2 PT sessions/month", included: true },
        { text: "Nutrition consultation", included: true },
        { text: "Recovery lounge", included: false },
        { text: "Sauna & steam", included: false },
      ],
      featured: true,
    },
    {
      name: "Elite",
      monthly: 4999,
      yearly: 47990,
      desc: "The ultimate membership with everything included.",
      features: [
        { text: "Full gym access 24/7", included: true },
        { text: "Premium locker + laundry", included: true },
        { text: "Advanced body composition scan", included: true },
        { text: "Unlimited all classes", included: true },
        { text: "4 PT sessions/month", included: true },
        { text: "Monthly nutrition plan", included: true },
        { text: "Recovery lounge access", included: true },
        { text: "Sauna, steam & ice bath", included: true },
      ],
      featured: false,
    },
  ];

  // ---- TRAINERS ----
  const TRAINERS = [
    {
      id: 1,
      name: "Subhendu Das(Founder)",
      specialty: "Strength & Conditioning",
      experience: "12 years",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyLd0FcCo5tXLGcVrGyWA4gsMoh0U-3nacg&s",
      socials: { instagram: "#", youtube: "#" },
    },
    {
      id: 2,
      name: "Debasmita Das",
      specialty: "Yoga & Pilates",
      experience: "8 years",
      image: "https://i1.feedspot.com/original/7309852.jpg?t=1777876581",
      socials: { instagram: "#", youtube: "#" },
    },
    {
      id: 3,
      name: "Rahul Verma",
      specialty: "CrossFit & HIIT",
      experience: "10 years",
      image:
        "https://engage4more.com/blog/wp-content/uploads/2023/05/Nupur-Shikare.jpg",
      socials: { instagram: "#", youtube: "#" },
    },
    {
      id: 4,
      name: "Neha Gupta",
      specialty: "Personal Training",
      experience: "7 years",
      image:
        "https://i.pinimg.com/736x/56/9d/06/569d061eed9eb7891654284fd80309d5.jpg",
      socials: { instagram: "#", youtube: "#" },
    },
    {
      id: 5,
      name: "Vikram Singh",
      specialty: "Sports Performance",
      experience: "15 years",
      image: "https://picsum.photos/seed/trainer5/400/500.jpg",
      socials: { instagram: "#", youtube: "#" },
    },
    {
      id: 6,
      name: "Anita Desai",
      specialty: "Nutrition & Wellness",
      experience: "9 years",
      image: "https://picsum.photos/seed/trainer6/400/500.jpg",
      socials: { instagram: "#", youtube: "#" },
    },
  ];

  // ---- REVIEWS (Google Rating Slider Content) ----
  const REVIEWS = [
    {
      name: "Rohit Kapoor",
      initial: "RK",
      rating: 5,
      date: "2 weeks ago",
      text: "Absolutely incredible gym! The equipment is top-notch, trainers are always helpful, and the community vibe keeps me motivated. Best decision I made joining H2O FITNESS SINGUR.",
    },
    {
      name: "Simran Patel",
      initial: "SP",
      rating: 5,
      date: "1 month ago",
      text: "The yoga classes here are transformative. Priya ma'am is an exceptional instructor. The studio space is serene and well-maintained. Highly recommend!",
    },
    {
      name: "Amit Joshi",
      initial: "AJ",
      rating: 5,
      date: "3 weeks ago",
      text: "I lost 20 kgs in 6 months at H2O FITNESS SINGUR. The personal training program is worth every rupee. My trainer kept me accountable and pushed me beyond my limits.",
    },
    {
      name: "Kavita Reddy",
      initial: "KR",
      rating: 4,
      date: "1 month ago",
      text: "Great facility with amazing ambiance. The only reason for 4 stars is the parking could be better. Otherwise, the trainers and equipment are world-class.",
    },
    {
      name: "Deepak Nair",
      initial: "DN",
      rating: 5,
      date: "2 months ago",
      text: "The CrossFit program here is intense and well-structured. Coach Rahul ensures perfect form while pushing your limits. The community is super supportive.",
    },
    {
      name: "Pooja Mehta",
      initial: "PM",
      rating: 5,
      date: "3 months ago",
      text: "Best gym in the city, hands down! Clean, well-equipped, and the 24/7 access is a game-changer for someone like me with odd working hours.",
    },
    {
      name: "Sanjay Kumar",
      initial: "SK",
      rating: 5,
      date: "1 week ago",
      text: "My transformation at H2O FITNESS SINGUR has been incredible. Went from 110kg to 82kg in 8 months. The nutrition guidance combined with training is the complete package.",
    },
    {
      name: "Nisha Agarwal",
      initial: "NA",
      rating: 4,
      date: "2 months ago",
      text: "Love the women-only training hours! Feel comfortable and the female trainers are excellent. The recovery lounge is a nice touch after intense sessions.",
    },
    {
      name: "Varun Malhotra",
      initial: "VM",
      rating: 5,
      date: "3 weeks ago",
      text: "As a competitive athlete, I need a gym that matches my intensity. H2O FITNESS SINGUR delivers every single time. The Olympic lifting platforms are championship-grade.",
    },
  ];

  // ---- BLOG POSTS ----
  const BLOG_POSTS = [
    {
      id: 1,
      title: "The Science Behind Progressive Overload",
      category: "training",
      date: "Jan 10, 2025",
      readTime: "6 min",
      image:
        "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/woman-lifting-weights-1296x728-header.jpg?w=1155&h=1528",
      excerpt:
        "Understanding the fundamental principle that drives muscle growth and strength gains.",
      content: `<h3>What is Progressive Overload?</h3><p>Progressive overload is the gradual increase of stress placed on the body during exercise. It's the core principle behind all strength and muscle gains. Without it, your body has no reason to adapt and grow stronger.</p><h3>How to Apply It</h3><p>There are several ways to implement progressive overload: increasing weight, increasing reps, increasing sets, decreasing rest time, or improving form and range of motion. The key is consistency and patience.</p><h3>Tracking Progress</h3><p>Keep a training log. Record every set, rep, and weight. This data is invaluable for ensuring you're actually progressing. Even a 1kg increase per week compounds dramatically over a year.</p><ul><li>Increase weight by 2.5-5% when you hit your rep targets</li><li>Don't increase weight at the expense of form</li><li>Deload every 4-6 weeks to manage fatigue</li></ul>`,
    },
    {
      id: 2,
      title: "Complete Guide to Post-Workout Nutrition",
      category: "nutrition",
      date: "Jan 5, 2025",
      readTime: "8 min",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG67p1H2Tkhxrihw70lXkEvLRa_0i_4--muw&s",
      excerpt:
        "What to eat after your workout for optimal recovery and muscle growth.",
      content: `<h3>The Anabolic Window</h3><p>While the "30-minute window" is somewhat of a myth, consuming nutrients within 2 hours post-workout is beneficial for recovery. Your muscles are primed to absorb nutrients during this period.</p><h3>Protein Requirements</h3><p>Aim for 20-40g of high-quality protein after training. Whey protein is fast-digesting and ideal, but whole food sources like chicken, eggs, or fish work equally well.</p><h3>Carbohydrates Matter</h3><p>Carbs are crucial for replenishing glycogen stores. A 2:1 carb-to-protein ratio is a good starting point for most people after intense training.</p>`,
    },
    {
      id: 3,
      title: "5 Morning Habits of Fit People",
      category: "lifestyle",
      date: "Dec 28, 2024",
      readTime: "5 min",
      image:
        "https://manflowyoga.com/wp-content/uploads/2016/08/5-Morning-Habits_basic-yoga-sequence-865x504.jpg",
      excerpt:
        "Start your day like the fittest people do with these proven morning routines.",
      content: `<h3>1. Hydrate First Thing</h3><p>After 7-8 hours of sleep, your body is dehydrated. Drinking 500ml of water immediately upon waking kickstarts your metabolism and rehydrates your cells.</p><h3>2. Move Your Body</h3><p>Whether it's a full workout, a 10-minute stretch, or a brisk walk, morning movement sets a positive tone for the entire day and boosts energy levels.</p><h3>3. Eat a Protein-Rich Breakfast</h3><p>Starting your day with 30g+ of protein stabilizes blood sugar and reduces cravings throughout the day.</p>`,
    },
    {
      id: 4,
      title: "Foam Rolling: The Complete Recovery Guide",
      category: "recovery",
      date: "Dec 20, 2024",
      readTime: "7 min",
      image: "https://picsum.photos/seed/blog4/600/400.jpg",
      excerpt:
        "How self-myofascial release can improve your recovery and performance.",
      content: `<h3>What is Foam Rolling?</h3><p>Self-myofascial release (SMR) is a technique where you apply pressure to specific points on your body to aid muscle recovery. Foam rolling is the most popular SMR method.</p><h3>Key Areas to Target</h3><p>Focus on the calves, IT band, quadriceps, hamstrings, and upper back. Spend 30-60 seconds on each tender spot.</p><h3>When to Foam Roll</h3><p>Before training as part of your warm-up, and after training to reduce DOMS. Can also be done on rest days for active recovery.</p>`,
    },
    {
      id: 5,
      title: "How to Build Your First Workout Program",
      category: "training",
      date: "Dec 15, 2024",
      readTime: "10 min",
      image: "https://picsum.photos/seed/blog5/600/400.jpg",
      excerpt:
        "A step-by-step guide to creating an effective training program as a beginner.",
      content: `<h3>Step 1: Define Your Goals</h3><p>Are you training for strength, muscle gain, fat loss, or general fitness? Your goal determines your rep ranges, exercise selection, and training split.</p><h3>Step 2: Choose Your Split</h3><p>Beginners do well with 3 full-body sessions per week. Intermediate lifters can move to an upper/lower or push/pull/legs split.</p><h3>Step 3: Select Compound Movements</h3><p>Base your program around squats, deadlifts, bench press, overhead press, rows, and pull-ups. These give the most return on investment.</p>`,
    },
    {
      id: 6,
      title: "Understanding Macronutrients for Fat Loss",
      category: "nutrition",
      date: "Dec 8, 2024",
      readTime: "9 min",
      image: "https://picsum.photos/seed/blog6/600/400.jpg",
      excerpt:
        "The role of proteins, carbs, and fats in achieving sustainable fat loss.",
      content: `<h3>Calories First</h3><p>Fat loss ultimately comes down to a caloric deficit. You must consume fewer calories than you burn. However, the quality and composition of those calories matter significantly.</p><h3>Protein is King</h3><p>During a deficit, protein preserves muscle mass, increases satiety, and has the highest thermic effect. Aim for 1.6-2.2g per kg of bodyweight.</p><h3>Don't Fear Carbs</h3><p>Carbohydrates fuel your training. Cutting them too low leads to poor performance and eventual burnout. Time them around your workouts.</p>`,
    },
  ];

  // ---- TRANSFORMATIONS ----
  const TRANSFORMATIONS = [
    {
      name: "Rohit Kapoor",
      duration: "6 months",
      before: "https://picsum.photos/seed/tf-before1/600/400.jpg",
      after: "https://picsum.photos/seed/tf-after1/600/400.jpg",
    },
    {
      name: "Simran Patel",
      duration: "8 months",
      before: "https://picsum.photos/seed/tf-before2/600/400.jpg",
      after: "https://picsum.photos/seed/tf-after2/600/400.jpg",
    },
    {
      name: "Amit Joshi",
      duration: "5 months",
      before: "https://picsum.photos/seed/tf-before3/600/400.jpg",
      after: "https://picsum.photos/seed/tf-after3/600/400.jpg",
    },
    {
      name: "Kavita Reddy",
      duration: "10 months",
      before: "https://picsum.photos/seed/tf-before4/600/400.jpg",
      after: "https://picsum.photos/seed/tf-after4/600/400.jpg",
    },
  ];

  // ---- GALLERY IMAGES ----
  const GALLERY_IMAGES = [
    {
      src: "https://picsum.photos/seed/gallery1/600/400.jpg",
      category: "facility",
      title: "Main Training Floor",
    },
    {
      src: "https://picsum.photos/seed/gallery2/600/800.jpg",
      category: "facility",
      title: "Cardio Zone",
    },
    {
      src: "https://picsum.photos/seed/gallery3/600/450.jpg",
      category: "training",
      title: "Group HIIT Session",
    },
    {
      src: "https://picsum.photos/seed/gallery4/600/500.jpg",
      category: "events",
      title: "Annual Fitness Challenge",
    },
    {
      src: "https://picsum.photos/seed/gallery5/600/600.jpg",
      category: "community",
      title: "Weekend Run Club",
    },
    {
      src: "https://picsum.photos/seed/gallery6/600/400.jpg",
      category: "facility",
      title: "Free Weights Area",
    },
    {
      src: "https://picsum.photos/seed/gallery7/600/700.jpg",
      category: "training",
      title: "Personal Training",
    },
    {
      src: "https://picsum.photos/seed/gallery8/600/450.jpg",
      category: "events",
      title: "Nutrition Workshop",
    },
    {
      src: "https://picsum.photos/seed/gallery9/600/500.jpg",
      category: "community",
      title: "Yoga in the Park",
    },
    {
      src: "https://picsum.photos/seed/gallery10/600/400.jpg",
      category: "facility",
      title: "Recovery Lounge",
    },
    {
      src: "https://picsum.photos/seed/gallery11/600/550.jpg",
      category: "training",
      title: "CrossFit WOD",
    },
    {
      src: "https://picsum.photos/seed/gallery12/600/400.jpg",
      category: "events",
      title: "Member Appreciation Day",
    },
  ];

  // ---- FAQS ----
  const FAQS = [
    {
      q: "What are the gym timings?",
      a: "We are open 24/7 for Pro and Elite members. For Starter members, the gym is accessible from 5:00 AM to 11:00 PM. Staff and trainers are available from 6:00 AM to 10:00 PM.",
    },
    {
      q: "Do I need to be experienced to join?",
      a: "Absolutely not! We welcome all fitness levels. Our trainers will design a program suited to your current ability and goals. We also offer beginner-friendly group classes.",
    },
    {
      q: "Is there a free trial available?",
      a: "Yes! We offer a complimentary 3-day trial for all new members. You can experience our facility, attend group classes, and meet our trainers before committing.",
    },
    {
      q: "What should I bring on my first day?",
      a: "Bring comfortable workout clothes, sports shoes, a water bottle, and a towel. We provide lockers, so you can safely store your belongings. Shower facilities are available.",
    },
    {
      q: "Can I freeze my membership?",
      a: "Yes, Pro and Elite members can freeze their membership for up to 30 days per year at no additional charge. Starter members can freeze for 15 days per year.",
    },
    {
      q: "Are personal trainers certified?",
      a: "All our trainers hold internationally recognized certifications from ACE, NASM, or ISSA. They undergo regular continuing education to stay updated with the latest training methodologies.",
    },
    {
      q: "Is there parking available?",
      a: "Yes, we have a dedicated parking area for both two-wheelers and four-wheelers. It's free for all members during their visit.",
    },
    {
      q: "Do you offer nutrition guidance?",
      a: "Pro and Elite members receive nutrition consultations as part of their plan. We also have a nutrition café and supplement bar on-site for all members.",
    },
    {
      q: "What COVID-19 safety measures are in place?",
      a: "We follow strict hygiene protocols including regular sanitization, air purification systems, spaced-out equipment, and temperature checks. Your safety is our priority.",
    },
    {
      q: "Can I cancel my membership anytime?",
      a: "Yes, there are no long-term contracts. Monthly memberships can be cancelled with 15 days notice. Yearly memberships have a prorated refund policy.",
    },
  ];

  // ---- PROGRAMS DATA ----
  const PROGRAMS = [
    {
      id: "strength",
      category: "strength",
      name: "Strength Training",
      image: "https://picsum.photos/seed/prog-strength/600/400.jpg",
      desc: "Build raw power and sculpt your physique with progressive overload methods, compound movements, and periodized programming.",
      tags: [
        "Barbell Training",
        "Powerlifting",
        "Hypertrophy",
        "4-5 days/week",
      ],
    },
    {
      id: "hiit",
      category: "cardio",
      name: "HIIT & Cardio",
      image: "https://picsum.photos/seed/prog-hiit/600/400.jpg",
      desc: "Torch calories and boost cardiovascular endurance with high-intensity interval sessions designed to maximize fat burning.",
      tags: ["Fat Loss", "Endurance", "Circuit Training", "3-4 days/week"],
    },
    {
      id: "yoga",
      category: "yoga",
      name: "Yoga & Flexibility",
      image: "https://picsum.photos/seed/prog-yoga/600/400.jpg",
      desc: "Find balance, improve mobility, and reduce stress through mindful movement practices ranging from Hatha to Vinyasa.",
      tags: ["Hatha Yoga", "Vinyasa Flow", "Meditation", "3-5 days/week"],
    },
    {
      id: "crossfit",
      category: "crossfit",
      name: "CrossFit WOD",
      image: "https://picsum.photos/seed/prog-crossfit/600/400.jpg",
      desc: "Push boundaries with constantly varied functional movements performed at high intensity in a supportive community.",
      tags: ["Olympic Lifts", "Gymnastics", "MetCon", "5 days/week"],
    },
    {
      id: "personal",
      category: "personal",
      name: "Personal Training",
      image: "https://picsum.photos/seed/prog-personal/600/400.jpg",
      desc: "One-on-one coaching with a dedicated trainer who creates a fully customized program based on your goals and assessment.",
      tags: [
        "Custom Program",
        "1-on-1 Coaching",
        "Goal-Specific",
        "Flexible Schedule",
      ],
    },
    {
      id: "pilates",
      category: "yoga",
      name: "Pilates Core",
      image: "https://picsum.photos/seed/prog-pilates/600/400.jpg",
      desc: "Strengthen your core, improve posture, and enhance body awareness with controlled Pilates movements and breathing techniques.",
      tags: ["Core Strength", "Posture", "Reformer", "3 days/week"],
    },
  ];

  /* ============================================
       2. ROUTING SYSTEM
       ============================================ */
  const Router = {
    currentPage: "home",
    pages: [
      "home",
      "about",
      "programs",
      "transformation",
      "trainers",
      "pricing",
      "shop",
      "blog",
      "blog-post",
      "gallery",
      "contact",
      "privacy-policy",
      "terms-conditions",
      "refund-policy",
      "cookie-policy",
      "disclaimer",
      "shipping-policy",
    ],

    init() {
      // Handle hash changes
      window.addEventListener("hashchange", () => this.route());
      // Also handle link clicks with data-nav
      document.addEventListener("click", (e) => {
        const navLink = e.target.closest("[data-nav]");
        if (navLink) {
          e.preventDefault();
          const page = navLink.getAttribute("data-nav");
          this.navigate(page);
        }
      });
      // Initial route
      this.route();
    },

    navigate(page) {
      if (!this.pages.includes(page)) page = "home";
      window.location.hash = page;
    },

    route() {
      let hash = window.location.hash.replace("#", "") || "home";
      if (!this.pages.includes(hash)) hash = "home";
      this.showPage(hash);
      this.currentPage = hash;
    },

    showPage(pageName) {
      // Hide all pages
      document.querySelectorAll(".page").forEach((p) => {
        p.style.display = "none";
      });
      // Show target page
      const targetPage = document.getElementById("page-" + pageName);
      if (targetPage) {
        targetPage.style.display = "block";
      }
      // Update nav active states
      document
        .querySelectorAll(".nav-link, .mobile-nav-link")
        .forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("data-nav") === pageName) {
            link.classList.add("active");
          }
        });
      // Close mobile menu if open
      const mobileMenu = document.getElementById("mobileMenu");
      if (mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        document.getElementById("overlay").classList.remove("active");
        document.getElementById("hamburger").classList.remove("active");
      }
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Re-observe animations
      setTimeout(() => AnimationObserver.observe(), 100);
      // Trigger page-specific initializations
      if (pageName === "shop") Shop.render();
      if (pageName === "blog") Blog.render();
      if (pageName === "gallery") Gallery.render();
      if (pageName === "programs") Programs.render();
      if (pageName === "transformation") TransformationPage.render();
      if (pageName === "trainers") TrainersPage.render();
      if (pageName === "pricing") PricingPage.render();
      if (pageName === "contact") PolicyPages.renderContact();
    },
  };

  /* ============================================
       3. NAVIGATION
       ============================================ */
  const Navigation = {
    init() {
      const navbar = document.getElementById("navbar");
      const hamburger = document.getElementById("hamburger");
      const mobileMenu = document.getElementById("mobileMenu");
      const mobileMenuClose = document.getElementById("mobileMenuClose");
      const overlay = document.getElementById("overlay");

      // Scroll behavior for navbar
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      // Hamburger toggle
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("open");
        overlay.classList.toggle("active");
      });

      mobileMenuClose.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("open");
        overlay.classList.remove("active");
      });

      overlay.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("open");
        overlay.classList.remove("active");
        document.getElementById("themePanel").classList.remove("open");
        document.getElementById("cartSidebar").classList.remove("open");
      });

      // Dropdown filter links on nav
      document
        .querySelectorAll(".dropdown-menu a[data-filter]")
        .forEach((link) => {
          link.addEventListener("click", (e) => {
            const filter = e.target.getAttribute("data-filter");
            localStorage.setItem("programFilter", filter);
          });
        });
    },
  };

  /* ============================================
       4. THEME SYSTEM
       ============================================ */
  const ThemeSystem = {
    init() {
      // Load saved theme
      const savedTheme = localStorage.getItem("ff-theme") || "dark";
      const savedAccent = localStorage.getItem("ff-accent") || "red";
      const savedFontSize = localStorage.getItem("ff-fontSize") || "16";
      const savedRadius = localStorage.getItem("ff-radius") || "12";
      const savedAnimations = localStorage.getItem("ff-animations") !== "false";

      this.setMode(savedTheme);
      this.setAccent(savedAccent);
      this.setFontSize(savedFontSize);
      this.setRadius(savedRadius);
      this.setAnimations(savedAnimations);

      // Theme panel toggle
      document
        .getElementById("themePanelToggle")
        .addEventListener("click", () => {
          document.getElementById("themePanel").classList.toggle("open");
          document.getElementById("overlay").classList.toggle("active");
        });

      document
        .getElementById("themePanelClose")
        .addEventListener("click", () => {
          document.getElementById("themePanel").classList.remove("open");
          document.getElementById("overlay").classList.remove("active");
        });

      // Mode buttons
      document.querySelectorAll(".mode-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const mode = btn.getAttribute("data-mode");
          this.setMode(mode);
          document
            .querySelectorAll(".mode-btn")
            .forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
        });
      });

      // Accent buttons
      document.querySelectorAll(".accent-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const accent = btn.getAttribute("data-accent");
          this.setAccent(accent);
          document
            .querySelectorAll(".accent-btn")
            .forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
        });
      });

      // Custom color picker
      const picker = document.getElementById("customAccentPicker");
      const hexDisplay = document.getElementById("colorHexDisplay");
      picker.addEventListener("input", () => {
        hexDisplay.textContent = picker.value.toUpperCase();
      });
      document
        .getElementById("applyCustomColor")
        .addEventListener("click", () => {
          this.setCustomAccent(picker.value);
          document
            .querySelectorAll(".accent-btn")
            .forEach((b) => b.classList.remove("active"));
        });

      // Font size slider
      document
        .getElementById("fontSizeSlider")
        .addEventListener("input", (e) => {
          this.setFontSize(e.target.value);
        });

      // Radius slider
      document.getElementById("radiusSlider").addEventListener("input", (e) => {
        this.setRadius(e.target.value);
      });

      // Animation toggle
      document.getElementById("animToggle").addEventListener("change", (e) => {
        this.setAnimations(e.target.checked);
      });
    },

    setMode(mode) {
      document.documentElement.setAttribute("data-theme", mode);
      localStorage.setItem("ff-theme", mode);
      document.querySelectorAll(".mode-btn").forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-mode") === mode);
      });
    },

    setAccent(accent) {
      document.documentElement.setAttribute("data-accent", accent);
      localStorage.setItem("ff-accent", accent);
    },

    setCustomAccent(hex) {
      document.documentElement.removeAttribute("data-accent");
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      document.documentElement.style.setProperty("--accent", hex);
      document.documentElement.style.setProperty(
        "--accent-hover",
        this.darkenColor(hex, 20),
      );
      document.documentElement.style.setProperty(
        "--accent-light",
        `rgba(${r},${g},${b},0.15)`,
      );
      document.documentElement.style.setProperty(
        "--accent-glow",
        `rgba(${r},${g},${b},0.4)`,
      );
      document.documentElement.style.setProperty(
        "--accent-rgb",
        `${r},${g},${b}`,
      );
      localStorage.setItem("ff-custom-accent", hex);
      localStorage.removeItem("ff-accent");
    },

    darkenColor(hex, amount) {
      let r = parseInt(hex.slice(1, 3), 16) - amount;
      let g = parseInt(hex.slice(3, 5), 16) - amount;
      let b = parseInt(hex.slice(5, 7), 16) - amount;
      r = Math.max(0, r);
      g = Math.max(0, g);
      b = Math.max(0, b);
      return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
    },

    setFontSize(size) {
      document.documentElement.style.setProperty(
        "--font-size-base",
        size + "px",
      );
      localStorage.setItem("ff-fontSize", size);
    },

    setRadius(radius) {
      const r = parseInt(radius);
      document.documentElement.style.setProperty("--border-radius", r + "px");
      document.documentElement.style.setProperty(
        "--border-radius-sm",
        Math.max(4, r - 4) + "px",
      );
      document.documentElement.style.setProperty(
        "--border-radius-lg",
        r + 4 + "px",
      );
      document.documentElement.style.setProperty(
        "--border-radius-xl",
        r + 12 + "px",
      );
      localStorage.setItem("ff-radius", radius);
    },

    setAnimations(enabled) {
      if (enabled) {
        document.body.classList.remove("no-animations");
      } else {
        document.body.classList.add("no-animations");
      }
      document.getElementById("animToggle").checked = enabled;
      localStorage.setItem("ff-animations", enabled);
    },
  };

  /* ============================================
       5. PRELOADER
       ============================================ */
  const Preloader = {
    init() {
      window.addEventListener("load", () => {
        setTimeout(() => {
          document.getElementById("preloader").classList.add("hidden");
        }, 1200);
      });
    },
  };

  /* ============================================
       6. CUSTOM CURSOR
       ============================================ */
  const CustomCursor = {
    init() {
      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
        return;

      const cursor = document.getElementById("custom-cursor");
      const dot = cursor.querySelector(".cursor-dot");
      const ring = cursor.querySelector(".cursor-ring");
      let mx = 0,
        my = 0,
        dx = 0,
        dy = 0;

      document.addEventListener("mousemove", (e) => {
        mx = e.clientX;
        my = e.clientY;
      });

      const animate = () => {
        dx += (mx - dx) * 0.15;
        dy += (my - dy) * 0.15;
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
        ring.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
        requestAnimationFrame(animate);
      };
      animate();

      // Hover effect on interactive elements
      const hoverTargets =
        "a, button, input, select, textarea, .filter-btn, .product-card, .gallery-item, .ba-slider";
      document.querySelectorAll(hoverTargets).forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
        el.addEventListener("mouseleave", () =>
          cursor.classList.remove("hover"),
        );
      });
    },
  };

  /* ============================================
       7. ANIMATIONS (Intersection Observer)
       ============================================ */
  const AnimationObserver = {
    observer: null,

    init() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = entry.target.getAttribute("data-delay") || 0;
              setTimeout(() => {
                entry.target.classList.add("animated");
              }, parseInt(delay));
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
      );

      this.observe();
    },

    observe() {
      document.querySelectorAll("[data-animate]").forEach((el) => {
        if (!el.classList.contains("animated")) {
          this.observer.observe(el);
        }
      });
    },
  };

  /* ============================================
       8. HERO SECTION
       ============================================ */
  const HeroSection = {
    init() {
      this.createParticles();
      this.initCounters();
    },

    createParticles() {
      const container = document.getElementById("heroParticles");
      if (!container) return;
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.width = Math.random() * 4 + 2 + "px";
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 8 + "s";
        particle.style.animationDuration = Math.random() * 6 + 6 + "s";
        container.appendChild(particle);
      }
    },

    initCounters() {
      const counters = document.querySelectorAll("[data-count]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 },
      );

      counters.forEach((counter) => observer.observe(counter));
    },

    animateCounter(el) {
      const target = parseInt(el.getAttribute("data-count"));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current).toLocaleString();
      }, 16);
    },
  };

  /* ============================================
       9. BEFORE/AFTER SLIDER
       ============================================ */
  const BASlider = {
    init() {
      document.querySelectorAll(".ba-slider").forEach((slider) => {
        this.setupSlider(slider);
      });
    },

    setupSlider(slider) {
      const afterImg = slider.querySelector(".ba-after");
      const handle = slider.querySelector(".ba-handle");
      let isDragging = false;

      const updatePosition = (x) => {
        const rect = slider.getBoundingClientRect();
        let pos = ((x - rect.left) / rect.width) * 100;
        pos = Math.max(0, Math.min(100, pos));
        afterImg.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
        handle.style.left = pos + "%";
      };

      slider.addEventListener("mousedown", () => (isDragging = true));
      slider.addEventListener("touchstart", () => (isDragging = true));
      document.addEventListener("mouseup", () => (isDragging = false));
      document.addEventListener("touchend", () => (isDragging = false));

      slider.addEventListener("mousemove", (e) => {
        if (isDragging) updatePosition(e.clientX);
      });

      slider.addEventListener("touchmove", (e) => {
        if (isDragging) updatePosition(e.touches[0].clientX);
      });

      slider.addEventListener("click", (e) => {
        updatePosition(e.clientX);
      });
    },
  };

  /* ============================================
       10. REVIEWS SLIDER
       ============================================ */
  const ReviewsSlider = {
    currentSlide: 0,
    slidesPerView: 3,

    init() {
      this.render();
      this.slidesPerView =
        window.innerWidth <= 640 ? 1 : window.innerWidth <= 1024 ? 2 : 3;

      document
        .getElementById("reviewPrev")
        .addEventListener("click", () => this.prev());
      document
        .getElementById("reviewNext")
        .addEventListener("click", () => this.next());

      window.addEventListener("resize", () => {
        this.slidesPerView =
          window.innerWidth <= 640 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
        this.updatePosition();
      });
    },

    render() {
      const track = document.getElementById("reviewsTrack");
      const dots = document.getElementById("reviewDots");
      if (!track || !dots) return;

      track.innerHTML = REVIEWS.map(
        (r) => `
                <div class="review-card">
                    <div class="review-header">
                        <div class="review-avatar">${r.initial}</div>
                        <div>
                            <div class="review-name">${r.name}</div>
                            <div class="review-date">${r.date}</div>
                        </div>
                    </div>
                    <div class="review-stars">
                        ${'<i class="fas fa-star"></i>'.repeat(r.rating)}${'<i class="far fa-star"></i>'.repeat(5 - r.rating)}
                    </div>
                    <div class="review-text">${r.text}</div>
                </div>
            `,
      ).join("");

      const totalDots = Math.ceil(REVIEWS.length - this.slidesPerView + 1);
      dots.innerHTML = "";
      for (let i = 0; i < Math.max(1, totalDots); i++) {
        const dot = document.createElement("div");
        dot.className = "review-dot" + (i === 0 ? " active" : "");
        dot.addEventListener("click", () => this.goTo(i));
        dots.appendChild(dot);
      }
    },

    prev() {
      if (this.currentSlide > 0) this.currentSlide--;
      this.updatePosition();
    },

    next() {
      const maxSlide = REVIEWS.length - this.slidesPerView;
      if (this.currentSlide < maxSlide) this.currentSlide++;
      this.updatePosition();
    },

    goTo(index) {
      this.currentSlide = index;
      this.updatePosition();
    },

    updatePosition() {
      const track = document.getElementById("reviewsTrack");
      if (!track) return;
      const cardWidth = track.children[0]
        ? track.children[0].offsetWidth + 24
        : 0;
      track.style.transform = `translateX(-${this.currentSlide * cardWidth}px)`;
      // Update dots
      document.querySelectorAll(".review-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === this.currentSlide);
      });
    },
  };

  /* ============================================
       11. PRICING
       ============================================ */
  const Pricing = {
    isYearly: false,

    init() {
      this.render("pricingGrid");
      this.setupToggle("pricingToggle", "monthlyLabel", "yearlyLabel");
    },

    render(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;

      container.innerHTML = PRICING_PLANS.map((plan) => {
        const price = this.isYearly ? plan.yearly : plan.monthly;
        const period = this.isYearly ? "/year" : "/month";
        return `
                    <div class="pricing-card ${plan.featured ? "featured" : ""}">
                        ${plan.featured ? '<div class="pricing-popular">Most Popular</div>' : ""}
                        <div class="pricing-card-name">${plan.name}</div>
                        <div class="pricing-card-price">
                            <span class="currency">₹</span>${price.toLocaleString()}<span class="period">${period}</span>
                        </div>
                        <div class="pricing-card-desc">${plan.desc}</div>
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
                        <a href="#contact" data-nav="contact" class="btn ${plan.featured ? "btn-primary" : "btn-outline"} btn-lg btn-full">
                            <span>Get Started</span>
                        </a>
                    </div>
                `;
      }).join("");
    },

    setupToggle(toggleId, monthlyLabelId, yearlyLabelId) {
      const toggle = document.getElementById(toggleId);
      if (!toggle) return;
      toggle.addEventListener("change", () => {
        this.isYearly = toggle.checked;
        this.render("pricingGrid");
        this.render("pricingGridFull");
        const ml = document.getElementById(monthlyLabelId);
        const yl = document.getElementById(yearlyLabelId);
        if (ml) ml.classList.toggle("active", !this.isYearly);
        if (yl) yl.classList.toggle("active", this.isYearly);
      });
    },
  };

  const PricingPage = {
    render() {
      Pricing.render("pricingGridFull");
      Pricing.setupToggle("pricingToggle2", "monthlyLabel2", "yearlyLabel2");
      this.renderComparison();
    },

    renderComparison() {
      const table = document.getElementById("comparisonTable");
      if (!table) return;

      const features = PRICING_PLANS[0].features.map((f, i) => f.text);
      let html = "<thead><tr><th>Feature</th>";
      PRICING_PLANS.forEach((p) => (html += `<th>${p.name}</th>`));
      html += "</tr></thead><tbody>";

      features.forEach((feature, fi) => {
        html += `<tr><td>${feature}</td>`;
        PRICING_PLANS.forEach((p) => {
          const included = p.features[fi].included;
          html += `<td class="${included ? "check" : "cross"}"><i class="fas ${included ? "fa-check" : "fa-times"}"></i></td>`;
        });
        html += "</tr>";
      });

      html += "</tbody>";
      table.innerHTML = html;
    },
  };

  /* ============================================
       12. FAQ
       ============================================ */
  const FAQ = {
    init() {
      this.render();
    },

    render() {
      const col1 = document.getElementById("faqColumn1");
      const col2 = document.getElementById("faqColumn2");
      if (!col1 || !col2) return;

      const half = Math.ceil(FAQS.length / 2);
      const faqs1 = FAQS.slice(0, half);
      const faqs2 = FAQS.slice(half);

      col1.innerHTML = faqs1.map((f, i) => this.createItem(f, i)).join("");
      col2.innerHTML = faqs2
        .map((f, i) => this.createItem(f, i + half))
        .join("");

      // Click handlers
      document.querySelectorAll(".faq-question").forEach((q) => {
        q.addEventListener("click", () => {
          const item = q.closest(".faq-item");
          const wasActive = item.classList.contains("active");
          // Close all
          document
            .querySelectorAll(".faq-item")
            .forEach((fi) => fi.classList.remove("active"));
          // Open clicked if wasn't active
          if (!wasActive) item.classList.add("active");
        });
      });
    },

    createItem(faq, index) {
      return `
                <div class="faq-item">
                    <button class="faq-question">
                        <span>${faq.q}</span>
                        <div class="faq-icon"><i class="fas fa-plus"></i></div>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-inner">${faq.a}</div>
                    </div>
                </div>
            `;
    },
  };

  /* ============================================
       13. SHOP SYSTEM
       ============================================ */
  const Shop = {
    cart: [],
    currentFilter: "all",
    maxPrice: 10000,
    sortBy: "default",

    init() {
      // Cart toggle
      document
        .getElementById("cartToggle")
        .addEventListener("click", () => this.openCart());
      document
        .getElementById("cartClose")
        .addEventListener("click", () => this.closeCart());

      // Checkout
      document
        .getElementById("cartCheckout")
        .addEventListener("click", () => this.checkout());

      // Shop filters
      document
        .getElementById("shopCategoryFilters")
        .addEventListener("change", () => this.applyFilters());
      document
        .getElementById("priceMin")
        .addEventListener("input", () => this.applyFilters());
      document
        .getElementById("priceMax")
        .addEventListener("input", () => this.applyFilters());
      document
        .getElementById("shopSortBy")
        .addEventListener("change", () => this.applyFilters());
      document
        .getElementById("shopResetFilters")
        .addEventListener("click", () => this.resetFilters());

      // View toggle
      document.querySelectorAll(".view-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          document
            .querySelectorAll(".view-btn")
            .forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          const grid = document.getElementById("productsGrid");
          if (grid)
            grid.classList.toggle(
              "list-view",
              btn.getAttribute("data-view") === "list",
            );
        });
      });

      // Product modal close
      document
        .getElementById("productModalClose")
        .addEventListener("click", () => {
          document.getElementById("productModal").classList.remove("open");
        });

      // Price labels
      document.getElementById("priceMin").addEventListener("input", (e) => {
        document.getElementById("priceMinLabel").textContent =
          "₹" + parseInt(e.target.value).toLocaleString();
      });
      document.getElementById("priceMax").addEventListener("input", (e) => {
        document.getElementById("priceMaxLabel").textContent =
          "₹" + parseInt(e.target.value).toLocaleString();
      });

      // Load saved cart
      const savedCart = localStorage.getItem("ff-cart");
      if (savedCart) {
        try {
          this.cart = JSON.parse(savedCart);
        } catch (e) {
          this.cart = [];
        }
      }
      this.updateCartUI();
    },

    render() {
      this.applyFilters();
    },

    applyFilters() {
      const categoryCheckboxes = document.querySelectorAll(
        "#shopCategoryFilters input",
      );
      let selectedCategories = [];
      categoryCheckboxes.forEach((cb) => {
        if (cb.checked && cb.value !== "all") selectedCategories.push(cb.value);
        if (cb.checked && cb.value === "all") selectedCategories = ["all"];
      });

      const minPrice = parseInt(document.getElementById("priceMin").value) || 0;
      const maxPrice =
        parseInt(document.getElementById("priceMax").value) || 10000;
      this.sortBy = document.getElementById("shopSortBy").value;

      let filtered = PRODUCTS.filter((p) => {
        const catMatch =
          selectedCategories.includes("all") ||
          selectedCategories.length === 0 ||
          selectedCategories.includes(p.category);
        const priceMatch = p.price >= minPrice && p.price <= maxPrice;
        return catMatch && priceMatch;
      });

      // Sort
      switch (this.sortBy) {
        case "price-low":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "name-az":
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-za":
          filtered.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "popular":
          filtered.sort((a, b) => b.popular - a.popular);
          break;
      }

      const grid = document.getElementById("productsGrid");
      const count = document.getElementById("shopResultCount");
      if (!grid) return;

      count.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? "s" : ""}`;

      grid.innerHTML = filtered
        .map(
          (p) => `
                <div class="product-card" data-product-id="${p.id}">
                    <div class="product-card-img" onclick="window.ForgeShop.quickView(${p.id})">
                        <img src="${p.image}" alt="${p.name}" loading="lazy">
                        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
                        <button class="product-quick-view" onclick="event.stopPropagation(); window.ForgeShop.quickView(${p.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    <div class="product-card-body">
                        <div class="product-category">${p.category}</div>
                        <div class="product-name">${p.name}</div>
                        <div class="product-price">
                            <span class="product-price-current">₹${p.price.toLocaleString()}</span>
                            ${p.originalPrice ? `<span class="product-price-original">₹${p.originalPrice.toLocaleString()}</span>` : ""}
                        </div>
                        <div class="product-rating">
                            <span class="product-rating-stars">${'<i class="fas fa-star"></i>'.repeat(Math.floor(p.rating))}${p.rating % 1 ? '<i class="fas fa-star-half-alt"></i>' : ""}</span>
                            <span class="product-rating-count">(${p.reviews})</span>
                        </div>
                        <button class="product-add-cart" onclick="window.ForgeShop.addToCart(${p.id})">
                            <i class="fas fa-shopping-bag"></i> Add to Cart
                        </button>
                    </div>
                </div>
            `,
        )
        .join("");
    },

    resetFilters() {
      document.querySelectorAll("#shopCategoryFilters input").forEach((cb) => {
        cb.checked = cb.value === "all";
      });
      document.getElementById("priceMin").value = 0;
      document.getElementById("priceMax").value = 10000;
      document.getElementById("priceMinLabel").textContent = "₹0";
      document.getElementById("priceMaxLabel").textContent = "₹10,000";
      document.getElementById("shopSortBy").value = "default";
      this.applyFilters();
    },

    addToCart(productId) {
      const product = PRODUCTS.find((p) => p.id === productId);
      if (!product) return;

      const existing = this.cart.find((c) => c.id === productId);
      if (existing) {
        existing.qty++;
      } else {
        this.cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          qty: 1,
        });
      }

      this.saveCart();
      this.updateCartUI();
      Toast.show("success", `${product.name} added to cart!`);
    },

    removeFromCart(productId) {
      this.cart = this.cart.filter((c) => c.id !== productId);
      this.saveCart();
      this.updateCartUI();
    },

    updateQty(productId, delta) {
      const item = this.cart.find((c) => c.id === productId);
      if (!item) return;
      item.qty += delta;
      if (item.qty <= 0) {
        this.removeFromCart(productId);
        return;
      }
      this.saveCart();
      this.updateCartUI();
    },

    saveCart() {
      localStorage.setItem("ff-cart", JSON.stringify(this.cart));
    },

    updateCartUI() {
      const countEl = document.getElementById("cartCount");
      const itemsEl = document.getElementById("cartItems");
      const footerEl = document.getElementById("cartFooter");
      const totalEl = document.getElementById("cartTotal");
      const total = this.cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0,
      );
      const count = this.cart.reduce((sum, item) => sum + item.qty, 0);

      countEl.textContent = count;
      countEl.classList.toggle("show", count > 0);
      footerEl.style.display = this.cart.length ? "block" : "none";
      totalEl.textContent = "₹" + total.toLocaleString();

      if (this.cart.length === 0) {
        itemsEl.innerHTML =
          '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your cart is empty</p><a href="#shop" data-nav="shop" class="cart-shop-link">Browse Shop</a></div>';
        return;
      }

      itemsEl.innerHTML = this.cart
        .map(
          (item) => `
                <div class="cart-item">
                    <div class="cart-item-img"><img src="${item.image}" alt="${item.name}"></div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
                        <div class="cart-item-qty">
                            <button class="cart-qty-btn" onclick="window.ForgeShop.updateQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                            <span>${item.qty}</span>
                            <button class="cart-qty-btn" onclick="window.ForgeShop.updateQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="window.ForgeShop.removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
                </div>
            `,
        )
        .join("");
    },

    openCart() {
      document.getElementById("cartSidebar").classList.add("open");
      document.getElementById("overlay").classList.add("active");
    },

    closeCart() {
      document.getElementById("cartSidebar").classList.remove("open");
      document.getElementById("overlay").classList.remove("active");
    },

    quickView(productId) {
      const product = PRODUCTS.find((p) => p.id === productId);
      if (!product) return;

      const modal = document.getElementById("productModal");
      const content = document.getElementById("productQuickView");

      content.innerHTML = `
                <div class="pqv-img"><img src="${product.image}" alt="${product.name}"></div>
                <div class="pqv-info">
                    <div class="product-category">${product.category}</div>
                    <h2>${product.name}</h2>
                    <div class="pqv-price">₹${product.price.toLocaleString()} ${product.originalPrice ? `<span class="product-price-original" style="font-size:1rem;">₹${product.originalPrice.toLocaleString()}</span>` : ""}</div>
                    <div class="product-rating">
                        <span class="product-rating-stars">${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}</span>
                        <span class="product-rating-count">${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <p class="pqv-desc">${product.desc}</p>
                    <div class="pqv-qty">
                        <label>Quantity:</label>
                        <div class="pqv-qty-controls">
                            <button class="pqv-qty-btn" onclick="window.ForgeShop.qvQty(-1)"><i class="fas fa-minus"></i></button>
                            <div class="pqv-qty-value" id="pqvQtyValue">1</div>
                            <button class="pqv-qty-btn" onclick="window.ForgeShop.qvQty(1)"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <button class="btn btn-primary btn-lg btn-full" onclick="window.ForgeShop.qvAddToCart(${product.id})">
                        <i class="fas fa-shopping-bag"></i> Add to Cart
                    </button>
                </div>
            `;

      modal.classList.add("open");
      modal.dataset.productId = product.id;
      modal.dataset.qty = 1;
    },

    qvQty(delta) {
      const modal = document.getElementById("productModal");
      let qty = parseInt(modal.dataset.qty || 1) + delta;
      qty = Math.max(1, qty);
      modal.dataset.qty = qty;
      document.getElementById("pqvQtyValue").textContent = qty;
    },

    qvAddToCart(productId) {
      const modal = document.getElementById("productModal");
      const qty = parseInt(modal.dataset.qty || 1);
      const product = PRODUCTS.find((p) => p.id === productId);
      if (!product) return;

      const existing = this.cart.find((c) => c.id === productId);
      if (existing) {
        existing.qty += qty;
      } else {
        this.cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          qty: qty,
        });
      }

      this.saveCart();
      this.updateCartUI();
      modal.classList.remove("open");
      Toast.show("success", `${qty}x ${product.name} added to cart!`);
    },

    checkout() {
      if (this.cart.length === 0) {
        Toast.show("error", "Your cart is empty!");
        return;
      }

      let message = `🛒 *I AM INTERESTED TO BUY THE FOLLOWING PRODUCTS:*\n\n`;
      let total = 0;

      this.cart.forEach((item, i) => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        message += `${i + 1}. *${item.name}*\n`;
        message += `   Price: ₹${item.price.toLocaleString()} × ${item.qty} = ₹${subtotal.toLocaleString()}\n\n`;
      });

      message += `──────────\n`;
      message += `💰 *Total: ₹${total.toLocaleString()}*\n\n`;
      message += `Please confirm availability and share payment details. Thank you!`;

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    },
  };

  // Expose shop methods to global scope for inline onclick handlers
  window.ForgeShop = Shop;

  /* ============================================
       14. BLOG
       ============================================ */
  const Blog = {
    currentCategory: "all",

    init() {
      this.renderPreview();
      this.renderFull();
      this.setupCategories();
    },

    renderPreview() {
      const grid = document.getElementById("blogPreviewGrid");
      if (!grid) return;

      grid.innerHTML = BLOG_POSTS.slice(0, 3)
        .map((post) => this.createCard(post))
        .join("");
    },

    renderFull() {
      const grid = document.getElementById("blogFullGrid");
      if (!grid) return;

      const filtered =
        this.currentCategory === "all"
          ? BLOG_POSTS
          : BLOG_POSTS.filter((p) => p.category === this.currentCategory);

      grid.innerHTML = filtered.map((post) => this.createCard(post)).join("");
    },

    createCard(post) {
      return `
                <div class="blog-card" onclick="window.ForgeBlog.openPost(${post.id})">
                    <div class="blog-card-img"><img src="${post.image}" alt="${post.title}" loading="lazy"></div>
                    <div class="blog-card-body">
                        <div class="blog-card-meta">
                            <span class="blog-card-category">${post.category}</span>
                            <span class="blog-card-date">${post.date}</span>
                        </div>
                        <h3>${post.title}</h3>
                        <p>${post.excerpt}</p>
                        <span class="blog-card-link">Read More <i class="fas fa-arrow-right"></i></span>
                    </div>
                </div>
            `;
    },

    setupCategories() {
      document
        .querySelectorAll("#blogCategories .filter-btn")
        .forEach((btn) => {
          btn.addEventListener("click", () => {
            document
              .querySelectorAll("#blogCategories .filter-btn")
              .forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            this.currentCategory = btn.getAttribute("data-category");
            this.renderFull();
          });
        });
    },

    openPost(postId) {
      const post = BLOG_POSTS.find((p) => p.id === postId);
      if (!post) return;

      const content = document.getElementById("blogPostContent");
      if (!content) return;

      content.innerHTML = `
                <img src="${post.image}" alt="${post.title}" class="blog-post-hero-img">
                <div class="blog-post-meta">
                    <span><i class="fas fa-folder"></i> ${post.category}</span>
                    <span><i class="fas fa-calendar"></i> ${post.date}</span>
                    <span><i class="fas fa-clock"></i> ${post.readTime} read</span>
                </div>
                <h1 class="blog-post-title">${post.title}</h1>
                <div class="blog-post-content-text">${post.content}</div>
            `;

      // Update sidebar
      this.renderSidebar(postId);

      // Navigate to blog post page
      Router.navigate("blog-post");
    },

    renderSidebar(currentPostId) {
      const catList = document.getElementById("blogSidebarCats");
      const recentPosts = document.getElementById("recentPosts");

      if (catList) {
        const categories = [...new Set(BLOG_POSTS.map((p) => p.category))];
        catList.innerHTML = categories
          .map(
            (cat) => `
                    <li><a href="#blog" data-nav="blog" onclick="window.ForgeBlog.filterByCategory('${cat}')">${cat.charAt(0).toUpperCase() + cat.slice(1)} <span class="blog-cat-count">${BLOG_POSTS.filter((p) => p.category === cat).length}</span></a></li>
                `,
          )
          .join("");
      }

      if (recentPosts) {
        recentPosts.innerHTML = BLOG_POSTS.filter((p) => p.id !== currentPostId)
          .slice(0, 4)
          .map(
            (p) => `
                    <div class="recent-post-item" onclick="window.ForgeBlog.openPost(${p.id})">
                        <img src="${p.image}" alt="${p.title}">
                        <div class="recent-post-info">
                            <h5>${p.title}</h5>
                            <span>${p.date}</span>
                        </div>
                    </div>
                `,
          )
          .join("");
      }
    },

    filterByCategory(cat) {
      this.currentCategory = cat;
      this.renderFull();
    },
  };

  window.ForgeBlog = Blog;

  /* ============================================
       15. GALLERY & LIGHTBOX
       ============================================ */
  const Gallery = {
    currentFilter: "all",
    lightboxIndex: 0,
    filteredImages: [],

    init() {
      this.render();
      this.setupFilters();
      this.setupLightbox();
    },

    render() {
      const grid = document.getElementById("galleryGrid");
      if (!grid) return;

      this.filteredImages =
        this.currentFilter === "all"
          ? GALLERY_IMAGES
          : GALLERY_IMAGES.filter((img) => img.category === this.currentFilter);

      grid.innerHTML = this.filteredImages
        .map(
          (img, i) => `
                <div class="gallery-item" data-index="${i}" data-category="${img.category}">
                    <img src="${img.src}" alt="${img.title}" loading="lazy">
                    <div class="gallery-item-overlay"><span>${img.title}</span></div>
                </div>
            `,
        )
        .join("");

      // Click handlers for lightbox
      grid.querySelectorAll(".gallery-item").forEach((item) => {
        item.addEventListener("click", () => {
          this.lightboxIndex = parseInt(item.getAttribute("data-index"));
          this.openLightbox();
        });
      });
    },

    setupFilters() {
      document
        .querySelectorAll(".gallery-filters .filter-btn")
        .forEach((btn) => {
          btn.addEventListener("click", () => {
            document
              .querySelectorAll(".gallery-filters .filter-btn")
              .forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            this.currentFilter = btn.getAttribute("data-gallery-filter");
            this.render();
          });
        });
    },

    setupLightbox() {
      document
        .getElementById("lightboxClose")
        .addEventListener("click", () => this.closeLightbox());
      document
        .getElementById("lightboxPrev")
        .addEventListener("click", () => this.lightboxNav(-1));
      document
        .getElementById("lightboxNext")
        .addEventListener("click", () => this.lightboxNav(1));
      document.getElementById("lightbox").addEventListener("click", (e) => {
        if (e.target === document.getElementById("lightbox"))
          this.closeLightbox();
      });
      document.addEventListener("keydown", (e) => {
        if (!document.getElementById("lightbox").classList.contains("open"))
          return;
        if (e.key === "Escape") this.closeLightbox();
        if (e.key === "ArrowLeft") this.lightboxNav(-1);
        if (e.key === "ArrowRight") this.lightboxNav(1);
      });
    },

    openLightbox() {
      const lightbox = document.getElementById("lightbox");
      const img = document.getElementById("lightboxImg");
      img.src = this.filteredImages[this.lightboxIndex].src;
      lightbox.classList.add("open");
    },

    closeLightbox() {
      document.getElementById("lightbox").classList.remove("open");
    },

    lightboxNav(dir) {
      this.lightboxIndex =
        (this.lightboxIndex + dir + this.filteredImages.length) %
        this.filteredImages.length;
      document.getElementById("lightboxImg").src =
        this.filteredImages[this.lightboxIndex].src;
    },
  };

  /* ============================================
       16. APPOINTMENT FORM (WhatsApp)
       ============================================ */
  const AppointmentForm = {
    init() {
      // Open modal
      document
        .getElementById("floatingAppointment")
        .addEventListener("click", () => {
          document.getElementById("appointmentModal").classList.add("open");
        });

      // Close modal
      document
        .getElementById("appointmentModalClose")
        .addEventListener("click", () => {
          document.getElementById("appointmentModal").classList.remove("open");
        });

      // Click outside to close
      document
        .getElementById("appointmentModal")
        .addEventListener("click", (e) => {
          if (e.target === document.getElementById("appointmentModal")) {
            document
              .getElementById("appointmentModal")
              .classList.remove("open");
          }
        });

      // Set min date to today
      const dateInput = document.getElementById("apptDate");
      const today = new Date().toISOString().split("T")[0];
      dateInput.setAttribute("min", today);

      // Submit
      document
        .getElementById("appointmentForm")
        .addEventListener("submit", (e) => {
          e.preventDefault();
          this.submit();
        });
    },

    submit() {
      const name = document.getElementById("apptName").value.trim();
      const phone = document.getElementById("apptPhone").value.trim();
      const email = document.getElementById("apptEmail").value.trim();
      const age = document.getElementById("apptAge").value.trim();
      const gender = document.getElementById("apptGender").value;
      const program = document.getElementById("apptProgram").value;
      const membership = document.getElementById("apptMembership").value;
      const date = document.getElementById("apptDate").value;
      const time = document.getElementById("apptTime").value;
      const goal = document.getElementById("apptGoal").value;
      const experience = document.querySelector(
        'input[name="experience"]:checked',
      );
      const message = document.getElementById("apptMessage").value.trim();

      // Validation
      if (
        !name ||
        !phone ||
        !age ||
        !gender ||
        !program ||
        !membership ||
        !date ||
        !time
      ) {
        Toast.show("error", "Please fill in all required fields.");
        return;
      }

      // Build formatted WhatsApp message
      let msg = `🏋️ *NEW APPOINTMENT / GYM ENQUIRY*\n\n`;
      msg += `📋 *Personal Details*\n`;
      msg += `───────────────\n`;
      msg += `👤 Name: *${name}*\n`;
      msg += `📞 Phone: *${phone}*\n`;
      if (email) msg += `📧 Email: ${email}\n`;
      msg += `🎂 Age: ${age}\n`;
      msg += `⚧ Gender: ${gender}\n\n`;

      msg += `💪 *Fitness Details*\n`;
      msg += `───────────────\n`;
      msg += `🎯 Program: *${program}*\n`;
      msg += `💳 Membership: *${membership}*\n`;
      msg += `🎯 Goal: ${goal || "Not specified"}\n`;
      msg += `📊 Experience: ${experience ? experience.value : "Not specified"}\n\n`;

      msg += `📅 *Appointment Details*\n`;
      msg += `───────────────\n`;
      msg += `📆 Preferred Date: *${date}*\n`;
      msg += `🕐 Time Slot: *${time}*\n\n`;

      if (message) {
        msg += `💬 *Additional Message*\n`;
        msg += `───────────────\n`;
        msg += `${message}\n\n`;
      }

      msg += `_Sent from H2O FITNESS SINGUR Website_`;

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");

      // Close modal & reset form
      document.getElementById("appointmentModal").classList.remove("open");
      document.getElementById("appointmentForm").reset();
      Toast.show("success", "Redirecting to WhatsApp...");
    },
  };

  /* ============================================
       17. CONTACT FORM (WhatsApp)
       ============================================ */
  const ContactForm = {
    init() {
      document.getElementById("contactForm").addEventListener("submit", (e) => {
        e.preventDefault();
        this.submit();
      });
    },

    submit() {
      const name = document.getElementById("contactName").value.trim();
      const phone = document.getElementById("contactPhone").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const subject = document.getElementById("contactSubject").value;
      const message = document.getElementById("contactMessage").value.trim();

      if (!name || !phone || !message) {
        Toast.show("error", "Please fill in all required fields.");
        return;
      }

      let msg = `📩 *CONTACT FORM ENQUIRY*\n\n`;
      msg += `👤 Name: *${name}*\n`;
      msg += `📞 Phone: *${phone}*\n`;
      if (email) msg += `📧 Email: ${email}\n`;
      if (subject) msg += `📝 Subject: ${subject}\n`;
      msg += `\n💬 Message:\n${message}\n\n`;
      msg += `_Sent from H2O FITNESS SINGUR Website_`;

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");

      document.getElementById("contactForm").reset();
      Toast.show("success", "Redirecting to WhatsApp...");
    },
  };

  /* ============================================
       18. NEWSLETTER
       ============================================ */
  const Newsletter = {
    init() {
      document
        .getElementById("newsletterForm")
        .addEventListener("submit", (e) => {
          e.preventDefault();
          const email = document.getElementById("newsletterEmail").value.trim();
          if (!email) {
            Toast.show("error", "Please enter your email.");
            return;
          }
          Toast.show("success", "Thank you for subscribing! 🎉");
          document.getElementById("newsletterForm").reset();
        });
    },
  };

  /* ============================================
       19. COOKIE CONSENT
       ============================================ */
  const CookieConsent = {
    init() {
      const banner = document.getElementById("cookieBanner");
      const accepted = localStorage.getItem("ff-cookies");

      if (!accepted) {
        setTimeout(() => banner.classList.add("show"), 2000);
      }

      document.getElementById("cookieAccept").addEventListener("click", () => {
        localStorage.setItem("ff-cookies", "accepted");
        banner.classList.remove("show");
      });

      document.getElementById("cookieDecline").addEventListener("click", () => {
        localStorage.setItem("ff-cookies", "declined");
        banner.classList.remove("show");
      });
    },
  };

  /* ============================================
       20. TOAST NOTIFICATIONS
       ============================================ */
  const Toast = {
    show(type, message) {
      const container = document.getElementById("toastContainer");
      const icons = {
        success: "fa-check-circle",
        error: "fa-exclamation-circle",
        info: "fa-info-circle",
      };

      const toast = document.createElement("div");
      toast.className = "toast";
      toast.innerHTML = `
                <div class="toast-icon ${type}"><i class="fas ${icons[type] || icons.info}"></i></div>
                <div class="toast-message">${message}</div>
                <button class="toast-close" onclick="this.closest('.toast').remove()"><i class="fas fa-times"></i></button>
            `;

      container.appendChild(toast);

      // Auto remove
      setTimeout(() => {
        toast.classList.add("removing");
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    },
  };

  /* ============================================
       21. SCROLL TO TOP
       ============================================ */
  const ScrollToTop = {
    init() {
      const btn = document.getElementById("scrollTop");
      window.addEventListener("scroll", () => {
        btn.classList.toggle("visible", window.scrollY > 500);
      });
      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    },
  };

  /* ============================================
       22. PROGRAMS PAGE
       ============================================ */
  const Programs = {
    init() {
      this.render();
      this.setupFilters();
    },

    render() {
      const grid = document.getElementById("programsFullGrid");
      if (!grid) return;

      const savedFilter = localStorage.getItem("programFilter") || "all";
      const filtered =
        savedFilter === "all"
          ? PROGRAMS
          : PROGRAMS.filter((p) => p.category === savedFilter);

      grid.innerHTML = filtered
        .map(
          (prog) => `
                <div class="program-full-card" data-category="${prog.category}">
                    <div class="program-full-card-img">
                        <img src="${prog.image}" alt="${prog.name}" loading="lazy">
                    </div>
                    <div class="program-full-card-body">
                        <span class="program-tag">${prog.category}</span>
                        <h3>${prog.name}</h3>
                        <p>${prog.desc}</p>
                        <div class="program-details-list">
                            ${prog.tags.map((t) => `<span class="program-detail-tag">${t}</span>`).join("")}
                        </div>
                        <a href="#contact" data-nav="contact" class="btn btn-primary btn-sm">
                            <span>Enquire Now</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `,
        )
        .join("");

      // Apply active filter button state
      document
        .querySelectorAll(".program-filters .filter-btn")
        .forEach((btn) => {
          btn.classList.toggle(
            "active",
            btn.getAttribute("data-filter") === savedFilter,
          );
        });

      // Clear saved filter after use
      localStorage.removeItem("programFilter");
    },

    setupFilters() {
      document
        .querySelectorAll(".program-filters .filter-btn")
        .forEach((btn) => {
          btn.addEventListener("click", () => {
            document
              .querySelectorAll(".program-filters .filter-btn")
              .forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");
            this.filterPrograms(filter);
          });
        });
    },

    filterPrograms(filter) {
      const grid = document.getElementById("programsFullGrid");
      if (!grid) return;

      const cards = grid.querySelectorAll(".program-full-card");
      cards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "";
          card.style.animation = "fadeUp 0.4s ease forwards";
        } else {
          card.style.display = "none";
        }
      });
    },
  };

  /* ============================================
       23. TRANSFORMATION PAGE
       ============================================ */
  const TransformationPage = {
    render() {
      const grid = document.getElementById("transformationGrid");
      if (!grid) return;

      grid.innerHTML = TRANSFORMATIONS.map(
        (t) => `
                <div class="transformation-card">
                    <div class="ba-slider">
                        <div class="ba-image ba-before">
                            <img src="${t.before}" alt="Before ${t.name}">
                        </div>
                        <div class="ba-image ba-after">
                            <img src="${t.after}" alt="After ${t.name}">
                        </div>
                        <div class="ba-handle">
                            <div class="ba-handle-line"></div>
                            <div class="ba-handle-circle">
                                <i class="fas fa-arrows-left-right"></i>
                            </div>
                            <div class="ba-handle-line"></div>
                        </div>
                        <span class="ba-label ba-label-before">Before</span>
                        <span class="ba-label ba-label-after">After</span>
                    </div>
                    <div class="transformation-info">
                        <h4>${t.name}</h4>
                        <span>${t.duration}</span>
                    </div>
                </div>
            `,
      ).join("");

      // Re-initialize BA Sliders for dynamic content
      grid.querySelectorAll(".ba-slider").forEach((slider) => {
        BASlider.setupSlider(slider);
      });
    },
  };

  /* ============================================
       24. TRAINERS PAGE
       ============================================ */
  const TrainersPage = {
    render() {
      const grid = document.getElementById("trainersFullGrid");
      if (!grid) return;

      grid.innerHTML = TRAINERS.map(
        (t) => `
                <div class="trainer-card">
                    <div class="trainer-img">
                        <img src="${t.image}" alt="${t.name}" loading="lazy">
                        <div class="trainer-social-overlay">
                            <a href="${t.socials.instagram}" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="${t.socials.youtube}" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="trainer-info">
                        <h3>${t.name}</h3>
                        <div class="trainer-specialty">${t.specialty}</div>
                        <div class="trainer-exp">${t.experience} experience</div>
                    </div>
                </div>
            `,
      ).join("");
    },
  };

  /* ============================================
       25. HOME PAGE RENDERERS
       ============================================ */
  const HomePage = {
    init() {
      this.renderTrainers();
      this.renderBlogPreview();
      this.renderPricing();
    },

    renderTrainers() {
      const grid = document.getElementById("trainersGrid");
      if (!grid) return;

      grid.innerHTML = TRAINERS.slice(0, 4)
        .map(
          (t) => `
                <div class="trainer-card" data-animate="fade-up">
                    <div class="trainer-img">
                        <img src="${t.image}" alt="${t.name}" loading="lazy">
                        <div class="trainer-social-overlay">
                            <a href="${t.socials.instagram}" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="${t.socials.youtube}" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="trainer-info">
                        <h3>${t.name}</h3>
                        <div class="trainer-specialty">${t.specialty}</div>
                        <div class="trainer-exp">${t.experience} experience</div>
                    </div>
                </div>
            `,
        )
        .join("");
    },

    renderBlogPreview() {
      const grid = document.getElementById("blogPreviewGrid");
      if (!grid) return;

      grid.innerHTML = BLOG_POSTS.slice(0, 3)
        .map(
          (post) => `
                <div class="blog-card" data-animate="fade-up" onclick="window.ForgeBlog.openPost(${post.id})">
                    <div class="blog-card-img"><img src="${post.image}" alt="${post.title}" loading="lazy"></div>
                    <div class="blog-card-body">
                        <div class="blog-card-meta">
                            <span class="blog-card-category">${post.category}</span>
                            <span class="blog-card-date">${post.date}</span>
                        </div>
                        <h3>${post.title}</h3>
                        <p>${post.excerpt}</p>
                        <span class="blog-card-link">Read More <i class="fas fa-arrow-right"></i></span>
                    </div>
                </div>
            `,
        )
        .join("");
    },

    renderPricing() {
      Pricing.render("pricingGrid");
    },
  };

  /* ============================================
       26. POLICY PAGES CONTENT
       ============================================ */
  const PolicyPages = {
    init() {
      this.renderPrivacyPolicy();
      this.renderTermsConditions();
      this.renderRefundPolicy();
      this.renderCookiePolicy();
      this.renderDisclaimer();
      this.renderShippingPolicy();
    },

    renderPrivacyPolicy() {
      const container = document.getElementById("privacyPolicyContent");
      if (!container) return;

      container.innerHTML = `
                <p class="policy-updated">Last updated: January 15, 2025</p>
                <h2>1. Introduction</h2>
                <p>Welcome to H2O FITNESS SINGUR ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy notice explains how we collect, use, disclose, and safeguard your information when you visit our website forgefitness.in (the "Site") and use our services.</p>
                
                <h2>2. Information We Collect</h2>
                <p>We may collect the following types of personal information:</p>
                <ul>
                    <li><strong>Identity Data:</strong> First name, last name, username, date of birth, gender.</li>
                    <li><strong>Contact Data:</strong> Email address, phone number, billing and delivery addresses.</li>
                    <li><strong>Financial Data:</strong> Payment card details, bank account information for membership fees.</li>
                    <li><strong>Transaction Data:</strong> Details about payments to and from you, products purchased.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, operating system, referring URLs, device information.</li>
                    <li><strong>Profile Data:</strong> Fitness goals, health conditions, preferences, feedback, and survey responses.</li>
                    <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
                    <li><strong>Marketing Data:</strong> Your preferences in receiving marketing communications.</li>
                </ul>
                
                <h2>3. How We Use Your Information</h2>
                <p>We use your personal data for the following purposes:</p>
                <ul>
                    <li>Registration and account management for gym membership.</li>
                    <li>Processing and delivering gym services and products.</li>
                    <li>Personalizing your fitness experience and recommendations.</li>
                    <li>Communicating with you regarding appointments, class schedules, and updates.</li>
                    <li>Processing payments and preventing fraudulent transactions.</li>
                    <li>Improving our website, services, and customer support.</li>
                    <li>Sending promotional communications (with your consent).</li>
                    <li>Complying with legal obligations.</li>
                </ul>
                
                <h2>4. Legal Basis for Processing</h2>
                <p>We process your personal data under the following legal bases:</p>
                <ul>
                    <li><strong>Consent:</strong> Where you have given us explicit consent to process your data for specific purposes.</li>
                    <li><strong>Performance of Contract:</strong> Where processing is necessary for the performance of our membership agreement.</li>
                    <li><strong>Legal Obligation:</strong> Where processing is necessary for compliance with a legal obligation.</li>
                    <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate business interests.</li>
                </ul>
                
                <h2>5. Data Sharing</h2>
                <p>We may share your personal data with:</p>
                <ul>
                    <li>Service providers who perform services on our behalf (payment processors, email services, analytics).</li>
                    <li>Professional advisors including lawyers, bankers, auditors, and insurers.</li>
                    <li>Government bodies and law enforcement agencies when required by law.</li>
                    <li>Third parties in connection with any sale, merger, or acquisition of our business.</li>
                </ul>
                
                <h2>6. International Transfers</h2>
                <p>Your data may be transferred outside the European Economic Area (EEA). We ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by the European Commission.</p>
                
                <h2>7. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal data, including encryption, access controls, secure servers, and regular security assessments. However, no method of transmission over the Internet is 100% secure.</p>
                
                <h2>8. Data Retention</h2>
                <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Typically, we retain member data for the duration of membership plus 3 years.</p>
                
                <h2>9. Your Rights</h2>
                <p>Under applicable data protection laws, you have the following rights:</p>
                <ul>
                    <li>Right to access your personal data.</li>
                    <li>Right to rectify inaccurate or incomplete data.</li>
                    <li>Right to erasure ("right to be forgotten").</li>
                    <li>Right to restrict processing.</li>
                    <li>Right to data portability.</li>
                    <li>Right to object to processing.</li>
                    <li>Right to withdraw consent at any time.</li>
                    <li>Right to lodge a complaint with a supervisory authority.</li>
                </ul>
                
                <h2>10. Cookies</h2>
                <p>Our website uses cookies and similar tracking technologies. For detailed information, please refer to our <a href="#cookie-policy" data-nav="cookie-policy">Cookie Policy</a>.</p>
                
                <h2>11. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to read their privacy policies.</p>
                
                <h2>12. Children's Privacy</h2>
                <p>Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If we discover that a child has provided us with personal information, we will delete it promptly.</p>
                
                <h2>13. Changes to This Policy</h2>
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.</p>
                
                <h2>14. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <ul>
                    <li>Email: privacy@forgefitness.in</li>
                    <li>Phone: +91 98048 19829</li>
                    <li>Address: 123 Fitness Boulevard, Sector 15, Gurugram, Haryana 122001, India</li>
                </ul>
            `;
    },

    renderTermsConditions() {
      const container = document.getElementById("termsConditionsContent");
      if (!container) return;

      container.innerHTML = `
                <p class="policy-updated">Last updated: January 15, 2025</p>
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using the H2O FITNESS SINGUR website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.</p>
                
                <h2>2. Membership</h2>
                <ul>
                    <li>Membership is subject to availability and approval by H2O FITNESS SINGUR management.</li>
                    <li>All members must complete a health questionnaire and liability waiver before commencing training.</li>
                    <li>Membership fees are non-refundable except as outlined in our <a href="#refund-policy" data-nav="refund-policy">Refund Policy</a>.</li>
                    <li>Members must be at least 16 years of age. Members under 18 require parental/guardian consent.</li>
                    <li>Membership is personal and non-transferable unless explicitly authorized.</li>
                </ul>
                
                <h2>3. Payment Terms</h2>
                <ul>
                    <li>Monthly memberships are billed on the 1st of each month.</li>
                    <li>Annual memberships are billed in full at the time of enrollment.</li>
                    <li>Payment methods accepted: credit/debit cards, UPI, net banking, and cash at the front desk.</li>
                    <li>Late payments may incur a penalty of 5% of the outstanding amount per month.</li>
                    <li>We reserve the right to suspend access for accounts with overdue payments exceeding 15 days.</li>
                </ul>
                
                <h2>4. Code of Conduct</h2>
                <p>All members and guests are expected to:</p>
                <ul>
                    <li>Treat staff, trainers, and fellow members with respect and courtesy.</li>
                    <li>Use equipment properly and report any damage immediately.</li>
                    <li>Re-rack weights and return equipment after use.</li>
                    <li>Wipe down equipment after use.</li>
                    <li>Follow all posted safety guidelines and trainer instructions.</li>
                    <li>Not engage in any form of harassment, discrimination, or intimidation.</li>
                    <li>Not bring outside food or beverages (water bottles permitted).</li>
                    <li>Not record or photograph other members without their consent.</li>
                </ul>
                
                <h2>5. Health and Safety</h2>
                <ul>
                    <li>You are responsible for ensuring you are medically fit to exercise.</li>
                    <li>Inform staff of any medical conditions, injuries, or pregnancy before training.</li>
                    <li>Always use a spotter for heavy lifts.</li>
                    <li>Wear appropriate athletic footwear and clothing at all times.</li>
                    <li>Do not train under the influence of alcohol or drugs.</li>
                    <li>In case of emergency, follow staff instructions and use emergency exits.</li>
                </ul>
                
                <h2>6. Facility Usage</h2>
                <ul>
                    <li>24/7 access is available only for Pro and Elite members with valid access cards.</li>
                    <li>Locker rooms are available during staffed hours. H2O FITNESS SINGUR is not responsible for lost or stolen items.</li>
                    <li>Group class bookings are subject to availability. Cancellations must be made at least 4 hours in advance.</li>
                    <li>Personal training sessions must be booked 24 hours in advance. Late cancellations or no-shows will be charged as a completed session.</li>
                </ul>
                
                <h2>7. Intellectual Property</h2>
                <p>All content, branding, logos, and materials on the H2O FITNESS SINGUR website and premises are owned by H2O FITNESS SINGUR and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.</p>
                
                <h2>8. Limitation of Liability</h2>
                <p>H2O FITNESS SINGUR provides fitness services and facilities "as is." While we maintain high safety standards, participation in physical activity carries inherent risks. You acknowledge and assume these risks. H2O FITNESS SINGUR shall not be liable for any injury, loss, or damage arising from your use of our facilities or services, except where caused by our gross negligence or willful misconduct.</p>
                
                <h2>9. Indemnification</h2>
                <p>You agree to indemnify and hold harmless H2O FITNESS SINGUR, its directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.</p>
                
                <h2>10. Termination</h2>
                <ul>
                    <li>Either party may terminate a monthly membership with 15 days written notice.</li>
                    <li>H2O FITNESS SINGUR reserves the right to terminate membership immediately for violation of these terms, code of conduct, or illegal activities on premises.</li>
                    <li>Refunds for terminated memberships are subject to our <a href="#refund-policy" data-nav="refund-policy">Refund Policy</a>.</li>
                </ul>
                
                <h2>11. Dispute Resolution</h2>
                <p>Any disputes arising from these terms shall first be attempted to be resolved through good faith negotiation. If unresolved, disputes shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be Gurugram, India.</p>
                
                <h2>12. Governing Law</h2>
                <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of India. The courts of Gurugram, Haryana shall have exclusive jurisdiction.</p>
                
                <h2>13. Changes to Terms</h2>
                <p>We reserve the right to modify these terms at any time. Changes will be effective upon posting on our website. Continued use of our services after changes constitutes acceptance.</p>
                
                <h2>14. Contact</h2>
                <p>For questions regarding these terms, contact us at legal@forgefitness.in or +91 98048 19829.</p>
            `;
    },

    renderRefundPolicy() {
      const container = document.getElementById("refundPolicyContent");
      if (!container) return;

      container.innerHTML = `
                <p class="policy-updated">Last updated: January 15, 2025</p>
                <h2>1. Overview</h2>
                <p>At H2O FITNESS SINGUR, we strive to ensure your satisfaction with our services. This Refund Policy outlines the circumstances under which refunds are available for memberships, products, and services.</p>
                
                <h2>2. Membership Refunds</h2>
                <ul>
                    <li><strong>Monthly Memberships:</strong> May be cancelled with 15 days notice. No refund for the current billing month; cancellation takes effect from the next billing cycle.</li>
                    <li><strong>Annual Memberships:</strong> Refunds are prorated based on unused months, minus a 10% administrative fee. The refund will be calculated from the date of cancellation request.</li>
                    <li><strong>Free Trial Period:</strong> No charges apply during the free trial period. No refund is necessary.</li>
                </ul>
                
                <h2>3. Product Refunds (Shop Purchases)</h2>
                <ul>
                    <li><strong>Supplements:</strong> Unopened, sealed products may be returned within 14 days of purchase for a full refund.</li>
                    <li><strong>Apparel:</strong> Unused items with tags attached may be returned within 14 days for exchange or refund. Items must be in original packaging.</li>
                    <li><strong>Equipment:</strong> Defective equipment may be returned within 30 days for replacement or full refund.</li>
                    <li><strong>Accessories:</strong> Unused items may be returned within 14 days for refund or exchange.</li>
                </ul>
                
                <h2>4. Non-Refundable Items</h2>
                <ul>
                    <li>Opened supplement containers.</li>
                    <li>Worn or washed apparel.</li>
                    <li>Personal training sessions already conducted.</li>
                    <li>Group class packages (partially used).</li>
                    <li>Gift cards or vouchers.</li>
                    <li>Services already rendered (assessments, consultations).</li>
                </ul>
                
                <h2>5. How to Request a Refund</h2>
                <p>To initiate a refund, please follow these steps:</p>
                <ul>
                    <li>Contact our front desk or email refunds@forgefitness.in.</li>
                    <li>Provide your membership ID or order number.</li>
                    <li>State the reason for the refund request.</li>
                    <li>Return the product (if applicable) in its original packaging to our facility.</li>
                </ul>
                
                <h2>6. Refund Processing Time</h2>
                <ul>
                    <li>Refunds will be processed within 7-10 business days of approval.</li>
                    <li>Refunds will be credited to the original payment method.</li>
                    <li>Cash refunds (for cash purchases) will be processed via bank transfer within 10 business days.</li>
                </ul>
                
                <h2>7. Cancellation of Services</h2>
                <ul>
                    <li><strong>Personal Training:</strong> Sessions must be cancelled at least 24 hours in advance. Late cancellations or no-shows will be charged as completed sessions.</li>
                    <li><strong>Group Classes:</strong> Bookings must be cancelled 4 hours before the scheduled time. Repeated no-shows may result in booking restrictions.</li>
                </ul>
                
                <h2>8. Medical Cancellations</h2>
                <p>If you are unable to continue training due to a medical condition, provide a doctor's certificate, and we will freeze your membership for the medical period or issue a prorated refund minus a 5% processing fee.</p>
                
                <h2>9. Force Majeure</h2>
                                <p>No refunds will be issued for closures due to circumstances beyond our control (pandemics, natural disasters, government mandates). During such periods, memberships will be extended for the duration of the closure at no additional cost.</p>
                
                <h2>10. Contact</h2>
                <p>For refund inquiries, contact us at refunds@forgefitness.in or +91 98048 19829.</p>
            `;
    },

    renderCookiePolicy() {
      const container = document.getElementById("cookiePolicyContent");
      if (!container) return;

      container.innerHTML = `
                <p class="policy-updated">Last updated: January 15, 2025</p>
                <h2>1. What Are Cookies</h2>
                <p>Cookies are small text files that are placed on your computer or mobile device by websites you visit. They are widely used to make websites work more efficiently and to provide information to the owners of the site.</p>
                
                <h2>2. How We Use Cookies</h2>
                <p>H2O FITNESS SINGUR uses cookies for the following purposes:</p>
                <ul>
                    <li><strong>Strictly Necessary Cookies:</strong> Required for the operation of our website (session management, security features, shopping cart).</li>
                    <li><strong>Performance Cookies:</strong> Collect information about how visitors use our website, such as which pages are visited most often. We use Google Analytics for this purpose.</li>
                    <li><strong>Functionality Cookies:</strong> Remember your preferences and settings (theme choice, font size, accent color, etc.) to provide a personalized experience.</li>
                    <li><strong>Targeting/Advertising Cookies:</strong> Used to deliver relevant ads and track the effectiveness of our advertising campaigns.</li>
                </ul>
                
                <h2>3. Third-Party Cookies</h2>
                <p>We use third-party services that may set their own cookies:</p>
                <ul>
                    <li><strong>Google Analytics:</strong> For website traffic analysis and user behavior insights.</li>
                    <li><strong>Google Fonts:</strong> For rendering web fonts on the site.</li>
                    <li><strong>Font Awesome:</strong> For rendering scalable vector icons.</li>
                    <li><strong>WhatsApp:</strong> For chat and communication integration.</li>
                </ul>
                
                <h2>4. Managing Cookies</h2>
                <p>Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete existing cookies. However, please note that some features of our website may not function properly without strictly necessary cookies.</p>
                <ul>
                    <li><strong>Chrome:</strong> Settings > Privacy and Security > Cookies</li>
                    <li><strong>Firefox:</strong> Options > Privacy & Security > Cookies</li>
                    <li><strong>Safari:</strong> Preferences > Privacy > Cookies</li>
                    <li><strong>Edge:</strong> Settings > Cookies and site permissions</li>
                </ul>
                
                <h2>5. Changes to This Policy</h2>
                <p>We may update this Cookie Policy periodically to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated revision date.</p>
                
                <h2>6. Contact</h2>
                <p>For questions about our use of cookies, contact us at privacy@forgefitness.in.</p>
            `;
    },

    renderDisclaimer() {
      const container = document.getElementById("disclaimerContent");
      if (!container) return;

      container.innerHTML = `
                <p class="policy-updated">Last updated: January 15, 2025</p>
                <h2>1. General Disclaimer</h2>
                <p>The information provided on the H2O FITNESS SINGUR website is for general informational purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.</p>
                
                <h2>2. Fitness and Health Disclaimer</h2>
                <p>The fitness and nutritional advice provided by H2O FITNESS SINGUR trainers, staff, or on our website is not intended as a substitute for professional medical advice. Always consult your physician or qualified health provider before starting any exercise program or dietary changes, especially if you have any pre-existing medical conditions, injuries, or are pregnant.</p>
                
                <h2>3. Risk of Injury</h2>
                <p>Participation in physical activity involves inherent risks, including the risk of serious injury or death. By using our facilities and services, you acknowledge and voluntarily assume all risks associated with physical activity. H2O FITNESS SINGUR is not liable for any injuries sustained while using our facilities or following our training programs.</p>
                
                <h2>4. Results Disclaimer</h2>
                <p>Testimonials, transformation photos, and success stories on our website represent individual results and are not guaranteed. Results vary based on individual effort, genetics, diet, consistency, and adherence to the program. H2O FITNESS SINGUR does not guarantee specific results from our programs or products.</p>
                
                <h2>5. Pricing and Availability Disclaimer</h2>
                <p>We strive to ensure all pricing and product information on our website is accurate. However, errors may occur. We reserve the right to correct any pricing errors and to change prices or product availability at any time without prior notice. The price applicable to your purchase is the price at the time of payment confirmation.</p>
                
                <h2>6. External Links Disclaimer</h2>
                <p>Our website may contain links to external websites not operated or controlled by us. We have no control over the content, privacy policies, or practices of these third-party sites and cannot accept responsibility for their respective content or policies.</p>
                
                <h2>7. Contact</h2>
                <p>If you have questions about this disclaimer, contact us at legal@forgefitness.in or +91 98048 19829.</p>
            `;
    },

    renderShippingPolicy() {
      const container = document.getElementById("shippingPolicyContent");
      if (!container) return;

      container.innerHTML = `
                <p class="policy-updated">Last updated: January 15, 2025</p>
                <h2>1. Shipping Coverage</h2>
                <p>H2O FITNESS SINGUR ships products across India. International shipping is currently not available for online orders. For international inquiries or bulk orders, please contact us at shop@forgefitness.in.</p>
                
                <h2>2. Delivery Timelines</h2>
                <ul>
                    <li><strong>Metro Cities (Delhi, Mumbai, Bangalore, etc.):</strong> 3-5 business days.</li>
                    <li><strong>Tier 2 & 3 Cities:</strong> 5-7 business days.</li>
                    <li><strong>Remote/Rural Areas:</strong> 7-10 business days.</li>
                </ul>
                <p>Delivery times are estimates and may vary due to carrier delays, holidays, weather conditions, or unforeseen circumstances.</p>
                
                <h2>3. Shipping Charges</h2>
                <ul>
                    <li><strong>Orders above ₹1,500:</strong> Free standard shipping.</li>
                    <li><strong>Orders below ₹1,500:</strong> Flat ₹99 shipping fee.</li>
                    <li><strong>Heavy Equipment (Dumbbells, etc.):</strong> Additional shipping charges may apply based on weight and dimensions. These will be calculated at checkout.</li>
                </ul>
                
                <h2>4. Order Processing</h2>
                <p>Orders placed before 2:00 PM IST on business days are processed the same day. Orders placed after 2:00 PM IST or on weekends/holidays are processed the next business day. Processing includes verification, quality check, and packaging.</p>
                
                <h2>5. Order Tracking</h2>
                <p>Once your order is shipped, you will receive an email and SMS with the tracking number and carrier information. You can track your order status directly through the carrier's website or app.</p>
                
                <h2>6. Delivery Issues</h2>
                <ul>
                    <li><strong>Wrong Address:</strong> If you provide an incorrect address, please contact us within 2 hours of placing the order. We are not responsible for orders delivered to incorrect addresses provided by the customer.</li>
                    <li><strong>Missed Delivery:</strong> The carrier will attempt delivery 3 times. If unsuccessful, the order will be returned to our warehouse. Re-delivery will incur additional shipping charges.</li>
                    <li><strong>Damaged Goods:</strong> If your order arrives damaged, please contact us within 48 hours with photos of the damaged product and packaging. We will arrange a replacement or full refund.</li>
                </ul>
                
                <h2>7. In-Store Pickup</h2>
                <p>Orders can also be picked up from our H2O FITNESS SINGUR facility at no extra charge. Select "Store Pickup" at checkout. You will be notified via email and SMS when your order is ready for pickup (typically within 24 hours of ordering).</p>
                
                <h2>8. Contact</h2>
                <p>For shipping inquiries, contact us at shop@forgefitness.in or +91 98048 19829.</p>
            `;
    },

    renderContact() {
      // Contact page form logic is handled by ContactForm module.
      // This is just a placeholder method called by Router.
    },
  };

  /* ============================================
       27. UTILITY HELPERS
       ============================================ */
  const Utils = {
    // Debounce function to limit the rate of function execution
    debounce(func, wait = 100) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    },

    // Throttle function to ensure function runs at most once per interval
    throttle(func, limit = 100) {
      let inThrottle;
      return function (...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    },

    // Format currency in Indian Rupees
    formatCurrency(amount) {
      return "₹" + Number(amount).toLocaleString("en-IN");
    },

    // Generate a simple unique ID
    generateId() {
      return "_" + Math.random().toString(36).substr(2, 9);
    },
  };

  /* ============================================
       28. INTERACTIVE TILT EFFECT (Premium Cards)
       ============================================ */
  const TiltEffect = {
    init() {
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        document.addEventListener(
          "mousemove",
          Utils.debounce((e) => {
            const cards = document.querySelectorAll(
              ".pricing-card, .trainer-card",
            );
            cards.forEach((card) => {
              const rect = card.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
              const mouseX = e.clientX - centerX;
              const mouseY = e.clientY - centerY;

              // Check if mouse is close enough for effect
              const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
              if (distance < 400) {
                const rotateX = (mouseY / rect.height) * -5;
                const rotateY = (mouseX / rect.width) * 5;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
              } else {
                card.style.transform = "";
              }
            });
          }, 20),
        );
      }
    },
  };

  /* ============================================
       29. SMOOTH SCROLL FOR ANCHOR LINKS
       ============================================ */
  const SmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          const href = this.getAttribute("href");
          if (href === "#") return;

          // If it's a data-nav link, Router handles it.
          if (this.hasAttribute("data-nav")) return;

          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });
    },
  };

  /* ============================================
       30. PARALLAX SCROLL EFFECTS
       ============================================ */
  const ParallaxEffects = {
    init() {
      window.addEventListener(
        "scroll",
        Utils.throttle(() => {
          const scrollY = window.scrollY;

          // Hero parallax
          const heroContent = document.querySelector(".hero-content");
          if (heroContent) {
            heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
            heroContent.style.opacity = 1 - scrollY / 800;
          }

          // About image parallax
          const aboutImg = document.querySelector(".about-img-main img");
          if (
            aboutImg &&
            aboutImg.getBoundingClientRect().top < window.innerHeight
          ) {
            aboutImg.style.transform = `translateY(${(scrollY - aboutImg.offsetTop) * 0.05}px) scale(1)`;
          }
        }, 30),
      );
    },
  };

  /* ============================================
       31. DYNAMIC CLASS SCHEDULE (Optional Feature)
       ============================================ */
  const ClassSchedule = {
    scheduleData: [
      {
        time: "06:00 AM",
        class: "Morning HIIT Blast",
        trainer: "Rahul Verma",
        duration: "45 min",
        level: "Intermediate",
      },
      {
        time: "07:00 AM",
        class: "Power Yoga",
        trainer: "Priya Sharma",
        duration: "60 min",
        level: "All Levels",
      },
      {
        time: "08:00 AM",
        class: "Strength Foundations",
        trainer: "Arjun Mehra",
        duration: "60 min",
        level: "Beginner",
      },
      {
        time: "10:00 AM",
        class: "Pilates Core",
        trainer: "Priya Sharma",
        duration: "45 min",
        level: "Intermediate",
      },
      {
        time: "12:00 PM",
        class: "Express HIIT",
        trainer: "Rahul Verma",
        duration: "30 min",
        level: "Advanced",
      },
      {
        time: "05:00 PM",
        class: "CrossFit WOD",
        trainer: "Vikram Singh",
        duration: "60 min",
        level: "Advanced",
      },
      {
        time: "06:00 PM",
        class: "Body Sculpt",
        trainer: "Neha Gupta",
        duration: "45 min",
        level: "Intermediate",
      },
      {
        time: "07:00 PM",
        class: "Yin Yoga & Stretch",
        trainer: "Priya Sharma",
        duration: "60 min",
        level: "All Levels",
      },
    ],

    render() {
      const scheduleSection = document.getElementById("scheduleContainer");
      if (!scheduleSection) return;

      scheduleSection.innerHTML = `
                <div class="schedule-table-wrapper">
                    <table class="comparison-table schedule-table">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Class</th>
                                <th>Trainer</th>
                                <th>Duration</th>
                                <th>Level</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.scheduleData
                              .map(
                                (item) => `
                                <tr>
                                    <td><strong>${item.time}</strong></td>
                                    <td>${item.class}</td>
                                    <td>${item.trainer}</td>
                                    <td>${item.duration}</td>
                                    <td><span class="program-detail-tag">${item.level}</span></td>
                                    <td><a href="#contact" data-nav="contact" class="btn btn-sm btn-outline">Book</a></td>
                                </tr>
                            `,
                              )
                              .join("")}
                        </tbody>
                    </table>
                </div>
            `;
    },
  };

  /* ============================================
       32. PROGRESS BAR ANIMATION
       ============================================ */
  const ProgressBars = {
    init() {
      // Used for skill/trainer/program stats if needed in the UI
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const bar = entry.target;
              const value = bar.getAttribute("data-value");
              bar.style.width = value + "%";
              observer.unobserve(bar);
            }
          });
        },
        { threshold: 0.5 },
      );

      document.querySelectorAll(".progress-fill").forEach((bar) => {
        bar.style.width = "0%";
        observer.observe(bar);
      });
    },
  };

  /* ============================================
       33. DYNAMIC COPY RIGHT YEAR
       ============================================ */
  const DynamicFooter = {
    init() {
      const yearEl = document.getElementById("currentYear");
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      // Also update the footer bottom text
      const footerText = document.querySelector(".footer-bottom p");
      if (footerText) {
        footerText.innerHTML = `&copy; ${new Date().getFullYear()} H2O FITNESS SINGUR. All rights reserved.`;
      }
    },
  };

  /* ============================================
       34. LAZY LOADING ENHANCEMENT
       ============================================ */
  const LazyLoad = {
    init() {
      if ("IntersectionObserver" in window) {
        const imgObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                  img.src = img.dataset.src;
                  img.removeAttribute("data-src");
                }
                img.classList.add("loaded");
                observer.unobserve(img);
              }
            });
          },
          { rootMargin: "100px" },
        );

        document.querySelectorAll("img[data-src]").forEach((img) => {
          imgObserver.observe(img);
        });
      }
    },
  };

  /* ============================================
       35. KEYBOARD NAVIGATION & A11Y
       ============================================ */
  const Accessibility = {
    init() {
      // Focus visible for keyboard users
      document.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
          document.body.classList.add("keyboard-nav");
        }
      });

      document.addEventListener("mousedown", () => {
        document.body.classList.remove("keyboard-nav");
      });

      // Close modals on Escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          document.getElementById("appointmentModal").classList.remove("open");
          document.getElementById("productModal").classList.remove("open");
          document.getElementById("themePanel").classList.remove("open");
          document.getElementById("cartSidebar").classList.remove("open");
          document.getElementById("mobileMenu").classList.remove("open");
          document.getElementById("overlay").classList.remove("active");
          document.getElementById("lightbox").classList.remove("open");
        }
      });
    },
  };

  /* ============================================
       36. INITIALIZE APPLICATION
       ============================================ */
  const App = {
    init() {
      console.log(
        "%c H2O FITNESS SINGUR ",
        "background: #E53935; color: #fff; font-size: 1.5rem; font-weight: bold; padding: 10px 20px; border-radius: 4px;",
      );
      console.log(
        "%c Premium SPA Initializing... ",
        "color: #A1A1AA; font-style: italic;",
      );

      // 1. Core System Initialization
      Preloader.init();
      Router.init();
      Navigation.init();
      ThemeSystem.init();
      Accessibility.init();

      // 2. UI Component Initialization
      CustomCursor.init();
      AnimationObserver.init();
      ScrollToTop.init();
      CookieConsent.init();
      TiltEffect.init();
      SmoothScroll.init();
      ParallaxEffects.init();
      LazyLoad.init();
      DynamicFooter.init();

      // 3. Home Page & Core Sections Initialization
      HeroSection.init();
      BASlider.init();
      ReviewsSlider.init();
      Pricing.init();
      FAQ.init();
      HomePage.init();
      ProgressBars.init();

      // 4. Full Page Modules Initialization
      Programs.init();
      Gallery.init();
      Blog.init();
      ClassSchedule.render();

      // 5. E-Commerce & Form Systems
      Shop.init();
      AppointmentForm.init();
      ContactForm.init();
      Newsletter.init();

      // 6. Legal & Policy Pages
      PolicyPages.init();

      console.log(
        "%c App Successfully Initialized! ",
        "color: #00C853; font-weight: bold;",
      );
    },
  };

  // Launch Application
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", App.init);
  } else {
    App.init();
  }
})();
