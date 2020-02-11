import React, { useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../../contexts/LocaleContext";
import Spinner from "../../components/Spinner";
import DataTable from "../../components/DataTable";
import { transformPoiToDataTable } from "../../utils";
import { usePoisData } from "./hooks";

const StatsView = () => {
  const poiUrl = "https://talyh-eqworks-backend.herokuapp.com/poi";

  const { poisData, isLoading } = usePoisData(poiUrl, transformPoiToDataTable);
  const { locale } = useContext(LocaleContext);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <DataTable
          data={poisData}
          headers={["name", "lat", "lon"]}
          rowKeys={poi => poi.poi_id}
          columnsTreatment={[
            poi => ({
              key: poi.name,
              display: poi.name,
              align: "left"
            }),
            poi => ({
              key: poi.poi_id + poi.lat,
              display: poi.lat.toLocaleString(locale, {
                style: "decimal"
              }),

              align: "center"
            }),
            poi => ({
              key: poi.poi_id + poi.log,
              display: poi.lon.toLocaleString(locale, {
                style: "decimal"
              }),
              align: "center"
            })
          ]}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StatsView;
