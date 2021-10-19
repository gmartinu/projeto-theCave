export const goToAddPage = (id, path, history) => {
  history.push({ pathname: path + '/' + id });
};
