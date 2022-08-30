import styled from 'styled-components'

export const FormSearchContainer = styled.form`
  margin-top: 0.75rem;
  display: flex;

  input {
    padding: 12px 16px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    width: 100%;
    border-radius: 6px;

    &:placeholder-shown {
      color: ${(props) => props.theme['base-label']};
      line-height: 1.6rem;
    }

    &:not(:placeholder-shown),
    &:focus {
      color: ${(props) => props.theme['base-text']};
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`
