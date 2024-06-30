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
    link: 'https://www.youtube.com/watch?v=-K6VixKE9Uk&ab_channel=Isma%C3%ABlMOHAMEDBOUH',
    linkTitle: 'Board',
  },
  {
    id: 2,
    title: 'Live - Une application inspirée de Twitch',
    des: "Inspirée de Twitch, cette application est l'outil parfait pour les geeks.",
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://www.youtube.com/watch?v=AIkzkuCBm8s&ab_channel=Isma%C3%ABlMOHAMEDBOUH',
    linkTitle: 'Live',
  },
  {
    id: 3,
    title: "Taskify - Outils d'organisation des tâches",
    des: "Un outils entirement adapter aux entreprises et au startup, taskify met de l'order dans les projects.",
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: 'https://www.youtube.com/watch?v=ostcrx7aPfs&ab_channel=Isma%C3%ABlMOHAMEDBOUH',
    linkTitle: 'Taskify',
  },
];

export const testimonials = [
  {
    quote:
      'Je recommande vivement Ismael pour tout poste ou opportunité nécessitant un expert technique doté d’excellentes compétences en communication.\n' +
      'D’un point de vue technique, Ismael se distingue par une maîtrise approfondie des technologies suivantes : développement logiciel, ingénierie des systèmes, etc.]. Sa capacité à résoudre des problèmes complexes, à concevoir des solutions innovantes et à mettre en œuvre des projets de manière efficace est remarquable. Il reste constamment à jour avec les dernières avancées technologiques, ce qui lui permet d’apporter des solutions modernes et adaptées aux besoins de l’entreprise.\n' +
      '\n' +
      'En plus de ses compétences techniques, Ismael excelle en communication. Il sait vulgariser des concepts techniques complexes pour les rendre accessibles aux non-spécialistes, ce qui facilite grandement la collaboration interdisciplinaire. Sa capacité à écouter attentivement, à poser des questions pertinentes et à exprimer clairement ses idées contribue à un environnement de travail harmonieux et productif. Ismael est également très à l’aise dans la présentation d’informations techniques lors de réunions ou de conférences, captivant son auditoire par sa clarté et son assurance.',
    name: 'Sara Dgaygui',
    title: 'Scrum master',
  },
  {
    quote:
      "Ismaël est une personne avec laquelle travailler est un plaisir de tout les jours. J'ai été sa collègue pendant plusieurs années, c'est quelqu'un de très pédagogue, il a pu m'accompagner dans plusieurs tâches et notamment lors des différentes crises qui pouvaient survenir sur nos applications. Ismaël est proactif, ce qui est une qualité que j'ai apprécié lors des échanges et lors des analyses de sujets. Il accompagne volontairement et avec beaucoup de bienveillance les nouveaux arrivants et se rend disponible lorsqu'on a besoin de lui. Son sens du relationnel lui permet aussi de pouvoir avoir des échanges avec le client très fluides et constructifs. Pour terminer, c'est une personne en qui on peut avoir confiance, et sur qui on peut compter. J'ai été très heureuse de pouvoir passer des années en sa compagnie !",
    name: 'Adeline Greaud',
    title: 'Ingénieur en développement logiciel, Capgemini',
  },
  {
    quote:
      "J'ai pu travailler pendant plus d'un an avec Monsieur MOHAMED BOUH, et je ne peux que le recommander.\n" +
      'Le travail avec Ismaël était très facile grâce à sa communication et à sa motivation.\n' +
      'Les échanges étaient très fluides et il a toujours su épauler les devs juniors en restant bienveillant. \n' +
      'Il fait preuve de rigueur et il maitrise parfaitement son périmètre.',
    name: 'Sabrina AÏT MAKSÈNE',
    title: 'Product Owner à Capgemini',
  },
  {
    quote:
      "Ismaël a su gérer en autonomie des problèmes complexes. il a aussi su démontrer une très bonne adaptabilité sur le plan technique. Il est toujours volontaire et pertinent dans ses analyses. Il reste toujours disponible pour former les nouveaux arrivants et partager ses connaissances. c'est vraiment agréable de pouvoir travailler avec lui",
    name: 'Sabrina AÏT MAKSÈNE',
    title: 'Product Owner à Capgemini',
  },
];

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
