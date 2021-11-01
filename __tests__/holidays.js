const { isPublicHoliday, getHolidays, language } = require('../dist/holidays');

const expectations = [
    {
        name: 'Nyårsdagen',
        day: 1,
        month: 1,
        year: 2020,
        isPublicHoliday: true,
    },
    {
        name: 'Trettondagsafton',
        day: 5,
        month: 1,
        year: 2020,
        isPublicHoliday: false,
    },
    {
        name: 'Trettondedag jul',
        day: 6,
        month: 1,
        year: 2020,
        isPublicHoliday: true,
    },
    {
        name: 'Skärtorsdagen',
        day: 9,
        month: 4,
        year: 2020,
        isPublicHoliday: false,
    },
    {
        name: 'Långfredagen',
        day: 10,
        month: 4,
        year: 2020,
        isPublicHoliday: true,
    },
    {
        name: 'Påskafton',
        day: 11,
        month: 4,
        year: 2020,
        isPublicHoliday: false,
    },
    {
        name: 'Påskdagen',
        day: 12,
        month: 4,
        year: 2020,
        isPublicHoliday: true,
    },
    {
        name: 'Annandag påsk',
        day: 13,
        month: 4,
        year: 2020,
        isPublicHoliday: true,
    },
    {
        name: 'Valborgsmässoafton',
        day: 30,
        month: 4,
        year: 2020,
        isPublicHoliday: false,
    },
    {
        name: 'Första maj',
        day: 1,
        month: 5,
        year: 2020,
        isPublicHoliday: true,
    },
    {
        name: 'Kristi himmelsfärdsdag',
        day: 21,
        month: 5,
        year: 2020,
        isPublicHoliday: true,
    },
    {
        name: 'Pingstafton',
        day: 30,
        month: 5,
        year: 2020,
        isPublicHoliday: false,
    },
    {
        name: 'Pingstdagen',
        day: 31,
        month: 5,
        year: 2020,
        isPublicHoliday: true,
    },
    {
        name: 'Sveriges nationaldag',
        day: 6,
        month: 6,
        year: 2020,
        isPublicHoliday: true,
    },
    {
        name: 'Midsommarafton',
        day: 19,
        month: 6,
        year: 2020,
        isPublicHoliday: false,
    },
    {
        name: 'Midsommardagen',
        day: 20,
        month: 6,
        year: 2020,
        isPublicHoliday: true,
    },
    {
        name: 'Allhelgonaafton',
        day: 30,
        month: 10,
        year: 2020,
        isPublicHoliday: false,
    },
    {
        name: 'Alla helgons dag',
        day: 31,
        month: 10,
        year: 2020,
        isPublicHoliday: true,
    },
    {
        name: 'Julafton',
        day: 24,
        month: 12,
        year: 2020,
        isPublicHoliday: false,
    },
    {
        name: 'Juldagen',
        day: 25,
        month: 12,
        year: 2020,
        isPublicHoliday: true,
    },
    {
        name: 'Annandag jul',
        day: 26,
        month: 12,
        year: 2020,
        isPublicHoliday: true,
    },
    {
        name: 'Nyårsafton',
        day: 31,
        month: 12,
        year: 2020,
        isPublicHoliday: false,
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
            expectation.name === holiday.name &&
            expectation.isPublicHoliday === holiday.isPublicHoliday
    }).every(h => h);
    expect(allIsValid).toBeTruthy();
});

test('Identify sunday as a public holiday', () => {
    const saturdayIsNotPublicHoliday = isPublicHoliday(new Date('2021-11-6'));
    const sundayIsPublicHoliday = isPublicHoliday(new Date('2021-11-7'));
    const mondayIsNotPublicHoliday = isPublicHoliday(new Date('2021-11-8'));
    expect(saturdayIsNotPublicHoliday).toBeFalsy();
    expect(sundayIsPublicHoliday).toBeTruthy();
    expect(mondayIsNotPublicHoliday).toBeFalsy();
});

test('Handle translations', () => {
    const translation = { ...language };
    translation.christmasEve = 'Christmas Eve';
    const [christmas] = getHolidays(2020, translation).filter(holiday => holiday.day === 24 && holiday.month === 12);
    expect(christmas).toBeDefined();
    expect(christmas.name).toEqual('Christmas Eve');
});
