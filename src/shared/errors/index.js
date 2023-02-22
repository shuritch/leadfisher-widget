import ErrorsConfig from './config';

/** @type {import("./type").TErrorHandler} */
const errorHandler = type => {
  const config = ErrorsConfig[type];
  return code => console.error(`[${type}] ${config[code]}`, code);
};

export default errorHandler;
