import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import routes from '../../constants/Routes';
import { FadeLoader } from 'react-spinners'




const DetailsPage = () => {

  const [detailPage, setDetailPage] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const detailsPage = useParams();
  console.log(detailsPage);

  useEffect(() => {
    fetch(`http://universities.hipolabs.com/search?country=Georgia/${routes.detailsPage}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("error")
      })

      .then((data) => {
        setDetailPage(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  if (error) {
    return (
      <div>
        <h1>Oops... There is a problem</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Hello</h1>

      {isLoading && <FadeLoader />}

      <h1>{detailPage.name}</h1>
      <h3>{detailPage.domains}</h3>
      <h6>{detailPage.web_pages}</h6>

    </div>
  );
};

export default DetailsPage;