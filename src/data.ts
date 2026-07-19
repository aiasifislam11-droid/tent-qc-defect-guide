import { Defect } from './types';

export const defectsData: Defect[] = [
  {
    id: 1,
    name: "Open Seam",
    bengaliName: "খোলা সীমিং / সেলাই ছুটে যাওয়া",
    categories: ["Major"],
    reasoning: { Major: "সেলাই খুলে গেলে জয়েন্ট দুর্বল হয়ে যায় এবং টেন্ট ছিঁড়ে যাওয়ার ঝুঁকি থাকে।" },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 2,
    name: "Broken Stitches",
    bengaliName: "ভাঙা সেলাই / সুতা ছেঁড়া",
    categories: ["Major"],
    reasoning: { Major: "জোড়াতালির সেলাই দুর্বল হলে টেন্টের টান সহ্য করার ক্ষমতা কমে যায়।" },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 3,
    name: "Loose Stitches",
    bengaliName: "লুজ স্টিচ / ঢিলা সেলাই",
    categories: ["Major", "Minor"],
    reasoning: {
      Major: "টেন্টের মূল জয়েন্ট বা লোড-বেয়ারিং অংশে হলে সেলাই খুলে যাওয়ার ঝুঁকিতে এটি Major।",
      Minor: "টেন্টের ভেতরের পকেটে বা এমন জায়গায় যেখানে কোনো টান পড়ে না, সেখানে থাকলে এটি Minor।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 4,
    name: "Gathering stitch",
    bengaliName: "কুঁচকানো সেলাই (গ্যাদারিং)",
    categories: ["Major", "Minor"],
    reasoning: {
      Major: "সেলাই কুঁচকে থাকার কারণে যদি ওয়াটারপ্রুফ টেপ (Seam Tape) ঠিকমতো না বসে, তবে পানি লিক করার ঝুঁকিতে এটি Major।",
      Minor: "টেন্টের ভেতরের দিকের কাপড়ে সামান্য গ্যাদারিং যা বাইরে থেকে দেখা যায় না, তা Minor।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 5,
    name: "skipping stitch",
    bengaliName: "স্কিপ স্টিচ / সেলাই বাদ পড়া",
    categories: ["Major"],
    reasoning: { Major: "সেলাই বাদ পড়লে ওই অংশ দিয়ে প্রেশার পেয়ে কাপড় ফাঁক হয়ে যেতে পারে।" },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 6,
    name: "Raw-Edge",
    bengaliName: "র-এজ / কাপড়ের সুতা বের হয়ে থাকা",
    categories: ["Major", "Minor"],
    reasoning: {
      Major: "যদি জয়েন্টের ভেতরের কাপড় কাঁচা থাকে এবং সুতা উঠতে উঠতে সেলাই খুলে যাওয়ার সম্ভাবনা তৈরি হয়, তবে এটি Major।",
      Minor: "টেন্টের ভেতরের পকেটের বা ফ্ল্যাপের কোণায় সামান্য সুতা বের হয়ে থাকলে যা কেটে ফেলা যায়, তা Minor।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 7,
    name: "Seam Out",
    bengaliName: "সীমের বাইরে সেলাই যাওয়া",
    categories: ["Major"],
    reasoning: { Major: "জয়েন্টের মূল লাইনের বাইরে সেলাই চলে গেলে কাপড়ের গ্রিপ আলগা হয়ে যায়।" },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 8,
    name: "Needle Hole",
    bengaliName: "সুইয়ের ছিদ্র / নিডেল হোল",
    categories: ["Major"],
    reasoning: { Major: "ওয়াটারপ্রুফ টেন্টে সুইয়ের অতিরিক্ত ছিদ্র থাকলে সেখান দিয়ে পানি লিক করবে।" },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 9,
    name: "Run Off",
    bengaliName: "রান অফ / সেলাই লাইন থেকে বের হওয়া",
    categories: ["Major"],
    reasoning: { Major: "স্টিচিং ট্র্যাক থেকে সুতা নেমে গেলে কাপড় জোড়া লাগবে না।" },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 10,
    name: "Puckering",
    bengaliName: "পাকারিং / কুঁচকে থাকা",
    categories: ["Major", "Minor"],
    reasoning: {
      Major: "জয়েন্ট লাইনে অতিরিক্ত পাকারিং হলে কাপড় টানটান হবে না এবং সেখানে পানি জমে লিক হতে পারে, তাই এটি Major।",
      Minor: "টেন্টের ভেতরের ছোট কোনো প্যানেলে বা জিপার ফ্ল্যাপের কাপড়ে সামান্য কুঁচকানো ভাব থাকলে তা Minor।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 11,
    name: "Pleats",
    bengaliName: "অনাকাঙ্ক্ষিত প্লিট বা ভাজ",
    categories: ["Major", "Minor"],
    reasoning: {
      Major: "জয়েন্টের মুখে বড় ভাজ পড়লে ওয়াটারপ্রুফিং সিলিং নষ্ট হয়, যার ফলে এটি Major।",
      Minor: "নন-ক্রিটিক্যাল এরিয়াতে (যেমন স্টোরেজ পকেটের নিচে) ছোট কোনো কাপড় ভাজ হয়ে সেলাই পড়লে তা Minor।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 12,
    name: "Soil/oil Spot",
    bengaliName: "তেল বা ময়লার দাগ",
    categories: ["Major", "Minor"],
    reasoning: {
      Major: "টেন্টের সামনের অংশে বা লোগোর কাছাকাছি বড় আকারের কালো গ্রিজ বা তেলের দাগ থাকলে যা সহজে উঠবে না, তা Major।",
      Minor: "টেন্টের নিচের অংশে বা ভেতরের ফ্লোরে ছোট চক বা পেনসিলের দাগ অথবা ধুলোবালি থাকলে যা মুছে ফেলা সম্ভব, তা Minor।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 13,
    name: "Damage",
    bengaliName: "ড্যামেজ / কাপড় কাটা বা ফাটল",
    categories: ["Critical"],
    reasoning: { Critical: "কাপড়ে যদি কোনো কাটা বা বড় ফাটল থাকে, তবে সেখান দিয়ে পানি ও বাতাস ঢুকবে যা সম্পূর্ণ রিজেক্টেড।" },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 14,
    name: "Missing",
    bengaliName: "মিসিং পার্টস / অনুপস্থিত অংশ",
    categories: ["Critical"],
    reasoning: { Critical: "টেন্ট সেটআপের জন্য প্রয়োজনীয় কোনো গুরুত্বপূর্ণ অংশ (যেমন: খুঁটি বাঁধার লুপ, জিপার রানার) যদি মিসিং থাকে।" },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 15,
    name: "Hanging Thread",
    bengaliName: "ঝুলন্ত সুতা / এক্সট্রা সুতা",
    categories: ["Major", "Minor"],
    reasoning: {
      Major: "ঝুলন্ত সুতা যদি কোনো মুভিং পার্টস বা জিপারের ভেতর আটকে চেইন জ্যাম করে দেয়, তবে তা Major।",
      Minor: "সেলাই শেষে বাড়তি সুতা ঝুলে থাকা (যা কেঁচি দিয়ে কাটলেই শেষ), এটি একটি সাধারণ Minor ডিফেক্ট।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 16,
    name: "PE Welding Problem",
    bengaliName: "পিই ওয়ের্ডিং সমস্যা",
    categories: ["Major", "Minor"],
    reasoning: {
      Major: "টেন্টের নিচের ফ্লোরে (PE Fabric) ওয়েল্ডিং ঠিকমতো না হলে বা গ্যাপ থাকলে নিচ থেকে পানি ঢুকবে, তাই এটি Major।",
      Minor: "ফ্লোরের ওয়েল্ডিং স্ট্রিপের জয়েন্টে সামান্য বাড়তি প্লাস্টিক মেল্ট হয়ে থাকলে কিন্তু লিক না হলে তা Minor।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 17,
    name: "Seam Tape Defects",
    bengaliName: "সীম টেপ ডিফেক্ট",
    categories: ["Major", "Minor"],
    reasoning: {
      Major: "ওয়াটারপ্রুফ সিলিং টেপ যদি উঠে যায় বা বুদবুদ (Bubble) থাকে, তবে বৃষ্টিতে পানি চুইয়ে পড়বে, যা সরাসরি Major ত্রুটি।",
      Minor: "টেপের একদম শেষ মাথায় সামান্য (১-২ মিলিমিটার) আন-ইভেন কাটিং থাকলে যা ওয়াটারপ্রুফিংয়ে প্রভাব ফেলে না, তা Minor।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 18,
    name: "Seam Unbalance",
    bengaliName: "সীমের অসমতা (আনব্যালেন্স)",
    categories: ["Major", "Minor"],
    reasoning: {
      Major: "সীমিং লাইন আঁকাবাঁকা হওয়ার কারণে যদি একপাশে বেশি টান পড়ে এবং ফেব্রিক ছিঁড়ে যাওয়ার উপক্রম হয়, তবে এটি Major।",
      Minor: "ডাবল সেলাইয়ের দূরত্বে সামান্য ১৯-২০ (খুবই অল্প আঁকাবাঁকা) হলে যা দূর থেকে বোঝা যায় না, তা Minor।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 19,
    name: "Fabric Defects",
    bengaliName: "ফ্যাব্রিক ডিফেক্ট / কাপড়ের ত্রুটি",
    categories: ["Major"],
    reasoning: { Major: "কাপড়ের সুতা দুর্বল হওয়া বা বোনাতে বড় কোনো ত্রুটি থাকা।" },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 20,
    name: "Fabric Cut/Torn",
    bengaliName: "কাপড় কাটা বা ছেঁড়া",
    categories: ["Major"],
    reasoning: { Major: "ফেব্রিকের কোনো অংশ আংশিক কেটে বা ফেটে গেলে।" },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 21,
    name: "Color Shade",
    bengaliName: "কালার শেড / রঙের তারতম্য",
    categories: ["Major", "Minor"],
    reasoning: {
      Major: "একই টেন্টের বডির একটা প্যানেল গাঢ় নীল আর পাশের প্যানেল হালকা নীল হলে তা সহজেই চোখে পড়ে, তাই এটি Major।",
      Minor: "দুই ব্যাচের কাপড়ের মধ্যে খুবই সামান্য শেড ভ্যারিয়েশন যা শুধুমাত্র ল্যাবরেটরির লাইটবক্সে ধরা পড়ে, তা Minor।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 22,
    name: "Zipper Defects",
    bengaliName: "জিপার বা চেইনের ত্রুটি",
    categories: ["Major"],
    reasoning: { Major: "টেন্টের চেইন ঠিকমতো না লাগলে বা আটকে গেলে দরজা/জানলা বন্ধ হবে না।" },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 23,
    name: "Position of Parts",
    bengaliName: "পার্টসের ভুল পজিশন",
    categories: ["Major"],
    reasoning: { Major: "টেন্টের উইন্ডো বা দরজার প্যানেল ভুল জায়গায় বসে গেলে।" },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 24,
    name: "Sharp Points",
    bengaliName: "ধারালো অংশ বা সুচালো সুই",
    categories: ["Major"],
    reasoning: { Major: "টেন্টের ভেতর কোনো ধারালো ধাতব অংশ বা ভাঙা সুই রয়ে গেলে তা ব্যবহারকারীর জন্য বিপজ্জনক।" },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 25,
    name: "Logo and Label",
    bengaliName: "লোগো এবং লেবেলের ত্রুটি",
    categories: ["Critical", "Major"],
    reasoning: {
      Critical: "লোগো উল্টো হলে বা ভুল সাইজ/বারকোড লেবেল লাগালে যদি পুরো শিপমেন্ট বায়ার রিজেক্ট করার ঝুঁকি থাকে তবে তা Critical।",
      Major: "লোগো সামান্য বাঁকা বা ভুল উচ্চতায় থাকলে, কিন্তু তথ্য সব ঠিক থাকলে তা Major ধরা হয়।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 26,
    name: "Funtional Problem",
    bengaliName: "ফাংশনাল সমস্যা (কাজ না করা)",
    categories: ["Critical", "Major"],
    reasoning: {
      Critical: "টেন্ট যদি ঠিকমতো দাঁড় করানো না যায় বা পার্টস লক না হয়, অর্থাৎ মূল কাজই না করলে তা Critical।",
      Major: "কোনো জিপার বা লুপ টানতে একটু শক্ত হচ্ছে কিন্তু কাজ করছে, এমন ছোটখাটো কার্যকারিতার সমস্যা Major।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 27,
    name: "Shape Unbalance",
    bengaliName: "শেপ আনব্যালেন্স / বাঁকা আকার",
    categories: ["Major"],
    reasoning: { Major: "কাটিং বা মেজারমেন্ট ভুলের কারণে টেন্টের আকার অসম বা বাঁকা হলে।" },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 28,
    name: "Missing Bacck Stitch",
    bengaliName: "ব্যাক স্টিচ মিসিং",
    categories: ["Major", "Minor"],
    reasoning: {
      Major: "সেলাইয়ের শুরুতে বা শেষে লক (Back stitch) না থাকলে পুরো সেলাই খুলে যাওয়ার শতভাগ সুযোগ থাকে, তাই এটি Major।",
      Minor: "কোনো ছোট ইন্টারনাল পকেটের সেলাইয়ের মাথায় লক না থাকলে তা Minor ধরা যেতে পারে।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 29,
    name: "Out Stitch",
    bengaliName: "আউট স্টিচ / সেলাই বাইরে যাওয়া",
    categories: ["Major", "Minor"],
    reasoning: {
      Major: "ডাবল সেলাইয়ের ক্ষেত্রে একটি সেলাই যদি মেইন ট্র্যাক থেকে অনেক দূরে চলে যায় এবং ফেব্রিক হোল্ড না করে, তবে এটি Major।",
      Minor: "ফিনিশিং লাইনের টপ-স্টিচিংয়ের সময় সামান্য সুতা ২-৩টি স্টিচ ট্র্যাকের বাইরে গিয়ে আবার ট্র্যাকে ফিরে আসলে তা Minor।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  },
  {
    id: 30,
    name: "Displace Back Stitch",
    bengaliName: "ভুল জায়গায় ব্যাক স্টিচ হওয়া",
    categories: ["Major", "Minor"],
    reasoning: {
      Major: "লক স্টিচ ভুল জায়গায় হওয়ার কারণে যদি মেইন ফেব্রিক কুঁচকে যায় বা ওয়াটারপ্রুফিং টেপের ক্ষতি করে, তবে এটি Major।",
      Minor: "সেলাইয়ের সুতা লক করার জন্য একদম কর্নারে ব্যাক স্টিচ না হয়ে ২ মিলিমিটার পাশে হলে তা Minor।"
    },
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&q=80"
  }
];
      
