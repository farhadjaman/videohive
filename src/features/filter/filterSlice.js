import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  tags: [],
  search: '',
  author: ''
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setTags(state, { payload }) {
      if (!state.tags.includes(payload))
        state.tags.push(payload)

    },
    removeTags(state, { payload }) {
      const index = state.tags.indexOf(payload)

      if (index !== -1)
        state.tags.splice(index, 1)
    },
    setSearch(state, { payload }) {
      state.search = payload;
    },
    setAuthor(state, { payload }) {
      state.author = payload
    }
  }
})

export const { setTags, removeTags, setSearch, setAuthor } = filtersSlice.actions;
export default filtersSlice.reducer;
