import {createAction} from "@reduxjs/toolkit"

export const initialState = {
    result: null,
    loading: false,
    error: null
};
export const asyncCases = ({ START, SUCCESS, FAIL }) => ({
    [START]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [SUCCESS]: (state, action) => {
      state.loading = false;
      state.result = action.payload;
    },
    [FAIL]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
});

export const createActions = actionName => ({
    START: createAction(actionName + "/start"),
    SUCCESS: createAction(actionName + "/success"),
    FAIL: createAction(actionName + "/fail")
});

export const api_domain = 'http://localhost:8000'