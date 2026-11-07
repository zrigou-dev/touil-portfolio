export type Lang = "fr" | "en";

export const person = {
  name: "Meryem Touil",
  email: "touilmeryem121@gmail.com",
  phone: "+212 6 26 72 85 12",
  phoneHref: "+212626728512",
  linkedin: "https://linkedin.com/in/meryem-touil-b2506928b",
  cv: "/CV_Meryem_Touil.pdf",
};

export type Flagship = {
  id: "ouigo" | "mci" | "junior" | "barnes";
  name: string;
  url: string;
  host: string;
  kind: string;
  year?: string;
  context: string;
  scale: string[];
  role: string;
  value: string;
};

export type Product = {
  id: "andragogy" | "kateo" | "meet" | "openproject";
  name: string;
  tag: string;
  desc: string;
  points: string[];
  stack: string[];
};

const fr = {
  nav: { about: "Parcours", work: "Plateformes", products: "Produits", exp: "Expérience", skills: "Expertise", contact: "Contact" },
  cta: { cv: "Télécharger mon CV", talk: "Discutons de votre projet", seeWork: "Voir les projets", visit: "Visiter le site", email: "Écrire un e-mail" },
  hero: {
    badge: "Ouvert à un poste à temps plein",
    eyebrow: "Meryem Touil — Développeur Full Stack & Scrum Master",
    lines: ["Je transforme des besoins", "métiers complexes en", "plateformes web fiables."],
    sub: "Plus de trois ans à concevoir et livrer des applications SaaS, des intégrations d’API et des plateformes web d’envergure avec Symfony et React.js — tout en pilotant les sprints d’équipes Agile.",
    scroll: "Défiler",
    card: { role: "Full Stack Developer", seeking: "Poste à temps plein" },
  },
  stats: [
    { value: 3, suffix: "+", label: "ans d’expérience en développement web SaaS" },
    { value: 4, suffix: "", label: "plateformes d’envergure supervisées & développées" },
    { value: 4, suffix: "", label: "produits SaaS & intégrations livrés chez Webodrop" },
    { value: 1, suffix: "", label: "certification Scrum Master (International Scrum Institute)" },
  ],
  about: {
    kicker: "01 — Parcours",
    title: "Développeur de métier, facilitateur d’équipe par instinct.",
    paras: [
      "J’ai commencé par un diplôme de Technicien Spécialisé NTIC, puis un stage full stack chez Etorrus Agency, avant de rejoindre Webodrop en septembre 2023. Depuis, je construis et fais évoluer des produits SaaS en production, de l’analyse fonctionnelle jusqu’à la mise en ligne.",
      "Mon profil est rare pour un étudiant : je code en Symfony et React.js, je branche des API tierces (Slack, Google Calendar, Google Meet, OpenProject), et je tiens aussi le rôle de Scrum Master — organisation des sprints, suivi des tâches, coordination des équipes et dialogue direct avec les clients.",
      "Aujourd’hui en 5ème année d’Ingénierie Logicielle à l’École High-Tech, je recherche un poste à temps plein pour mettre cette double compétence technique et organisationnelle au service d’un projet d’envergure.",
    ],
    pillars: [
      { t: "Comprendre avant de coder", d: "Je participe à l’analyse fonctionnelle, à la conception (UML, Merise) et aux échanges clients pour que chaque fonctionnalité résolve un vrai problème métier." },
      { t: "Livrer avec méthode", d: "Certifié Scrum Master, j’organise les sprints, suis les tâches et garde l’équipe alignée du backlog à la livraison." },
      { t: "Connecter les outils", d: "Intégration d’API tierces — Slack, Google OAuth, Calendar, Meet, OpenProject — pour que les produits s’insèrent dans le quotidien des utilisateurs." },
    ],
  },
  work: {
    kicker: "02 — Plateformes d’envergure",
    title: "Des plateformes que des millions de personnes peuvent visiter.",
    intro:
      "J’ai supervisé et contribué au développement de plateformes web publiques majeures, de la billetterie ferroviaire au portail d’un ministère. Des projets où la fiabilité, le multilingue et la qualité d’exécution ne sont pas négociables.",
    scaleLabel: "Envergure",
    roleLabel: "Mon rôle",
    valueLabel: "Valeur métier",
    hover: "Survolez pour parcourir le site réel",
    shotAlt: "capture du site réel",
    note: "Le détail de ma contribution à chaque projet est présenté en entretien.",
  },
  flagships: [
    {
      id: "ouigo",
      name: "OUIGO",
      url: "https://www.ouigo.com/es/",
      host: "ouigo.com/es",
      kind: "Réservation de voyages · Grand public",
      context:
        "Site de la marque de train à grande vitesse low-cost de SNCF Voyageurs : recherche et réservation de billets, codes promo, carte OUIGOLAND pour trouver un voyage selon son budget, revente de billets avec OUIGOSWAP et gestion des réservations.",
      scale: ["70+ destinations", "FR · EN · ES · CA", "France, Espagne & international"],
      role: "Supervision et contribution au développement de la plateforme.",
      value: "Un parcours de réservation clair et rapide pour un service dont la promesse est « petits prix garantis ».",
    },
    {
      id: "mci",
      name: "Ministère de l’Industrie et du Commerce",
      url: "https://www.mcinet.gov.ma/",
      host: "mcinet.gov.ma",
      kind: "Portail institutionnel · Services publics",
      context:
        "Portail officiel du Ministère marocain de l’Industrie et du Commerce : présentation du ministère, secteurs, régionalisation, avis et annonces, médiathèque, et services en ligne pour entreprises et citoyens (bureau d’ordre numérique, dessins et modèles industriels, plateforme de réclamations « Chikaya »).",
      scale: ["AR · FR · EN", "Services pour entreprises & citoyens", "Institution nationale"],
      role: "Supervision et contribution au développement du portail.",
      value: "Un accès numérique unifié à l’information et aux démarches d’une institution publique, dans trois langues.",
    },
    {
      id: "junior",
      name: "Junior & Cie",
      url: "https://juniorcie.sncf-connect.com/",
      host: "juniorcie.sncf-connect.com",
      kind: "Service de réservation · Familles",
      context:
        "Service d’accompagnement d’enfants voyageant seuls en TGV INOUI : les parents choisissent gares, aller-retour et cartes de réduction, puis réservent un voyage avec accompagnateur à bord.",
      scale: ["Écosystème SNCF Connect", "Réservation en ligne", "Parcours rassurant pour parents"],
      role: "Supervision et contribution au développement de la plateforme.",
      value: "Transformer une décision sensible pour des parents en un parcours simple, lisible et rassurant.",
    },
    {
      id: "barnes",
      name: "BARNES International",
      url: "https://www.barnes-international.com/",
      host: "barnes-international.com",
      kind: "Immobilier de prestige · International",
      context:
        "Site du groupe d’immobilier de luxe BARNES, présent depuis plus de 30 ans avec un réseau intégré de 150 agences dans 22 pays : recherche de biens à acheter ou à louer (appartements, chalets, villas, châteaux), locations saisonnières et demande d’estimation gratuite.",
      scale: ["150 agences · 22 pays", "6 langues", "Recherche de biens multi-marchés"],
      role: "Supervision et contribution au développement de la plateforme.",
      value: "Une vitrine premium et une recherche de biens qui accompagnent un réseau international.",
    },
  ] as Flagship[],
  products: {
    kicker: "03 — Produits SaaS & intégrations",
    title: "Les produits que j’ai construits chez Webodrop.",
    intro: "Quatre réalisations phares, développées avec Symfony et React.js, au plus près des besoins métiers de leurs utilisateurs.",
    stack: "Stack",
  },
  productList: [
    {
      id: "andragogy",
      name: "Andragogy",
      tag: "SaaS · Gestion de la formation",
      desc: "Plateforme SaaS pour piloter un organisme de formation de bout en bout.",
      points: ["Formations, participants, formateurs et entreprises", "Documents administratifs et facturation", "Planification des sessions"],
      stack: ["Symfony", "React.js"],
    },
    {
      id: "kateo",
      name: "Kateo",
      tag: "SaaS · Gestion de sites",
      desc: "Plateforme SaaS de gestion de sites industriels et tertiaires.",
      points: ["Équipements, bâtiments, visiteurs et intervenants externes", "Workflows multilingues", "QR Codes et impression d’étiquettes"],
      stack: ["Symfony", "React.js"],
    },
    {
      id: "meet",
      name: "Meet Slack",
      tag: "Intégration · Productivité",
      desc: "Planifier et lancer une réunion Google Meet sans quitter Slack.",
      points: ["Authentification Google OAuth", "Google Calendar & Google Meet", "Slack API"],
      stack: ["Slack API", "Google API", "OAuth"],
    },
    {
      id: "openproject",
      name: "OpenProject Dashboard",
      tag: "Reporting · Gestion de projets",
      desc: "Tableaux de bord personnalisés branchés sur l’API OpenProject.",
      points: ["Reporting, Kanban et graphiques", "Export PDF / CSV", "Gestion des projets en temps réel"],
      stack: ["REST API", "React.js"],
    },
  ] as Product[],
  exp: {
    kicker: "04 — Expérience",
    title: "Trois ans de production, un rôle double.",
    jobs: [
      {
        role: "Développeur Web Full Stack & Scrum Master",
        org: "Webodrop",
        date: "Sept. 2023 — Présent",
        bullets: [
          "Développement et maintenance d’applications web SaaS avec Symfony et React.js.",
          "Intégration d’APIs tierces : Slack API, Google API, Google Calendar et Google Meet.",
          "Organisation des sprints, suivi des tâches et coordination des équipes Agile.",
          "Participation à l’analyse fonctionnelle, à la conception et aux échanges avec les clients.",
          "Réalisation de nouvelles fonctionnalités, correction d’anomalies et optimisation des performances.",
        ],
        current: true,
      },
      {
        role: "Développeur Web Full Stack (Stage)",
        org: "Etorrus Agency",
        date: "Mai 2023 — Juin 2023",
        bullets: [
          "Développement de fonctionnalités front-end et back-end avec HTML, CSS, JavaScript et PHP.",
          "Participation à la réalisation et à la maintenance de projets web destinés aux clients.",
          "Correction d’anomalies et amélioration de l’expérience utilisateur.",
        ],
        current: false,
      },
    ],
  },
  skills: {
    kicker: "05 — Expertise",
    title: "Une boîte à outils full stack, orientée produit.",
    groups: [
      { t: "Front-End", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
      { t: "Back-End", items: ["Symfony", "PHP", "Laravel"] },
      { t: "APIs & intégrations", items: ["REST APIs", "Slack API", "Google API", "Google OAuth", "Google Calendar", "Google Meet"] },
      { t: "Bases de données", items: ["MySQL", "PostgreSQL"] },
      { t: "Outils", items: ["Git", "GitHub"] },
      { t: "Méthodes", items: ["Scrum", "UML", "Merise"] },
    ],
    cert: { t: "Certification", name: "Scrum Master Certified (SMC)", org: "International Scrum Institute" },
    langsTitle: "Langues",
    langs: [
      { l: "Arabe", v: "Langue maternelle" },
      { l: "Français", v: "Courant" },
      { l: "Anglais", v: "Basique" },
    ],
    eduTitle: "Formation",
    edu: [
      { d: "2025 — 2027", t: "Ingénierie Logicielle (5ème année, en cours)", s: "École High-Tech" },
      { d: "2024 — 2025", t: "Licence Développement Web & Mobile", s: "ISMAGI Rabat" },
      { d: "2021 — 2023", t: "Technicien Spécialisé NTIC", s: "OFPPT ISTA NTIC" },
      { d: "2020 — 2021", t: "Baccalauréat Sciences Physiques", s: "Lycée Ennassim" },
    ],
  },
  contact: {
    kicker: "06 — Contact",
    title: "Construisons votre prochain projet d’envergure.",
    sub: "Je recherche un poste à temps plein. Si vous cherchez un développeur Symfony / React capable de livrer des produits SaaS et de coordonner une équipe Agile, parlons-en.",
    based: "Basé à Rabat, Maroc",
    marquee: "Ouvert à un poste à temps plein",
  },
  footer: "© 2026 Meryem Touil. Conçu et développé avec Next.js.",
  marquee: ["Symfony", "React.js", "PHP", "PostgreSQL", "MySQL", "REST APIs", "Slack API", "Google OAuth", "Scrum", "UML", "Merise", "Git"],
};

export type Content = typeof fr;

const en: Content = {
  nav: { about: "Story", work: "Platforms", products: "Products", exp: "Experience", skills: "Expertise", contact: "Contact" },
  cta: { cv: "Download my CV", talk: "Let’s talk", seeWork: "See the work", visit: "Visit site", email: "Send an email" },
  hero: {
    badge: "Open to full-time opportunities",
    eyebrow: "Meryem Touil — Full Stack Developer & Scrum Master",
    lines: ["I turn complex business", "needs into reliable", "web platforms."],
    sub: "Over three years designing and shipping SaaS applications, API integrations and large-scale web platforms with Symfony and React.js — while running sprints for Agile teams.",
    scroll: "Scroll",
    card: { role: "Full Stack Developer", seeking: "Full-time role" },
  },
  stats: [
    { value: 3, suffix: "+", label: "years building SaaS web applications" },
    { value: 4, suffix: "", label: "large-scale platforms supervised & developed" },
    { value: 4, suffix: "", label: "SaaS products & integrations shipped at Webodrop" },
    { value: 1, suffix: "", label: "Scrum Master certification (International Scrum Institute)" },
  ],
  about: {
    kicker: "01 — Story",
    title: "A developer by trade, a team facilitator by instinct.",
    paras: [
      "I started with a Specialized Technician degree in ICT, then a full stack internship at Etorrus Agency, before joining Webodrop in September 2023. Since then I have built and evolved SaaS products in production, from functional analysis to release.",
      "My profile is uncommon for a student: I code in Symfony and React.js, plug in third-party APIs (Slack, Google Calendar, Google Meet, OpenProject), and also act as Scrum Master — organizing sprints, tracking tasks, coordinating teams and talking directly with clients.",
      "I am now in my 5th year of Software Engineering at École High-Tech, looking for a full-time role where this blend of technical and organizational skills can serve a project of real scale.",
    ],
    pillars: [
      { t: "Understand before coding", d: "I take part in functional analysis, design (UML, Merise) and client discussions so every feature solves a real business problem." },
      { t: "Deliver with method", d: "As a certified Scrum Master, I organize sprints, track tasks and keep the team aligned from backlog to release." },
      { t: "Connect the tools", d: "Third-party API integration — Slack, Google OAuth, Calendar, Meet, OpenProject — so products fit into users’ daily workflow." },
    ],
  },
  work: {
    kicker: "02 — Large-scale platforms",
    title: "Platforms that millions of people can visit.",
    intro:
      "I have supervised and contributed to the development of major public web platforms, from rail ticketing to a government ministry portal. Projects where reliability, multilingual delivery and execution quality are non-negotiable.",
    scaleLabel: "Scale",
    roleLabel: "My role",
    valueLabel: "Business value",
    hover: "Hover to scroll through the live site",
    shotAlt: "capture of the live website",
    note: "I walk through my exact contribution to each project in interview.",
  },
  flagships: [
    {
      id: "ouigo",
      name: "OUIGO",
      url: "https://www.ouigo.com/es/",
      host: "ouigo.com/es",
      kind: "Travel booking · Consumer",
      context:
        "Website of SNCF Voyageurs’ low-cost high-speed train brand: ticket search and booking, promo codes, the OUIGOLAND map to find trips by budget, ticket resale with OUIGOSWAP and booking management.",
      scale: ["70+ destinations", "FR · EN · ES · CA", "France, Spain & international"],
      role: "Supervision and contribution to the platform’s development.",
      value: "A clear, fast booking journey for a service built on the promise of “guaranteed low prices”.",
    },
    {
      id: "mci",
      name: "Ministry of Industry and Commerce",
      url: "https://www.mcinet.gov.ma/",
      host: "mcinet.gov.ma",
      kind: "Institutional portal · Public services",
      context:
        "Official portal of Morocco’s Ministry of Industry and Commerce: ministry presentation, sectors, regionalization, notices and announcements, media room, and online services for businesses and citizens (digital filing office, industrial design registration, the “Chikaya” complaints platform).",
      scale: ["AR · FR · EN", "Services for businesses & citizens", "National institution"],
      role: "Supervision and contribution to the portal’s development.",
      value: "Unified digital access to a public institution’s information and procedures, in three languages.",
    },
    {
      id: "junior",
      name: "Junior & Cie",
      url: "https://juniorcie.sncf-connect.com/",
      host: "juniorcie.sncf-connect.com",
      kind: "Booking service · Families",
      context:
        "Escort service for children travelling alone on TGV INOUI: parents choose stations, an optional return and discount cards, then book a trip with an on-board companion.",
      scale: ["SNCF Connect ecosystem", "Online booking", "Reassuring parent journey"],
      role: "Supervision and contribution to the platform’s development.",
      value: "Turning a sensitive decision for parents into a simple, readable and reassuring journey.",
    },
    {
      id: "barnes",
      name: "BARNES International",
      url: "https://www.barnes-international.com/",
      host: "barnes-international.com",
      kind: "Luxury real estate · International",
      context:
        "Website of the luxury real estate group BARNES, active for over 30 years with an integrated network of 150 agencies in 22 countries: property search to buy or rent (apartments, chalets, villas, châteaux), seasonal rentals and free valuation requests.",
      scale: ["150 agencies · 22 countries", "6 languages", "Multi-market property search"],
      role: "Supervision and contribution to the platform’s development.",
      value: "A premium showcase and property search supporting an international network.",
    },
  ],
  products: {
    kicker: "03 — SaaS products & integrations",
    title: "The products I built at Webodrop.",
    intro: "Four flagship builds, developed with Symfony and React.js, close to the business needs of their users.",
    stack: "Stack",
  },
  productList: [
    {
      id: "andragogy",
      name: "Andragogy",
      tag: "SaaS · Training management",
      desc: "A SaaS platform to run a training organization end to end.",
      points: ["Courses, participants, trainers and companies", "Administrative documents and invoicing", "Session scheduling"],
      stack: ["Symfony", "React.js"],
    },
    {
      id: "kateo",
      name: "Kateo",
      tag: "SaaS · Site management",
      desc: "A SaaS platform to manage industrial and commercial sites.",
      points: ["Equipment, buildings, visitors and external contractors", "Multilingual workflows", "QR Codes and label printing"],
      stack: ["Symfony", "React.js"],
    },
    {
      id: "meet",
      name: "Meet Slack",
      tag: "Integration · Productivity",
      desc: "Schedule and launch a Google Meet meeting without leaving Slack.",
      points: ["Google OAuth authentication", "Google Calendar & Google Meet", "Slack API"],
      stack: ["Slack API", "Google API", "OAuth"],
    },
    {
      id: "openproject",
      name: "OpenProject Dashboard",
      tag: "Reporting · Project management",
      desc: "Custom dashboards connected to the OpenProject API.",
      points: ["Reporting, Kanban and charts", "PDF / CSV export", "Real-time project management"],
      stack: ["REST API", "React.js"],
    },
  ],
  exp: {
    kicker: "04 — Experience",
    title: "Three years in production, a dual role.",
    jobs: [
      {
        role: "Full Stack Web Developer & Scrum Master",
        org: "Webodrop",
        date: "Sept. 2023 — Present",
        bullets: [
          "Development and maintenance of SaaS web applications with Symfony and React.js.",
          "Third-party API integration: Slack API, Google API, Google Calendar and Google Meet.",
          "Sprint organization, task tracking and coordination of Agile teams.",
          "Involvement in functional analysis, design and client discussions.",
          "Delivery of new features, bug fixing and performance optimization.",
        ],
        current: true,
      },
      {
        role: "Full Stack Web Developer (Internship)",
        org: "Etorrus Agency",
        date: "May 2023 — June 2023",
        bullets: [
          "Front-end and back-end feature development with HTML, CSS, JavaScript and PHP.",
          "Contribution to building and maintaining client web projects.",
          "Bug fixing and user experience improvements.",
        ],
        current: false,
      },
    ],
  },
  skills: {
    kicker: "05 — Expertise",
    title: "A full stack toolbox, product-minded.",
    groups: [
      { t: "Front-End", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
      { t: "Back-End", items: ["Symfony", "PHP", "Laravel"] },
      { t: "APIs & integrations", items: ["REST APIs", "Slack API", "Google API", "Google OAuth", "Google Calendar", "Google Meet"] },
      { t: "Databases", items: ["MySQL", "PostgreSQL"] },
      { t: "Tools", items: ["Git", "GitHub"] },
      { t: "Methods", items: ["Scrum", "UML", "Merise"] },
    ],
    cert: { t: "Certification", name: "Scrum Master Certified (SMC)", org: "International Scrum Institute" },
    langsTitle: "Languages",
    langs: [
      { l: "Arabic", v: "Native" },
      { l: "French", v: "Fluent" },
      { l: "English", v: "Basic" },
    ],
    eduTitle: "Education",
    edu: [
      { d: "2025 — 2027", t: "Software Engineering (5th year, ongoing)", s: "École High-Tech" },
      { d: "2024 — 2025", t: "Bachelor in Web & Mobile Development", s: "ISMAGI Rabat" },
      { d: "2021 — 2023", t: "Specialized Technician in ICT", s: "OFPPT ISTA NTIC" },
      { d: "2020 — 2021", t: "Baccalaureate in Physical Sciences", s: "Lycée Ennassim" },
    ],
  },
  contact: {
    kicker: "06 — Contact",
    title: "Let’s build your next large-scale project.",
    sub: "I am looking for a full-time role. If you need a Symfony / React developer who can ship SaaS products and coordinate an Agile team, let’s talk.",
    based: "Based in Rabat, Morocco",
    marquee: "Open to full-time opportunities",
  },
  footer: "© 2026 Meryem Touil. Designed and built with Next.js.",
  marquee: fr.marquee,
};

export const content: Record<Lang, Content> = { fr, en };
