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
        {/* <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />  */}
        {/* <Svg icon="bag" hiddenMobile width={40} stroke color="icon_orange" left="5%" top="20%" />  */}
        {/* <Svg icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" /> */}
        <Svg icon="bee" hiddenMobile width={50}  color="khaki" left="90%" top="40%" />
        {/* <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" /> */}
        {/* <Svg icon="tree" hiddenMobile width={20} stroke color="icon_green" left="60%" top="15%" /> */}
      </UpDown>
      <UpDownWide>
        <Svg icon="bike" hiddenMobile width={40} color="DeepSkyBlue" left="65%" top="80%" />
        {/* <Svg icon="trees" hiddenMobile width={20} color="icon_darker" left="80%" top="10%" /> */}
        {/* <Svg icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" /> */}
        {/* <Svg icon="tree" hiddenMobile width={16} stroke color="icon_darkest" left="30%" top="65%" />  */}
        {/* <Svg icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" /> */}
            <Svg icon="boot" hiddenMobile width={16} stroke color="MediumPurple" left="5%" top="15%" />
        {/* <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" /> */}
        {/* <Svg icon="tree" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" /> */}
      </UpDownWide>
      <Svg icon="trees" hiddenMobile width={32} color="icon_darker" left="5%" top="70%" />
        <Svg icon="tree" width={16} color="icon_darker" left="35%" top="20%" />
         <Svg icon="tree" width={24} color="icon_darkest" left="10%" top="40%" />
          <Svg icon="tree" width={16} color="icon_darkest" left="60%" top="25%" />
           <Svg icon="tree" width={32} color="icon_darker" left="-3%" top="100%" />
      {/* <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" /> */}
      {/* <Svg icon="fire" hiddenMobile width={12}  stroke color="icon_darker" left="55%" top="65%" /> */}
      {/* <Svg icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" /> */}
      <Svg icon="tent" hiddenMobile width={32} stroke color="Peru" left="25%" top="80%" />
      {/* <Svg icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" /> */}
        <Svg icon="mountain" width={48} color="icon_darker" left="70%" top="5%" /> 
      {/* <Svg icon="circle" width={64} color="icon_red" left="95%" top="5%" /> */}
      {/* <Svg icon="fire" width={64} color="icon_orange" left="85%" top="5%" /> */}
      {/* <Svg icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" /> */}
      {/* <Svg icon="tree" hiddenMobile width={32} stroke color="icon_green" left="15%" top="90%" /> */}
      <Svg icon="trees"  hiddenMobile width={12} color="icon_darkest" left="20%" top="10%" />
      <Svg icon="trees" width={20} hiddenMobile color="DarkSeaGreen" left="50%" top="10%" />
      {/* <Svg icon="tree" width={16} hiddenMobile stroke color="icon_darker" left="10%" top="50%" /> */}
      <Svg icon="trees" width={64} color="icon_darker" left="90%" top="80%" />
       <Svg icon="trees" width={56} color="icon_darkest" left="40%" top="50%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>

      <Inner>
        <h1 
          sx={{
            fontWeight: `strong`,
            fontSize: 3,
            top: 0,
            right: `5%`,
            textAlign: `right`,
            lineHeight: 1.2
          }}>
          Martin Blahutka
          </h1>
        <Intro/>
      </Inner>
    </Content>
  </div>
)

export default Hero