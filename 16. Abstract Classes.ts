abstract class CreateWebsite {
  constructor(
    public language: string,
    public framework: string,
  ){}

  abstract getPaid(): string
  getSalary(): number {
    return 5;
  }
}

// Abstract classes can't create own object, but they help other classes to get better structure, and some other compulsory things which other classes have to follow
// const myWebsite = new CreateWebsite('JavaScript', "ReactJs");

class Ecommerce extends CreateWebsite {
  constructor(
    public language: string,
    public framework: string,
    public backend: string,
  ) {
    super('TypeScript', 'NextJS')
  }

  getPaid(): string {
    return "Kya developer kama rah hai";
  }
}

const myWebsite = new Ecommerce('TypeScript', "NextJS", 'NodeJS')
const salary = myWebsite.getSalary()

