import {
  UPDATE_ENTRIES,
} from '../actions/entryActions';

const initialState = {
  entries: [],
};

function handyDandyEntries(state = initialState, action) {
  // Handle some actions
  switch (action.type) {
    case UPDATE_ENTRIES:
      return {
        ...state,
        entries: action.payload,
      };
  }
  return state;
}

export default handyDandyEntries;
