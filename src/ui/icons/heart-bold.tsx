import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

function IconHeartBold(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M3.984 11.61l5.134 6.9c1.477 1.986 4.287 1.986 5.764 0l5.134-6.9c1.312-1.763 1.312-4.268 0-6.03-1.92-2.582-6.359-1.815-8.016.969-1.657-2.784-6.096-3.55-8.016-.97-1.312 1.763-1.312 4.268 0 6.032z"
        fill="red"
        fillOpacity={0.15}
        stroke="red"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default IconHeartBold;
