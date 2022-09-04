import { configureStore } from '@reduxjs/toolkit';
import videosSliceReducer from '../features/videos/videosSlice';
import tagSliceReducer from '../features/tags/tagsSlice';
import videoSliceReducer from '../features/video/videoSlice';
import relatedVideosSliceReducer from '../features/relatedVideoSlice/relatedVideoSlice';
import filtersSliceReducer from '../features/filter/filterSlice';
export const store = configureStore({
  reducer: {
    videos: videosSliceReducer,
    video: videoSliceReducer,
    tags: tagSliceReducer,
    relatedVideos: relatedVideosSliceReducer,
    filters: filtersSliceReducer
  },
});
