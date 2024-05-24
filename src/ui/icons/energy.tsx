import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { G, Path } from 'react-native-svg';

function EnergyIcon(props: SvgProps) {
  return (
    <Svg width="25px" height="25px" viewBox="0 0 25 25" {...props}>
      <G stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <Path d="M0 0.5H25V25.5H0z" />
        <Path
          d="M15.333 3.115H8.625a.719.719 0 00-.682.491l-2.875 8.625-.024.093a.719.719 0 00.706.853h2.912L6.97 19.951c-.176.707.69 1.197 1.206.682L18.716 10.09l.065-.074a.719.719 0 00-.573-1.152h-4.114L16.001 4.1a.719.719 0 00-.668-.986zm-1.062 1.437l-1.905 4.764-.03.096a.719.719 0 00.697.89h3.439l-7.479 7.479 1.288-5.148.016-.09a.719.719 0 00-.714-.803H6.747l2.396-7.188h5.128z"
          fill="#484848"
          transform="translate(1 1)"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

export default EnergyIcon;
