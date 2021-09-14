import React from 'react'
import { GoMarkGithub } from 'react-icons/go'
import {
  Footer,
  SocialList,
  SocialItem,
  SocialItemContent
} from '../styles/components/Footer.style'

export default function MainFooter(): JSX.Element {
  return (
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
        <SocialItem>
          <SocialItemContent href="https://github.com/MateusZamecki">
            <GoMarkGithub /> MatheusZamecki
          </SocialItemContent>
        </SocialItem>
        <SocialItem>
          <SocialItemContent href="https://github.com/altair-roberto">
            <GoMarkGithub /> altair-roberto
          </SocialItemContent>
        </SocialItem>
      </SocialList>
      <SocialList>
        <span>Copyrigth</span> &copy; 2021, Criticism-App, todos os direitos
        reservados
      </SocialList>
    </Footer>
  )
}
