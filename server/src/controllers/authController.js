const User = require('../models/User');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: 'User registration failed', error });
  }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      // Find user by email
      const user = await User.findOne({ email });
  
      // Validate user and password
      if (user && (await user.matchPassword(password))) {
        // Generate JWT token for authenticated user
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
        // Respond with the generated token
        res.json({ token });
      } else {
        // Respond with error if email or password is invalid
        res.status(400).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      // Handle errors if user login fails
      res.status(400).json({ message: 'User login failed', error });
    }
  };
  

module.exports = { registerUser, loginUser };
