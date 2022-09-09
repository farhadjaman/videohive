import React from 'react'
import VideoComponents from '../components/Video page/VideoComponents'
import RelatedVideos from '../components/Video page/RelatedVideos'
import { useSelector } from 'react-redux'

const Video = () => {
  const { video } = useSelector(store => store.video)
  const { id, tags } = video || {}
  return (
    <div>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <VideoComponents />
            <RelatedVideos id={id} tags={tags} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Video