interface User {
  id: string;
  name: string;
  age: number;
  password: string;
  email: string;
  isAdmin: boolean;
}

// Pick
type UpdatedProps = Pick<User, "id" | "name" | "age">;

function updateUserProfile(userData: UpdatedProps) {
  // hit database and update the user
}

// Partial
type UpdatePropsOptional = Partial<UpdatedProps>;

function updateUserProfilePartial(userData: UpdatePropsOptional) {
  // hit database and update the user
}
