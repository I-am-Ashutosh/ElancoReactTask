import React from "react";
import useFetch from "../hooks/useFetch";
import "./applications.scss";
import { Link } from "react-router-dom";
import Spinner from "../components/spinner";

const Applications = () => {
  const { data, loading } = useFetch<string[]>("applications");

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="applicationWrapper">
      {data?.length
        ? data.map((i, index) => {
            return (
              <Link
                to={`/applications/${i}`}
                key={index}
                className="applicationTitle"
              >
                {i}
              </Link>
            );
          })
        : "No records found!"}
    </div>
  );
};

export default Applications;
