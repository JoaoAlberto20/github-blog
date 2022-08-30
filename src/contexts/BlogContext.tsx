import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

type UserData = {
  bio: string
  followers: number
  name: string
  company: string
  img: string
  githubUrl: string
  login: string
}

interface DataContext {
  user: UserData | undefined
}

export const BlogContext = createContext({} as DataContext)

interface ProviderProps {
  children: ReactNode
}

export function BlogProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<UserData>()

  useEffect(() => {
    const getUser = async () => {
      const response = await api.get('/users/JoaoAlberto20')
      console.log(response)
      const {
        bio,
        followers,
        html_url: githubUrl,
        name,
        company,
        avatar_url: img,
        login,
      } = response.data
      setUser({ bio, followers, name, company, img, githubUrl, login })
    }
    getUser()
  }, [])

  return (
    <BlogContext.Provider value={{ user }}>{children}</BlogContext.Provider>
  )
}
