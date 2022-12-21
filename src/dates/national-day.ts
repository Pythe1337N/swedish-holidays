import svSE from '../holiday-names.sv-se';
import Fixed from './fixed';
import { IHolidayOptions } from '../holidays.interface';

export default class NationalDay extends Fixed {
    static day = 6;
    static month = 6;

    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        super(NationalDay.day, NationalDay.month, language.swedishNationalDay, true, year);
    }
}
