import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface Message {
    sender: string;
    message: string;
    date: Date | number;
    status: 'idle' | 'loading' | 'failed';
}

export interface ChatState {
    chat: Message[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ChatState = {
    chat: [],
    status: 'idle',
};


export const chatSlice = createSlice({
  name: 'message',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    send: (state, action:PayloadAction<Message>) => {
        state.chat.push({ ...action.payload , status: 'idle'});
    }
  },
});

export const { send } = chatSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectChat = (state: RootState) => state.chat.chat.slice(0).slice(-10);

export default chatSlice.reducer;
