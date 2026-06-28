import React, { useEffect, useState } from 'react';
const WeatherWidget = ({ latitude = -26.8241, longitude = -65.2226, locationLabel = 'Tucumán, Argentina' }) => {
  const [clima, setClima] = useState(null);
  const [loadingClima, setLoadingClima] = useState(true);

  useEffect(() => {
    const fetchClima = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,weather_code&timezone=America/Argentina/Buenos_Aires`
        );
        const data = await res.json();
        if (data.current) {
          setClima(data.current);
        }
      } catch (error) {
        console.error('Error al cargar el clima:', error);
      } finally {
        setLoadingClima(false);
      }
    };

    fetchClima();
  }, [latitude, longitude]);

  const getClimaDescripcion = (code) => {
    if (code === 0) return 'Cielo despejado';
    if (code >= 1 && code <= 3) return 'Parcialmente nublado';
    if (code >= 45 && code <= 48) return 'Niebla';
    if (code >= 51 && code <= 67) return 'Llovizna/Lluvia ligera';
    if (code >= 71 && code <= 82) return 'Chubascos de lluvia/Nieve';
    if (code >= 95 && code <= 99) return 'Tormenta eléctrica';
    return 'Condiciones variables';
  };
   const getWeatherEmoji = (code) => {
    if (code === 0) return '☀️';
    if (code >= 1 && code <= 3) return '⛅';
    if (code >= 45 && code <= 48) return '🌫️';
    if (code >= 51 && code <= 67) return '🌧️';
    if (code >= 71 && code <= 82) return '🌨️';
    if (code >= 95 && code <= 99) return '⛈️';
    return '🌤️';
  };
