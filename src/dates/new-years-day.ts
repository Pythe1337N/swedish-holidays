import svSE from '../holiday-names.sv-se';
import Fixed from './fixed';
import { IHolidayOptions } from '../holidays.interface';

export default class NewYearsDay extends Fixed {
    static day = 1;
    static month = 1;
    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(NewYearsDay.day, NewYearsDay.month, language.newYearsDay, true, year);
    }
}
