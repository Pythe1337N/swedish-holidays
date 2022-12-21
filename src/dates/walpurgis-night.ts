import svSE from '../holiday-names.sv-se';
import Fixed from './fixed';
import { IHolidayOptions } from '../holidays.interface';

export default class WalpurgisNight extends Fixed {
    static day = 30;
    static month = 4;
    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(WalpurgisNight.day, WalpurgisNight.month, language.walpurgisNight, false, year);
    }
}
