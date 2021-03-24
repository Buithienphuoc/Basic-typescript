export abstract class Animal{
    private _name: string;
    private _height: number;

    constructor(name: string, height: number) {
        this._name = name;
        this._height = height;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    abstract say(): string;
}