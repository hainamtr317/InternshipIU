function getTime(createTime) {
  // Get current time
  let currentTime = new Date();

  // Calculate time difference in milliseconds
  let timeDiff = currentTime - createTime;

  // Convert time difference to hours
  let hours = timeDiff / (1000 * 60 * 60);
  // Convert time to mins
  let mins = timeDiff / (1000 * 60);
  // If time difference is less than 24 hours
  if (hours < 24) {
    if (hours < 1) {
      return mins.toFixed(2) + "m";
    } else {
      return hours.toFixed(2) + " h";
    }
  }
  // If time difference is more than 24 hours
  else {
    // Convert time difference to days
    let days = hours / 24;
    return days.toFixed(2) + "d";
  }
}
export default getTime;
