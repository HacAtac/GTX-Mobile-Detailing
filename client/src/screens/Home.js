import React from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { QUERY_SERVICES } from "../utils/queries";
import { REMOVE_SERVICE } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

// need to use the query from the utils/queries file and get the data to show up on the page
const Home = () => {
  //utilize REMOVE_SERVICE mutation
  const [removeService] = useMutation(REMOVE_SERVICE, {
    variables: {
      _id: "_id",
    },
  });

  const { loading, error, data } = useQuery(QUERY_SERVICES);
  //what is useQuery and where does it come from?
  //it is a hook that allows us to use the query from the utils/queries file and get the data to show up on the page
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const editService = async (id) => {
    try {
      const { data } = await REMOVE_SERVICE({
        variables: { id },
        refetchQueries: [{ query: QUERY_SERVICES }],
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

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
            <p className="card-price">
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
                <span>Hey there, {Auth.getProfile().data.username}!</span>

                <button
                  className="delete-button"
                  onClick={() => removeService(service._id)}
                >
                  Delete
                </button>

                <Link to={`/updateservice/${service._id}`}>
                  <button
                    className="edit-button"
                    onClick={() => editService(service._id)}
                  >
                    Edit
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link className="btn btn-lg btn-info m-2" to="/booking">
                  Book Now
                </Link>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
