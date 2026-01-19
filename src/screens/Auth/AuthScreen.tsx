import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {
  signInWithEmail,
  signUpWithEmail,
  signOut,
} from '../../features/auth/emailAuth';
import { useAuthSession } from '../../features/auth/useAuthSession';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  input: { borderWidth: 1, marginTop: 8, padding: 8 },
  msg: { marginTop: 8 },
});

export default function AuthScreen() {
  const { isSignedIn, session, loading } = useAuthSession();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <View style={styles.container}>
      <Text>
        {loading
          ? '세션 확인 중...'
          : isSignedIn
          ? `로그인됨: ${session?.user.email}`
          : '로그아웃 상태'}
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="email"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        value={pw}
        onChangeText={setPw}
        placeholder="password"
        secureTextEntry
        style={styles.input}
      />

      <Button
        title="회원가입"
        onPress={async () => {
          try {
            setMsg('');
            await signUpWithEmail(email.trim(), pw);
            setMsg('회원가입 요청 완료 (메일 확인 필요할 수 있음)');
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

      {!!msg && <Text style={styles.msg}>{msg}</Text>}
    </View>
  );
}
