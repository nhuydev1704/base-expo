import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import React from 'react';
import RenderHTML from 'react-native-render-html';
import { Separator, Tabs, Text, View } from 'tamagui';

const Compare = ({ pros, cons }: { pros: string; cons: string }) => {
  const [tab, setTab] = React.useState('tab1');

  return (
    pros &&
    cons && (
      <Tabs
        marginVertical={20}
        defaultValue="tab1"
        orientation="horizontal"
        flexDirection="column"
        borderRadius="$4"
        borderWidth="$0.25"
        overflow="hidden"
        borderColor="$borderColor"
        onValueChange={(value) => setTab(value)}
      >
        <Tabs.List
          separator={<Separator vertical />}
          disablePassBorderRadius="bottom"
          aria-label="Manage your account"
        >
          <Tabs.Tab backgroundColor="#005Aff0D" flex={1} value="tab1">
            <Text color="#005AFF">Ưu điểm</Text>
          </Tabs.Tab>
          <Tabs.Tab backgroundColor="#FA6E110D" flex={1} value="tab2">
            <Text color="#FA6E11">Nhược điểm</Text>
          </Tabs.Tab>
        </Tabs.List>
        <Separator />

        <View
          paddingHorizontal={10}
          backgroundColor={tab === 'tab1' ? '#005Aff0D' : '#FA6E110D'}
        >
          <RenderHTML
            ignoredDomTags={['colgroup']}
            contentWidth={WINDOW_WIDTH - 100}
            source={{
              html: tab === 'tab1' ? pros : cons,
            }}
            tagsStyles={{
              ul: {
                margin: 0,
                padding: '0 10px',
              },
              li: {
                marginLeft: 10,
                marginBottom: 10,
              },
            }}
          />
        </View>
        {/* 
      <TabsContent padding={10} value="tab2">
        <View>
          <RenderHTML
            ignoredDomTags={['colgroup']}
            contentWidth={WINDOW_WIDTH - 100}
            source={{
              html: cons,
            }}
          />
        </View>
      </TabsContent> */}
      </Tabs>
    )
  );
};

export default React.memo(Compare);
