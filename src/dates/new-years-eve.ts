import svSE from '../holiday-names.sv-se';
import Fixed from './fixed';
import { IHolidayOptions } from '../holidays.interface';

export default class NewYearsEve extends Fixed {
    static day = 31;
    static month = 12;
    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(NewYearsEve.day, NewYearsEve.month, language.newYearsEve, false, year);
    }
}
