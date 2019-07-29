import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg``;
const Polygon = styled.polygon``;
const G = styled.g``;
const Path = styled.path``;

interface SvgProps {
    width: number;
    height: number;
}

// TODO: siplify this logo
const SvgComponent = (props: SvgProps) => (
    <Svg viewBox="0 0 159 256" {...props}>
        <G id="g1006" transform="translate(1.488450, 84.598349)">
            <Polygon
                fill="#009F42"
                points="0.151054438 43.2378973 79.4959014 0.895691596 157.81771 42.9305915 79.5638767 85.3092917"
            />
            <Polygon
                fill="#01C853"
                id="path992"
                points="0.151054438 43.2378973 79.4959014 0.895691596 157.81771 42.9305915 79.5638767 85.3092917"
            />
            <Polygon
                fill="#009F42"
                points="79.4959014 0.895691596 157.81771 42.9305915 79.5638767 85.3092917"
            />
            <Polygon
                fill="#007831"
                points="79.4959014 49.7316988 157.81771 42.9305915 79.5638767 85.3092917 79.4958166 49.7316988"
            />
            <Polygon
                fill="#009F42"
                points="79.4957317 49.7316988 0.151054438 43.2378973 79.4277564 85.3092917 79.4958166 49.7316988"
            />
        </G>
        <G id="g923" transform="translate(1.263172, 138.096009)">
            <Path
                d="M0.367400764,1.00010884 C28.1606343,15.7421379 57.1211708,31.1941381 79.543583,43.141332 L158.072349,1.01196311 C129.639489,43.2624999 105.955739,78.4066364 79.5432243,117.305673 C53.0980411,78.4881488 23.8766341,35.6416245 0.367400764,1.00010884 Z"
                fill="#009F42"
            />
            <Path
                fill="#01C853"
                d="M0.367400764,1.00010884 C28.1606343,15.7421379 57.1211708,31.1941381 79.543583,43.141332 L158.072349,1.01196311 C129.639489,43.2624999 105.955739,78.4066364 79.5432243,117.305673 C53.0980411,78.4881488 23.8766341,35.6416245 0.367400764,1.00010884 Z"
            />
            <Path
                d="M79.5432243,43.141332 L158.072349,1.01196311 C129.639489,43.2624999 79.5432243,117.305673 79.5432243,117.305673 L79.5432243,43.141332 Z"
                fill="#009F42"
            />
            <Path
                d="M79.5432243,43.141332 L158.072349,1.01196637 C129.639489,43.2624999 105.955739,78.4066364 79.5432243,117.305673 L79.5432243,43.141332 Z"
                fill="#009F42"
            />
        </G>
        <G id="g1033" transform="translate(1.630573, 0.000000)">
            <Polygon
                fill="#01C853"
                points="79.1606265 73.7187237 0.00922904459 115.398279 78.8169669 0 157.675223 115.650399"
            />
            <Polygon
                fill="#009F42"
                points="79.1606918 73.7187204 78.8170322 -2.93503185e-06 157.675288 115.650399"
            />
        </G>
    </Svg>
);

export default SvgComponent;