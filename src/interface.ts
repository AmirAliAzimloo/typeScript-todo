interface Car {
  readonly company: string;
  color: string;
  year: number;
  model: string;

  drive(speed: number): void;
  stop(): void;
}

