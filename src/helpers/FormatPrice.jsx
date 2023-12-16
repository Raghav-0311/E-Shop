import React from 'react'

const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price / 1);
};

export default FormatPrice
