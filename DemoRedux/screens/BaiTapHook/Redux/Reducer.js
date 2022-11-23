const initState = {
  searchText: '',
};
export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SEARCH':
      let filterText = action.payload;
      return {
        searchText: filterText,
      };
  }

  return state;
};
