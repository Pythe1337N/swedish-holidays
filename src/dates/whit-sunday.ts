import { EasterSundayDependant } from './easter-sunday';
import svSE from '../holiday-names.sv-se';
import { IHolidayOptions } from '../holidays.interface';

export default class WhitSunday extends EasterSundayDependant implements EasterSundayDependant {
    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(WhitSunday.easterOffset, year);
        this.name = language.whitSunday;
    }

    static easterOffset = 7 * 7;
}
