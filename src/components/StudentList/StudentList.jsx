import React, { useState } from 'react';
import './studentlist.scss';
import StudentListItem from './StudentListItem/StudentListItem';
import StudentData from '../../data/data.json'

const StudentList = () => {
  const [studentData, setStudentData] = useState(StudentData);

  return (
    <main className="student-list">
        <h3> All Students </h3>
        <p> Total Students: <span>250</span></p>
        <ul className="student-list__item">
         {studentData.map(
          (student, index) => 
          (<li key={index}> 
            <StudentListItem
              data={student}
            /> 
          </li>))} 
        </ul>
        
    </main>
  )
}

export default StudentList