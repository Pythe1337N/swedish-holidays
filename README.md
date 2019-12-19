# swedish-holidays
Library for calculating the date of all swedish holidays for any given year.

## How to install:
```shell
$ npm install swedish-holidays
```

## How to use:
```js
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
```
The result will always be an ```Array``` filled with JSON formatted holiday information including name and date.
```js
[
    {
        name: 'Julafton',
        date: '2019-12-24T00:00:00.000Z',
        day: 24,
        month: 12,
        year: 2019
    },
    {
        name: 'Juldagen',
        date: '2019-12-25T00:00:00.000Z',
        day: 25,
        month: 12,
        year: 2019
    },
    ...
]   
```
When using  `isHoliday` the result is `false` if the provided date is not a holiday, otherwise it is the holiday JSON object.

## Limitations
This library can only return valid holidays for years between 1582 to 8702.

If an invalid year is requested, some holidays will be missing.

## Supported Holidays
* Nyårsdagen
* Trettondagsafton
* Trettondedag jul
* Skärtorsdagen
* Långfredagen
* Påskafton
* Påskdagen
* Annandag påsk
* Valborgsmässoafton
* Första maj
* Kristi himmelsfärdsdag
* Sveriges nationaldag
* Pingstafton
* Pingstdagen
* Midsommarafton
* Midsommardagen
* Allhelgonaafton
* Alla helgons dag
* Julafton
* Juldagen
* Annandag jul
* Nyårsafton
