const myReducer = (state = {}, action = {}) => {
  const { type, payload } = action;
  console.log(type);
  switch(type) {
    case 'FOO': return ({ ...state, ...payload });
    default: return state;
  }
};

const result = myReducer({x: 'x'}, {type: 'FOO', payload: 'payload'});
console.log(result);