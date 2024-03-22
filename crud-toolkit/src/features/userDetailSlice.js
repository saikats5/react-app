import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const createUser = createAsyncThunk(
  'createUser',
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      'https://65fd5d7a9fc4425c6531c4f4.mockapi.io/crud',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
    try {
      const result = await response.json()
      return result
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const userDetail = createSlice({
  name: 'userDetail',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false
      state.users.push(action.payload)
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false
      state.users = action.payload.message
    },
  },
})

export default userDetail.reducer
