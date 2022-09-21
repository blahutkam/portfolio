/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide, waveAnimation } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Footer from "@lekoarts/gatsby-theme-cara/src/components/footer"
import { Image } from 'theme-ui'
// @ts-ignore
import ContactMDX from "@lekoarts/gatsby-theme-cara/src/sections/contact"
import background from "../../../../static/flower.jpeg"

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>  
      <Divider fill="divider" speed={0.2} offset={offset} factor={factor}
      sx={{
        backgroundImage: `url(${background})`,
        opacity: `0.7`,
        backgroundPosition: `100% 0%`,
      }}>
        <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)`,  }}>
          <div
            sx={{
              position: `relative`,
              height: `full`,
              svg: { width: `100%`, height: `50vh` },
              path: { animation: waveAnimation(`20s`) },
              
            }}
          >
            <svg id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </div>
        </div>
      
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <ContactMDX 
         sx={{
          backgroundColor: `#2d3748`,
         }}/>
      </Inner>
      <Footer />
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darker" left="10%" top="70%" />
        <Svg icon="triangle" hiddenMobile width={8} stroke color="icon_darkest" left="25%" top="5%" />
        <Svg icon="hexa" width={8} stroke color="icon_purple" left="65%" top="80%" />
        <Svg icon="triangle" hiddenMobile width={12} color="icon_darkest" left="65%" top="10%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="triangle" hiddenMobile width={12} stroke color="icon_darker" left="35%" top="50%" />
        <Svg icon="circle" hiddenMobile width={6} color="icon_yellow" left="5%" top="15%" />
      <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_green" left="70%" top="50%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={64} color="icon_darker" left="-5%" top="82%" />
      <Svg icon="tree" hiddenMobile width={64} color="icon_darker" left="92.5%" top="50%" />
      <Svg icon="box" width={12} hiddenMobile color="icon_red" left="20%" top="30%" />
    </Divider>
  </div>
)

export default Contact
