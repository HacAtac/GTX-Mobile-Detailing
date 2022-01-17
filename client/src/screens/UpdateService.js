import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { UPDATE_SERVICE } from "../utils/mutations";
import { QUERY_SERVICES } from "../utils/queries";

function UpdateService() {
  // here I need to update current services with the new service data with a form that will be filled out by the user
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrls] = useState("");
  const [individualPrice, setIndividualPrice] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");

  const { loading, error, data } = useQuery(QUERY_SERVICES);
  // const [updateService] = useMutation(UPDATE_SERVICE, {
  //   variables: {
  //     _id: "_id",
  //     name,
  //     description,
  //     imageUrls,
  //     individualPrice: parseInt(individualPrice),
  //     smallPrice: parseInt(smallPrice),
  //     mediumPrice: parseInt(mediumPrice),
  //     largePrice: parseInt(largePrice),
  //   },
  // });
  // useMutation for UPDATE_SERVICE that only  updates the data that is being passed in from the form
  const [updateService] = useMutation(UPDATE_SERVICE, {
    variables: {
      _id: "_id",
      name,
      description,
      imageUrls,
      individualPrice: parseInt(individualPrice),
      smallPrice: parseInt(smallPrice),
      mediumPrice: parseInt(mediumPrice),
      largePrice: parseInt(largePrice),
    },
    update(cache, { data: { updateService } }) {
      //update is a function that takes in the cache and the data that is being returned from the mutation and updates the cache with the new data from the mutation
      console.log(cache);
      //readQuery is a function that takes in the query and returns the data from the cache
      const { services } = cache.readQuery({ query: QUERY_SERVICES });
      cache.writeQuery({
        query: QUERY_SERVICES,
        data: {
          services: services.map(
            (
              service //were mapping through the services and returning the new data that is being returned from the mutation
            ) => (service._id === updateService._id ? updateService : service) //this says if the service._id is equal to the updateService._id then updateService is returned, otherwise the service is returned so that the cache is updated with the new data
          ),
        },
      });
    },
  });

  // app is throwing
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <h1 className="page-title">UPDATE SERVICE</h1>
      <div className="flex-row justify-space-between">
        <div className="card">
          <h3 className="card-title">Name</h3>
          <input
            className="input-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h3 className="card-title">Description</h3>
          <input
            className="input-field"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <h3 className="card-title">Image Urls</h3>
          <input
            className="input-field"
            type="text"
            value={imageUrls}
            onChange={(e) => setImageUrls(e.target.value)}
          />
          <h3 className="card-title">Individual Price</h3>
          <input
            className="input-field"
            type="integer"
            value={individualPrice}
            onChange={(e) => setIndividualPrice(e.target.value)}
          />
          <h3 className="card-title">Small Price</h3>{" "}
          <input
            className="input-field"
            type="integer"
            value={smallPrice}
            onChange={(e) => setSmallPrice(e.target.value)}
          />
          <h3 className="card-title">Medium Price</h3>{" "}
          <input
            className="input-field"
            type="integer"
            value={mediumPrice}
            onChange={(e) => setMediumPrice(e.target.value)}
          />
          <h3 className="card-title">Large Price</h3>{" "}
          <input
            className="input-field"
            type="integer"
            value={largePrice}
            onChange={(e) => setLargePrice(e.target.value)}
          />
          <button className="button" onClick={() => updateService()}>
            {" "}
            Update Service{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default UpdateService;
