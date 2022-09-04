import { createSlice } from "@reduxjs/toolkit"
import getData from '../dataApi'
const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: '',
}

const relatedVideosSlice = createSlice({
  name: 'relatedVideos',
  initialState,
  reducers: {
    setRelatedVideos(state, { payload }) {
      state.relatedVideos = payload
    },
    setStatus(state, action) {
      state.isLoading = action.payload;
    },
    setIsError(state, { payload }) {
      state.isError = payload
    },
    setError(state, { payload }) {
      state.error = payload
    },
  }
})

export const { setRelatedVideos, setStatus, setError, setIsError } = relatedVideosSlice.actions;
export default relatedVideosSlice.reducer;

//async thunk
export function fetchRelatedVideos(id, tags) {
  return async function fetchVideoThunk(dispatch, getState) {
    const limit = 5;
    const queryString = tags?.length > 0 ?
      tags.map(tag => `tags_like=${tag}`).join('&') +
      `&id_ne=${id}&_limit=${limit}`
      : `&id_ne=${id}&_limit=${limit}`

    dispatch(setStatus(true));
    dispatch(setIsError(false));
    dispatch(setError(''));
    try {
      const relatedVideos = await getData(`/videos?${queryString}`);
      dispatch(setRelatedVideos(relatedVideos));
      dispatch(setStatus(false));

    } catch (err) {
      if (err) {
        dispatch(setError(err.message));
        dispatch(setStatus(false));
        dispatch(setIsError(true));
      }
    }
  };
}