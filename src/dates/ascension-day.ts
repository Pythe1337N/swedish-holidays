import { EasterSundayDependant } from './easter-sunday';
import svSE from '../holiday-names.sv-se';
import { IHolidayOptions } from '../holidays.interface';

export default class AscensionDay extends EasterSundayDependant implements EasterSundayDependant {
    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(AscensionDay.easterOffset, year);
        this.name = language.ascensionDay;
    }

    static easterOffset = 6 * 7 - 3;
}
