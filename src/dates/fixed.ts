import { Holiday } from '../holidays.interface';
import { fixedDate } from '../date-utils';

export default class Fixed implements Holiday {
    public name: string;
    public year: number;
    public month: number;
    public day: number;
    public date: Date;
    public isPublicHoliday: boolean;
    static day: number;
    static month: number;

    constructor(day: number, month: number, name: string, isPublicHoliday: boolean, year?: number) {
        this.year = year || new Date().getFullYear();
        this.month = month;
        this.day = day;
        this.date = fixedDate(new Date(this.year, this.month - 1, this.day));
        this.name = name;
        this.isPublicHoliday = isPublicHoliday;
    }

    static mightBe(date: Date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return this.month === month && this.day === day;
    }
}
