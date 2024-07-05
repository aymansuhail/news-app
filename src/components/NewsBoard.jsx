import React, { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const countries = ["us", "in", "gb"]; // Countries: US, India (IN), UK (GB)
        const promises = countries.map(country =>
          fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
            import.meta.env.VITE_API_KEY
          }`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
        );

        // Wait for all fetch requests to complete
        const results = await Promise.all(promises);
        
        // Combine all articles from different countries into one array
        const combinedArticles = results.flatMap(result => result.articles);

        setArticles(combinedArticles);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) {
    return <p className="text-center mt-3">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-3 text-danger">{error}</p>;
  }

  return (
    <div className="container">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="row">
        {articles && articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
