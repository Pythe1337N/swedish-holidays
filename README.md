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
When using `isHoliday` the result is `false` if the provided date is not a holiday, otherwise it is the holiday JSON object.

## Localization
If you want the holiday names to be returned using a different language than the default (Swedish), use the `language` JSON object and modify it before passing it to the `getHolidays` function.
```js
const { language } = require('swedish-holidays');
const translation = { ...language };
// This value is 'Julafton' by default.
translation.christmasEve = 'Christmas Eve';

const holidays2019 = getHolidays(2019, translation);
// or if you want the current year
// supply a year that is 'falsy' e.g. undefined / null / 0 / false
const holidays = getHolidays(0, translation);
 ```

## Limitations
This library can only return valid holidays for years between 1582 and 8702.

If an invalid year is requested, some holidays will be missing.

## Supported Holidays
* New Year's Day / Nyårsdagen
* Twelfth Night / Trettondagsafton
* Epiphany / Trettondedag jul
* Maundy Thursday / Skärtorsdagen
* Good Friday / Långfredagen
* Holy Saturday / Påskafton
* Easter Sunday / Påskdagen
* Easter Monday / Annandag påsk
* Walpurgis Night / Valborgsmässoafton
* May First / Första maj
* Ascension Day / Kristi himmelsfärdsdag
* Swedish National Day / Sveriges nationaldag
* Pentecost Eve / Pingstafton
* Whit Sunday / Pingstdagen
* Midsummer Eve / Midsommarafton
* Midsummer Day / Midsommardagen
* All Saints Eve / Allhelgonaafton
* All Saints Day / Alla helgons dag
* Christmas Eve / Julafton
* Christmas Day / Juldagen
* Boxing Day / Annandag jul
* New Years Eve / Nyårsafton
