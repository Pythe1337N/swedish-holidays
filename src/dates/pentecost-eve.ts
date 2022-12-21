import { EasterSundayDependant } from './easter-sunday';
import svSE from '../holiday-names.sv-se';
import { IHolidayOptions } from '../holidays.interface';

export default class PentecostEve extends EasterSundayDependant implements EasterSundayDependant {
    public isPublicHoliday = false;

    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(PentecostEve.easterOffset, year);
        this.name = language.pentecostEve;
    }

    static easterOffset = 7 * 7 - 1;
}
