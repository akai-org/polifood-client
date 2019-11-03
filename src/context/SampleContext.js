// This is only an example, its purpose is to show the pattern
// it shouldn't be included in further development

import createDataContext from './createDataContext';

// create reducer specific for this context
const sampleReducer = (state, action) => {
  switch (action.type) {
    case 'action_type_name':
      return {
        ...state,
        newValue: state.newValue + 1
        // return mutated copy of the old state
        // using this method prevents from mutating current state,
        // according to the core state principle (NEVER MUTATE STATE)
      };
    default:
      return state;
  }
};

// example of action bounded to this particular context, it is not required to pass any payload
// feel free to implement actions with this pattern
const sampleAction = dispatch => payload => {
  // here comes a tricky part
  // we need dispatch to call our reducer, so we pass dispatch as an argument while context creation (look into createDataContext.js)
  dispatch({
    type: 'action_type_name',
    payload
  });
};

const anotherAction = dispatch => () => {
  dispatch({
    type: 'another_action_type'
  });
  // if you do not pass any payload as an argument, there is no need for passing it to the reducer
};

// return Context and Provider specific for this context, then add new Provider to DataContextWrapper
export default { Context, Provider } = createDataContext(
  sampleReducer,
  { sampleAction, anotherAction },
  []
);
// [] - initialState, it can be any js data type, it depends on context purpose
