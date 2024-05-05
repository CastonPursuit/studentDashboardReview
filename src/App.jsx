import React from 'react'
import Navbar from './components/Navbar/Navbar'
import CohortList from './components/CohortList/CohortList'
import StudentList from './components/StudentList/StudentList'
import './styles/app.scss'
import data from './data/data.json'

const App = () => {
  
  return (
    <div className='app'>
      <Navbar/> 
      <CohortList data={data} key={0}/>
      <StudentList/>
    </div>
  )
}

export default App