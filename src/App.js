import UserProfile from './components/UserProfile/index'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Kumara Harish',
    role: 'AI-ML Engineer',
  },
  {
    uniqueNo: 2,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Puppala Gayathri',
    role: 'Full Stack Developer',
  },
  {
    uniqueNo: 3,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Sangam Sita',
    role: 'Network Engineer',
  },
  {
    uniqueNo: 4,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Sirugudi Venkatesh',
    role: 'Data Scientist',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile UserDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
