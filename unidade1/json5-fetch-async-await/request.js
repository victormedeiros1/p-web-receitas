export const load = (data, thead, tbody) => {
  thead.innerHTML = '';

  const keys = Object.keys(data[0]);

  // ===========================================================================

  let headerItemsArray = keys.map((key) => `<th>${key}</th>`);

  const headerItemsTag = `<tr>${headerItemsArray.join('')}</tr>`;

  thead.innerHTML = headerItemsTag;

  // ===========================================================================

  let keysArray = data.map(
    (item) => `<tr>${keys.map((key) => `<td>${item[key]}</td>`)}</tr>`
  );

  const bodyItemsTag = `<tr>${keysArray}</tr>`;

  tbody.innerHTML = bodyItemsTag.replaceAll('>,<', '><');
};
