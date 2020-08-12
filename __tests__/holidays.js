const { getHolidays } = require('../dist/holidays');

const expectations = [
    {
        name: 'Nyårsdagen',
        day: 1,
        month: 1,
        year: 2020
    },
    {
        name: 'Trettondagsafton',
        day: 5,
        month: 1,
        year: 2020
    },
    {
        name: 'Trettondedag jul',
        day: 6,
        month: 1,
        year: 2020
    },
    {
        name: 'Skärtorsdagen',
        day: 9,
        month: 4,
        year: 2020
    },
    {
        name: 'Långfredagen',
        day: 10,
        month: 4,
        year: 2020
    },
    {
        name: 'Påskafton',
        day: 11,
        month: 4,
        year: 2020
    },
    {
        name: 'Påskdagen',
        day: 12,
        month: 4,
        year: 2020
    },
    {
        name: 'Annandag påsk',
        day: 13,
        month: 4,
        year: 2020
    },
    {
        name: 'Valborgsmässoafton',
        day: 30,
        month: 4,
        year: 2020
    },
    {
        name: 'Första maj',
        day: 1,
        month: 5,
        year: 2020
    },
    {
        name: 'Kristi himmelsfärdsdag',
        day: 21,
        month: 5,
        year: 2020
    },
    {
        name: 'Pingstafton',
        day: 30,
        month: 5,
        year: 2020
    },
    {
        name: 'Pingstdagen',
        day: 31,
        month: 5,
        year: 2020
    },
    {
        name: 'Sveriges nationaldag',
        day: 6,
        month: 6,
        year: 2020
    },
    {
        name: 'Midsommarafton',
        day: 19,
        month: 6,
        year: 2020
    },
    {
        name: 'Midsommardagen',
        day: 20,
        month: 6,
        year: 2020
    },
    {
        name: 'Allhelgonaafton',
        day: 30,
        month: 10,
        year: 2020
    },
    {
        name: 'Alla helgons dag',
        day: 31,
        month: 10,
        year: 2020
    },
    {
        name: 'Julafton',
        day: 24,
        month: 12,
        year: 2020
    },
    {
        name: 'Juldagen',
        day: 25,
        month: 12,
        year: 2020
    },
    {
        name: 'Annandag jul',
        day: 26,
        month: 12,
        year: 2020
    },
    {
        name: 'Nyårsafton',
        day: 31,
        month: 12,
        year: 2020
    }
];

test('Return a nice list with all holidays for 2020', () => {
    const holidays = getHolidays(2020);
    expect(holidays).toBeDefined();
    expect(holidays.length).toEqual(expectations.length);
    const allIsValid = holidays.map((holiday, i) => {
        const expectation = expectations[i];
        return expectation.day === holiday.day &&
            expectation.month === holiday.month &&
            expectation.year === holiday.year &&
            expectation.name === holiday.name;
    }).every(h => h);
    expect(allIsValid).toBeTruthy();
});
