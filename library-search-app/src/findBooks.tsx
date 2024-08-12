import axios from "axios";

const findBooks = async (
  searchData: string,
  sortOption: string = "Most points"
) => {
  const result = await axios.get(
    `https://hn.algolia.com/api/v1/search?query=${searchData}&hitsPerPage=5`
  );
  if (sortOption === "Most comments")
    return result.data.hits.sort((a, b) => b.num_comments - a.num_comments);

  return result.data.hits.sort((a, b) => b.points - a.points);
};

export default findBooks;
