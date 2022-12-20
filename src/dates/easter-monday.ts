import { EasterSundayDependant } from './easter-sunday';
import svSE from '../holiday-names.sv-se';
import { IHolidayOptions } from '../holidays.interface';

export default class EasterMonday extends EasterSundayDependant implements EasterSundayDependant {
    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(EasterMonday.easterOffset, year);
        this.name = language.easterMonday;
    }

    static easterOffset = 1;
}
