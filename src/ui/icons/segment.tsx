import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

function SegmentIcon(props: SvgProps) {
  return (
    <Svg width="26px" height="26px" viewBox="0 0 26 26" {...props}>
      <Path
        d="M6 4a.498.498 0 01.5.5h0v2h13v-2c0-.138.056-.263.146-.354.492-.146.617-.09.708 0 .09.09.146.216.146.354h0v5a.498.498 0 01-.854.354.498.498 0 01-.146-.354h0V7h-6.25v12h6.25v-2.5a.498.498 0 01.854-.354c.09.09.146.216.146.354h0v5a.498.498 0 01-.854.354.498.498 0 01-.146-.354h0v-2h-13v2a.498.498 0 01-.854.354.498.498 0 01-.146-.354h0v-5a.498.498 0 01.854-.354c.09.09.146.216.146.354h0V19h6.25V7H6.5v2.5a.498.498 0 01-.854.354A.498.498 0 015.5 9.5h0v-5A.498.498 0 016 4z"
        stroke="#484848"
        fill="#484848"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SegmentIcon;
