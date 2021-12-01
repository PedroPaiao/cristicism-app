import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop
} from '../styles/components/modal.style'

export interface ModalProps {
  isShown: boolean
  hide: () => void
  modalContent: JSX.Element
  headerText: string
}
export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText
}) => {
  const clear = () => {
    headerText = ''
    modalContent = null
    hide()
  }
  const modal = (
    <React.Fragment>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={clear}>(X)</CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  )
  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}
