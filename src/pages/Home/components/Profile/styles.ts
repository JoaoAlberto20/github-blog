import styled from 'styled-components'

export const ProfileContainer = styled.div`
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  height: 212px;
  align-items: center;
  padding: 0 2rem;

  margin-top: -6rem;
  margin-bottom: 4.75rem;

  display: grid;
  grid-template-columns: 148px 1fr;
  gap: 2rem;
`

export const ProfileImg = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 9px;

    h2 {
      font-size: 1.5rem;
      line-height: 1.95rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-title']};
    }

    a {
      display: flex;
      align-items: center;
      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};
      font-weight: bold;
      gap: 0.5rem;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }

      svg {
        line-height: 0;
      }
    }
  }
`

export const ProfileContentIcons = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  align-items: center;

  a,
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-subTitle']};
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    &:hover {
    }
  }
`
