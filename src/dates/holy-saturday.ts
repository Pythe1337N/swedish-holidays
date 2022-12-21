import { EasterSundayDependant } from './easter-sunday';
import svSE from '../holiday-names.sv-se';
import { IHolidayOptions } from '../holidays.interface';

export default class HolySaturday extends EasterSundayDependant implements EasterSundayDependant {
    public isPublicHoliday = false;

    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(HolySaturday.easterOffset, year);
        this.name = language.holySaturday;
    }

    static easterOffset = -1;
}
