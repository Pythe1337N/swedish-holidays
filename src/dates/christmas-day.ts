import svSE from '../holiday-names.sv-se';
import Fixed from './fixed';
import { IHolidayOptions } from '../holidays.interface';

export default class ChristmasDay extends Fixed {
    static day = 25;
    static month = 12;

    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(ChristmasDay.day, ChristmasDay.month, language.christmasDay, true, year);
    }
}
