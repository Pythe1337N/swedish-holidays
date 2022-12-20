import svSE from '../holiday-names.sv-se';
import Fixed from './fixed';
import { IHolidayOptions } from '../holidays.interface';

export default class MayFirst extends Fixed {
    static day = 1;
    static month = 5;

    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(MayFirst.day, MayFirst.month, language.mayFirst, true, year);
    }
}
