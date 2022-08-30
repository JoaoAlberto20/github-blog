import { ReactNode } from 'react'
import { createContext } from 'use-context-selector'

export const BlogContext = createContext({})

interface ProviderProps {
  children: ReactNode
}

export function BlogProvider({ children }: ProviderProps) {
  return <BlogContext.Provider value>{children}</BlogContext.Provider>
}
