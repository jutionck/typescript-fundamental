import { Vehicle } from './vehicle';

export class Car {

  constructor(
      private readonly vehicle?: Vehicle //immutable, DI
  ) {
  }

  private color: string

  startEngine(): void {
    this.vehicle.isStarted = true
  }

  // cara ini sudah tidak bisa digunakan ketika meng-inject
  // si interface nya ke dalam constructor
  // setName(name: string): void {
  //   this.vehicle.name = name
  // }

  getName(): string {
    return this.vehicle.name
  }

}
