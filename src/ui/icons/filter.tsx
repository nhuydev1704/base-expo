import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Defs, Image, Path, Pattern, Use } from 'react-native-svg';

export function FilterIcon({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width={19} height={18} viewBox="0 0 19 18" fill="none" {...props}>
      <Path
        fill="url(#pattern0_1839_85)"
        d="M0.497559 0.506836H18.497559V17.506836H0.497559z"
      />
      <Defs>
        <Pattern
          id="pattern0_1839_85"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_1839_85"
            transform="matrix(.05556 0 0 .05882 -.028 0)"
          />
        </Pattern>
        <Image
          id="image0_1839_85"
          width={19}
          height={17}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAYAAAA/mJfHAAABj0lEQVR4nLWSvYrCUBCFz5WAVooIgqAmYqFPEMHKwk70AUTBQglYx8LnsBKtxFqwsIo/AQtBrBRfwMYiYJVpVJgtZLOrLrvq7g5cmLl3+Jhz5wgiYvxRSLcXzB9sIcRTMNfnwjAMZDIZyLKMWq0Gy7Jeg+12O2iaBq/Xi2q1iul0inq9/hTMkWmaJo7HI1qtFmRZhhAC3W4XwEW6pmkYjUZ3gGQyiclkcg0Lh8NgZgyHQxQKBSyXSwSDQQCXvyuXy0gkEnewSCTi5OJ9m6fTCZVKBaZpAgA8Hg/a7Tay2ezDMsWtNWazGSzLgqqqUBTlYdCXsN+E6+eWf4TZtg1d15FKpZDP57FYLF6DMTMajQYGgwFUVcXhcECpVMJ+v780EBETERuGwdFo9O7E43Gez+dMRGzbNgcCAdZ1nYmIV6sV+/1+7nQ6TETs+CwWi6FYLOJ8Pt9NFAqFnNzn82Gz2YCIsF6vr96f3mav10Oz2XTqdDqNfr8Pt9v9mjW22y3G4zEURUEul4MkSa9N9l28AT4DuXo4obC1AAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  );
}
