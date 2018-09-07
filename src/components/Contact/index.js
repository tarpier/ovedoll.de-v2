import React from 'react'
import { Input, Box, Textarea, Flex } from 'rebass'
import styled from 'styled-components'
import colors from '../../utils/colors'

import { Container } from '../HelperComponents'

const Honeypot = styled.label`
  display: none;
  visibility: hidden;
`

const Button = styled.input`
  font-weight: 700;
  background-color: transparent;
  border: none;
  color: ${colors.fontColorLight};
  font-size: 1rem;
  display: block;
  padding: 15px 25px;
  margin: 15px auto;
  transition: color 0.25s;

  &:hover {
    color: ${colors.primary};
  }
`

const ContactFormContainer = styled(Box)`
  background-color: ${colors.tertiary};
`

const StyledInput = styled(Input)`
  width: 100%;
  padding: 15px 10px;
  margin-top: 10px;
  margin-bottom: 15px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  border: none;
  color: ${colors.fontColorLight};
  border-bottom: 1px solid ${colors.inactive};
  transition: border-color 0.3s;
  box-shadow: none;
  border-radius: 0;

  &::placeholder {
    color: ${colors.inactive};
  }

  &:focus {
    border-bottom: 1px solid ${colors.primary};
    outline: 1px solid ${colors.tertiary};
  }
`

const StyledTextArea = styled(Textarea)`
  resize: vertical;
  overflow: auto;
  width: 100%;
  padding: 15px 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  border: none;
  color: ${colors.fontColorLight};
  border-bottom: 1px solid ${colors.inactive};
  transition: border-color 0.3s;
  font-family: inherit;
  box-shadow: none;
  border-radius: 0;
  min-height: 4em;

  &::placeholder {
    color: ${colors.inactive};
    font-family: inherit;
  }

  &:focus {
    border-bottom: 1px solid ${colors.primary};
    outline: 1px solid ${colors.tertiary};
  }
`
const Form = styled.form`
  width: 100%;
  padding: 10px 0 0 0;
`

const Contact = () => (
  <ContactFormContainer>
    <Container>
      <Form
        name="contact"
        method="post"
        netlify="true"
        netlify-honeypot="bot-field"
      >
        <Honeypot>
          Don’t fill this out if you're human: <input name="bot-field" />
        </Honeypot>
        <div>
          <StyledInput
            type="text"
            required={true}
            name="sender_name"
            placeholder="your name"
          />
        </div>

        <StyledInput
          type="email"
          required={true}
          placeholder="you@adress.com"
          name="sender_email"
        />

        <StyledTextArea placeholder="your message" rows={4} type="plaintext" />

        <Box>
          <Button type="submit" value="send" />
        </Box>
      </Form>
    </Container>
  </ContactFormContainer>
)

export default Contact
