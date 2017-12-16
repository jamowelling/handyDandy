import {
  RETRIEVE_ENTRIES_BEGIN,
  RETRIEVE_ENTRIES_FAILURE,
  RETRIEVE_ENTRIES_SUCCESS,
} from '../actions/entryActions';

const initialState = {
  isFetching: false,
  errorMessage: '',
  entries: [],
};

function handyDandyEntries(state = initialState, action) {
  // Handle some actions
  switch (action.type) {
    case RETRIEVE_ENTRIES_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case RETRIEVE_ENTRIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error,
      };
    case RETRIEVE_ENTRIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: '',
        entries: action.entries,
      };
  }
  return state;
}

export default handyDandyEntries;
