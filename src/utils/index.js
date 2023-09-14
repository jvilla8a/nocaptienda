export const calculateURL = (page, filter, value) => {
  const url = new URL(window.location.href);
  const prevPage = url.searchParams.get("page");
  const prevFilter = url.searchParams.get("filter");
  const prevValue = url.searchParams.get("value");

  let query = url.search.replaceAll("%20", " ");

  prevPage
    ? (query = query.replace(`page=${prevPage}`, `page=${page}`))
    : (query = `?page=${page || 1}`);

  if (prevFilter) {
    if (filter === null) query = query.replace(`&filter=${prevFilter}`, "");
    if (filter && filter !== prevFilter)
      query = query.replace(`filter=${prevFilter}`, `filter=${filter}`);
  } else {
    filter && (query += `&filter=${filter}`);
  }

  if (prevValue) {
    if (value === null) query = query.replace(`&value=${prevValue}`, "");
    if (value && value !== prevValue)
      query = query.replace(`value=${prevValue}`, `value=${value}`);
  } else {
    value && (query += `&value=${value}`);
  }

  return `/${query}`;
};

export const scrollToTop = () => {
  setTimeout(() => {
    document.querySelector("#home #products-container").scrollTo({
      top: 0,
    });
  });
};
