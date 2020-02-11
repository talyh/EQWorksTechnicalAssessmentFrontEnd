import React, { useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../../contexts/LocaleContext";
import Stats from "../../components/Stats";
import { transformStatsToDataTable } from "../../utils";

const StatsView = () => {
  const hourlyStatsUrl =
    "https://talyh-eqworks-backend.herokuapp.com/stats/hourly";
  const dailyStatsUrl =
    "https://talyh-eqworks-backend.herokuapp.com/stats/daily";

  const { locale, currency } = useContext(LocaleContext);

  return (
    <Container>
      <Stats
        url={hourlyStatsUrl}
        transformationFunction={transformStatsToDataTable}
        title="Hourly Stats"
        headers={["date", "impressions", "clicks", "revenue"]} // TODO IMMEDIATE - extract from data[0] after sorting has been fixed
        rowKeys={stat => stat.date.toString()}
        columnsTreatment={[
          stat => ({
            key: stat.date,
            display: stat.date.toLocaleString(locale, {
              timeZone: "UTC",
              dateStyle: "short",
              timeStyle: "short",
              hour12: false
            }),
            align: "left"
          }),
          stat => ({
            key: stat.impressions,
            display: stat.impressions.toLocaleString(locale, {
              style: "decimal"
            }),
            align: "center"
          }),
          stat => ({
            key: stat.clicks,
            display: stat.clicks.toLocaleString(locale, {
              style: "decimal"
            }),
            align: "center"
          }),

          stat => ({
            key: stat.revenue,
            display: stat.revenue.toLocaleString(locale, {
              style: "currency",
              currencyDisplay: "symbol",
              currency: currency
            }),
            align: "right"
          })
        ]}
      />
      <Stats
        url={dailyStatsUrl}
        transformationFunction={transformStatsToDataTable}
        title="Daily Stats"
        headers={["date", "impressions", "clicks", "revenue"]} // TODO IMMEDIATE - extract from data[0] after sorting has been fixed
        rowKeys={stat => stat.date.toString()}
        columnsTreatment={[
          stat => ({
            key: stat.date,
            display: stat.date.toLocaleString(locale, {
              timeZone: "UTC",
              dateStyle: "short",
              hour12: false
            }),
            align: "left"
          }),
          stat => ({
            key: stat.impressions,
            display: stat.impressions.toLocaleString(locale, {
              style: "decimal"
            }),
            align: "center"
          }),
          stat => ({
            key: stat.clicks,
            display: stat.clicks.toLocaleString(locale, {
              style: "decimal"
            }),
            align: "center"
          }),

          stat => ({
            key: stat.revenue,
            display: stat.revenue.toLocaleString(locale, {
              style: "currency",
              currencyDisplay: "symbol",
              currency: currency
            }),
            align: "right"
          })
        ]}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default StatsView;
