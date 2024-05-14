import { useEffect, useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import SearchForm from "../SearchForm/SearchForm";
import { getArticles } from "../../articles-api";
import css from "./App.module.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }

    async function fetchArticles() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getArticles(searchQuery, page);
        setArticles((prevState) => [...prevState, ...data]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticles();
  }, [page, searchQuery]);

  const handleSearch = async (topic) => {
    setSearchQuery(topic);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <div className={css.container}>
      <h1>HTTP requests in React</h1>
      <SearchForm onSearch={handleSearch} />

      {isError && <p>Oops! There was an error! Try again!</p>}

      {articles.length > 0 && <ArticleList items={articles} />}

      {isLoading && <p>Loading articles, please wait...</p>}

      {articles.length > 0 && !isLoading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
}

// useEffect(() => {
//   async function fetchArticles() {
//     try {
// setIsLoading(true);
// const data = await getArticles("react");
// setArticles(data);
//     } catch (error) {
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   fetchArticles();
// }, []);

// useEffect(() => {
//   setIsLoading(true);
//   getArticles("react")
//     .then((data) => setArticles(data))
//     .catch(() => setIsError(true))
//     .finally(() => setIsLoading(false));
// }, []);
