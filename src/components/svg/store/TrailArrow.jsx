import { forwardRef } from "react";

function Root(props, ref) {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.83093 18.0468L18.3509 6.52686" stroke="white" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.99097 6.52686H18.3509V15.8868" stroke="white" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  );
}
const TrailArrow = forwardRef(Root);
export default TrailArrow;
