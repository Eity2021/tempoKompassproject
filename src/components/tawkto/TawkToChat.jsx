import React, { useEffect } from "react";

const TawkToChat = React.memo(() => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.onLoad = () => {
        
      };

      window.Tawk_API.onStatusChange = (status) => {
      
      };
    }
  }, []);

  return null; // Return null to render nothing
});

export default TawkToChat;

