
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
export function retrieveEntriesFailure() {
  return {
    type: RETRIEVE_ENTRIES_FAILURE,
    error: 'Something went wrong...',
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
