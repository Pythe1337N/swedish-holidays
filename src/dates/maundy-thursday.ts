import { EasterSundayDependant } from './easter-sunday';
import svSE from '../holiday-names.sv-se';
import { IHolidayOptions } from '../holidays.interface';

export default class MaundyThursday extends EasterSundayDependant implements EasterSundayDependant {
    public isPublicHoliday = false;

    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(MaundyThursday.easterOffset, year);
        this.name = language.maundyThursday;
    }

    static easterOffset = -3;
}
