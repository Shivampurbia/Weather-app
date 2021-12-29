import axios from "axios"

const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "f33a484cf794d08d0148764789aaba32"

export const fetchWeather = async (query) => {
  // only destructure data from response
  const { data } = await axios.get(URL, {
    // units is the type of measurementS
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  })

  return data
}