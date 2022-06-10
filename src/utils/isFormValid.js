export function isFormValid(name, street, postal, city) {
  if (name.trim().length < 1) {
    return {
      status: false,
      info: 'Please enter the name',
    };
  }
  if (street.trim().length < 1) {
    return {
      status: false,
      info: 'Please enter the street',
    };
  }
  if (city.trim().length < 1) {
    return {
      status: false,
      info: 'Please enter the city',
    };
  }
  if (postal.trim().length !== 6 || !postal.trim().includes('-')) {
    return {
      status: false,
      info: 'Incorrect format of postal code. Ex. 34-110',
    };
  }
  return {
    status: true,
  };
}
