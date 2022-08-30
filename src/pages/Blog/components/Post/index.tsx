import { useContextSelector } from 'use-context-selector'
import { CardPost } from '../../../../components/CardPost'
import { BlogContext } from '../../../../contexts/BlogContext'
import { PostsContainer } from './styles'

export function Posts() {
  const posts = useContextSelector(BlogContext, (context) => context.posts)
  return (
    <PostsContainer>
      {posts?.map((post) => (
        <CardPost
          key={post.id}
          title={post.title}
          body={post.body}
          createdAt={post.createdAt}
          id={post.id}
        />
      ))}
    </PostsContainer>
  )
}
