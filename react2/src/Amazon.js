import React, { useState, useEffect } from 'react';
import Autocomplete from "react-google-autocomplete";


const Amazon = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  

  const getLocation = () =>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        }
      );
    }
  }
  

  return (
    <div className='text-center mt-5'>
      <div>
      <Autocomplete
        apiKey='AIzaSyBVDMFAp-MSP0oqLQuOW3WkkNFW84MXtbk'
        onPlaceSelected={(place) => {
          console.log(place);
        }}
      />;
      </div>
    </div>
  );
};

export default Amazon;
