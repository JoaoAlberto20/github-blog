import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import {
  ProfileContainer,
  ProfileContent,
  ProfileContentIcons,
  ProfileImg,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImg>
        <img
          src="https://avatars.githubusercontent.com/u/97991895?v=4"
          alt=""
        />
      </ProfileImg>
      <ProfileContent>
        <header>
          <h2>João Alberto no da Silva</h2>
          <a href="#">
            GITHUB
            <BsBoxArrowUpRight />
          </a>
        </header>
        <article>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </article>
        <ProfileContentIcons>
          <a href="">
            <BsGithub />
            cameronwll
          </a>
          <a href="">
            <HiOutlineOfficeBuilding />
            RocketSeat
          </a>
          <a href="#">
            <FiUsers />
            32 Seguidores
          </a>
        </ProfileContentIcons>
      </ProfileContent>
    </ProfileContainer>
  )
}
