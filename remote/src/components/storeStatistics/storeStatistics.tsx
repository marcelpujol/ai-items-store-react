import React from "react";
import Icon from "../icon/icon";
import "./storeStatistics.scss";

type StoreStatisticsProp = {
  total_items: number;
  total_price: number;
  max_price: number;
  min_price: number;
  avg_price: number;
};

const StoreStatistics: React.FC<StoreStatisticsProp> = ({
  total_items,
  total_price,
  max_price,
  min_price,
  avg_price,
}) => {
  const formatNumber = (num: number) =>
    num.toLocaleString("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="store-statistics-container">
      <h2 className="statistics-title">Store Statistics</h2>
      <div className="statistics-grid">
        <div className="statistic-card">
          <Icon icon={"tag"} customClass="icon" />
          <div className="statistic-content">
            <label>Number of items</label>
            <span>{total_items}</span>
          </div>
        </div>
        <div className="statistic-card">
          <Icon icon={"payments"} customClass="icon" />
          <div className="statistic-content">
            <label>Total price</label>
            <span>{formatNumber(+total_price)} €</span>
          </div>
        </div>
        <div className="statistic-card">
          <Icon icon={"trending_up"} customClass="icon" />
          <div className="statistic-content">
            <label>Average price</label>
            <span>{formatNumber(+avg_price)} €</span>
          </div>
        </div>
        <div className="statistic-card">
          <Icon icon={"arrow_upward"} customClass="icon" />
          <div className="statistic-content">
            <label>Maximum price</label>
            <span>{formatNumber(+max_price)} €</span>
          </div>
        </div>
        <div className="statistic-card">
          <Icon icon={"arrow_downward"} customClass="icon" />
          <div className="statistic-content">
            <label>Minimum price</label>
            <span>{formatNumber(+min_price)} €</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreStatistics;
