const { body } = require("express-validator");

export const signupValidator = [
  body("role")
    .isIn(["Doctor", "Patient"])
    .withMessage("Role must be Doctor or Patient"),
  body("Fname")
    .isLength({ min: 3, max: 50 })
    .withMessage("First name must be 3-50 characters"),
  body("Lname")
    .isLength({ min: 3, max: 50 })
    .withMessage("Last name must be 3-50 characters"),
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
  body("gender")
    .isIn(["Male", "Female"])
    .withMessage("Gender must be Male or Female"),
  body("number").notEmpty().withMessage("Number is required"),
  body("age").isInt({ min: 0, max: 150 }).withMessage("Age must be 0-150"),
];

export const loginValidator = [
  body("email").isEmail().withMessage("Invalid email"),
  body("password").notEmpty().withMessage("Password is required"),
];
