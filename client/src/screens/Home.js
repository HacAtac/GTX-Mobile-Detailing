import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_SERVICES } from "../utils/queries";

// need to use the query from the utils/queries file and get the data to show up on the page
const Home = () => {
  const { loading, error, data } = useQuery(QUERY_SERVICES);
  //what is useQuery and where does it come from?
  // it is a hook that allows us to use the query from the utils/queries file and get the data to show up on the page
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <h1>Services</h1>
      <div className="flex-row justify-space-between">
        {data.services.map((service) => (
          <div className="flex-column justify-flex-start" key={service._id}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p>
              Individual Price: ${service.individualPrice}
              <br />
              Small Price: ${service.smallPrice}
              <br />
              Medium Price: ${service.mediumPrice}
              <br />
              Large Price: ${service.largePrice}
            </p>
            <img src={service.imageUrls[0]} alt={service.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
