import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  NaverMapView,
  NaverMapMarkerOverlay,
} from '@mj-studio/react-native-naver-map';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Naver Map</Text>

      <NaverMapView
        style={styles.map}
        initialRegion={{
          latitude: 37.5665,
          longitude: 126.978,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        // 이 props는 버전에 따라 이름이 다를 수 있어서,
        // 일단 지도부터 뜨게 하고(키 세팅 전이라도),
        // 다음 단계에서 위치/버튼 설정을 확정하자.
      >
        <NaverMapMarkerOverlay
          latitude={37.5665}
          longitude={126.978}
          caption={{ text: 'Seoul City Hall' }}
        />
      </NaverMapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { padding: 12, fontSize: 16 },
  map: { flex: 1 },
});
