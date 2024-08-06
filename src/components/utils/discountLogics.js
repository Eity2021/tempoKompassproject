export const getBdtDiscountedPrice = (dxinfo) => {
  let bdyDiscountPrice = parseFloat(dxinfo?.vanudis / 100);
  let bdtYearlyPrice = parseFloat(dxinfo?.vubdt * 12);
  let bdtYearlyDiscountPrice = bdtYearlyPrice * bdyDiscountPrice;
  let bdtYearlyMainPrice = bdtYearlyPrice - bdtYearlyDiscountPrice;
  return bdtYearlyMainPrice;
};

export const getUsdDiscountedPrice = (dxinfo) => {
  let usdDiscountPrice = parseFloat(dxinfo?.vanudis / 100);
  let usdYearlyPrice = parseFloat(dxinfo?.vusd * 12);
  let usdYearlyDiscountPrice = usdYearlyPrice * usdDiscountPrice;
  let usdYearlyMainPrice = usdYearlyPrice - usdYearlyDiscountPrice;
  return usdYearlyMainPrice;
};

export const getYearlyBdtPrice = (dxinfo) => {
  let bdtYearlyPrice = parseFloat(dxinfo?.vubdt * 12);
  return bdtYearlyPrice;
};
export const getYearlyUsdPrice = (dxinfo) => {
  let usdYearlyPrice = parseFloat(dxinfo?.vusd * 12);
  return usdYearlyPrice;
};


export const getPerUserPriceBdt = (dxinfo) => {

   let  perUserPerMoBdt = parseFloat(dxinfo?.vubdt / dxinfo?.maxuser);
   return perUserPerMoBdt;
};

export const getPerUserPriceUsd = (dxinfo) => {

   let  perUserPerMoUsd = parseFloat(dxinfo?.vusd / dxinfo?.maxuser);
   return perUserPerMoUsd;
};
