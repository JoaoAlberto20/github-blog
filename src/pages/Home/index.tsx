import { FormSearch } from './components/FormSearch'
import { Posts } from './components/Post'
import { Profile } from './components/Profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <header>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </header>
      <FormSearch />
      <Posts />
    </HomeContainer>
  )
}
