import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ExternalLink } from '../../../../components/ExternalLink'
import { Loading } from '../../../../components/Loading'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { IPost } from '../../../Blog'
import { PostHeaderContainer } from './styles'

interface PostHeaderProps {
  postData: IPost
  isLoading: boolean
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formattedDate = relativeDateFormatter(postData?.created_at)

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header>
            <ExternalLink
              as="button"
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              variant="iconLeft"
            />
            <ExternalLink
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FaGithub />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  )
}
