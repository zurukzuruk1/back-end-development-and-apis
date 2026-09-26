import express from "express";

const router = express.Router();

const BASE_URL = "https://weather-proxy.freecodecamp.rocks/api/city";

const SUPPORTED_CITIES = [
  "New York",
  "Chicago",
  "Los Angeles",
  "Tokyo",
  "London",
];

router.get("/", (req, res) => {
  res.json({ supportedCities: SUPPORTED_CITIES });
});

router.get("/:city", async (req, res) => {
  const { city } = req.params;
  try {
    const response = await fetch(`${BASE_URL}/${city}`);
    if (!response.ok) throw new Error(`Status ${response.status}`);
    const data = await response.json();
    res.json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
    });
  } catch (error) {
    res
      .status(404)
      .json({ error: `Could not fetch weather data for "${city}".` });
  }
});

export default router;
