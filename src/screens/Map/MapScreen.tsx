import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import {
  signInWithEmail,
  signUpWithEmail,
  signOut,
} from '../../features/auth/emailAuth';
import { useAuthSession } from '../../features/auth/useAuthSession';
import {
  NaverMapMarkerOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { padding: 12 },
  mapWrap: { flex: 1 },
});

export default function MapScreen() {
  const { isSignedIn, session } = useAuthSession();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>
          {isSignedIn ? `로그인됨: ${session?.user.email}` : '로그아웃 상태'}
        </Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="email"
          autoCapitalize="none"
          style={{ borderWidth: 1, marginTop: 8, padding: 8 }}
        />
        <TextInput
          value={pw}
          onChangeText={setPw}
          placeholder="password"
          secureTextEntry
          style={{ borderWidth: 1, marginTop: 8, padding: 8 }}
        />

        <Button
          title="회원가입"
          onPress={async () => {
            try {
              setMsg('');
              await signUpWithEmail(email.trim(), pw);
              setMsg('회원가입 요청 완료');
            } catch (e: any) {
              setMsg(e?.message ?? 'error');
            }
          }}
        />
        <Button
          title="로그인"
          onPress={async () => {
            try {
              setMsg('');
              await signInWithEmail(email.trim(), pw);
              setMsg('로그인 성공');
            } catch (e: any) {
              setMsg(e?.message ?? 'error');
            }
          }}
        />
        <Button
          title="로그아웃"
          onPress={async () => {
            try {
              setMsg('');
              await signOut();
              setMsg('로그아웃');
            } catch (e: any) {
              setMsg(e?.message ?? 'error');
            }
          }}
        />

        {!!msg && <Text style={{ marginTop: 8 }}>{msg}</Text>}
      </View>

      <View style={styles.mapWrap}>
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
            latitude={37.5665}
            longitude={126.978}
            caption={{ text: 'Seoul City Hall' }}
          />
        </NaverMapView>
      </View>
    </View>
  );
}
