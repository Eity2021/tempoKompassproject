import { forwardRef } from "react";

function Root() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.3330 3.95663L30.0430 0.666626L17 13.71L3.95669 0.666626L0.666687 3.95663L13.71 17L0.666687 30.0433L3.95669 33.3333L17 20.29L30.0430 33.3333L33.3330 30.0433L20.29 17L33.3330 3.95663Z"
        fill="#555353"
      />
    </svg>
  );
}
const BlackClose = forwardRef(Root);
export default BlackClose;
