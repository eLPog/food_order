export function isFormValid(name, street, postal, city) {
  if (name.trim().length < 1 || street.trim().length < 1 || city.trim().length < 1
    || postal.trim().length !== 5) {
    return false;
  }
  return true;
}
