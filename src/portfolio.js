const header = {
  homepage: '.',
  title: 'IM',
}

const about = {
  name: 'Islem Messili',
  role: 'Student Looking For An Intership In Data',
  description:
    "I’m a second-year Master's student in Computer Science, actively seeking professional experience and a paid end-of-study internship in 2025, ideally in Data Engineering or Data Science. My goal is to secure an internship with potential for pre-employment in a dynamic, data-driven environment.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/islem-messili/',
    github: 'https://github.com/imessili',
  },
}

const projects = [
  {
    name: 'Predicting the NBA Defensive Player of the Year Using Machine Learning & Web Scraping',
    description:
      'This project uses machine learning to predict the DPOY winner based on player and team statistics, using data extraction and cleaning.',
    stack: ['Machine Learning', 'Python', 'Selenium','Web Scraping'],
    sourceCode: 'https://github.com/imessili/Predicting-the-NBA-s-Defensive-Player-of-the-Year-DPOY-Machine-Learning-Web-Scraping',
    livePreview: 'https://github.com/imessili/Predicting-the-NBA-s-Defensive-Player-of-the-Year-DPOY-Machine-Learning-Web-Scraping',
  },
  {
    name: 'Sales Data Visualization with GraphQL and D3.js',
    description:
      'A containerized sales data visualization project utilizing MongoDB, React, and GraphQL. The system features a MongoDB database for sales data, a React-based UI, and a GraphQL server with associated resolvers.',
    stack: ['SASS', 'TypeScript', 'React','Docker'],
    sourceCode: 'https://github.com/imessili/Data_visualisation_Web_app',
    livePreview: 'https://github.com/imessili/Data_visualisation_Web_app',
  },
  {
    name: 'Databases: Multidimensional Modeling and Analysis',
    description:
      'A project that includes ETL (Extract, Transform, Load) processes using Talend and Mondrian OLAP Server, designed to create and manage OLAP cubes to facilitate data analysis and reporting.',
    stack: ['Talend', 'SQLite', 'ETL', 'Mondrian OLAP Server'],
    sourceCode: 'https://github.com/imessili/ETL_Talend_OLAP_CUBE',
    livePreview: 'https://github.com/imessili/ETL_Talend_OLAP_CUBE',
  },
  {
    name: 'DealFinder',
    description:
      '"DealFinder" is a full-stack E-commerce web application that utilizes the MERN (MongoDB, Express, React, Node.js) stack to create a user-friendly and intuitive e-commerce platform.',
    stack: ['SASS', 'Redux', 'MERN Stack','MongoDB','Postman'],
    sourceCode: 'https://github.com/imessili/DealFinder-Ecommerce-MERN-PFE',
    livePreview: 'https://github.com/imessili/DealFinder-Ecommerce-MERN-PFE',
  },
  {
    name: 'Java Paint App & Shape Game Using MVC & Other Patterns',
    description:
      'A Java-based paint application using the MVC pattern,it allows users to create and manipulate drawings, and includes a feature where users can play a game of drawing shapes.',
    stack: ['Java', 'Java Swing', 'Design Patterns'],
    sourceCode: 'https://github.com/imessili/Java-Paint-Shape-Game-MVC-and-Other-Patterns',
    livePreview: 'https://github.com/imessili/Java-Paint-Shape-Game-MVC-and-Other-Patterns',
  },
  {
    name: 'Steamtape.com Automatique Views Increase',
    description:
      'This project is a tool developed to boost views through automated processes. Utilizing Selenium with the Chrome driver, Python scripting, this tool efficiently increases video views and user engagement by simulating real user interactions.',
    stack: ['Python', 'Selenium', 'Javascript'],
    sourceCode: 'https://github.com/imessili/steamtape.com_views_increase',
    livePreview: 'https://github.com/imessili/steamtape.com_views_increase',
  },
  {
    name: 'RSA Algorithm Python Implementation',
    description:
      'A Python implementation of the RSA algorithm for secure encryption and decryption using public and private keys, commonly applied in messaging and digital signatures.',
    stack: ['Python', 'SageMath'],
    sourceCode: 'https://github.com/imessili/RSA_Algorithm_Implemantation_python',
    livePreview: 'https://github.com/imessili/RSA_Algorithm_Implemantation_python',
  },
  {
    name: 'A Star Python Implementation',
    description:
      'A Python implementation of the A* algorithm for efficient pathfinding in graphs, combining actual and estimated costs to find the shortest path. Commonly used in navigation, robotics, and games to optimize search time.',
    stack: ['Python', 'Graphs'],
    sourceCode: 'https://github.com/imessili/A_star_python',
    livePreview: 'https://github.com/imessili/A_star_python',
  },
  {
    name: 'Projects Completed During My Bachelor Studies',
    description:
      'Projects I worked on such as an Arithmetic Expression Evaluator in C, a Stock Management Application in Java, a GCD Calculator in Assembly, a Custom Language Compiler, Network Configuration and Process Control, and Information Extraction.',
    stack: ['C', 'Assembly', 'Java', 'Python', 'Linux'],
    sourceCode: 'https://github.com/imessili/BachelorStudiesProjects',
    livePreview: 'https://github.com/imessili/BachelorStudiesProjects',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Php',
  'Docker',
  'Talend',
  'MongoDB',
  'Spark',
  'MERN Stack',
  'Redux',
  'Linux',
  'SASS',
  'Java',
  'Git',
  'Python',
  'Pytorch',
  'C',
  'C++',
  'SQL',
  'Postman',
  'Machine Learning',
  'Web Scraping',
  'Automatisation',
  'NLP',
]

const contact = {
  email: 'messiliislem@mail.com',
}

export { header, about, projects, skills, contact }
