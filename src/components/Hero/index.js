import React from 'react'
import styled from 'styled-components'
import Typed from 'react-typed'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { Box, Flex } from 'rebass'

const HeroContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 100vh;
`

const AnimatedClaim = styled.span`
  display: block;
`
const ClaimContainer = styled.p`
  z-index: 1;
  font-size: 2.2em;
  color: white;
  font-weight: 400;
  line-height: 1.2;
  position: relative;
  top: 40vh;
  text-align: left;
`
const Hero = ({ typeStrings, heroImage }) => (
  <HeroContainer>
    <Flex alignItems="center" justifyContent="center" flexDirection="column">
      <ClaimContainer>
        Hi, my name is Ove and I build
        <AnimatedClaim>
          <Typed
            strings={typeStrings}
            typeSpeed={60}
            startDelay={30}
            loop
            loopCount={Infinity}
            backDelay={450}
            backSpeed={60}
          />
        </AnimatedClaim>
      </ClaimContainer>
    </Flex>
    <Img
      alt=""
      sizes={heroImage}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
    />
  </HeroContainer>
)

Hero.propTypes = {
  typeStrings: PropTypes.arrayOf(PropTypes.string),
  heroImage: PropTypes.object,
}
export default Hero
