import React from "react";
import DataTable from "../components/dataTable";
import useFetch from "../hooks/useFetch";
import { IRawCore } from "../models";
import Chart from "../components/chart";
import Spinner from "../components/spinner";
import { ErrorBoundary } from "react-error-boundary";

const Home = () => {
  const { data, loading } = useFetch<IRawCore[]>("raw");

  if (loading) {
    return <Spinner />;
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
      <DataTable
        data={data ? data : []}
        title={data ? "Core RAW Data" : "Something went wrong!"}
      />
      <ErrorBoundary
        fallbackRender={({ error }) => {
          return (
            <div role="alert">
              <p>Something went wrong:</p>
              <pre style={{ color: "red" }}>{error?.message}</pre>
            </div>
          );
        }}
        onReset={() => {}}
      >
        <Chart data={data ? data : []} />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
