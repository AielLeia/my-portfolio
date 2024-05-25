export const navItems = [
  { name: 'A propos de moi', link: '#about' },
  { name: 'Projets', link: '#projects' },
  { name: 'Témoignages', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title:
      'Je donne la priorité à la collaboration avec les clients, en favorisant une communication ouverte.',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title:
      "Je suis ouvert à tous types de projets, qu'il s'agisse de sites web personnels ou d'applications web sophistiquées.",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'Stack techniques',
    description: "J'essaie constamment de m'améliorer",
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Passionné de technologie et de développement.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title:
      "Je m'engage à atteindre vos objectifs en utilisant les meilleures pratiques du marché et à produire un code robuste et maintenable à long terme.",
    description: "L'info de première main",
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Seriez-vous intéressé par une collaboration sur un projet ?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Board - Outils collaboratifs',
    des: "Découvrez un clone de l'outil Miro, avec un système de collaboration interactif et en temps réel.",
    img: '/p1.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/next.svg'],
    link: 'https://board.ismaelmohamedbouh.fr',
  },
  {
    id: 2,
    title: 'Live - Une application inspirée de Twitch',
    des: "Inspirée de Twitch, cette application est l'outil parfait pour les geeks.",
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://live.ismaelmohamedbouh.fr',
  },
  {
    id: 3,
    title: "Taskify - Outils d'organisation des tâches",
    des: "Un outils entirement adapter aux entreprises et au startup, taskify met de l'order dans les projects.",
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: 'https://taskify.ismaelmohamedbouh.fr',
  },
];

export const testimonials = [];

export const companies = [
  {
    id: 1,
    name: 'Capgemini',
    img: '/capgemini.svg',
    nameImg: '/capgeminiName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Consultant Java',
    desc: `Assurer la gestion complète du cycle de vie des besoins clients depuis l'analyse initiale jusqu'à la mise en production, valider la conformité du code aux exigences clients, identifier et résoudre les anomalies en production pour garantir la continuité des services, améliorer les performances du système pour optimiser l'efficacité opérationnelle, et collaborer activement dans les ateliers de conception avec des partenaires externes, tout en poursuivant mon parcours en alternance avec une forte implication dans le projet ANTAI, utilisant le développement Java et le Framework Spring.`,
    className: 'md:col-span-4',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/AielLeia',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/isma%C3%ABl-mohamed-bouh-6b16611b6/',
  },
];
