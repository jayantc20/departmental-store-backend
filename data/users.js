import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("qwerty", 10),
    isAdmin: true,
  },
];

export default users;
