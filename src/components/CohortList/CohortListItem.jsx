import React from 'react'
import './cohortlistitem.scss';

const CohortListItem = ({item}) => {
  return (
    <li className='cohort-list__item'>{item}</li>
  )
}

export default CohortListItem