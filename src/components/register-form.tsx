import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Button } from 'tamagui';
import * as z from 'zod';

import { ActivityIndicator, ControlledInput, Text, View } from '@/ui';

const schema = z.object({
  name: z.string().optional(),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

export type RegisterFormProps = {
  onSubmit?: SubmitHandler<FormType>;
  loading: boolean;
};

export const RegisterForm = ({
  onSubmit = () => {},
  loading,
}: RegisterFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  return (
    <View className="justify-center gap-4 px-[30px]">
      <Text testID="form-title" className="pb-6 text-center text-3xl font-bold">
        Đăng ký
      </Text>

      <ControlledInput
        testID="name-input"
        control={control}
        name="name"
        placeholder="Họ và tên"
      />

      <ControlledInput
        testID="email-input"
        control={control}
        name="email"
        placeholder="Email"
      />
      <ControlledInput
        testID="password-input"
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      {loading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <Button fontWeight="bold" themeInverse onPress={handleSubmit(onSubmit)}>
          Đăng ký
        </Button>
      )}
    </View>
  );
};
