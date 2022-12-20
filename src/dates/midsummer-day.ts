import svSE from '../holiday-names.sv-se';
import { plusDays } from '../date-utils';
import MidsummerEve from './midsummer-eve';
import { IHolidayOptions } from '../holidays.interface';

export default class MidsummerDay extends MidsummerEve {
    public isPublicHoliday = true;

    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super({ year });
        this.date = plusDays(this.date, 1);
        this.month = this.date.getMonth() + 1;
        this.day = this.date.getDate();
        this.name = language.midsummerDay;
    }

    static mightBe(date: Date) {
        return super.mightBe(plusDays(date, -1));
    }
}
