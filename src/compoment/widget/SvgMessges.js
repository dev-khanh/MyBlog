/* eslint-disable prettier/prettier */
import React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgMessges = ({ width, height, fill, stroke, viewBox, style }) => {
    return (
        <Svg width={width} height={height} viewBox={viewBox} style={style}>
            <Path
                stroke={stroke}
                fill={fill}
                d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"
            />
            <Path
                fill="none"
                d="M0 0h24v24H0z"
            />
        </Svg>
    );
};
SvgMessges.defaultProps = {
    width: 24,
    height: 24,
    stroke: '#fff',
    fill: '#f4ff81',
    viewBox: '0 0 24 24',
};

export default SvgMessges;
