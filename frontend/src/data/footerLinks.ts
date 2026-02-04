import type { FooterLink } from "../types/footer.types";

export const FOOTER_LINKS: FooterLink[] = [
  { to: "/", label: "Home" },
  { to: "/TopDoctors", label: "Find Doctor" },
  { to: "/Contact", label: "Contact Us" },
  { to: "/PatientAppoinment", label: "My Bookings", authOnly: true },
  { to: "/PatientConsultation", label: "Consultation", authOnly: true },
];
