import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("shahriar50", 10),
    isAdmin: true,
  },
  {
    name: "shahriar",
    email: "shahriar@gmail.com",
    password: bcrypt.hashSync("shahriar50", 10),
    isAdmin: false,
  },
  {
    name: "mehedi",
    email: "mehedi@gmail.com",
    password: bcrypt.hashSync("shahriar50", 10),
    isAdmin: false,
  }
];

export default users;
