// src/services/authService.js
const users = [
  { email: "admin@college.com", password: "admin123", role: "admin" },
  { email: "student@college.com", password: "student123", role: "student" },
];

export function authenticate(email, password) {
  const user = users.find(
    (u) => u.email === email && u.password === password
  );
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  return null;
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function logout() {
  localStorage.removeItem("user");
}