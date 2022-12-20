import svSE from '../holiday-names.sv-se';
import Fixed from './fixed';
import { IHolidayOptions } from '../holidays.interface';

export default class BoxingDay extends Fixed {
    static day = 26;
    static month = 12;

    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(BoxingDay.day, BoxingDay.month, language.boxingDay, true, year);
    }
}
