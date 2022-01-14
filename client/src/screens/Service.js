import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_SERVICES } from "../../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_SERVICES);
  const services = data?.services || [];
};

function Service() {
  return <div></div>;
}

export default Service;
