interface User {
  id: string;
  name: string;
  age: number;
  password: string;
  email: string;
  isAdmin: boolean;
}

type EventType = "click" | "scroll" | "mousemove";

// Pick
type UpdatedProps = Pick<User, "id" | "name" | "age">;

// Omit
type ExcludeEvent = Exclude<EventType, "scroll">; // 'click' | 'mousemove'

function updateUserProfile(userData: UpdatedProps) {
  // hit database and update the user
}

// Partial
type UpdatePropsOptional = Partial<UpdatedProps>;

function updateUserProfilePartial(userData: UpdatePropsOptional) {
  // hit database and update the user
}
