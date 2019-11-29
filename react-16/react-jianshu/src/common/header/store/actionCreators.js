import * as CONSTANTS from './constants'

export const searchFocus = (focus) => {
  return {
    type: CONSTANTS.SEARCH_FOCUS,
    focus
  }
}