export const searchQuery = value => {
  return {
    type: 'SEARCH',
    payload: value,
  };
};
