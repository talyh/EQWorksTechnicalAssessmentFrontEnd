import React from "react";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import InterestIcon from "./InterestIcon";

export const StatsInterestIcon = ({ size }) => (
  <InterestIcon label="Stats" icon={faTable} linkTo="/stats" size={size} />
);
