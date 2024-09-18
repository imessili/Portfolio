const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'IM',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Islem Messili',
  role: 'Student Looking For An Intership In Data',
  description:
    "I am a second-year Master's student in Computer Science, seeking professional experiences and a paid end-of-study internship in 2025, ideally in the field of Data. My goal is to find an internship as a Data Engineer or a Data Scientist with a possibility of pre-employment.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/islem-messili/',
    github: 'https://github.com/imessili',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Predicting the NBA Defensive Player of the Year Using Machine Learning & Web Scraping',
    description:
      'This project uses machine learning to predict the DPOY winner based on player and team statistics, using data extraction and cleaning.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/imessili/Predicting-the-NBA-s-Defensive-Player-of-the-Year-DPOY-Machine-Learning-Web-Scraping',
    livePreview: 'https://github.com/imessili/Predicting-the-NBA-s-Defensive-Player-of-the-Year-DPOY-Machine-Learning-Web-Scraping',
  },
  {
    name: 'Sales Data Visualization with GraphQL and D3.js',
    description:
      'A containerized sales data visualization project utilizing MongoDB, React, and GraphQL. The system features a MongoDB database for sales data, a React-based UI, and a GraphQL server with associated resolvers.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/imessili/Data_visualisation_Web_app',
    livePreview: 'https://github.com/imessili/Data_visualisation_Web_app',
  },
  {
    name: 'Databases: Multidimensional Modeling and Analysis',
    description:
      'A project that includes ETL (Extract, Transform, Load) processes using Talend and Mondrian OLAP Server, designed to create and manage OLAP cubes to facilitate data analysis and reporting.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/imessili/ETL_Talend_OLAP_CUBE',
    livePreview: 'https://github.com/imessili/ETL_Talend_OLAP_CUBE',
  },
  {
    name: 'DealFinder',
    description:
      '"DealFinder" is a full-stack E-commerce web application that utilizes the MERN (MongoDB, Express, React, Node.js) stack to create a user-friendly and intuitive e-commerce platform.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/imessili/DealFinder-Ecommerce-MERN-PFE',
    livePreview: 'https://github.com/imessili/DealFinder-Ecommerce-MERN-PFE',
  },
  {
    name: 'Java Paint App & Shape Game Using MVC & Other Patterns',
    description:
      'A Java-based paint application using the MVC pattern,it allows users to create and manipulate drawings, and includes a feature where users can play a game of drawing shapes.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/imessili/Java-Paint-Shape-Game-MVC-and-Other-Patterns',
    livePreview: 'https://github.com/imessili/Java-Paint-Shape-Game-MVC-and-Other-Patterns',
  },
  {
    name: 'Projects Completed During My Bachelor Studies',
    description:
      'Projects I worked on such as an Arithmetic Expression Evaluator in C, a Stock Management Application in Java, a GCD Calculator in Assembly, a Custom Language Compiler, Network Configuration and Process Control in Linux, a Text Editor in Delphi, and Information Extraction.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/imessili/BachelorStudiesProjects',
    livePreview: 'https://github.com/imessili/BachelorStudiesProjects',
  },
  {
    name: 'RSA Algorithm Python Implementation',
    description:
      'Python implementation of RSA algorithm for secure data encryption and decryption.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/imessili/RSA_Algorithm_Implemantation_python',
    livePreview: 'https://github.com/imessili/RSA_Algorithm_Implemantation_python',
  },
  {
    name: 'A Star Python Implementation',
    description:
      'A Python implementation of the A* algorithm for efficient pathfinding in graphs.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/imessili/A_star_python',
    livePreview: 'https://github.com/imessili/A_star_python',
  },
  {
    name: 'Steamtape.com Automatique Views Increase',
    description:
      'This project is a tool developed to boost views through automated processes. Utilizing Selenium with the Chrome driver, Python scripting, this tool efficiently increases video views and user engagement by simulating real user interactions.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/imessili/steamtape.com_views_increase',
    livePreview: 'https://github.com/imessili/steamtape.com_views_increase',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Talend',
  'React',
  'Redux',
  'SASS',
  'Java',
  'Git',
  'Python',
  'C',
  'C++',
  'SQL',
  'Selenium',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'messiliislem@mail.com',
}

export { header, about, projects, skills, contact }
