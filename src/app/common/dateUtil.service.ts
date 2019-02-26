import { Injectable } from "@angular/core";
import { ConstantService } from "./constant.service";
import { DisplayDate } from "../bo/DisplayDate";

@Injectable()
export class DateUtilService {
    constructor(
        public constService: ConstantService,
    ) {

    }

    TOTAL_VISIBLE_DAYS: number = 35;

    getCurrentMonth(month, year) {
        const date = new Date(year, month, 0)
        return this.constService.MONTHS[date.getMonth()];
    }

    getNumDaysInCurrMonths(month, year) {
        return new Date(year, month, 0).getDate();
    }

    getTotalDaysInCurrMonth(month, year) {
        const totalDays = this.getNumDaysInCurrMonths(month, year);
        let totalDaysPast = 0;
        let totalDaysFuture = 0;
        if (month === 1) {
            totalDaysPast = this.getNumDaysInCurrMonths(12, year - 1);
            totalDaysFuture = this.getNumDaysInCurrMonths(month + 1, year);
        } else if (month === 12) {
            totalDaysPast = this.getNumDaysInCurrMonths(month, year);
            totalDaysFuture = this.getNumDaysInCurrMonths(1, year + 1);
        } else {
            totalDaysPast = this.getNumDaysInCurrMonths(month - 1, year);
            totalDaysFuture = this.getNumDaysInCurrMonths(month + 1, year);
        }
        const getStartWeekDay = new Date(year + '-' + month + '-1').getDay();
        const displayDate = [];
        let counter = 0;
        for (let i = 0; i < getStartWeekDay; i++) {
            const dateObj = { date: (totalDaysPast - counter), isActive: 'disable' }
            displayDate.unshift(new DisplayDate(dateObj))
            counter++;
        }
        for (let i = 1; i <= totalDays; i++) {
            const currDate = new Date();
            if (i === currDate.getDate() && month === (currDate.getMonth() + 1) && year === currDate.getFullYear()) {
                const dateObj = { date: i, isActive: 'active' }
                displayDate.push(new DisplayDate(dateObj))
                continue;
            }
            const dateObj = { date: i, isActive: '' }
            displayDate.push(new DisplayDate(dateObj))
        }
        let remainder = this.TOTAL_VISIBLE_DAYS - displayDate.length;
        for (let i = 1; i <= remainder; i++) {
            const dateObj = { date: i, isActive: 'disable' }
            displayDate.push(new DisplayDate(dateObj))
        }

        return displayDate;
    }
}