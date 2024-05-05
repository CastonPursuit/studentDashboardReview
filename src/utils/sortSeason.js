const sortSeasonYear = (entries) => {
    // Assign seasons to an object to be used in sorting
    const seasons = {"Spring" : 1, "Summer" : 2, "Fall" : 3, "Winter" : 4};
    const sortedSemesters = entries.sort((a, b) => {
    //Split each element at the spaces and assign each index to a variable, first being season, and second being the year.
    let aYear = a.split(' ')[1];
    let aSeason = a.split(' ')[0];
    let bYear = b.split(' ')[1];
    let bSeason = b.split(' ')[0];
    //If year is the same, sort by season
    if(aYear === bYear){
      return seasons[bSeason] - seasons[aSeason];
    }
      // If not, sort by year converting year first to a "Number"
    else {
      return Number(bYear) - Number(aYear);
    }
  })
    return sortedSemesters;
  }

export default sortSeasonYear