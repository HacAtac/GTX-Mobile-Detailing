import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SERVICES } from "../utils/queries";

// import "antd/dist/antd.css";

// need to use the query from the utils/queries file and get the data to show up on the page
const Home = () => {
  const { loading, error, data } = useQuery(QUERY_SERVICES);
  //what is useQuery and where does it come from?
  //it is a hook that allows us to use the query from the utils/queries file and get the data to show up on the page
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <h1 className="page-title">SERVICES</h1>
      <div className="flex-row justify-space-between">
        {data.services.map((service) => (
          <div className="card" key={service.id}>
            <h3 className="card-title">{service.name}</h3>
            <img
              className="imageUrls"
              src={service.imageUrls[0]}
              alt="service"
            />
            <p id="card-ptags">{service.description}</p>
            <p>
              {service.individualPrice ? (
                <span id="price-data">
                  <strong>Individual Price:</strong> ${service.individualPrice}
                </span>
              ) : null}
              {service.smallPrice ? (
                <span id="price-data">
                  <strong>Small Price:</strong> ${service.smallPrice}
                </span>
              ) : null}
              {service.mediumPrice ? (
                <span id="price-data">
                  <strong>Medium Price:</strong> ${service.mediumPrice}
                </span>
              ) : null}
              {service.largePrice ? (
                <span id="price-data">
                  <strong>Large Price:</strong> ${service.largePrice}
                </span>
              ) : null}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
