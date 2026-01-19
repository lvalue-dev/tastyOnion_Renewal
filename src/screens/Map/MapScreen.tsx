import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  NaverMapMarkerOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <NaverMapView
        style={StyleSheet.absoluteFill}
        initialCamera={{
          latitude: 37.5666805,
          longitude: 126.9784147,
          zoom: 15,
        }}
        isShowLocationButton
        isShowZoomControls
      >
        <NaverMapMarkerOverlay
          latitude={37.5666805}
          longitude={126.9784147}
          caption={{ text: 'Seoul City Hall' }}
        />
      </NaverMapView>
    </View>
  );
}
