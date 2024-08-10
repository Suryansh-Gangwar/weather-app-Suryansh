import React from 'react';
import ErrorBox from '../../Reusable/ErrorBox';
import AirConditionsItem from './AirConditionsItem';
import Layout from '../../Reusable/Layout';

const TodayWeatherAirConditions = ({ data }) => {
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === '404';

  if (noDataProvided) {
    return (
      <Layout
        title="AIR CONDITIONS"
        content={<ErrorBox flex="1" type="error" />}
        mb="1rem"
        sx={{ marginTop: '2.9rem' }}
      />
    );
  }

  // Extract and format values with default values
  const feelsLike = data.main?.feels_like ? Math.round(data.main.feels_like) : 'N/A';
  const windSpeed = data.wind?.speed ? `${data.wind.speed} m/s` : 'N/A';
  const cloudiness = data.clouds?.all ? `${Math.round(data.clouds.all)} %` : 'N/A';
  const humidity = data.main?.humidity ? `${Math.round(data.main.humidity)} %` : 'N/A';

  return (
    <Layout
      title="AIR CONDITIONS"
      content={
        <>
          <AirConditionsItem
            title="Real Feel"
            value={`${feelsLike} °C`}
            type="temperature"
          />
          <AirConditionsItem
            title="Wind"
            value={windSpeed}
            type="wind"
          />
          <AirConditionsItem
            title="Clouds"
            value={cloudiness}
            type="clouds"
          />
          <AirConditionsItem
            title="Humidity"
            value={humidity}
            type="humidity"
          />
        </>
      }
      mb="1rem"
      sx={{ marginTop: '2.9rem' }}
    />
  );
};

export default TodayWeatherAirConditions;
