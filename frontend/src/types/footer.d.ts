export type FooterLink = {
  to: string;
  label: string;
  authOnly?: boolean;
};

export type User = {
  name?: string;
  email?: string;
  phone?: string;
  avatarUrl?: string;
};