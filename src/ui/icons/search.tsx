import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Defs, Image, Path, Pattern, Use } from 'react-native-svg';

export function SearchIcon({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width={18} height={19} viewBox="0 0 18 19" fill="none" {...props}>
      <Path
        fill="url(#pattern0_1839_87)"
        d="M0.497559 0.506836H17.497559V18.506836H0.497559z"
      />
      <Defs>
        <Pattern
          id="pattern0_1839_87"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_1839_87"
            transform="matrix(.01563 0 0 .01476 0 -.002)"
          />
        </Pattern>
        <Image
          id="image0_1839_87"
          width={64}
          height={68}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}
