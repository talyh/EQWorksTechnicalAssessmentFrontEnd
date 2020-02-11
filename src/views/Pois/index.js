import React, { useContext, useState } from "react";
import styled from "styled-components";
import { LocaleContext } from "../../contexts/LocaleContext";
import Spinner from "../../components/Spinner";
import DataTable from "../../components/DataTable";
import Map from "../../components/Map";
import { transformPoiToDataTable } from "../../utils";
import { usePoisData } from "./hooks";

const PoisView = () => {
  const poiUrl = "https://talyh-eqworks-backend.herokuapp.com/poi";

  const { poisData, isLoading } = usePoisData(poiUrl, transformPoiToDataTable);
  const [displayData, setDisplayData] = useState(poisData);
  const { locale } = useContext(LocaleContext);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <Content>
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
            onFilter={filtered => setDisplayData(filtered)}
          />
          <Map data={displayData} />
        </Content>
      )}
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export default PoisView;
