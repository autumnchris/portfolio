const projects = [
  {
    id: 1,
    title: 'Calculator',
    description: 'A front-end web app that does arithmetic operations equivalent to a simple calculator.',
    icon: 'fa fa-calculator',
    frameworks: [
      {
        id: 1,
        name: 'React.js',
        demo: 'https://autumnchris.github.io/calculator-reactjs',
        sourceCode: 'https://github.com/autumnchris/calculator-reactjs'
      },
      {
        id: 2,
        name: 'vanilla JS',
        demo: 'https://autumnchris.github.io/calculator-vanilla-js',
        sourceCode: 'https://github.com/autumnchris/calculator-vanilla-js'
      }
    ],
    lastUpdated: new Date('2022-03-30').getTime()
  },
  {
    id: 2,
    title: 'Countdown Timer',
    description: 'A React.js app that takes a submitted future date and displays a timer counting down to that date.',
    icon: 'fas fa-hourglass-half',
    frameworks: [
      {
        id: 1,
        name: 'React.js',
        demo: 'https://autumnchris.github.io/countdown-timer',
        sourceCode: 'https://github.com/autumnchris/countdown-timer'
      }
    ],
    lastUpdated: new Date('2022-04-05').getTime()
  },
  {
    id: 3,
    title: 'Education Choropleth Map',
    description: 'A D3.js choropleth map of the US built in React.js that presents each county\'s percentage of adults who are college graduates.',
    icon: 'fas fa-user-graduate',
    frameworks: [
      {
        id: 1,
        name: 'D3.js',
        demo: 'https://autumnchris.github.io/education-choropleth-map',
        sourceCode: 'https://github.com/autumnchris/education-choropleth-map'
      }
    ],
    lastUpdated: new Date('2023-01-02').getTime()
  },
  {
    id: 4,
    title: 'Global Temperature Chart',
    description: 'A D3.js heat map built in React.js that presents the monthly variance of the global temperature from the years 1753 to 2015.',
    icon: 'fas fa-globe-africa',
    frameworks: [
      {
        id: 1,
        name: 'D3.js',
        demo: 'https://autumnchris.github.io/global-temp-chart',
        sourceCode: 'https://github.com/autumnchris/global-temp-chart'
      }
    ],
    lastUpdated: new Date('2019-05-13').getTime()
  },
  {
    id: 5,
    title: 'Local Library Catalog',
    description: 'An Express.js app that adds, deletes, edits, and displays library catalog information such as books, authors, genres, and book copies from a MongoDB database.',
    icon: 'fa fa-book-open',
    frameworks: [
      {
        id: 1,
        name: 'Express.js',
        demo: 'https://autumnchris-local-library-catalog.onrender.com/catalog',
        sourceCode: 'https://github.com/autumnchris/local-library-catalog'
      }
    ],
    lastUpdated: new Date('2022-03-15').getTime()
  },
  {
    id: 6,
    title: 'Local Weather App',
    description: 'A front-end web app that uses HTML5 Geolocation and the OpenWeatherMap API to get the user\'s current weather and forecast.',
    icon: 'fas fa-sun',
    frameworks: [
      {
        id: 1,
        name: 'React.js',
        demo: 'https://autumnchris.github.io/local-weather-app-reactjs',
        sourceCode: 'https://github.com/autumnchris/local-weather-app-reactjs'
      },
      {
        id: 2,
        name: 'vanilla JS',
        demo: 'https://autumnchris.github.io/local-weather-app-vanilla-js',
        sourceCode: 'https://github.com/autumnchris/local-weather-app-vanilla-js'
      }
    ],
    lastUpdated: new Date('2021-01-10').getTime()
  },
  {
    id: 7,
    title: 'Pomodoro Timer',
    description: 'A front-end web app that counts down using the pomodoro technique with customizable timer settings.',
    icon: 'far fa-clock',
    frameworks: [
      {
        id: 1,
        name: 'React.js',
        demo: 'https://autumnchris.github.io/pomodoro-timer-reactjs',
        sourceCode: 'https://github.com/autumnchris/pomodoro-timer-reactjs'
      },
      {
        id: 2,
        name: 'vanilla JS',
        demo: 'https://autumnchris.github.io/pomodoro-timer-vanilla-js',
        sourceCode: 'https://github.com/autumnchris/pomodoro-timer-vanilla-js'
      }
    ],
    lastUpdated: new Date('2020-11-23').getTime()
  },
  {
    id: 8,
    title: 'Reading List',
    description: 'A front-end web app that uses LocalStorage to store and present entered data for the user\'s personal reading list.',
    icon: 'fa fa-book',
    frameworks: [
      {
        id: 1,
        name: 'React.js',
        demo: 'https://autumnchris.github.io/reading-list-reactjs',
        sourceCode: 'https://github.com/autumnchris/reading-list-reactjs'
      },
      {
        id: 2,
        name: 'vanilla JS',
        demo: 'https://autumnchris.github.io/reading-list-vanilla-js',
        sourceCode: 'https://github.com/autumnchris/reading-list-vanilla-js'
      }
    ],
    lastUpdated: new Date('2023-01-23').getTime()
  },
  {
    id: 9,
    title: 'Star Wars Tic-Tac-Toe',
    description: 'A Star Wars themed JavaScript Tic-Tac-Toe game where the user can choose to play either a 2-player game with another person present or a 1-player game against the computer.',
    icon: 'fab fa-rebel',
    frameworks: [
      {
        id: 1,
        name: 'vanilla JS',
        demo: 'https://autumnchris.github.io/tic-tac-toe-game',
        sourceCode: 'https://github.com/autumnchris/tic-tac-toe-game'
      }
    ],
    lastUpdated: new Date('2021-10-04').getTime()
  },
  {
    id: 10,
    title: 'Timestamp API',
    description: 'An Express.js API that converts a given calendar date to its affiliated timestamp and vice versa.',
    icon: 'far fa-calendar-alt',
    frameworks: [
      {
        id: 1,
        name: 'Express.js',
        demo: 'https://autumnchris-timestamp-api.onrender.com/api',
        sourceCode: 'https://github.com/autumnchris/timestamp-api'
      }
    ],
    lastUpdated: new Date('2020-01-11').getTime()
  }
];

export default projects;