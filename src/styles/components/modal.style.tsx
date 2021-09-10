import styled from 'styled-components'
export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: 600px;
  height: 600px;
  outline: 0;
`
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${props => props.theme.colors.backdrop};
  z-index: 500;
`
export const StyledModal = styled.div`
  z-index: 100;
  background: ${props => props.theme.colors.secondary};
  position: relative;
  margin: auto;
  border-radius: 8px;
`
export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`
export const HeaderText = styled.div`
  text-align: center;
  width: 100%;
  font-size: 20px;
  font-weight: bolder;
  color: ${props => props.theme.colors.text};
`
export const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`
export const Content = styled.div`
  padding: 10px;
  height: 450px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`
