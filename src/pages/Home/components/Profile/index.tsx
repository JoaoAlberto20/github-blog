import { memo } from 'react'
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../../../contexts/BlogContext'
import {
  ProfileContainer,
  ProfileContent,
  ProfileContentIcons,
  ProfileImg,
} from './styles'

function ProfileSection() {
  const user = useContextSelector(BlogContext, (context) => context.user)
  return (
    <ProfileContainer>
      <ProfileImg>
        <img src={user?.img} alt={user?.name} />
      </ProfileImg>
      <ProfileContent>
        <header>
          <h2>{user?.name}</h2>
          <a href={user?.githubUrl} target="_blanck">
            GITHUB
            <BsBoxArrowUpRight />
          </a>
        </header>
        <article>
          <p>{user?.bio}</p>
        </article>
        <ProfileContentIcons>
          <a href={user?.githubUrl}>
            <BsGithub />
            {user?.login}
          </a>
          {user?.company && (
            <span>
              <HiOutlineOfficeBuilding />
              RocketSeat
            </span>
          )}
          <span>
            <FiUsers />
            {`${user?.followers} Seguidores`}
          </span>
        </ProfileContentIcons>
      </ProfileContent>
    </ProfileContainer>
  )
}

export const Profile = memo(ProfileSection)
