import svSE from '../holiday-names.sv-se';
import { plusDays } from '../date-utils';
import AllSaintsEve from './all-saints-eve';
import { IHolidayOptions } from '../holidays.interface';

export default class AllSaintsDay extends AllSaintsEve {
    public isPublicHoliday = true;

    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super({ year });
        this.name = language.allSaintsDay;
        this.date = plusDays(this.date, 1);
        this.month = this.date.getMonth() + 1;
        this.day = this.date.getDate();
    }

    static mightBe(date: Date) {
        return super.mightBe(plusDays(date, -1));
    }
}
