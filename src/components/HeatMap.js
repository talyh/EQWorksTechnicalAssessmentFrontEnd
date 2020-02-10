import React from "react";
import styled from "styled-components";
import { ResponsiveHeatMap } from "@nivo/heatmap";

const HeatMap = ({ title, keys, data, indexBy }) => (
  <Container>
    <Title>{title}</Title>
    <ResponsiveHeatMap
      data={data}
      keys={keys}
      indexBy={indexBy}
      margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
      forceSquare={false}
      colors="blues"
      axisTop={{
        orient: "top",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: "",
        legendOffset: 36
      }}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: indexBy,
        legendPosition: "middle",
        legendOffset: -40
      }}
      cellOpacity={0.8}
      labelTextColor={{ from: "color", modifiers: [["darker", 10]] }}
      defs={[
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(0, 0, 0, 0.1)",
          rotation: -45,
          lineWidth: 4,
          spacing: 7
        }
      ]}
      fill={[{ id: "lines" }]}
      animate={true}
      motionStiffness={80}
      motionDamping={9}
      hoverTarget="cell"
      cellHoverOthersOpacity={0.25}
    />
  </Container>
);

const Container = styled.div`
  margin-top: 20px;
  width: 680px;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(8, 48, 107, 1);
`;

export default HeatMap;
