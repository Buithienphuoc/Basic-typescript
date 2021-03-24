import {Coach} from "./Coach";

export class MlCoach implements Coach{
    getDailyWorkout(): string {
        return "Do 10 basic math exercise before learning a new section"
    }
}