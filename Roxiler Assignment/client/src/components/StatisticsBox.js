import React from 'react';

const StatisticsBox = ({ statistics = {} }) => {
  const {
    totalAmount = 0,
    totalItemsSold = 0,
    totalItemsNotSold = 0,
  } = statistics;

  return (
    <div className='Statics-data'>
      <h3>Statistics</h3>
      <div className='statics'>Total Sale : {totalAmount}</div>
      <div className='statics'>Total Sold Items: {totalItemsSold}</div>
      <div className='statics'>Total Not Sold Items: {totalItemsNotSold}</div>
    </div>
  );
};


export default StatisticsBox;
