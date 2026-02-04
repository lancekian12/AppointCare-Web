export interface LoginForm {
  email: string;
  password: string;
}

export type UserRole = "Doctor" | "Patient" | string;
export type UserStatus = "Accepted" | "Pending" | "Rejected" | string;

export interface User {
  _id?: string;
  name?: string;
  email?: string;
  role: UserRole;
  status?: UserStatus;
  [key: string]: any;
}

export interface AuthResponse {
  token: string;
  user: User;
  [key: string]: any;
}

export interface HomeResponseData {
  [key: string]: any;
}

export interface SetUserDataPayload {
  response: AuthResponse;
  homeResponse: HomeResponseData;
}

export type SetUserData = (payload: SetUserDataPayload) => void;
