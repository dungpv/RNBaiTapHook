const initState = {
  count: 0,
};
export const countReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TANG_COUNT':
      let tangCount = state.count + 1;
      return {
        count: tangCount,
      }; // return state da thay doi gia tri va luu state da thay doi len store
    case 'GIAM_COUNT':
      let giamCount = state.count - 1;
      return {
        count: giamCount > 0 ? giamCount : 0,
      }; // return state da thay doi gia tri va luu state da thay doi len store
  }

  return state;
};
