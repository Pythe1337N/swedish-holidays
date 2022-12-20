import { Holiday, IHolidayOptions } from '../holidays.interface';
import svSE from '../holiday-names.sv-se';
import { fixedDate, plusDays } from '../date-utils';

export default class EasterSunday implements Holiday {
    public name: string;
    public year: number;
    public month: number;
    public day: number;
    public date: Date;
    public isPublicHoliday = true;

    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        const y = year || new Date().getFullYear();
        if (y < 1582 || y > 8702) {
            throw new Error('Requested year is out of range');
        }
        const goldenNumber = Math.floor((y % 19) + 1);
        const century = Math.floor(y / 100 + 1);
        const corx = Math.floor((3 * century) / 4 - 12);
        const corz = Math.floor((8 * century + 5) / 25 - 5);
        const sunday = Math.floor((5 * y) / 4 - corx - 10);
        let epact = Math.floor((11 * goldenNumber + 20 + corz - corx + 30) % 30);

        if ((epact === 25 && goldenNumber > 11) || epact === 24) {
            epact += 1;
        }

        let moon = 44 - epact;

        if (moon < 21) {
            moon += 30;
        }

        moon = moon + 7 - ((sunday + moon) % 7);

        let month = 3;
        let day = moon;

        if (moon > 31) {
            month = 4;
            day = moon - 31;
        }

        this.year = y;
        this.month = month;
        this.day = day;

        this.date = fixedDate(new Date(y, month - 1, day, 0, 0, 0, 0));
        this.name = language.easterSunday;
    }

    static mightBe(date: Date): boolean {
        const month = date.getMonth() + 1;
        const day = date.getDate();

        // Earliest 22:nd March
        if (month === 3) {
            return day >= 22;
        }
        // Latest 25:th April
        if (month === 4) {
            return day <= 25;
        }
        return false;
    }
}

export class EasterSundayDependant extends EasterSunday {
    constructor(offsetDays: number, year?: number) {
        super({ year });
        this.date = plusDays(this.date, offsetDays);
        this.month = this.date.getMonth() + 1;
        this.day = this.date.getDate();
    }

    static mightBe(date: Date) {
        return super.mightBe(plusDays(date, -this.easterOffset));
    }

    static easterOffset = 0;
}
