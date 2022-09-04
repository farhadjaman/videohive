import React, { useEffect } from 'react'
import SingleRelatedVideo from './SingleRelatedVideo'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedVideos } from '../../features/relatedVideoSlice/relatedVideoSlice'

const RelatedVideos = ({ id, tags }) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedVideos(id, tags))
  }, [id, tags, dispatch])

  const { relatedVideos } = useSelector(store => store.relatedVideos)


  return (


    <div
      className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
    >

      {relatedVideos?.length > 0 &&
        relatedVideos.map(item => <SingleRelatedVideo relatedVideo={item} key={item.id} />)}
    </div>
  )
}

export default RelatedVideos