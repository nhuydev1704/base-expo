import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Defs, G, Mask, Path, Use } from 'react-native-svg';

function GearIcon(props: SvgProps) {
  return (
    <Svg width="25px" height="25px" viewBox="0 0 25 25" {...props}>
      <Defs>
        <Path
          id="a"
          d="M0.00167597765 0.0251117318L19.9938827 0.0251117318 19.9938827 15.8659497 0.00167597765 15.8659497z"
        />
      </Defs>
      <G stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <G transform="translate(2.5 3.5)">
          <Mask id="b" fill="#fff">
            <Use xlinkHref="#a" />
          </Mask>
          <Path
            d="M13.5 10.5c2.757 0 5-2.243 5-4.999A5.006 5.006 0 0013.5.5c-2.757 0-5 2.243-5 5.001a5.005 5.005 0 005 4.999zm0-8.654a3.659 3.659 0 013.654 3.655 3.658 3.658 0 01-3.655 3.653A3.657 3.657 0 019.846 5.5 3.658 3.658 0 0113.5 1.846z"
            fill="#484848"
            mask="url(#b)"
          />
        </G>
        <Path
          d="M19 4H0c.17 0 0-.224 0-1 0 .224.17 0 0 0h19c-.17 0 0 .224 0 0 0 .776-.17 1 0 1z"
          transform="translate(3 18)"
          fillRule="nonzero"
        />
        <Path
          d="M20.255 22H3.745c-.41 0-.745-.305-.745-.679 0-.374.334-.678.745-.678h16.51c.41 0 .745.303.745.678 0 .376-.332.679-.745.679z"
          fill="#484848"
        />
        <Path
          fill="#484848"
          transform="rotate(18 12.905 17.024)"
          d="M12.1545085 13.0244717H13.6545085V21.0244717H12.1545085z"
        />
      </G>
    </Svg>
  );
}

export default GearIcon;
