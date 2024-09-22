// Define the start date of the NFL season
const startDate = new Date('2024-09-05'); // NFL season starts on September 5, 2024
const byeWeeks = {
    1: "sports/week1.html",
    2: "sports/week2.html",
    3: "sports/week3.html",
    4: "sports/week4.html",
    5: "sports/week5.html",
    6: "sports/week6.html",
    7: "sports/week7.html",
    8: "sports/week8.html",
    9: "sports/week9.html",
    10: "sports/week10.html",
    11: "sports/week11.html",
    12: "sports/week12.html",
    13: "sports/week13.html",
    14: "sports/week14.html",
    15: "sports/week15.html",
    16: "sports/week16.html",
    17: "sports/week17.html"
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
