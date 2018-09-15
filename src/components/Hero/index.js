import React from 'react'
import styled from 'styled-components'
import Typed from 'react-typed'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { Flex } from 'rebass'
import { Container } from '../HelperComponents'

const HeroOutsideContainer = styled.div`
  overflow: hidden;
  position: relative;
  max-height: 100vw;
  height: 100vh;
`
const HeroInsideContainer = styled(Flex)`
  height: 100%;
  width: 100%;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`

const AnimatedClaim = styled.span`
  display: block;
`
const ClaimContainer = styled.p`
  font-size: 2.2em;
  color: white;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;
  z-index: 1;
`
const Hero = ({ typeStrings, heroImage }) => (
  <HeroOutsideContainer>
    <HeroInsideContainer>
      <Container flexDirection={'column'}>
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
      </Container>
    </HeroInsideContainer>
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
  </HeroOutsideContainer>
)

Hero.propTypes = {
  typeStrings: PropTypes.arrayOf(PropTypes.string),
  heroImage: PropTypes.object,
}
export default Hero
