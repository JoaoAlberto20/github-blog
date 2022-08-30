import styled from 'styled-components'

export const CardPostContainer = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  transition: border 1s;

  &:hover {
    border: 1px solid ${(props) => props.theme['base-label']};
  }

  header {
    display: flex;
    gap: 1rem;

    strong {
      font-size: 1.25rem;
      line-height: 2rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-title']};
      flex: 1;
    }

    span {
      font-size: 0.875rem;
      align-self: flex-start;
      text-align: right;
      margin-top: 0.3rem;
    }
  }

  article {
    width: 100%;
    height: 112px;
    margin-top: 1.25rem;

    p {
      white-space: pre-wrap;
      text-overflow: ellipsis;
      line-height: 1.8rem;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      overflow: hidden;
      -webkit-box-orient: vertical;

      color: ${(props) => props.theme['base-text']};
    }
  }
`
