import React from 'react'
import { GoMarkGithub } from 'react-icons/go'
import getLocalStorage from '../services/localstorage'
import {
  Footer,
  SocialList,
  SocialItem,
  SocialItemContent
} from '../styles/components/Footer.style'

const userLoggedIn = getLocalStorage()

export default function MainFooter(): JSX.Element {
  if (userLoggedIn) {
    const footer = (
      <Footer>
        <SocialList>
          <SocialItem>
            <SocialItemContent href="https://github.com/PedroPaiao/cristicism-app">
              <GoMarkGithub /> Link para o GitHub do projeto
            </SocialItemContent>
          </SocialItem>
        </SocialList>
        <SocialList>
          <SocialItem>
            <SocialItemContent href="https://github.com/KaiqueCipola">
              <GoMarkGithub /> KaiqueCipola
            </SocialItemContent>
          </SocialItem>
          <SocialItem>
            <SocialItemContent href="https://github.com/vieiramanda">
              <GoMarkGithub /> vieiramanda
            </SocialItemContent>
          </SocialItem>
          <SocialItem>
            <SocialItemContent href="https://github.com/PedroPaiao">
              <GoMarkGithub /> PedroPaiao
            </SocialItemContent>
          </SocialItem>
        </SocialList>
        <SocialList>
          <span>Copyrigth</span> &copy; 2021, Criticism-App, todos os direitos
          reservados
        </SocialList>
      </Footer>
    )
    return footer
  }
  return null
}
