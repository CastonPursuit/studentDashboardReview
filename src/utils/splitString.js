const splitString = (data) => {
    return data.reduce((arr, student) => {
      const year = student.cohort.cohortCode.slice(-4)
      const season = student.cohort.cohortCode.slice(0, -4)
      if(!arr.includes(`${season} ${year}`)) {arr.push(`${season} ${year}`)}
      return arr
    },[])
  }

export default splitString; 