export class OpenOrderResponseDTO {
    hasOpenOrder: boolean;
    success: boolean;
    description: string;

    constructor(hasOpenOrder: boolean, success: boolean, description: string) {
        this.hasOpenOrder = hasOpenOrder;
        this.success = success;
        this.description = description;
    }
}
