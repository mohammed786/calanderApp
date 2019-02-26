export class DisplayDate {
    date: number;
    isActive: string;
    constructor(dateObj: any) {
        this.date = dateObj.date;
        this.isActive = dateObj.isActive;
    }
}