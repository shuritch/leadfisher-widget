const setDefault = (target, defaultValue) => {
  return new Proxy(target, {
    get(obj, key) {
      if (obj[key] === undefined) return defaultValue;
      return obj[key];
    },
  });
};

export default setDefault;
