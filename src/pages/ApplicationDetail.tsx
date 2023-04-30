import React from "react";
import { IRawCore } from "../models";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import DataTable from "../components/dataTable";
import Spinner from "../components/spinner";

const ApplicationDetail = () => {
  const { appName } = useParams<{ appName: string }>();
  const { data, loading} = useFetch<IRawCore[]>(
    `applications/${appName}`
  );

  if(loading){
    return <Spinner />
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "100px",
      }}
    >
      <DataTable data={data && appName ? data : []} title={data && appName?appName:'Application doesn\'t exist'} />
    </div>
  );
};

export default ApplicationDetail;
