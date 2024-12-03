interface Vehicle {
    make: string;       // Brand of the vehicle, e.g., Toyota
    model: string;      // Specific model, e.g., Corolla
    year: number;       // Manufacturing year
    start(): void;      // Method to start the vehicle (returns void)
}


class MyCar implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;   // Initialize the make property
        this.model = model; // Initialize the model property
        this.year = year;   // Initialize the year property
    }

    start(): void {
        console.log("Car engine started");
    }
}
