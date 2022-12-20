import svSE from '../holiday-names.sv-se';
import Fixed from './fixed';
import { IHolidayOptions } from '../holidays.interface';

export default class ChristmasEve extends Fixed {
    static day = 24;
    static month = 12;

    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(ChristmasEve.day, ChristmasEve.month, language.christmasEve, false, year);
    }
}
