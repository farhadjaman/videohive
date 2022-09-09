import { useEffect } from 'react'
import VideoPlayer from './VideoPlayer'
import VideoDescription from './VideoDescription'
import { fetchvideo } from '../../features/video/videoSlice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../utils/Loading'
import Error from '../../utils/Error'


const VideoComponents = () => {
    const { videoId } = useParams();
    const dispatch = useDispatch()
    const { video, isLoading, isError } = useSelector(store => store.video)


    useEffect(() => {
        dispatch(fetchvideo(videoId))
    }, [dispatch, videoId])

    const { link, title, tags } = video || {}
    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <Error />
    if (!isLoading && !isError && video) {
        content = <><VideoPlayer link={link} title={title} />
            <VideoDescription video={video} />
        </>


    }

    return (
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {content}
        </div>
    )
}

export default VideoComponents