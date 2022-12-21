import { EasterSundayDependant } from './easter-sunday';
import svSE from '../holiday-names.sv-se';
import { IHolidayOptions } from '../holidays.interface';

export default class GoodFriday extends EasterSundayDependant implements EasterSundayDependant {
    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(GoodFriday.easterOffset, year);
        this.name = language.goodFriday;
    }

    static easterOffset = -2;
}
