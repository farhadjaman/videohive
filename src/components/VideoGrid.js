import React from 'react'
import { SingleVideo } from './SingleVideo'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideos } from '../features/videos/videosSlice'
import Loading from '../utils/Loading'
import Error from '../utils/Error'

export const VideoGrid = () => {


  const dispatch = useDispatch();
  const { videos, isLoading, isError } = useSelector(store => store.videos)
  const { tags, search } = useSelector(store => store.filters)


  useEffect(() => {
    dispatch(fetchVideos(tags, search))
  }, [dispatch, tags, search])

  let content;
  if (isLoading) content = <Loading />
  if (!isLoading && isError) content = <Error />
  if (!isLoading && !isError && videos?.length) {
    content = videos.map(video => <SingleVideo video={video} key={video.id} />)
  }



  return (
    <section className="pt-12">
      <section className="pt-12">
        <div
          className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
        >
          {content}
        </div>
      </section>
    </section>)


}
