const getWeatherData = () => ({
  locations: [
    {
      name: 'Portland',
      forecastUrl: 'https://api.weather.gov/gridpoints/PQR/112,103/forecast',
      iconUrl: 'https://api.weather.gov/icons/land/day/tsra,40?size=medium',
      weather: 'Chance Showers And Thunderstorms',
      temp: '59 F (15 C)',
    },
    {
      name: 'Bend',
      forecastUrl: 'https://api.weather.gov/gridpoints/PDT/34,40/forecast',
      iconUrl: 'https://api.weather.gov/icons/land/day/tsra_sct,50?size=medium',
      weather: 'Scattered Showers And Thunderstorms',
      temp: '51 F (11 C)',
    },
    {
      name: 'Manzanita',
      forecastUrl: 'https://api.weather.gov/gridpoints/PQR/73,120/forecast',
      iconUrl: 'https://api.weather.gov/icons/land/day/tsra,90?size=medium',
      weather: 'Showers And Thunderstorms',
      temp: '55 F (13 C)',
    },
  ],
})

const weatherMiddleware = (req, res, next) => {
  if(!res.locals.partials) res.locals.partials = {}
  res.locals.partials.weatherContext = getWeatherData()
  next()
}

module.exports = weatherMiddleware
