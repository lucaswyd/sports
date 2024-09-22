// Define the start date of the NFL season
const startDate = new Date('2024-09-05'); // NFL season starts on September 5, 2024
const byeWeeks = {
    1: "week1.html",
    2: "week2.html",
    3: "week3.html",
    4: "week4.html",
    5: "week5.html",
    6: "week6.html",
    7: "week7.html",
    8: "week8.html",
    9: "week9.html",
    10: "week10.html",
    11: "week11.html",
    12: "week12.html",
    13: "week13.html",
    14: "week14.html",
    15: "week15.html",
    16: "week16.html",
    17: "week17.html"
};

function getCurrentWeek() {
    const currentDate = new Date();
    const timeDifference = currentDate - startDate; // Get time difference in milliseconds
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
    const weekOfYear = Math.floor(daysDifference / 7) + 1; // Calculate week number based on 7 days per week

    // Adjust for weeks beyond the regular schedule and determine proper weeks
    if (weekOfYear < 1 || weekOfYear > 17) {
        return null; // No schedule available
    }

    return weekOfYear;
}

document.getElementById('viewSchedulesBtn').addEventListener('click', function() {
    const currentWeek = getCurrentWeek();
    
    if (currentWeek && byeWeeks[currentWeek]) {
        window.location.href = byeWeeks[currentWeek]; // Redirect to the corresponding week schedule
    } else {
        alert('No schedule available for the current week.');
    }
});
