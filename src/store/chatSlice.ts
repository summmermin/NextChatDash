import {createSlice, PayloadAction} from '@reduxjs/toolkit';

//@reduxjs/toolkit 에서 createSlice 로 상태관리

interface ChatState {
    messages: string[];
}

const initialState: ChatState = {
    messages: [],
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<string>) => {
            state.messages.push(action.payload);
        },
        resetMessages: (state) => {
            state.messages = [];
        },
    },
});

export const {addMessage, resetMessages} = chatSlice.actions;

export default chatSlice.reducer;
