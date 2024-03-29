import bcryptjs from "bcryptjs";
import User from "../model/user.js";

// Register a new user
export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user with the provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already in use" });
    }

    // Hash the password using bcryptjs
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create a new user instance with hashed password
    const newUser = new User({ name, email, password: hashedPassword });

    // Save the new user to the database
    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    // Pass the error to the error handling middleware
    next(error);
  }
};
