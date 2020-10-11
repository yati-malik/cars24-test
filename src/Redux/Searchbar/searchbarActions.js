import { SET_SEARCH } from "../Common/actionTypes";

export function SetSearch(name) {
  return {
    type: SET_SEARCH,
    name: name
  };
}
