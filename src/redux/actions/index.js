export const actions = {
  SET_COUNT: 'SET_COUNT',
};

export const setCount = data => ({
  type: actions.SET_COUNT,
  data,
});
