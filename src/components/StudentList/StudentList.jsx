import React, { useState } from 'react';
import './studentlist.scss';
import StudentListItem from './StudentListItem/StudentListItem';


const StudentList = ({data, cohort}) => {
  return (
    <main className="student-list">
        <h3> {cohort} </h3>
        <p> Total Students: <span>{data.length}</span></p>
        <ul className="student-list__item">
         {data.map(
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