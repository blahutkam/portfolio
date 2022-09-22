/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <div sx={{display: ['none', 'none', 'none', 'none', 'block']}}>
          {/* <Svg icon="bike" hiddenMobile width={32} color="DeepSkyBlue" left="65%" top="80%" /> */}
        </div>
      </UpDown>
      <UpDownWide>
        <div sx={{display: ['none', 'none', 'none', 'none', 'block']}}>
          {/* <Svg icon="boot" hiddenMobile width={16} stroke color="#483D8B" left="5%" top="2%" /> */}
        </div>
      </UpDownWide>
      <div sx={{display: ['none', 'none', 'none', 'none', 'block']}}>
        {/* <Svg icon="bee" hiddenMobile width={12}  color="indianRed" left="87%" top="50%" /> */}
      </div>

      <Svg icon="tree" hiddenMobile width={10} color="icon_darker" left="60%" top="5%" />
      <Svg icon="tree" hiddenMobile width={24} color="icon_darkest" left="-3%" top="40%" />
      <div sx={{display: ['none', 'none', 'none', 'none', 'block']}}>
        <Svg icon="tent" hiddenMobile width={32} stroke color="icon_darker" left="5%" top="80%" />
      </div>
      <div sx={{display: ['none', 'none', 'none', 'none', 'block']}}>
        <Svg icon="mountain" hiddenMobile width={64} color="icon_darker" left="85%" top="5%" /> 
      </div>
      <Svg icon="trees"  hiddenMobile width={20} color="icon_darkest" left="20%" top="10%" />
      <div sx={{display: ['none', 'none', 'none', 'none', 'block']}}>
        {/* <Svg icon="trees" hiddenMobile width={24} hiddenMobile color="plum" left="45%" top="10%" /> */}
      </div>

      <Svg icon="trees" hiddenMobile width={64} color="icon_darker" left="90%" top="80%" />
       <Svg icon="trees"  width={56} color="icon_darkest" left="42%" top="50%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>

      <Inner >
        <h1 
          sx={{
            color: `DarkSeaGreen`,
            fontSize: 3,
            textAlign: `right`,
            lineHeight: 1.2,
          }}>
          Martin Blahutka
          </h1>
          <hr sx={{display: ['none', 'none', 'none', 'none', 'block']}} width="100%" color="#2d3748" size="1px" align="right" />
        <Intro/>
      </Inner>
    </Content>
  </div>
)

export default Hero