import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import CohortList from './components/CohortList/CohortList'
import StudentList from './components/StudentList/StudentList'
import './styles/app.scss'
import data from './data/data.json'

const App = () => {
  const [students, setStudents] = useState(data);
  const [cohort, setCohort] = useState("All Students");
  

  return (
    <div className='app'>
      <Navbar/> 
      <CohortList data={data} setStudents={setStudents} setCohort={setCohort}/>
      <StudentList data={students} cohort={cohort}/>
    </div>
  )
}

export default App