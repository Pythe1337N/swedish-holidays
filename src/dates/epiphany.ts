import svSE from '../holiday-names.sv-se';
import Fixed from './fixed';
import { IHolidayOptions } from '../holidays.interface';

export default class Epiphany extends Fixed {
    static day = 6;
    static month = 1;

    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(Epiphany.day, Epiphany.month, language.epiphany, true, year);
    }
}
