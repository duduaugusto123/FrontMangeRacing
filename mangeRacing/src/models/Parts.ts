export enum PartTypes {
    "dianteira",
    "guidao",
    "motor",
    "traseira"
}

export type PartType = {
    id: number;
};

export class Part {
    id: number = 0;
    src: string = "";
    cost: number = 0.0;

    constructor(id: number = 0, src: string = "", cost: number = 0.0) {
        this.id = id;
        this.src = src;
        this.cost = cost;
    }
}

export class PartsResponse {
    readonly dianteira: Array<Part> = [];
    readonly guidao: Array<Part> = [];
    readonly motor: Array<Part> = [];
    readonly traseira: Array<Part> = [];

    constructor(
        dianteira: Array<Part> = [],
        guidao: Array<Part> = [],
        motor: Array<Part> = [],
        traseira: Array<Part> = []
    ) {
        this.dianteira = dianteira;
        this.guidao = guidao;
        this.motor = motor;
        this.traseira = traseira;
    }

    get allParts(): ReadonlyArray<Part> {
        return [
            ...this.dianteira,
            ...this.guidao,
            ...this.motor,
            ...this.traseira,
        ];
    }
}

export type PartsResponseType = {
    dianteira: ReadonlyArray<Part>;
    guidao: ReadonlyArray<Part>;
    motor: ReadonlyArray<Part>;
    traseira: ReadonlyArray<Part>;
};
