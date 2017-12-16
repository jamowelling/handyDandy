import { AsyncStorage } from 'react-native';
/*
* synchronous action creators
*/

export const RETRIEVE_ENTRIES_BEGIN = 'RETRIEVE_ENTRIES_BEGIN';
export function retrieveEntriesBegin() {
  return {
    type: RETRIEVE_ENTRIES_BEGIN,
  };
}

export const RETRIEVE_ENTRIES_FAILURE = 'RETRIEVE_ENTRIES_FAILURE';
export function retrieveEntriesFailure(error) {
  return {
    type: RETRIEVE_ENTRIES_FAILURE,
    error,
  };
}

export const RETRIEVE_ENTRIES_SUCCESS = 'RETRIEVE_ENTRIES_SUCCESS';
export function retrieveEntriesSuccess(entries) {
  return {
    type: RETRIEVE_ENTRIES_SUCCESS,
    entries,
  };
}

/*
* asnchronous action creators
*/

export const FETCH_ENTRIES = 'FETCH_ENTRIES';
export function fetchEntries() {

  return async function(dispatch) {

    // set isFetching tag
    dispatch(retrieveEntriesBegin);

    let entries;
    try {
      await AsyncStorage.getItem('handyDandyEntries', (err, res) => {
        entries = res;
        if (entries) {
          entries = JSON.parse(entries);
          dispatch(retrieveEntriesSuccess(entries));
        }
      });
    } catch (error) {
      dispatch(retrieveEntriesFailure(error));
    }
  };
}
