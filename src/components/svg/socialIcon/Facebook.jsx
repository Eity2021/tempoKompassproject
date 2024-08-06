import { forwardRef } from "react";

function Root(props, ref) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <circle cx="24" cy="24" r="24" fill="#fff" />
      <path
        d="M33.3414 30.9368L34.4055 23.9991H27.7488V19.4969C27.7488 17.5988 28.6787 15.7487 31.6602 15.7487H34.6868V9.84226C34.6868 9.84226 31.94 9.37349 29.3141 9.37349C23.8316 9.37349 20.2484 12.6961 20.2484 18.7114V23.9991H14.1543V30.9368H20.2484V47.7084C21.4704 47.9001 22.7228 48 23.9986 48C25.2744 48 26.5269 47.9001 27.7488 47.7084V30.9368H33.3414"
        fill="#12a9b2"
      />
    </svg>
  );
}
const FaceBook = forwardRef(Root);
export default FaceBook;
