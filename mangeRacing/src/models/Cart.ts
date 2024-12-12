import { Part } from "./Parts";

export const calculateTotalCost = (itemCart: ItemCart): number => {
    return (
        (itemCart.dianteira?.cost || 0) +
        (itemCart.guidao?.cost || 0) +
        (itemCart.motor?.cost || 0) +
        (itemCart.traseira?.cost || 0)
    );
};

export class ItemCart {
    readonly dianteira: Part = new Part();
    readonly guidao: Part = new Part();
    readonly motor: Part = new Part();
    readonly traseira: Part = new Part();
    private _cost: number = 0.0;

    constructor() {
        this.updateCost();
    }

    updateCost(): void {
        this._cost = calculateTotalCost(this);
    }

    get cost(): number {
        return this._cost;
    }
}

export class Cart {
    private motors: Array<ItemCart> = [];
    private _cost: number = 0.0;

    addItem(item: ItemCart): void {
        this.motors.push(item);
        this.updateCost();
    }

    removeItem(index: number): void {
        if (index >= 0 && index < this.motors.length) {
            this.motors.splice(index, 1);
            this.updateCost();
        }
    }

    private updateCost(): void {
        this._cost = this.motors.reduce((total, item) => total + item.cost, 0);
    }

    get cost(): number {
        return this._cost;
    }

    get items(): ReadonlyArray<ItemCart> {
        return this.motors;
    }
}
