const { createSlice} = require("@reduxjs/toolkit")

const initialState = [];

const cartSlice = createSlice({

  name: 'cart',
  insitialState,
  reducers: {
    add(),
    remove() {}, 
  }

})