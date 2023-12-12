import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../fetching/Fetching.module.css";
import { Link } from "react-router-dom";

const Fetching = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://imdb-top-100-movies.p.rapidapi.com",
        headers: {
          "X-RapidAPI-Key":
            "a7765f740dmsh9e00fd5cc5a51e8p164dcejsneb3f9fc4b305",
          "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        setError("Something went wrong with the API request.");
      }
    };

    fetchData();
  }, []);

  const totalItems = data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      {error && (
        <div className={styles.error_message}>
          <h1>{error}</h1>
        </div>
      )}
      {data ? (
        <div className={styles.mainContainer}>
          <h1 className={styles.filmsText}>Films</h1>
          <main className={styles.mainDiv}>
            {currentItems.map((item, index) => (
              <div className={styles.oneCard} key={index}>
                <h2 className={styles.title_text}> {item.title}</h2>
                <img
                  className={styles.coverImage}
                  src={item.image}
                  alt="cover_photo"
                />

                <div className={styles.description}>
                  <h2 className={styles.rating}>Rating - {item.rating}</h2>
                  <b />
                  <h4>{item.year} Year</h4>
                </div>
                <Link to={`/Details_page/${item.id}`}>
                  <button className={styles.detailsButton}>
                    more details...
                  </button>
                </Link>
              </div>
            ))}
          </main>

          <div className={styles.pagination}>
            {[...Array(totalPages).keys()].map((number) => (
              <button
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className={styles.pageNumber}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.fetch_loader}>Loading...</div>
      )}
    </div>
  );
};

export default Fetching;
