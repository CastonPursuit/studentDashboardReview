import splitString from "./splitString";
import sortSeasonYear from "./sortSeason";

const sortedCohortCodes = (data) =>  {
    const values = splitString(data);
    return sortSeasonYear(values);
  }




  export default sortedCohortCodes;