import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { SEARCH_PLACES_KEY } from '../../types'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';
import { styles, mapStyle } from '../Styles/mapStyles'
import {
  setHomeDetails,
} from "../redux/actions";
import { connect, useDispatch } from "react-redux";

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const [regionCoords, setRegion] = useState({ lat: 0, lng: 0 });
  const [marker, setMarker] = useState({ lat: 0, lng: 0 });
  const [place, setPlace] = useState({})

  const onPress = (data, details) => {
    setRegion(details.geometry.location);
    setMarker(details.geometry.location);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#0d0d0d'}
      />
      <View
        style={styles.mainView}>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: regionCoords.lat,
            longitude: regionCoords.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{ latitude: marker.lat, longitude: marker.lng }}
            title={place.main_text}
            description={place.secondary_text}
          />
        </MapView>
        <View style={styles.searchView}>
          <GooglePlacesAutocomplete
            GooglePlacesDetailsQuery={{
              fields: 'geometry',
            }}
            placeholder='Search location'
            onPress={(data, details) => {
              onPress(data, details)
              setPlace(data.structured_formatting)
              dispatch(setHomeDetails(data.structured_formatting));
            }}
            query={{
              key: SEARCH_PLACES_KEY,
              language: 'en',
            }}
            fetchDetails={true}
            onFail={(error) => console.error(error)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  const home = state.home;
  return { home };
};

export default connect(mapStateToProps, {})(HomeScreen);

