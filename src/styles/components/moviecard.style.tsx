import styled from 'styled-components'

interface StyledMovieCardProps {
  width?: string
  height?: string
}

export const MovieListWrapper = styled.div`
  padding: 10px 0;
`

export const ListTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 32px;
`

interface StyledMovieCardProps {
  heightProp: string
  widthProp: string
}

export const StyledMovieCardDiv = styled.div<StyledMovieCardProps>`
  width: ${props => props.widthProp};
  height: ${props => props.heightProp};
`

export const StyledMovieCardImg = styled.img`
  width: 100%;
  height: 100%;
`
export const Comment = styled.div`
  position: absolute;
  width: 100%;
  height: 35%;
  padding: 2px;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.336);
  display: block;
  opacity: 0;

  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
`
interface CommentProps {
  fontSize?: string
}

export const Title = styled.div<CommentProps>`
  top: 0;
  color: whitesmoke;
  font: 400 16px Roboto, sans-serif;
  font-size: ${props => props.fontSize};
  position: absolute;
`
Title.defaultProps = {
  fontSize: '.1em'
}

export const Description = styled.div`
  bottom: 20%;
  margin: 0px 15px;
  color: whitesmoke;
  font: 400 16px Roboto, sans-serif;
  font-size: 1em;
  position: absolute;
`
