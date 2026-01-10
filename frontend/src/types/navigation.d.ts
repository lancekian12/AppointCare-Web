export interface UserData {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface NavigationProps {
  userData?: UserData | null;
}