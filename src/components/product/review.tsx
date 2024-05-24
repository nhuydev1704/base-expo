import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import React from 'react';
import RenderHTML from 'react-native-render-html';
import { Accordion, Square, Text, View } from 'tamagui';

import type { Review } from '@/api/cars/car.detail.types';
import ArrowDown from '@/ui/icons/arrow-down';

// eslint-disable-next-line max-lines-per-function
const ReviewCar = ({
  reviews,
  scrollViewRef,
}: {
  reviews: Review[];
  scrollViewRef: any;
}) => {
  const [value, setValue] = React.useState('');

  return (
    <View marginTop={10}>
      <Accordion
        value={value}
        onValueChange={(_value) => {
          setValue(_value);
        }}
        type="single"
        collapsible
      >
        {reviews.map((review) => (
          <Accordion.Item key={review.category} value={review.category}>
            <Accordion.Trigger>
              {({ open }: { open: boolean }) => (
                <View
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={14} fontWeight="600" color="#666">
                    {review.category}
                  </Text>
                  <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                    <ArrowDown />
                  </Square>
                </View>
              )}
            </Accordion.Trigger>
            {review.category === value && (
              <Accordion.Content exitStyle={{ opacity: 0 }}>
                <View
                  onLayout={() => {
                    setTimeout(() => {
                      if (scrollViewRef.current) {
                        // Scroll to the position of the opened accordion item
                        scrollViewRef.current.scrollTo({
                          // y: event.nativeEvent.layout.height,
                          y: 500,
                          animated: true,
                        });
                      }
                    }, 10);
                  }}
                >
                  <RenderHTML
                    ignoredDomTags={['colgroup']}
                    contentWidth={WINDOW_WIDTH}
                    // contentWidth={width}
                    source={{
                      html: review.content,
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

export default React.memo(ReviewCar);
