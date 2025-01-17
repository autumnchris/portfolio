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
    startDate: new Date('2018-01-25').getTime()
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
    startDate: new Date('2019-02-18').getTime()
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
    startDate: new Date('2018-12-11').getTime()
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
    startDate: new Date('2018-11-29').getTime()
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
    startDate: new Date('2021-12-30').getTime()
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
    startDate: new Date('2017-07-28').getTime()
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
    startDate: new Date('2018-03-14').getTime()
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
    startDate: new Date('2018-04-17').getTime()
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
    startDate: new Date('2021-08-24').getTime()
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
    startDate: new Date('2017-12-08').getTime()
  },
  {
    id: 11,
    title: 'Wikipedia Viewer',
    description: 'A front-end web app that takes a search input and gets a list of Wikipedia search results using the Media Wiki API.',
    icon: 'fab fa-wikipedia-w',
    frameworks: [
      {
        id: 1,
        name: 'React.js',
        demo: 'https://autumnchris.github.io/wikipedia-viewer-reactjs',
        sourceCode: 'https://github.com/autumnchris/wikipedia-viewer-reactjs'
      },
      {
        id: 2,
        name: 'vanilla JS',
        demo: 'https://autumnchris.github.io/wikipedia-viewer-vanilla-js',
        sourceCode: 'https://github.com/autumnchris/wikipedia-viewer-vanilla-js'
      },
    ],
    startDate: new Date('2017-07-13').getTime()
  },
  {
    id: 12,
    title: 'Multipage Coffee Shop Site',
    description: 'A front-end multipage web app of a mock coffee shop using front-end routing.',
    icon: 'fas fa-mug-hot',
    frameworks: [
      {
        id: 1,
        name: 'React.js',
        demo: 'https://autumnchris-multipage-coffee-shop-site.onrender.com',
        sourceCode: 'https://github.com/autumnchris/multipage-coffee-shop-site-reactjs'
      }
    ],
    startDate: new Date('2023-03-07').getTime()
  },
  {
    id: 13,
    title: 'Exercise Tracker API',
    description: 'An Express.js API that creates a username and gets a list of exercises for that unique username as well as logs new exercises.',
    icon: 'fas fa-running',
    frameworks: [
      {
        id: 1,
        name: 'Express.js',
        demo: 'https://autumnchris-exercise-tracker-api.onrender.com/api',
        sourceCode: 'https://github.com/autumnchris/exercise-tracker-api'
      }
    ],
    startDate: new Date('2018-10-19').getTime()
  },
  {
    id: 14,
    title: 'Markdown Previewer',
    description: 'A React.js app that takes given Markdown syntax and outputs a preview that updates as you type.',
    icon: 'fab fa-markdown',
    frameworks: [
      {
        id: 1,
        name: 'React.js',
        demo: 'https://autumnchris.github.io/markdown-previewer',
        sourceCode: 'https://github.com/autumnchris/markdown-previewer'
      }
    ],
    startDate: new Date('2017-10-12').getTime()
  },
  {
    id: 15,
    title: 'Google Homepage Design Clone',
    description: 'An HTML & CSS design clone of Google\'s homepage.',
    icon: 'fab fa-google',
    frameworks: [
      {
        id: 1,
        name: 'CSS',
        demo: 'https://autumnchris.github.io/google-homepage-design-clone',
        sourceCode: 'https://github.com/autumnchris/google-homepage-design-clone'
      }
    ],
    startDate: new Date('2021-08-20').getTime()
  },
  {
    id: 16,
    title: 'GDP Bar Chart',
    description: 'A D3.js bar chart built in React.js that presents the changes in the US Gross Domestic Product from 1947 to 2015.',
    icon: 'fas fa-chart-bar',
    frameworks: [
      {
        id: 1,
        name: 'D3.js',
        demo: 'https://autumnchris.github.io/gdp-bar-chart',
        sourceCode: 'https://github.com/autumnchris/gdp-bar-chart'
      }
    ],
    startDate: new Date('2018-11-25').getTime()
  },
  {
    id: 17,
    title: 'Drum Machine',
    description: 'A React.js app that imitates drum kit sounds through the optional uses of the keyboard and button clicks.',
    icon: 'fas fa-drum',
    frameworks: [
      {
        id: 1,
        name: 'React.js',
        demo: 'https://autumnchris.github.io/drum-machine',
        sourceCode: 'https://github.com/autumnchris/drum-machine'
      }
    ],
    startDate: new Date('2018-06-17').getTime()
  }
];

export default projects;