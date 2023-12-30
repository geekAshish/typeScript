"use strict";
console.log('Ashish Kushwaha is good boy');
// Best practices
function bestPractices1(val) {
    if (!val) {
        console.log(val, 'the value is null');
    }
}
bestPractices1('');
function createUserProfile(a, b) {
    return {
        a,
        b
    };
}
const storedValue = createUserProfile('zoom', { username: 'ashishdd', password: 'ashish47', dob: '4/7' });
// console.log(storedValue);
class getUserLogin {
    constructor() {
        this.userProfile = [];
    }
    updateProfile(userInfo) {
        this.userProfile.push(userInfo);
    }
}
const userInfoData = new getUserLogin();
userInfoData.updateProfile('Ashish');
userInfoData.updateProfile(66);
console.log(userInfoData.userProfile);
