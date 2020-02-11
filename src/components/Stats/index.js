import React from "react";
import styled from "styled-components";
import Spinner from "../Spinner";
import DataTable from "../DataTable";
import { useStatsData } from "./hooks";

const Stats = ({
  title,
  url,
  transformationFunction,
  headers,
  rowKeys,
  columnsTreatment
}) => {
  const { statsData, isLoading } = useStatsData(url, transformationFunction);

  return (
    <Container>
      <Title>{title}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <DataTable
          data={statsData}
          headers={headers}
          rowKeys={rowKeys}
          columnsTreatment={columnsTreatment}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  text-transform: uppercase;
  color: rgba(8, 48, 107, 1);
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

export default Stats;
