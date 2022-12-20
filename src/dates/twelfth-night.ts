import svSE from '../holiday-names.sv-se';
import Fixed from './fixed';
import { IHolidayOptions } from '../holidays.interface';

export default class TwelfthNight extends Fixed {
    static day = 5;
    static month = 1;
    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(TwelfthNight.day, TwelfthNight.month, language.twelfthNight, false, year);
    }
}
