function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}
//this dispatch function is taking the result of changeState and after it takes in an action

function dispatch(action){
  state = changeState(state,action)
  render()
}

function render(){
  document.body.textContent = state.count
}
render()
//this is going to render the new state on the page
//dispatch solved two problems, first it persisted changes to our state
//ensured that each time our state updates our HTML updates changes by calling render