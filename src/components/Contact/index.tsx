import React from 'react'
import { Input, Box, Textarea, Flex } from 'rebass'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { navigate } from 'gatsby'

import { Container } from '../HelperComponents'

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
  background-color: ${colors.backgroundDark};
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
    outline: 1px solid ${colors.primary};
    box-shadow: none;
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
    outline: 1px solid ${colors.primary};
    box-shadow: none;
  }
`
const Form = styled.form`
  width: 100%;
  padding: 10px 0 0 0;
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <ContactFormContainer>
        <Container>
          <form
            style={{
              width: '100%',
              paddingTop: '10px',
            }}
            name="contactForm"
            method="post"
            action="/submission-success/"
            netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* <Honeypot>
              Don’t fill this out if you're human: <input name="bot-field" />
            </Honeypot> */}
            <input hidden className="hidden" name="bot-field" />
            <div>
              <StyledInput
                type="text"
                required={true}
                name="sender_name"
                placeholder="your name"
                onChange={this.handleChange}
              />
            </div>

            <StyledInput
              type="email"
              required={true}
              placeholder="you@adress.com"
              name="sender_email"
              onChange={this.handleChange}
            />

            <StyledTextArea
              placeholder="your message"
              rows={4}
              type="plaintext"
              name="sender_message"
              onChange={this.handleChange}
            />

            <Box>
              <Button type="submit" value="send" />
            </Box>
          </form>
        </Container>
      </ContactFormContainer>
    )
  }
}
