import Tag from './Tag'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTags } from '../features/tags/tagsSlice'
import Loading from '../utils/Loading'
import Error from '../utils/Error'

const Tags = () => {

  const { tags, isLoading, isError, error } = useSelector(store => store.tags)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTags())
  }, [dispatch])

  let content;
  if (isLoading) content = <Loading />
  if (!isLoading && isError) content = <Error />
  if (!isLoading && !isError && tags?.length) {
    content = tags.map(tag => <Tag tag={tag} key={tag.id} />)
  }
  return (
    <section>
      <div
        className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
      >
        {content}
      </div>
    </section>
  )
}

export default Tags