/** @type {import("./type").chain} */
const chain = ctx => func =>
  function (...args) {
    func(...args);
    return ctx;
  };

export default chain;
