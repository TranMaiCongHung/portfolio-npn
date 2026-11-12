import { REGEX } from "@/constants";

export function isValidEmail(email: string): boolean {
  return REGEX.EMAIL.test(email);
}

export function isValidPhoneNumber(phone: string): boolean {
  return REGEX.PHONE_VN.test(phone);
}

