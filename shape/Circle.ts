import {Shape} from "./Shape";

export class Circle extends Shape{
    private _radius: number;

    constructor(x: number, y: number, radius: number) {
        super(x, y);
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    getInfo(): string {
        return super.getInfo() + `,radius=${this._radius}`;
    }
}