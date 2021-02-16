export const sendRequest = async (input, pageNo = 1) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&query=${input}&page=${pageNo}`
  );
  const data = await response.json();
  return data;
};
