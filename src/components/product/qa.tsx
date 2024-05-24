import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import React from 'react';
import RenderHTML from 'react-native-render-html';
import { Accordion, Square, Text, View } from 'tamagui';

import type { Faq } from '@/api/cars/car.detail.types';
import ArrowDown from '@/ui/icons/arrow-down';

const QA = ({ faqs }: { faqs: Faq[] }) => {
  const [value, setValue] = React.useState<any>('');

  return (
    <View>
      <Text
        paddingHorizontal={10}
        fontSize={18}
        marginTop={20}
        marginBottom={10}
        fontWeight="bold"
      >
        Câu hỏi thường gặp
      </Text>
      <Accordion
        value={value}
        onValueChange={(_value) => {
          setValue(_value);
        }}
        type="single"
        collapsible
      >
        {faqs.map((faq) => (
          <Accordion.Item key={faq.id} value={faq.id as any}>
            <Accordion.Trigger>
              {({ open }: { open: boolean }) => (
                <View
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={14} color="#666" fontWeight="600">
                    {faq.content}
                  </Text>
                  <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                    <ArrowDown />
                  </Square>
                </View>
              )}
            </Accordion.Trigger>
            {faq.id === value && (
              <Accordion.Content exitStyle={{ opacity: 0 }}>
                <View>
                  <RenderHTML
                    ignoredDomTags={['colgroup']}
                    contentWidth={WINDOW_WIDTH}
                    // contentWidth={width}
                    source={{
                      html: faq.answers[0].content,
                    }}
                    tagsStyles={{
                      ul: {
                        listStyleType: 'none',
                        margin: 0,
                        padding: 0,
                      },
                      h4: {
                        marginBottom: 0,
                      },
                    }}
                  />
                </View>
              </Accordion.Content>
            )}
          </Accordion.Item>
        ))}
      </Accordion>
    </View>
  );
};

export default React.memo(QA);
