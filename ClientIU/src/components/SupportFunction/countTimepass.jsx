function getTimePassed(createTime) {
    // Get current time
    let currentTime = new Date();

    // Calculate time difference in milliseconds
    let timeDiff = currentTime - createTime;

    // Convert time difference to hours
    let hours = timeDiff / (1000 * 60 * 60);

    // If time difference is less than 24 hours
    if(hours < 24) {
        return hours.toFixed(2) + " hours have passed";
    } 
    // If time difference is more than 24 hours
    else {
        // Convert time difference to days
        let days = hours / 24;
        return days.toFixed(2) + " days have passed";
    }
}
export default getTimePassed