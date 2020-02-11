import React from "react";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import InterestIcon from "./InterestIcon";

export const PoisInterestIcon = ({ size }) => (
  <InterestIcon label="Pois" icon={faMapMarkerAlt} linkTo="/pois" size={size} />
);
