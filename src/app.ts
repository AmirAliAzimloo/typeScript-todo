abstract class Person {
  constructor(
    public name: string,
    readonly email: string,
    protected age: number
  ) {
    this.name = name;
    this.email = email; 
    this.age = age;
  }

  abstract info(): string;
}

