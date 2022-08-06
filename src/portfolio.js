const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://frankpacini.github.io',
  title: 'FP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Frank Pacini',
  role: 'Software Engineer',
  description:
    'Welcome to my portfolio! I\'m Frank, a senior at Boston University studying Computer Science and Statistics. I have experience across the development stack, and am interested in engineering roles where I can develop the platforms that make full scale data analytics and AI possible for organizations. Some of my notable experience and projects are shown below.',
  resume: "resume.pdf",
  social: {
    linkedin: 'frank-pacini',
    github: 'frankpacini',
  },
}

const education = [
  {
    name: 'Boston University',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boston_University_seal.svg/1200px-Boston_University_seal.svg.png',
    degree: 'B.A. Computer Science and Statistics',
    date_start: 'September 2019',
    date_end: 'May 2023',
    description: 'Relevant Coursework:',
    bullets: [
      'Deep Learning, Data Science, Machine Learning, NLP (expected), Big Data (expected)',
      'Algorithms, Operating Systems, Programming Languages, Cybersecurity',
      'Linear Models, Mathematical Statistics, Stochastic Processes, Nonparametric Statistics (expected)'
    ],
    gpa: '3.97',
  }
]

const experience = [
  {
    name: "Dell Technologies",
    logo: 'https://www.lesopportunites.com/wp-content/uploads/2022/03/DELL.png',
    title: 'Software Engineer Intern',
    date_start: 'June 2022',
    date_end: 'August 2022',
    description: 'Developed Java extension for the Oracle Enterprise Manager database platform to collect and display hardware-level statistics and alerts.',
    bullets: [],
    skills: ["Java", "Javascript", "Perl", "Oracle DB"]
  },
  {
    name: "BU Spark! & Civera Software",
    logo: 'https://mic.bu.edu/image/logo/spark.png',
    title: 'Software Developer Intern',
    date_start: 'February 2022',
    date_end: 'May 2022',
    description: 'Implemented a web scraper for masscourts.org and data pipeline with Python, MySQL and AWS to provide an easily accessible, comprehensive dataset of Massachusetts court cases to researchers and policy makers.',
    bullets: [],
    skills: ["Python", "MySQL", "AWS"]
  },
  {
    name: "Dell Technologies",
    logo: 'https://www.lesopportunites.com/wp-content/uploads/2022/03/DELL.png',
    title: 'Software Engineer Intern',
    date_start: 'May 2021',
    date_end: 'August 2021',
    description: 'Created end-to-end pipeline infrastructure in Go for collecting internal metrics from multiple sources, running ML models, and visualizing data insights.',
    bullets: [
      'Developed plugins in Go to support data processing and execution of any Tensorflow ML model within the Telegraf data collection infrastructure, significantly reducing evaluation time on the collected metrics.',
      'Built neural networks in Tensorflow to predict GitHub repository activity, enabling more efficient scheduling of IT maintenance periods. Curated and trained on a dataset of 1,000,000+ internal commits.',
      'Deployed an end-to-end time series data pipeline and visualization dashboard with Docker and SQL to enable monitoring of various hardware metrics on Dell systems.'
    ],
    skills: ["Go", "Telegraf", "Tensorflow", "Docker", "SQL"]
  }
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'LyricRec',
    description:
      'Lyric-based track recommendation site using deep language models and the Genius.com API.',
    full_description:
      "The idea of this project was to use ML language models to process song lyrics in order to find tracks which are lyrically similar to each other. The best observed model performance was achieved by taking a pretrained BERT language model and fine-tuning on lyric data (in this case the task was to predict the next line in the song given the previous). The LyricRec site is a full stack web app built in React.js and Django that allows users to search for tracks via the Genius API, retrieve similar songs from my model and compare lyrics. Microsoft Azure was used for the lyric database (compiled from Genius) and for model inference via Azure Functions. Ideally, this model would be used alongside the large quantity of track metadata already in use to provide better song recommendations to end users. The site is currently in use by Eatwell to bring its content and services to its users, primarily hospital patients.",
    stack: ['PyTorch', 'React.js', 'Django', 'Azure'],
    sourceCode: 'https://github.com/frankpacini/LyricRecSite',
    livePreview: 'https://github.com/frankpacini/LyricRecSite',
    pictures: [
      "/static/assets/lyricrec1.png",
      "/static/assets/lyricrec2.png",
      "/static/assets/lyricrec3.png",
    ],
    videos: [],
  },
  {
    name: 'Eatwell',
    description:
      'A content delivery and user management platform bringing the programs and services of local non-profit Eatwell to underprivileged households.',
    full_description:
      "This content delivery website was built for Eatwell Meal Kits, a local Boston non-profit, as part of the BU Hack4Impact student volunteer organization. I served as a developer and technical lead on the project, managing the team of 8-10 developers over the course of the school year, meeting with the customer to discuss requirements, and developing major features such as the recipe pages, user program management, and code-based login/authentication.",
    stack: ['React.js', 'Material-ui', 'Firebase'],
    sourceCode: 'https://github.com/frankpacini/eatwell',
    livePreview: 'https://eatwell-meal-kits.web.app/',
    pictures: [
      "/static/assets/eatwell_recipe.png",
      "/static/assets/eatwell_upload.png",
    ],
    videos: [
      '/static/assets/eatwell.mp4'
    ],
  },
  {
    name: 'ANEDA',
    description:
      'Novel embedding-based graph representation model for rapidly finding optimal routes within large street networks.',
    full_description:
      "Trained an embedding-based graph representation model to predict optimal routes within large cities using network data from OpenStreetMap. The embeddings (basically an array of numbers) are trained to encode a spatial representation of a given city network based on the travel time between street corners within it. This is useful for algorithms such as A* which use distance approximations to more efficiently discover optimal routes. The ANEDA site I built in Leaftlet.js and Flask demonstrates the routing applications for this work with the Boston-area street network.",
    stack: ['PyTorch', 'Flask', 'Leaflet.js'],
    sourceCode: 'https://github.com/frankpacini/ANEDA',
    livePreview: 'https://github.com/frankpacini/ANEDA',
    pictures: [
      '/static/assets/aneda.png'
    ],
    videos: [],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python', 'Java', 'SQL', 'Go', 'JavaScript', 
  'PyTorch', 'TensorFlow', 'React.js', 'NumPy',
  'Azure', 'Google Cloud', 'Docker', 'MySQL', 'CI/CD', 'Linux', 'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'fgpacini@bu.edu',
}

export { header, about, education, experience, projects, skills, contact }