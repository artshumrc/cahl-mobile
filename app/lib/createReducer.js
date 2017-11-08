/**
 * Create reducer without using switch statements.
 * Generic function taken from https://github.com/jlebensold/peckish
 * Credit to Jon Lebesold
 * Medium article: https://medium.com/@jonlebensold/getting-started-with-react-native-redux-2b01408c0053
 * @param initialState
 * @param handlers
 * @returns {reducer}
 */
export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
