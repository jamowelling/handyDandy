/*
* action types
*/

export const UPDATE_ENTRIES = 'UPDATE_ENTRIES';

/*
* action creators
*/

export function updateEntries(entries) {
  return {
    type: UPDATE_ENTRIES,
    payload: entries,
  };
}
