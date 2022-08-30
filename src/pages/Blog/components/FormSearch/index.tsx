import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as zod from 'zod'
import { BlogContext } from '../../../../contexts/BlogContext'
import { FormSearchContainer } from './styles'

const SchemaSearchQuery = zod.object({
  query: zod.string(),
})

type TypeSchemaSearchQuery = zod.infer<typeof SchemaSearchQuery>

export function FormSearch() {
  const searchPost = useContextSelector(
    BlogContext,
    (context) => context.searchPostsByQuery,
  )
  const { register, handleSubmit } = useForm<TypeSchemaSearchQuery>({
    resolver: zodResolver(SchemaSearchQuery),
    defaultValues: {
      query: '',
    },
  })

  const handleSearchPost = async (data: TypeSchemaSearchQuery) => {
    await searchPost(data.query)
  }

  return (
    <FormSearchContainer onSubmit={handleSubmit(handleSearchPost)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </FormSearchContainer>
  )
}
