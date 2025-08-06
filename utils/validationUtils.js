// Name: only letters and spaces
export const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);

// Email: basic email validation (ending with .com)
export const isValidEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.(com)$/.test(email);

// Phone: exactly 10 digits
export const isValidPhone = (phone) => /^\d{10}$/.test(phone);

// Company: only letters and spaces
export const isValidCompany = (company) => /^[A-Za-z\s]+$/.test(company);

// Example: combine for a form
export const validateLeadForm = ({ name, email, phone, company }) => {
  if (!name || !email || !phone || !company) {
    return "All fields are required.";
  }
  if (!isValidName(name)) {
    return "Name must contain letters only.";
  }
  if (!isValidEmail(email)) {
    return "Please enter a valid email.";
  }
  if (!isValidPhone(phone)) {
    return "Please enter a valid phone number.";
  }
  if (!isValidCompany(company)) {
    return "Company name must contain letters only.";
  }
  return "";
};