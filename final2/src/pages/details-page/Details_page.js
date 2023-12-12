import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import Styles from './Details_page.module.css';

const Details_page = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const options = {
        method: "GET",
        url: `https://imdb-top-100-movies.p.rapidapi.com/${movieId}`,
        headers: {
          "X-RapidAPI-Key":
            "a7765f740dmsh9e00fd5cc5a51e8p164dcejsneb3f9fc4b305",
          "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setMovieDetails(response.data);
        // console.log(response.data);
      } catch (error) {
        // console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className={Styles.details_page}>
      {movieDetails ? (
        <div className={Styles.details_page_container}>
          <div className={Styles.imag_div}>
            <img
              className={Styles.big_image}
              src={movieDetails.image}
              alt="main_photo"
            />
          </div>

          <div className={Styles.detailsPage_description}>
            <ul>
              <li>Name: <span>{movieDetails.title}</span> </li>
              <li>Genre: {movieDetails.genre}</li>
              <li>Description: {movieDetails.description}</li>
              <li>IMDB_ID: {movieDetails.imdbid}</li>
              <li>IMDB_link: {movieDetails.imdb_link}</li>
              <li>Rating: {movieDetails.rating}</li>
              <li>Year: {movieDetails.year}</li>
            </ul>
            <Link to={"/"}>
            <button className={Styles.backButton}>back</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={Styles.details_loader}>Loading...</div>
      )}
    </div>
  );
};

export default Details_page;
