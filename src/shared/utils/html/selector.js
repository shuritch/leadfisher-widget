const addID = id => (id !== '' ? `#${id}` : '');
const addClassList = className => className.split(/\s/).reduce((r, c) => (r += !c ? '' : `.${c}`));

/** @param {HTMLElement | Element } el */
const selector = el => {
  const build = el => {
    const { tagName, className, id, parentNode } = el;
    if (!parentNode) return tagName;
    if (tagName.toLowerCase() === 'html') return 'HTML';

    const builded = build(parentNode);
    return `${builded}>${tagName + addID(id) + addClassList(className)}`;
  };

  return (pre = '') => pre + build(el);
};

export default selector;
