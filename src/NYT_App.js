import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";

const NYT_APP = ({ handleLogout }) => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("everything");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`
        );
        const articles = await res.json();
        setArticles(articles.response.docs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, [term]);
  return (
    <>
      <div className="showcase">
        <button onClick={handleLogout} className="button-logout">
          Logout
        </button>
        <div className="overlay px-5">
          <h1 className="text-4xl font-bold text-black py-5 mb-4 capitalize lg:text6xl">
            Viewing articles about {term}
          </h1>
          <SearchForm searchText={(text) => setTerm(text)} />
        </div>
      </div>

      <section className="grid grid-cols-2 gap-10 px-5 pt-10 pb-20">
        {articles.map((article) => {
          const {
            abstract,
            headline: { main },
            byline: { original },
            news_desk,
            section_name,
            web_url,
            _id,
            word_count,
          } = article;

          return (
            <article
              key={_id}
              className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto"
            >
              <h2 className="font-bold text-2xl mb-2 lg:text-4xl">{main}</h2>
              <p>{abstract}</p>

              <ul className="my-4">
                <li>{original}</li>
                <li>
                  <span className="font-bold">News Desk:</span> {news_desk}
                </li>
                <li>
                  <span className="font-bold">Section Name: </span>
                  {section_name}
                </li>
                <li>
                  <span className="font-bold">Word Count:</span> {word_count}
                </li>
              </ul>
              <a href={web_url} target="_blank" className="underline">
                Web Resource
              </a>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default NYT_APP;
