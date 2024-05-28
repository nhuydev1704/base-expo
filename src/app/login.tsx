import { useRouter } from 'expo-router';
import React from 'react';
import { showMessage } from 'react-native-flash-message';
import { Button, Text, View } from 'tamagui';

import { client } from '@/api';
import BackButton from '@/components/back-button';
import type { LoginFormProps } from '@/components/login-form';
import { LoginForm } from '@/components/login-form';
import { RegisterForm } from '@/components/register-form';
import { useAuth } from '@/core';
import { useSoftKeyboardEffect } from '@/core/keyboard';
import { FocusAwareStatusBar } from '@/ui';

// eslint-disable-next-line max-lines-per-function
export default function Login() {
  const [type, setType] = React.useState('login');
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  const signIn = useAuth.use.signIn();
  useSoftKeyboardEffect();

  const onSubmit: LoginFormProps['onSubmit'] = (data) => {
    console.log(data);

    setLoading(true);
    client
      .post('auth/login', data)
      .then((res) => {
        showMessage({
          message: 'Đăng nhập thành công',
          type: 'success',
        });
        signIn({
          access: 'access-token',
          refresh: 'refresh-token',
          user: res.data.user,
        });
        router.push('/');
      })
      .finally(() => setLoading(false));
  };

  const onSubmitRegister: LoginFormProps['onSubmit'] = (data) => {
    setLoading(true);
    client
      .post('auth/register', data)
      .then((res) => {
        showMessage({
          message: 'Đăng nhập ký',
          type: 'success',
        });
        signIn({
          access: 'access-token',
          refresh: 'refresh-token',
          user: res.data.user,
        });
        router.push('/');
      })
      .finally(() => setLoading(false));
  };

  return (
    <View flex={1} justifyContent="center" gap={10}>
      <FocusAwareStatusBar />
      {type === 'login' ? (
        <LoginForm loading={loading} onSubmit={onSubmit} />
      ) : (
        <RegisterForm loading={loading} onSubmit={onSubmitRegister} />
      )}

      {type === 'login' ? (
        <View flexDirection="row" justifyContent="center" alignItems="center">
          <Text>Chưa có tài khoản?</Text>
          <Button
            onPress={() => setType('register')}
            variant="outlined"
            fontWeight="bold"
            chromeless
          >
            Đăng ký ngay
          </Button>
        </View>
      ) : (
        <View flexDirection="row" justifyContent="center" alignItems="center">
          <BackButton onPress={() => setType('login')} title="Quay lại" />
        </View>
      )}
    </View>
  );
}
