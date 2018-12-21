import React from "react";
// import ReactDOM from "react-dom"
import styled from "@emotion/styled";
import { css } from "emotion";

import Wrapper from "./Wrapper";
import Title from "./Title";
import SubTitle from "./SubTitle";
import ico from "../assets/ico/log-cabin-icon-64.png"

import {
  getTypography,
  getBorderFromProps,
  composeStyles,
  padding,
  margin
} from './advanced'

const imageUrl = ico;

css`
  @font-face {
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 400;
    src: local('Oxygen Regular'), local('Oxygen-Regular'), url(https://fonts.gstatic.com/s/oxygen/v6/qBSyz106i5ud7wkBU-FrPevvDin1pK8aKteLpeZ5c0A.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }
`;

css`
  html,body{
    font-family: 'Oxygen';
  }
`;

// css calls return a string that can be used as a class name in your markup
// In the markup below I will make some of these calls inline.
const linkClass = css`
  color: #bc128e;
  font-size: 1.25rem;
  margin: 0.5em 0;
  text-decoration: none;
`;

const wrapperLinkClass = css`
width: auto;
height: auto;
`;
const Box = styled('div') `
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkorchid;
  width: 48px;
  height: 48px;
  ${padding(4, 4, 8, 8)};
  ${margin(8, 16)};
  background-clip: content-box;
`

const Inner = styled('div') `
  background-color: palegreen;
  width: 24px
  height: 24px;
  ${padding(4)};
`

const type = getTypography // try wrapping this in css and see if it still works.
const Blockquote = styled('blockquote') `
  ${type};
  ${getBorderFromProps};
`

// const ComposeBox = styled('div')`
//   ${composeStyles(getTypography, getBorderFromProps)};
// `
// Or this works and is can be easier for some to read and reuse.
const composedStyleGetters = composeStyles(getBorderFromProps, getTypography)
const ComposeBox = styled('div')(composedStyleGetters)

// Render these styled components like normal react components.
// They will pass on all props and work
// like normal react components – except they're styled!
const App = () => (
  <Wrapper className={css({ display: 'block' })}>
    <Wrapper>
      <img
        alt="emotion"
        className={wrapperLinkClass}
        src={imageUrl}
      />
      <Title
        className={css`
        font-size: 3em;
        margin: 0.25em 0;
      `}
      >
        emotion
      </Title>
      
      <SubTitle
        className={css`
        font-size: 3em;
        margin: 0.25em 0;
      `}
      >
        Second emotion
      </SubTitle>

      <Title>
        The Next Generation of CSS-in-JS
      </Title>
      
      <SubTitle>
        Subtitle The Next Generation of CSS-in-JS
      </SubTitle>
      <a
        href="https://emotion.sh"
        className={linkClass}
      >
        emotion.sh
      </a>
      <a
        href="https://github.com/emotion-js/emotion"
        className={linkClass}
      >
        github
      </a>
    </Wrapper>
    <div className={css`width: 100%; display: grid;`}>
      <Blockquote border color="dark"
        cite="https://en.wikipedia.org/wiki/Web_colors#Hex_triplet">
        Byte 1: red value (color type red)
        Byte 2: green value (color type green)
        Byte 3: blue value (color type blue)
        For example, consider the color where the red/green/blue values are
        decimal numbers: red=36, green=104, blue=160 (a grayish-blue color). The
        decimal numbers 36, 104 and 160 are equivalent to the hexadecimal
        numbers 24, 68 and A0 respectively. The hex triplet is obtained by
        concatenating the 6 hexadecimal digits together, 2468A0 in this example.

      </Blockquote>
      <Box>
        <Inner />
      </Box>
      <Box>
        <Inner />
      </Box>
      <Box>
        <Inner />
      </Box>
      <Box>
        <Inner />
      </Box>
      <ComposeBox border color="MidnightBlue">This is some text in a composed
        box.</ComposeBox>
    </div>
  </Wrapper>
);

export default () => <App />
// ReactDOM.render(<App />, document.getElementById('root'));