import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  nodejs,
  mongodb,
  git,
  docker,
  flutter,
  php,
  morpion,
  player,
  mb,
  swapi,
  swapiMobile,
  threejs,
  vuejs,
  django,
  mysql,
  postgresql,
  soteens,
  antonaccio,
  education,
  mns,
  mewo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "experience",
    title: "XP",
  },
  {
    id: "works",
    title: "Travaux",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "Développeur Frontend",
    icon: mobile,
  },
  {
    title: "Développeur Backend",
    icon: backend,
  },
  {
    title: "Développeur Full Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
];

const experiences = [
  {
    title: "Administrateur des systèmes d’information Développeur Full Stack",
    company_name: "Campus MEWO",
    icon: mewo,
    iconBg: "#FFFFFF",
    date: "Septembre 2023 - Août 2024",
    points: [
      "Développement de fonctionnalités à travers des PoCs de l'application dans sa version mobile",
      "Collaboration interfonctionnelle comprenant le Product Owner, moi-même et d'autres développeurs.",
      "Fonctionnalités développées en usant des services AWS et déterminer ceux répondant aux besoins de l'application.",
      "Participation aux revues de code et fournir des commentaires constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeur Web Full Stack",
    company_name: "SoTeens",
    icon: soteens,
    iconBg: "#383E56",
    date: "Mai 2022 - Août 2022",
    points: [
      "Développement de fonctionnalités à travers des PoCs de l'application dans sa version mobile",
      "Collaboration interfonctionnelle comprenant le Product Owner, moi-même et d'autres développeurs.",
      "Fonctionnalités développées en usant des services AWS et déterminer ceux répondant aux besoins de l'application.",
      "Participation aux revues de code et fournir des commentaires constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Dévelolppeur Web et Web mobile",
    company_name: "Laboratoire Antonaccio",
    icon: antonaccio,
    iconBg: "#E6DEDD",
    date: "Juillet 2019",
    points: [
      "Développement d'un site vitrine 'one page' devant présenter l'activité du laboratoire.",
      "Utilisation et adaptation d'un template HTML/CSS/JQuery",
      "Déploiement du site chez un hébergeur (OVH).",
    ],
  },
  {
    title: "Technicien informatique / Développeur Web",
    company_name: "Education Nationale",
    icon: education,
    iconBg: "#383E56",
    date: "Septembre 2014 - Août 2017",
    points: [
      "Refonte et maintenance du site web avec le CMS SPIP.",
      "Ajout de contenu à la demande.",
      "Gestion AD.",
      "Maintenance du parc informatique.",
      "Assiatance aux utilisateurs.",
    ],
  },
];

// Remplacer par formations
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Morpion",
    description:
      "Jeux du morpion développé pour utiliser les sockets afin de permettre une communication en temps réel entre le backend et le frontend.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: morpion,
    source_code_link: "https://github.com/",
    live_demo: "https://morpion.davidbroccoli.fr/",
  },
  {
    name: "Lecteur Audio",
    description:
      "Simple lecteur audio réalisé à l'aide de VueJS pour découvrir ce framework et comment fonctionne les hooks et event emitter.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
    ],
    image: player,
    source_code_link: "https://github.com/David-ODB57/Audio-Player-VueJS",
    live_demo: "",
  },
  {
    name: "SWapi",
    description:
      "Petite application permettant d'afficher une liste de personnages de Star Wars. On peut ajouter, modifier, mettre à jour ou supprimer des personnages. Openweather a été également inclus dans l'application avec une customisation Star Wars.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "POO",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: swapi,
    source_code_link: "https://github.com/David-ODB57/SWAPI",
    live_demo: "",
  },
  {
    name: "SWapi Mobile",
    description:
      "Version mobile de mon application SWapi précédente. J'ai pu ici utiliser pour la première fois le langage Dart et tester ainsi le développement mobile avec Android Studio.",
    tags: [
      {
        name: "dart",
        color: "blue-text-gradient",
      },
      {
        name: "android studio",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
    ],
    image: swapiMobile,
    source_code_link: "https://github.com/David-ODB57/Flutter-SWAPI",
    live_demo: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
