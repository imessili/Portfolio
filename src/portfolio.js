const header = {
  homepage: '.',
  title: 'IM',
}

const about = {
  name: 'Islem Messili',
  role: 'Data Enthusiast Seeking a Junior Position or Apprenticeship',
  description:
    "I hold a Master's degree in Computer Science and I am actively seeking a junior position or apprenticeship in Data Engineering or Data Science. My goal is to apply and deepen my skills in a data-driven environment, contribute to impactful projects, and grow professionally within a forward-thinking team.",
  resume: '/cv_islem_messili.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/islem-messili/',
    github: 'https://github.com/imessili',
  },
}

const projects = [
    {
  name: 'OpenSky Flight-Data Streaming ETL Pipeline (work in progress)',
  description:
    'A real-time data-engineering workflow that pulls flight data from the OpenSky Network API, publishes the records to Apache Kafka, processes and enriches the stream with PySpark Structured Streaming, and persists both raw datasets in MongoDB and PostgreSQL. Apache Airflow orchestrates hourly batch jobs that handle ingestion',
  stack: ['Apache Airflow', 'Apache Kafka', 'Apache Spark', 'Python', 'MongoDB', 'PostgreSQL','Docker'
  ],
  sourceCode: 'https://github.com/imessili/OpenSky_API_ETL_Airflow_Spark_Kafka_MongoDB_PostgreSQL',
  livePreview: 'https://github.com/imessili/OpenSky_API_ETL_Airflow_Spark_Kafka_MongoDB_PostgreSQL'
  },
  {
  name: 'OpenWeather ETL Pipeline with Apache Airflow',
  description:
    'An hourly ETL pipeline that extracts real-time weather data for European cities using the OpenWeatherMap API, transforms it with Python, and loads it into a PostgreSQL database. The workflow is orchestrated using Apache Airflow and fully containerized with Docker for consistent deployment.',
  stack: ['Apache Airflow', 'Python', 'PostgreSQL', 'Docker', 'OpenWeatherMap API', 'Pandas'],
  sourceCode: 'https://github.com/imessili/openWeather_ETL_Airflow',
  livePreview: 'https://github.com/imessili/openWeather_ETL_Airflow',
  },
  {
  name: 'Sports Betting Outcome Prediction & Integrity Analysis',
  description:
    'A machine-learning and web-scraping project that collects historical football odds from OddsPortal, cleans and enriches the data, and trains predictive models to forecast match outcomes and flag suspicious patterns that could indicate match-fixing. The workflow is implemented in Python notebooks and includes systematic model–quality assessment.',
  stack: ['Python', 'Pandas', 'scikit-learn', 'Selenium', 'Jupyter', 'Web Scraping'],
  sourceCode: 'https://github.com/imessili/Sports_Betting_Analysis_Project',
  livePreview: 'https://github.com/imessili/Sports_Betting_Analysis_Project'
  },
  {
  name: 'Music Generation with Vanilla & Wasserstein GANs',
  description:
    'A generative-AI project that trains both Vanilla and Wasserstein GAN architectures on the JSB Chorales dataset to compose harmonically rich polyphonic music. The pipeline preprocesses MIDI files, runs training in Jupyter notebooks, and converts the generated note sequences back into playable MIDI tracks.',
  stack: ['Python', 'PyTorch', 'Jupyter Notebook', 'GANs', 'MIDI'],
  sourceCode: 'https://github.com/imessili/Music_Generation_Using_GAN',
  livePreview: 'https://github.com/imessili/Music_Generation_Using_GAN'
  },
  {
  name: 'Interactive Sales Analysis Dashboard with Power BI & SQL',
  description:
    'Built with AdventureWorks 2019 data, this project turns static internet-sales reports into a dynamic Power BI dashboard.',
  stack: ['Power BI', 'SQL Server', 'AdventureWorks DW', 'Excel'],
  sourceCode: 'https://github.com/imessili/PowerBI_SQL_Sales_Analysis_Project',
  livePreview: 'https://github.com/imessili/PowerBI_SQL_Sales_Analysis_Project'
  },
  {
    name: 'Predicting the NBA Defensive Player of the Year Using Machine Learning & Web Scraping',
    description:
      'This project uses machine learning, data extraction and data cleaning to predict the DPOY winner based on player, team and opponent statistics.',
    stack: ['Machine Learning', 'Python', 'Selenium','Web Scraping'],
    sourceCode: 'https://github.com/imessili/Predicting-the-NBA-s-Defensive-Player-of-the-Year-DPOY-Machine-Learning-Web-Scraping',
    livePreview: 'https://github.com/imessili/Predicting-the-NBA-s-Defensive-Player-of-the-Year-DPOY-Machine-Learning-Web-Scraping',
  },
  {
    name: 'Sales Data Visualization with GraphQL and D3.js',
    description:
      'A containerized sales data visualization project utilizing Docker, MongoDB, React, and GraphQL. The system features a MongoDB database for sales data, a React-based UI, and a GraphQL server with associated resolvers.',
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
  name: 'PyTorch Neural Networks Manipulation',
  description:
    'A hands-on collection of Jupyter notebooks that build, train, and experiment with both fully connected and convolutional neural networks in PyTorch.',
  stack: ['PyTorch', 'Python', 'Jupyter Notebook', 'NumPy', 'Matplotlib'],
  sourceCode: 'https://github.com/imessili/Pytorch_neural_networks_manipulation-',
  livePreview: 'https://github.com/imessili/Pytorch_neural_networks_manipulation-'
  },
  {
    name: 'Steamtape.com Automatique Views Increase',
    description:
      'This project is a tool developed to boost views through automated processes. Using multiple technologies it efficiently increases video views and user engagement by simulating real user interactions.',
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
      'Projects I worked on such as an Arithmetic Expression Evaluator in C, a Stock Management Application in Java, a Custom Language Compiler, Network Configuration and Process Control, and Information Extraction.',
    stack: ['C', 'Assembly', 'Java', 'Python', 'Linux', 'Flex & Bison'],
    sourceCode: 'https://github.com/imessili/BachelorStudiesProjects',
    livePreview: 'https://github.com/imessili/BachelorStudiesProjects',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Php',
  'SASS',
  'Docker',
  'Airflow',
  'AWS EC2',
  'AWS ECS',
  'AWS Redshift',
  'AWS S3',
  'Kafka',
  'Talend',
  'Spark',
  'Databricks',
  'Flex & Bison',
  'MERN Stack',
  'Redux',
  'Linux',
  'Java',
  'Git',
  'Python',
  'Pytorch',
  'C',
  'C++',
  'SQL',
  'NoSQL',
  'MongoDB',
  'SQLite',
  'GraphQL',
  'Postman',
  'Web Development',
  'Machine Learning',
  'Web Scraping',
  'Data Cleaning',
  'Automatisation',
  'NLP',
]

const contact = {
  email: 'messiliislem@mail.com',
}

export { header, about, projects, skills, contact }
