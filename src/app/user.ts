export class User {

    constructor(
        public username: string,
        public firstName: string,
        public group: string,
        public mondayStatus: string,
        public tuesdayStatus: string,
        public wednesdayStatus: string,
        public thursdayStatus: string,
        public fridayStatus: string,
        public mondayHours: string,
        public tuesdayHours: string,
        public wednesdayHours: string,
        public thursdayHours: string,
        public fridayHours: string,
        public enabled: number
    ) {  }
}
