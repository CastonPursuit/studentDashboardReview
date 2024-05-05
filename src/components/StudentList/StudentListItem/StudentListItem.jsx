import React, { useState } from 'react';
import StudentListInfo from './subcomponents/StudentListInfo';
import StudentListPortfolio from './subcomponents/StudentListPortfolio';
import StudentListNotes from './subcomponents/StudentListNotes';

const StudentListItem = ({data}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <> 
      <StudentListInfo
        expanded={expanded}
        setExpanded={setExpanded}
        data={data}
      />

      {expanded && 
        <>
          <StudentListPortfolio
            data={data}
          />
          <StudentListNotes/>
        </>
      }
    </>
  )
}

export default StudentListItem
