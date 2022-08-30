import { ReactNode, useCallback, useEffect, useState } from 'react'
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

type PostsData = {
  id: number
  title: string
  body: string
  createdAt: string
}

interface DataContext {
  user: UserData | undefined
  posts: PostsData[]
  searchPostsByQuery: (query: string) => Promise<void>
}

export const BlogContext = createContext({} as DataContext)

interface ProviderProps {
  children: ReactNode
}

export function BlogProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<UserData>()
  const [posts, setPosts] = useState<PostsData[]>([])

  const filterKeys = (callback: PostsData[]) => {
    const result = callback.map((keys: any) => ({
      id: keys.id,
      title: keys.title,
      body: keys.body,
      createdAt: keys.created_at,
    }))
    return result
  }

  useEffect(() => {
    const getUser = async () => {
      const response = await api.get('/users/JoaoAlberto20')
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

  useEffect(() => {
    const getPost = async () => {
      const {
        data: { items },
      } = await api.get('search/issues', {
        params: {
          q: `repo:JoaoAlberto20/blog-post`,
        },
      })
      const dataFilter = filterKeys(items)
      setPosts(dataFilter)
    }
    getPost()
  }, [])

  const searchPostsByQuery = useCallback(async (query: string) => {
    const {
      data: { items },
    } = await api.get('search/issues', {
      params: {
        q: `${query}repo:JoaoAlberto20/blog-post`,
      },
    })
    const dataFilter = filterKeys(items)
    setPosts(dataFilter)
  }, [])

  return (
    <BlogContext.Provider value={{ user, posts, searchPostsByQuery }}>
      {children}
    </BlogContext.Provider>
  )
}
