import {Shape} from "./Shape";

export class Rectangle extends Shape{
    private _width: number
    private _height: number

    constructor(x: number, y: number, width: number, height: number) {
        super(x, y);
        this._width = width;
        this._height = height;
    }


    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    getInfo(): string {
        return super.getInfo() + `,width=${this._width} , height=${this._height}`;
    }
}