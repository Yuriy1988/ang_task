export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

class UserModel implements User {
  id: string;
  firstName: string;
  lastName: string;
}
