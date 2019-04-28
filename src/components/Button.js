import styled from 'styled-components'

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  background: transparent;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.4rem;
  transition: ease all 0.2s;
  cursor: pointer;
  &:hover {
    color: white;
    background: ${({ theme }) => theme.primary};
  }
  outline: none;
  &:disabled {
    background: ${({ theme }) => theme.grey};
    color: ${({ theme }) => theme.background};
    border-color: ${({ theme }) => theme.background};
    cursor: initial;
  }
`

export default Button
