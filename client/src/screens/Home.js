import React from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { QUERY_SERVICES } from "../utils/queries";
import { REMOVE_SERVICE } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
// import UpdateService from "./UpdateService";

// need to use the query from the utils/queries file and get the data to show up on the page
const Home = () => {
  //use mutation function to remove service when the user clicks on the delete button
  const [removeService] = useMutation(REMOVE_SERVICE, {
    update(cache, { data: { removeService } }) {
      //update is a function that takes in the cache and the data that is being returned from the mutation and updates the cache with the new data from the mutation
      console.log(cache);
      //readQuery is a function that takes in the query and returns the data from the cache
      const { services } = cache.readQuery({ query: QUERY_SERVICES });
      cache.writeQuery({
        query: QUERY_SERVICES,
        data: {
          services: services.filter(
            (service) => service._id !== removeService._id
          ),
        },
      });
    },
  });

  const { loading, error, data } = useQuery(QUERY_SERVICES);
  //what is useQuery and where does it come from?
  //it is a hook that allows us to use the query from the utils/queries file and get the data to show up on the page
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    //use bootstrap classes to make cards look nice and responsive to the screen size that populates the page with the data from the query and also will have book now button and if a user is logged in will display the update and delete buttons
    <div className="row m-2 p-3" id="card-container">
      <h1 id="page-title">SERVICES</h1>

      <input
        type="text"
        className="form-control"
        placeholder="Search"
        id="search-input"
      />

      {data.services.map((service) => (
        <div className="card col-md-3" id="cards" key={service._id}>
          <h3 className="card-title" id="card-title">
            {service.name}
          </h3>
          <img
            className="imageUrls"
            id="card-img"
            src={service.imageUrls[0]}
            alt="service"
          />
          <p id="card-ptags">{service.description}</p>
          <p className="card-price" id="prices">
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
          {Auth.loggedIn() ? (
            <>
              <span id="card-user">
                Hey there, {Auth.getProfile().data.username}!
              </span>

              <button
                className="delete-button"
                id="card-delete-btn"
                onClick={() =>
                  removeService({ variables: { _id: service._id } })
                }
              >
                Delete
              </button>

              <Link to={`/updateservice/${service._id}`}>
                <button className="update-button" id="card-update-btn">
                  Update
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link
                className="btn btn-lg btn-info m-2"
                id="card-book-btn"
                to="/booking"
              >
                Book Now
              </Link>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
