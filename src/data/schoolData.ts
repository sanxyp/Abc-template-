// High-fidelity School Data & Assets
import heroCampusImg from '@/src/assets/images/hero_school_campus_1790268932112.jpg';
import aboutLearningImg from '@/src/assets/images/about_school_learning_1790268949884.jpg';
import scienceLabImg from '@/src/assets/images/facilities_science_lab_1790268964681.jpg';
import principalImg from '@/src/assets/images/principal_portrait_1790268977912.jpg';
import sportsEventsImg from '@/src/assets/images/campus_sports_events_1790268990398.jpg';

export {
  heroCampusImg,
  aboutLearningImg,
  scienceLabImg,
  principalImg,
  sportsEventsImg
};

export interface QuickStat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const quickStats: QuickStat[] = [
  {
    id: 'years',
    value: '25+',
    label: 'Years of Excellence',
    description: 'Nurturing holistic intellect and ethical values since 2001'
  },
  {
    id: 'students',
    value: '1,500+',
    label: 'Enrolled Students',
    description: 'Thriving learners across Nursery to Grade XII'
  },
  {
    id: 'faculty',
    value: '100+',
    label: 'Faculty Members',
    description: 'Experienced, passionate and certified mentor educators'
  },
  {
    id: 'achievement',
    value: '95%+',
    label: 'Academic Distinction',
    description: 'Consistent board exam distinctions and university admits'
  }
];

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export const whyChooseFeatures: FeatureCard[] = [
  {
    id: 'faculty',
    title: 'Experienced Faculty',
    description: 'Our certified educators have an average of 12+ years of pedagogical expertise, blending patient mentorship with modern teaching methodologies.',
    iconName: 'GraduationCap',
    highlight: '1:15 Teacher-Student Ratio'
  },
  {
    id: 'smart-class',
    title: 'Smart Classrooms',
    description: 'Acoustically treated interactive digital classrooms with multimedia projectors, interactive whiteboards, and digital learning modules.',
    iconName: 'Laptop',
    highlight: '100% Digitized Learning'
  },
  {
    id: 'holistic',
    title: 'Holistic Education',
    description: 'Balanced curriculum harmonizing rigorous academic pursuit with arts, sports, public speaking, ethics, and emotional intelligence.',
    iconName: 'Sparkles',
    highlight: 'All-Round Growth'
  },
  {
    id: 'sports',
    title: 'Sports & Fitness',
    description: 'State-level standard athletic tracks, basketball, football, badminton courts, cricket nets, and professional coaches for physical conditioning.',
    iconName: 'Trophy',
    highlight: '10+ Active Sports'
  },
  {
    id: 'labs',
    title: 'Modern Laboratories',
    description: 'Dedicated composite laboratories for Physics, Chemistry, Biology, Robotics, and Advanced STEM Innovation with strict safety standards.',
    iconName: 'Microscope',
    highlight: 'Advanced Scientific Equipment'
  },
  {
    id: 'character',
    title: 'Character & Leadership',
    description: 'Structured leadership councils, social service outreach, eco-clubs, and moral education instilling humility, integrity, and civic duty.',
    iconName: 'ShieldCheck',
    highlight: 'Values-Led Environment'
  }
];

export interface AcademicStage {
  id: string;
  title: string;
  grades: string;
  ageGroup: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  keyHighlights: string[];
}

export const academicStages: AcademicStage[] = [
  {
    id: 'primary',
    title: 'Primary School',
    grades: 'Grades I – V',
    ageGroup: 'Ages 6 to 10',
    tagline: 'Curiosity, Foundational Literacy & Joyful Discovery',
    description: 'Activity-based experiential learning designed to foster curiosity, strong linguistic foundations, mathematical intuition, and artistic appreciation in a safe, nurturing environment.',
    focusAreas: ['Foundational Numeracy & Phonics', 'Environmental Studies', 'Visual & Performing Arts', 'Moral Science & Life Skills'],
    keyHighlights: ['Continuous comprehensive evaluation', 'Theme-based discovery corners', 'Weekly public speaking & story hour', 'Regular sensory and motor development']
  },
  {
    id: 'middle',
    title: 'Middle School',
    grades: 'Grades VI – VIII',
    ageGroup: 'Ages 11 to 13',
    tagline: 'Conceptual Clarity & Collaborative Inquiry',
    description: 'Transitioning students toward independent thought, analytical deduction, and scientific reasoning through laboratory experimentation, project collaboration, and diverse sports.',
    focusAreas: ['Integrated Sciences & Lab Practical', 'Advanced Mathematics & Reasoning', 'Second & Third Languages (Tamil/Hindi/Sanskrit)', 'Digital Literacy & Coding Basics'],
    keyHighlights: ['Subject-specialist faculty mentoring', 'Robotics and maker club sessions', 'Inter-house elocution and debates', 'Field study assignments']
  },
  {
    id: 'high',
    title: 'High School',
    grades: 'Grades IX – X',
    ageGroup: 'Ages 14 to 15',
    tagline: 'Academic Rigor, Critical Thinking & Board Readiness',
    description: 'Intensive academic preparation, in-depth subject mastery, and disciplined exam techniques backed by personal counselling to instill confidence for national/state board assessments.',
    focusAreas: ['Pure Sciences (Physics, Chemistry, Biology)', 'Mathematics & Coordinate Geometry', 'Social Sciences & Civics', 'English Language & Literature'],
    keyHighlights: ['Structured weekly revision & diagnostic testing', 'Personalized academic remedial support', 'Career guidance & aptitude mapping', 'Science exhibition symposiums']
  },
  {
    id: 'higher-sec',
    title: 'Higher Secondary',
    grades: 'Grades XI – XII',
    ageGroup: 'Ages 16 to 17',
    tagline: 'Career Specialization, Leadership & Pre-University Mastery',
    description: 'Focused stream specialization preparing students for top engineering, medical, commerce, and liberal arts universities alongside competitive entrance examinations (JEE, NEET, CUET, CA Foundation).',
    focusAreas: ['Science Stream (MPC & BiPC)', 'Commerce Stream (Accountancy & Economics)', 'Humanities & Applied Mathematics', 'Computer Science & AI Modules'],
    keyHighlights: ['Top-tier competitive exam preparation', 'Pre-board simulation drills', 'Guest lectures by alumni & industry leaders', 'University application mentorship']
  }
];

export interface SchoolFacility {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
}

export const schoolFacilities: SchoolFacility[] = [
  {
    id: 'smart-classrooms',
    name: 'Smart Classrooms',
    category: 'Digital Infrastructure',
    description: 'Ergonomically designed classrooms equipped with digital interactive boards, sound dampening acoustics, and ergonomic seating that supports dynamic group discussions.',
    features: ['High-lumen interactive displays', 'Wi-Fi enabled e-learning modules', 'Climate-controlled air flow', 'Spacious dual-seater desks']
  },
  {
    id: 'science-lab',
    name: 'Science Laboratory',
    category: 'Practical Sciences',
    description: 'Spacious, safety-certified composite and specialized laboratories for Physics, Chemistry, and Biology with separate reagent stations and individual student workstations.',
    features: ['Precision optical microscopes', 'Individual burner & water stations', 'Dedicated chemical fume hood', 'Comprehensive first-aid & eye wash']
  },
  {
    id: 'computer-lab',
    name: 'Computer Laboratory',
    category: 'Technology & AI',
    description: 'Dual high-speed computing labs furnished with modern desktops, gigabit optical fiber networking, robotics kits, and vetted programming environments for modern digital skills.',
    features: ['80+ Core-i7 workstations', 'Scratch, Python & Web dev setups', 'Ergonomic keyboard trays', 'Uninterrupted power back-up (UPS)']
  },
  {
    id: 'library',
    name: 'Knowledge Resource Library',
    category: 'Literary & Research',
    description: 'A serene sanctuary housing over 15,000 physical volumes, reference encyclopedias, national journals, newspapers, and a dedicated digital catalog research terminal.',
    features: ['15,000+ curated volumes', 'Quiet individual reading carrels', 'Periodicals and scholastic magazines', 'Kindle e-book readers']
  },
  {
    id: 'auditorium',
    name: 'Grand Auditorium',
    category: 'Events & Arts',
    description: 'A 1,000-seater air-conditioned auditorium engineered with professional theatrical acoustics, motorized stage curtains, and digital surround sound for school assemblies and performances.',
    features: ['1,000-seat tiered capacity', 'Full digital audio-visual console', 'Green rooms & backstage suites', 'Automated LED stage lighting']
  },
  {
    id: 'sports-ground',
    name: 'Multi-Sport Complex',
    category: 'Athletics & Physical Ed',
    description: 'Expansive outdoor campus ground with an athletic running track, standard football pitch, volleyball arena, clay cricket practice nets, and synthetic basketball courts.',
    features: ['400m athletic track', 'Standard turf football ground', 'Floodlit basketball & tennis courts', 'Certified NIS athletic trainers']
  },
  {
    id: 'transportation',
    name: 'Safe Transportation Fleet',
    category: 'Logistics & Safety',
    description: 'GPS-tracked, speed-governed school buses covering all major residential corridors in Chennai, accompanied by licensed drivers, verified lady conductors, and onboard emergency kits.',
    features: ['Real-time GPS live tracking', 'Speed limiters & CCTV surveillance', 'Lady attendants on all routes', 'Direct parent SMS arrival alerts']
  },
  {
    id: 'canteen',
    name: 'Hygienic Dining & Canteen',
    category: 'Nutrition & Health',
    description: 'FSSAI-certified kitchen providing freshly cooked, wholesome vegetarian meals and wholesome snacks prepared under rigorous sanitation protocols.',
    features: ['FSSAI-certified clean kitchen', 'Steam-cleaned stainless steel cutlery', 'Nutritionally balanced menus', 'Purified RO drinking water stations']
  }
];

export interface CampusLifeItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
}

export const campusLifeItems: CampusLifeItem[] = [
  {
    id: 'sports',
    title: 'Sports & Athletics',
    tagline: 'Endurance, Teamwork & Athletic Spirit',
    description: 'Daily physical training programs, house tournaments, and state-level representation in cricket, football, athletics, chess, and martial arts.',
    details: ['Annual Inter-School Sports Meet', 'Morning physical conditioning', 'Inter-House Championship Trophy', 'Specialized karate & yoga sessions']
  },
  {
    id: 'cultural',
    title: 'Cultural Activities',
    tagline: 'Artistic Expression & Heritage Celebration',
    description: 'Rich opportunities to celebrate classical and contemporary music, Bharatanatyam, theatre, classical arts, and folk dance forms.',
    details: ['Annual Cultural Extravaganza', 'Inter-school drama competitions', 'Vocal & instrumental music choir', 'Art & craft exhibitions']
  },
  {
    id: 'clubs',
    title: 'Student Clubs & Societies',
    tagline: 'Pursuing Passions Beyond the Classroom',
    description: 'Student-led clubs that encourage curiosity, creative collaboration, social awareness, and technological exploration.',
    details: ['Robotics & AI Club', 'Literary & Debating Society', 'Eco & Nature Conservation Club', 'Math & Astronomy Guild']
  },
  {
    id: 'competitions',
    title: 'Competitions & Olympiads',
    tagline: 'Healthy Challenge & Scholastic Excellence',
    description: 'Active participation in National Science Olympiad (NSO), Math Olympiad (IMO), spelling bees, and university quiz leagues.',
    details: ['Structured Olympiad coaching', 'Inter-school model United Nations (MUN)', 'National youth parliament drills', 'Coding hackathons']
  },
  {
    id: 'field-trips',
    title: 'Field Trips & Excursions',
    tagline: 'Experiential Learning in the Real World',
    description: 'Curriculum-aligned visits to science centers, botanical reserves, archaeological heritage sites, planetariums, and industrial plants.',
    details: ['Annual Grade Excursions', 'Planetarium & ISRO museum trips', 'Organic farming workshops', 'Heritage walking tours in Tamil Nadu']
  },
  {
    id: 'celebrations',
    title: 'Festivals & Celebrations',
    tagline: 'Cultural Unity & Traditional Heritage',
    description: 'Fostering cultural pride through festive celebrations of Pongal, Independence Day, Republic Day, Teachers’ Day, and Children’s Day.',
    details: ['Traditional Pongal pot-cooking & folk arts', 'Solemn national flag hoisting', 'Grand Grandparents’ Day', 'Investiture Ceremony']
  }
];

export interface AchievementItem {
  id: string;
  category: string;
  title: string;
  statistic: string;
  description: string;
  highlight: string;
}

export const schoolAchievements: AchievementItem[] = [
  {
    id: 'academic',
    category: 'Academic Excellence',
    title: 'Board Examination Record',
    statistic: '100% Pass Rate',
    description: 'Over 68% of students secured above 90% aggregate in Grade X and XII board examinations, with 12 district centum scores in Mathematics and Science.',
    highlight: 'Consecutive 10-Year Record'
  },
  {
    id: 'sports',
    category: 'Sports & Athletics',
    title: 'State Athletic Championship',
    statistic: '34 Gold Medals',
    description: 'ABC School athletes clinched the overall State Athletic Championship trophy, winning gold in 4x100m relay, long jump, and under-17 badminton.',
    highlight: 'Regional Champions'
  },
  {
    id: 'cultural',
    category: 'Cultural Honors',
    title: 'Inter-School Fine Arts Trophy',
    statistic: '1st Place in 14 Events',
    description: 'Our classical music and drama troupes won first place at the prestigious South India Youth Cultural Fest held across 45 participating schools.',
    highlight: 'Trophy of Artistic Eminence'
  },
  {
    id: 'olympiad',
    category: 'National Olympiads',
    title: 'SOF National Science & Math',
    statistic: '18 International Ranks',
    description: '18 students attained All-India Top 50 ranks in National Science and Cyber Olympiads, qualifying for prestigious international summer camps.',
    highlight: 'National Gold Medalists'
  }
];

export interface NewsEvent {
  id: string;
  title: string;
  date: string;
  formattedDate: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  venue: string;
  time: string;
}

export const newsAndEvents: NewsEvent[] = [
  {
    id: 'annual-day',
    title: '25th Silver Jubilee Annual Day Celebration',
    date: '2026-10-18',
    formattedDate: 'October 18, 2026',
    category: 'School Event',
    shortDesc: 'A grand celebration featuring musical theatricals, dance tributes, prize distribution, and keynote speech by esteemed guests.',
    fullDesc: 'ABC School cordially invites parents, alumni, and patrons to the 25th Silver Jubilee Annual Day Celebration. The event showcases over 600 students presenting musical orchestra, classical dances, English and Tamil drama, and academic awards recognizing outstanding student achievements.',
    venue: 'Grand School Auditorium',
    time: '4:30 PM – 8:30 PM'
  },
  {
    id: 'sports-day',
    title: 'Annual Inter-House Athletic Meet',
    date: '2026-11-05',
    formattedDate: 'November 05, 2026',
    category: 'Sports',
    shortDesc: 'Thrilling track and field contests, march past, aerobics displays, and championship trophy distribution among all 4 school houses.',
    fullDesc: 'The prestigious Annual Athletic Meet brings together the four school houses (Ruby, Emerald, Sapphire, Topaz) in spirited competition. Features include torch relay, 100m sprint, hurdle relays, tug of war, and parents’ novelty race.',
    venue: 'Main Sports Complex',
    time: '8:00 AM – 2:00 PM'
  },
  {
    id: 'science-exhibition',
    title: 'Vigyan Mela: Interschool Science Exhibition',
    date: '2026-11-21',
    formattedDate: 'November 21, 2026',
    category: 'Academic',
    shortDesc: 'Students display over 100 working models covering solar energy, AI robotics, clean water filtration, and astronomy.',
    fullDesc: 'An inspiring showcase of inquiry and technological innovation where middle and high school students present innovative prototypes. Evaluated by research scientists from premier institutes with special awards for sustainable development inventions.',
    venue: 'Senior Science Labs & Multi-Purpose Hall',
    time: '9:30 AM – 3:30 PM'
  },
  {
    id: 'cultural-festival',
    title: 'Sanskriti: Traditional Arts & Cultural Festival',
    date: '2026-12-12',
    formattedDate: 'December 12, 2026',
    category: 'Cultural',
    shortDesc: 'A celebration of Indian folk dances, carnatic music recital, rangoli contest, culinary fair, and handicraft bazaar.',
    fullDesc: 'Sanskriti celebrates the rich cultural diversity of India. The campus turns vibrant with student art installations, culinary stalls serving traditional foods, acoustic music stages, and inter-school speech competitions.',
    venue: 'Open-Air Amphitheatre',
    time: '10:00 AM – 5:00 PM'
  },
  {
    id: 'ptm',
    title: 'Term-End Parent-Teacher Conference',
    date: '2026-12-19',
    formattedDate: 'December 19, 2026',
    category: 'Academic Meeting',
    shortDesc: 'Individual constructive discussions on student academic progress, holistic character growth, and personalized guidance.',
    fullDesc: 'Dedicated one-on-one sessions between educators and parents to review evaluation portfolios, celebrate individual achievements, and formulate mutual support strategies for holistic student success.',
    venue: 'Respective Classrooms',
    time: '9:00 AM – 1:30 PM'
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  relation: string;
  quote: string;
  highlight: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'parent-1',
    name: 'Dr. Rajesh Sundaram',
    role: 'Parent of Ananya Sundaram (Grade X)',
    relation: 'Parent',
    quote: 'Enrolling our daughter in ABC School 6 years ago has been the best decision for her education. The teachers do not just teach syllabus; they inspire genuine curiosity. Her public speaking skills and confidence in science competitions have blossomed remarkably.',
    highlight: 'Exceptional Faculty Mentorship',
    rating: 5
  },
  {
    id: 'parent-2',
    name: 'Mrs. Kavitha Subramanian',
    role: 'Parent of Rohan & Siddharth (Grades IV & VIII)',
    relation: 'Parent',
    quote: 'What sets ABC School apart is the warmth and moral grounding. The campus is spotlessly safe, the communication via app is transparent, and my children look forward to going to school every single morning. The sports coaching is truly commendable.',
    highlight: 'Safe, Wholesome Environment',
    rating: 5
  },
  {
    id: 'alumni-1',
    name: 'Karthik Narayanan',
    role: 'Software Engineer at Google, Alumnus (Batch of 2018)',
    relation: 'Alumnus',
    quote: 'The analytical mindset and foundational programming classes I had at ABC School laid the bedrock for my engineering journey at IIT Madras. The values of humility and discipline taught by our teachers continue to guide my professional life.',
    highlight: 'Strong Analytical Foundation',
    rating: 5
  },
  {
    id: 'student-1',
    name: 'Pooja Venkatesh',
    role: 'Head Girl, Grade XII (Science Stream)',
    relation: 'Student',
    quote: 'ABC School gives us wings to explore our passions. From leading the debate society to conducting experiments in the advanced chemistry lab, every day offers a new learning milestone. The teachers provide personalized encouragement at every step.',
    highlight: 'Empowering Student Leadership',
    rating: 5
  }
];

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Campus' | 'Events' | 'Sports' | 'Cultural' | 'Students' | 'Activities';
  caption: string;
  imgUrl: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Main Academic Block & Central Quadrangle',
    category: 'Campus',
    caption: 'Sunlit corridors and manicured central lawns of ABC School campus.',
    imgUrl: heroCampusImg
  },
  {
    id: 'gal-2',
    title: 'Collaborative Learning in Smart Classroom',
    category: 'Students',
    caption: 'Students engaging in active group problem solving and digital literacy.',
    imgUrl: aboutLearningImg
  },
  {
    id: 'gal-3',
    title: 'State-of-the-Art Science Research Laboratory',
    category: 'Campus',
    caption: 'Fully equipped workstations for Physics, Chemistry, and Biology experiments.',
    imgUrl: scienceLabImg
  },
  {
    id: 'gal-4',
    title: 'Annual Sports Day 4x100m Relay',
    category: 'Sports',
    caption: 'Athletes giving their all on the athletic track during the annual sports meet.',
    imgUrl: sportsEventsImg
  },
  {
    id: 'gal-5',
    title: 'Leadership & Academic Direction',
    category: 'Campus',
    caption: 'Principal and senior educators reviewing the academic enrichment curriculum.',
    imgUrl: principalImg
  },
  {
    id: 'gal-6',
    title: 'Robotics & STEM Innovation Workshop',
    category: 'Activities',
    caption: 'Junior students coding automated robotics sensors in the maker space.',
    imgUrl: scienceLabImg
  },
  {
    id: 'gal-7',
    title: 'Classical Music & Annual Day Presentation',
    category: 'Cultural',
    caption: 'Grand performance by the school vocal choir and orchestra.',
    imgUrl: heroCampusImg
  },
  {
    id: 'gal-8',
    title: 'Inter-House Basketball Championship',
    category: 'Sports',
    caption: 'Exciting final showdown on the floodlit synthetic court.',
    imgUrl: sportsEventsImg
  },
  {
    id: 'gal-9',
    title: 'Science Fair Working Prototype Presentation',
    category: 'Events',
    caption: 'Young inventors demonstrating clean solar power concepts to visitors.',
    imgUrl: aboutLearningImg
  }
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const admissionFaqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is the admission procedure for the academic year 2026-27?',
    answer: 'The admission process involves submitting an online or offline enquiry form, followed by an informal interactive session for primary students or an assessment review for middle and higher secondary grades. Selected applicants receive an offer letter and complete enrollment with document verification.',
    category: 'Admissions'
  },
  {
    id: 'faq-2',
    question: 'What are the minimum age criteria for entry-level admissions?',
    answer: 'For Pre-KG, the child should be 3 years old as of 31st May of the academic year. For Grade I, the minimum age requirement is 6 completed years in line with NEP regulations.',
    category: 'Admissions'
  },
  {
    id: 'faq-3',
    question: 'Does the school provide dedicated bus transportation?',
    answer: 'Yes, ABC School operates a large fleet of modern GPS-enabled, air-cooled buses with speed governors, CCTV cameras, and lady attendants covering over 40 distinct routes throughout Chennai and suburban areas.',
    category: 'Facilities'
  },
  {
    id: 'faq-4',
    question: 'What streams are offered at the Higher Secondary level (Grades XI & XII)?',
    answer: 'We provide specialized streams: Group 1 (Physics, Chemistry, Mathematics, Biology/Computer Science), Group 2 (Physics, Chemistry, Mathematics, Computer Science/AI), and Group 3 (Commerce, Accountancy, Economics, Business Studies/Applied Mathematics).',
    category: 'Academics'
  },
  {
    id: 'faq-5',
    question: 'What is the student-to-teacher ratio at ABC School?',
    answer: 'We maintain an optimal ratio of approximately 1:15 in primary sections and 1:20 in secondary classes, guaranteeing personalized attention, timely feedback, and tailored academic support for every child.',
    category: 'Academics'
  },
  {
    id: 'faq-6',
    question: 'Are there scholarship programs for meritorious or athletic students?',
    answer: 'Yes, ABC School awards merit-cum-means scholarships and full sports fee concessions to students who represent the district or state in recognized sports competitions or achieve exceptional academic percentiles.',
    category: 'Admissions'
  }
];

export const schoolContact = {
  name: 'ABC SCHOOL',
  tagline: 'Inspiring Young Minds, Building Bright Futures',
  address: '123 School Road, Chennai, Tamil Nadu, India',
  pincode: '600001',
  phone: '+91 44 2835 1234',
  phoneDisplay: '+91 44 2835 1234',
  mobile: '+91 98400 12345',
  email: 'info@abcschool.com',
  admissionsEmail: 'admissions@abcschool.com',
  hours: 'Monday – Saturday: 8:30 AM – 4:30 PM',
  affiliation: 'CBSE Affiliation No. 1930452 | School Code: 55432',
  founded: 2001
};
