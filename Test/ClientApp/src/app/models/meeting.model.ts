export interface Meeting {
    meetingId: number;
    studentID: string;
    meetingDate: Date;
    subject: string;
    details: string;
    nextMeeting: Date;
}