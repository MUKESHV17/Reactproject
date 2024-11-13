// storage.js
let registrations = []; // Simulate an in-memory JSON file for temporary storage

export const saveRegistrationData = (data) => {
  const registration = {
    username: data.username,
    email: data.email,
    password: data.password
  };
  
  registrations.push(registration);
  console.log('Saved registration data:', registrations);
};

export const getRegistrations = () => {
  return registrations;
};
