interface User {
  readonly dbId: number,
  name: string,
  userId: number,
  googleId?: string,

  startTrail: () => string,
  endTrail(): string,
  getCoupon(couponName: string, couponValue: number): number,
}

const ashish: User = {
  dbId: 22,
  name: 'Ashish',
  userId: 2299,

  startTrail: () => {
    // No matter what logic you put here, but it should return string
    return "Your trail is start";
  },
  endTrail: () => {
    // No matter what logic you put here, but it should return string
    return "Your trail is end";
  },
  getCoupon: (name: 'ashish', value: 9) => {
    return 4;
  }
}


