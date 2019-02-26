import { Component, OnInit } from "@angular/core";
import { DateUtilService } from "../common/dateUtil.service";
import { ConstantService } from "../common/constant.service";

@Component({
    selector: 'calander-app',
    templateUrl: './calander.component.html',
    styleUrls: ['./calander.component.scss']
})

export class CalanderComponent implements OnInit {
    constructor(
        private dateUtilService: DateUtilService,
        private constService: ConstantService,
    ) { }
    currentMonth: string;
    selectedDate: string;
    currentYear: number;
    date = new Date;
    activeDays = [];
    monthCounter: number = 1;
    ngOnInit() {
        this.currentYear = this.date.getFullYear();
        this.currentMonth = this.dateUtilService.getCurrentMonth(this.date.getMonth() + this.monthCounter, this.currentYear);
        this.activeDays = this.dateUtilService.getTotalDaysInCurrMonth(this.date.getMonth() + this.monthCounter, this.currentYear);
    }

    movePrev() {
        const index = this.constService.MONTHS.indexOf(this.currentMonth);
        if (index === 0) {
            this.currentYear--;
            this.monthCounter += 11;
        } else {
            this.monthCounter--;
        }
        this.currentMonth = this.dateUtilService.getCurrentMonth(this.date.getMonth() + this.monthCounter, this.currentYear);
        this.activeDays = this.dateUtilService.getTotalDaysInCurrMonth((this.date.getMonth() + this.monthCounter), this.currentYear);
    }

    moveNext() {
        const index = this.constService.MONTHS.indexOf(this.currentMonth);
        if (index === 11) {
            this.currentYear++
            this.monthCounter -= 11;
        } else {
            this.monthCounter++;
        }
        this.currentMonth = this.dateUtilService.getCurrentMonth(this.date.getMonth() + this.monthCounter, this.currentYear);
        this.activeDays = this.dateUtilService.getTotalDaysInCurrMonth((this.date.getMonth() + this.monthCounter), this.currentYear);
    }

    showDate(d) {
        const monthIndex = this.constService.MONTHS.indexOf(this.currentMonth);
        const day = (new Date(`${this.currentYear}-${monthIndex + 1}-${d.date}`)).getDay()
        this.selectedDate = `${this.constService.WEEKDAYS[day]}, ${d.date} ${this.currentMonth} ${this.currentYear}`;
    }

}