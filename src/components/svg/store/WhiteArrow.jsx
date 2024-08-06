import { forwardRef } from "react";

function Root(props, ref) {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.82593 18.5668L18.3459 7.04688" stroke="#002C13" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.98593 7.04688H18.3459V16.4068" stroke="#002C13" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
  );
}
const WhiteArrow = forwardRef(Root);
export default WhiteArrow;
