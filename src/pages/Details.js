import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getItem } from "../redux/actions";
import "./details.scss";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const itemDetail = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getItem(id));
  }, [dispatch, id]);

  return (
    <div className="details-container">
      <span>city ID: {itemDetail.cityid}</span>
      <span>date inserted: {itemDetail["date-insert"]}</span>
      <span>icon code: {itemDetail.iconcode}</span>
      <span>last report time: {itemDetail.lastreporttime}</span>
      <span>lat: {itemDetail.latitude}</span>
      <span>long: {itemDetail.longitude}</span>
      <span>name: {itemDetail.name}</span>
      <span>prob precip: {itemDetail.probabilityofprecip}</span>
      <span>relative humid.: {itemDetail.relativehumidity}</span>
      <span>sky desc. long: {itemDetail.skydescriptionlong}</span>
      <span>state: {itemDetail.state}</span>
      <span>state abbr: {itemDetail.stateabbr}</span>
      <span>tempc: {itemDetail.tempc}</span>
      <span>validate utc: {itemDetail.validdateutc}</span>
      <span>wind direction: {itemDetail.winddirectioncardinal}</span>
      <span>wind speed: {itemDetail.windspeedkm}</span>
    </div>
  );
};

export default Details;
