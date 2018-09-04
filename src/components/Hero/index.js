import React from 'react'
import styled from 'styled-components'
import Typed from 'react-typed'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const HeroContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 100vh;
`

const AnimatedClaim = styled.span`
  display: block;
`
const ClaimContainer = styled.p`
  font-size: 2.2em;
  text-align: center;
  color: green;
  font-family: rubik;
  font-weight: 400;
  line-height: 1.2;
  z-index: 99;
`
const Hero = ({ typeStrings, heroImage }) =>
  console.log(heroImage) || (
    <HeroContainer>
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
