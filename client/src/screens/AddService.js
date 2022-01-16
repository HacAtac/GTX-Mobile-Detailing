import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_SERVICE } from "../utils/mutations";
import { QUERY_SERVICES } from "../utils/queries";

function AddService() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrls] = useState("");
  const [individualPrice, setIndividualPrice] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");

  const { loading, error, data } = useQuery(QUERY_SERVICES);

  const [addService] = useMutation(ADD_SERVICE, {
    variables: {
      name,
      description,
      imageUrls,
      individualPrice,
      smallPrice,
      mediumPrice,
      largePrice,
    },
  });

  // app is throwing
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <h1 className="page-title">ADD SERVICE</h1>
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
            type="text"
            value={individualPrice}
            onChange={(e) => setIndividualPrice(e.target.value)}
          />
          <h3 className="card-title">Small Price</h3>
          <input
            className="input-field"
            type="text"
            value={smallPrice}
            onChange={(e) => setSmallPrice(e.target.value)}
          />
          <h3 className="card-title">Medium Price</h3>
          <input
            className="input-field"
            type="text"
            value={mediumPrice}
            onChange={(e) => setMediumPrice(e.target.value)}
          />
          <h3 className="card-title">Large Price</h3>
          <input
            className="input-field"
            type="text"
            value={largePrice}
            onChange={(e) => setLargePrice(e.target.value)}
          />
          <button
            className="button"
            onClick={() => {
              addService();
              setName("");
              setDescription("");
              setImageUrls("");
              setIndividualPrice();
              setSmallPrice();
              setMediumPrice();
              setLargePrice();
            }}
          >
            Add Service
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddService;
