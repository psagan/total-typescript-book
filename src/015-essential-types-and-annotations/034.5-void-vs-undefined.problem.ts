const acceptsCallback = (callback: () => void): void => {
  callback();
};

const returnString = () => {
  return "Hello!";
};

acceptsCallback(returnString);
