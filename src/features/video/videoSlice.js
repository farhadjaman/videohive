import { createSlice } from "@reduxjs/toolkit"
import getData from '../dataApi'
const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: '',
}

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideo(state, { payload }) {
      state.video = payload
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

export const { setVideo, setStatus, setError, setIsError } = videoSlice.actions;
export default videoSlice.reducer;

//async thunk
export function fetchvideo(id) {
  return async function fetchVideoThunk(dispatch, getState) {
    dispatch(setStatus(true));
    dispatch(setIsError(false));
    dispatch(setError(''));
    try {
      const video = await getData(`/videos/${id}`);
      dispatch(setVideo(video));
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