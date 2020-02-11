import React from "react";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import InterestIcon from "./InterestIcon";

export const EventsInterestIcon = ({ size }) => (
  <InterestIcon label="Events" icon={faChartBar} linkTo="/events" size={size} />
);
