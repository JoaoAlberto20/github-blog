import styled from 'styled-components'

export const HomeContainer = styled.main`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subTitle']};
    }
  }
`
