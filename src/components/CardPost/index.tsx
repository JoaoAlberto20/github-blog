import { NavLink } from 'react-router-dom'
import { CardPostContainer } from './styles'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface cardPostProps {
  id: number
  title: string
  body: string
  createdAt: string
}
export function CardPost({ id, title, body, createdAt }: cardPostProps) {
  return (
    <CardPostContainer>
      <NavLink to={`post/${id}`}>
        <header>
          <strong>{title}</strong>
          <span>
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </header>
        <article>
          <p>{body}</p>
        </article>
      </NavLink>
    </CardPostContainer>
  )
}
