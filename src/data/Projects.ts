export interface Project {
    title: string;
    description: string;
    image: string;
    github: string;
    live: string;
    tags: string[];
  }
  
  export const projects: Project[] = [
    {
      title: 'Awesome App',
      description: 'A super cool app that does amazing things.',
      image: '/assets/awesome-app.png',
      github: 'https://github.com/yourname/awesome-app',
      live: 'https://yourdomain.com/awesome-app',
      tags: ['React', 'TypeScript', 'API']
    },
    // more projects...
  ];
  