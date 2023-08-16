module.exports = (req, res) => {
  const apiKey = process.env.API_KEY;

  res.json({ apiKey });
};
