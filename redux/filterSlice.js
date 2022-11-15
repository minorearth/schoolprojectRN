import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: 'noth',
  },
  reducers: {
    setfilter: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setfilter } = filterSlice.actions

export default filterSlice.reducer