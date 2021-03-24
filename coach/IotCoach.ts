import {Coach} from "./Coach";

export class IotCoach implements Coach{
    getDailyWorkout(): string {
        return "Using raspberry pi and code 1 simple project on website."
    }
}