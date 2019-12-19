const { getHolidays, getUpcomingHolidays, isHoliday } = require('swedish-holidays');
 
// Get an array of all holidays for the current
const holidays = getHolidays();
 
// Get an array of all holidays for a specific year
const holidays2019 = getHolidays(2019);
 
// Get an array of all upcoming holidays
const upcoming = getUpcomingHolidays();
 
// Check if today is a holiday
const isItAHolidayToday = isHoliday();
 
// Or if you want to check a specific date
const isThisAHoliday = isHoliday(new Date("2019-12-24"));