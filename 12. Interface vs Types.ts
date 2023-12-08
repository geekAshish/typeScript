// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces

interface UserProfile {
  readonly dbId: number,
  name: string,
  userId: number,
  googleId?: string,

  startTrail: () => string,
  endTrail(): string,
  getCoupon(couponName: string, couponValue: number): number,
}

// 1. Reopening of interface
// Use case like: if an interface in written in the some library and another programmer
interface UserProfile {
  gitHubLogin: string,
}

const myProfile: UserProfile = {
  dbId: 9,
  name: 'Ashish',
  userId: 99,
  googleId: 'as99',
  gitHubLogin: 'true', // and now we can use it here like

  startTrail: () => {
    return 'Your trail is starting';
  },
  endTrail: () => {
    return 'Your trail is ending';
  },
  getCoupon(name = 'ashish', value = 9) {
    return 9
  },
}

// 2. inheriting
// Here We are inheriting UserProfile

// You can inherit more then two interface : like
// interface Admin extends UserProfile, interface1, interface2 {}
interface Admin extends UserProfile {
  role: 'admin' | 'ta' | 'learner',
}

const myProfileUser: Admin = {
  dbId: 9,
  name: 'Ashish',
  userId: 99,
  googleId: 'as99',
  gitHubLogin: 'true', // and now we can use it here like
  role: 'admin',

  startTrail: () => {
    return 'Your trail is starting';
  },
  endTrail: () => {
    return 'Your trail is ending';
  },
  getCoupon(name = 'ashish', value = 9) {
    return 9
  },
}