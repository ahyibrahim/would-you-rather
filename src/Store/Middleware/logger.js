const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log(`Dispatched Action: ${JSON.stringify(action)}`);
  const returnValue = next(action);
  console.log(`New State ${JSON.stringify(store.getState())}`);
  console.groupEnd();
  return returnValue;
};

export default logger;
