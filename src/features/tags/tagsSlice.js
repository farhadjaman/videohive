import { createSlice } from "@reduxjs/toolkit"
import getData from '../dataApi'
const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: '',
}

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags(state, { payload }) {
      state.tags = payload
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

export const { setTags, setStatus, setError, setIsError } = tagsSlice.actions;
export default tagsSlice.reducer;

//async thunk
export function fetchTags() {
  return async function fetchVideoThunk(dispatch, getState) {
    dispatch(setStatus(true));
    dispatch(setIsError(false));
    dispatch(setError(''));
    try {
      const tags = await getData('/tags');
      dispatch(setTags(tags));
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