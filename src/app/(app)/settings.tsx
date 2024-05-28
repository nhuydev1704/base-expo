/* eslint-disable react/react-in-jsx-scope */
import { Env } from '@env';
import { Link } from 'expo-router';
import { Alert } from 'react-native';
import { Button } from 'tamagui';

import { Item } from '@/components/settings/item';
import { ItemsContainer } from '@/components/settings/items-container';
import { useAuth } from '@/core';
import { getToken } from '@/core/auth/utils';
import { FocusAwareStatusBar, ScrollView, Text, View } from '@/ui';

// eslint-disable-next-line max-lines-per-function
export default function Settings() {
  const signOut = useAuth.use.signOut();
  const token = getToken();
  // const { colorScheme } = useColorScheme();
  // const iconColor =
  //   colorScheme === 'dark' ? colors.neutral[400] : colors.neutral[500];
  return (
    <>
      <FocusAwareStatusBar />

      <ScrollView>
        <View className="flex-1 px-4 pt-16 ">
          <Text className="text-xl font-bold">Cấu hình</Text>
          {/* <ItemsContainer title="settings.generale">
            <LanguageItem />
            <ThemeItem />
          </ItemsContainer> */}

          <ItemsContainer title="settings.about">
            {token && <Item title="Họ tên" value={token.user.name} />}
            {token && <Item title="Email" value={token.user.email} />}
            <Item text="settings.app_name" value={Env.NAME} />
            <Item text="settings.version" value={Env.VERSION} />
          </ItemsContainer>

          {/* <ItemsContainer title="settings.support_us">
            <Item
              text="settings.share"
              icon={<Share color={iconColor} />}
              onPress={() => {}}
            />
            <Item
              text="settings.rate"
              icon={<Rate color={iconColor} />}
              onPress={() => {}}
            />
            <Item
              text="settings.support"
              icon={<Support color={iconColor} />}
              onPress={() => {}}
            />
          </ItemsContainer>

          <ItemsContainer title="settings.links">
            <Item text="settings.privacy" onPress={() => {}} />
            <Item text="settings.terms" onPress={() => {}} />
            <Item
              text="settings.github"
              icon={<Github color={iconColor} />}
              onPress={() => {}}
            />
            <Item
              text="settings.website"
              icon={<Website color={iconColor} />}
              onPress={() => {}}
            />
          </ItemsContainer> */}

          <View className="my-4">
            {token ? (
              <ItemsContainer>
                <Item
                  title="Đăng xuất"
                  onPress={() => {
                    Alert.alert(
                      'Đăng xuất',
                      'Bạn chắc chắn muốn đăng xuất tài khoản?',
                      [
                        {
                          text: 'Huỷ',
                          style: 'cancel',
                        },
                        {
                          text: 'Đăng xuất',
                          onPress: signOut,
                        },
                      ]
                    );
                  }}
                />
              </ItemsContainer>
            ) : (
              <Link href="/login" asChild>
                <Button marginTop={10} fontWeight="bold">
                  Đăng nhập
                </Button>
              </Link>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
