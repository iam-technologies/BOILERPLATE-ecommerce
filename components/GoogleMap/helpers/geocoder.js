import isClient from '../../../serverServices/utils/isClient';


export default ({ country, codePostal, city, address, countryName }, callback) => {
  let geocoder;
  if (isClient) geocoder = new window.google.maps.Geocoder();

  const params = {
    componentRestrictions: {
      country: country !== 'Otros' ? country : countryName,
      postalCode: codePostal,
      locality: city,
      route: address
    }
  };

  geocoder.geocode(params, (results, status) => {
    if (status === 'OK') {
      return callback(null, {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng()
      });
    }

    return callback(true, null);
  });
};
