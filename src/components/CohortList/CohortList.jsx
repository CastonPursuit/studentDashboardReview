import React from 'react'
import CohortListItem from './CohortListItem';
import './cohortlist.scss';
import sortedCohortCodes from '../../utils/sortedCohortCodes';

const CohortList = ({data}) => {
  const items = ["All Students", ...sortedCohortCodes(data)]

  return (
    <aside className="cohort-list">
        <h3 className='cohort-list__header'> Choose a Class by Start Date</h3>
        <ul> 
          {items.map((item, i) => (<CohortListItem item={item} key={i} />))}
        </ul>
    </aside>
  )
}

export default CohortList


