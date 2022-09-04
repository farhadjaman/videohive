import React from 'react'

const SingleRelatedVideo = ({ relatedVideo }) => {
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
      <div
        className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]"
      >
        <a href="video.html">
          <img
            src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
            className="object-cover"
            alt="Some video title"
          />
        </a>
        <p
          className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
        >
          {relatedVideo.duration}
        </p>
      </div>

      <div className="flex flex-col w-full">
        <a href="/#">
          <p
            className="text-slate-900 text-sm font-semibold"
          >
            {relatedVideo.title}
          </p>
        </a>
        <a
          className="text-gray-400 text-xs mt-2 hover:text-gray-600"
          href="/#"
        >
          {relatedVideo.author}
        </a>
        <p className="text-gray-400 text-xs mt-1">
          {relatedVideo.views} views .{relatedVideo.date}
        </p>
      </div>
    </div>
  )
}

export default SingleRelatedVideo