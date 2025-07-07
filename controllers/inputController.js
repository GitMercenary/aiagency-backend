const UserInput = require('../models/UserInput'); // import the model

// POST /api/input
const handleUserInput = async (req, res) => {
  const { niche, platforms, competitors } = req.body;

  console.log('Received Input:', { niche, platforms, competitors });

  if (!niche || !Array.isArray(platforms)) {
    return res.status(400).json({ error: 'Invalid input format' });
  }

  try {
    const newInput = new UserInput({
      niche,
      platforms,
      competitors,
    });

    const savedInput = await newInput.save();

    res.status(200).json({
      message: 'Input received and saved',
      data: savedInput,
    });
  } catch (error) {
    console.error('MongoDB Error:', error);
    res.status(500).json({ error: 'Failed to save input' });
  }
};

// GET /api/input
const getAllInputs = async (req, res) => {
  try {
    const inputs = await UserInput.find().sort({ createdAt: -1 });
    res.status(200).json(inputs);
  } catch (error) {
    console.error('MongoDB Error:', error);
    res.status(500).json({ error: 'Failed to fetch inputs' });
  }
};

module.exports = { handleUserInput, getAllInputs };
