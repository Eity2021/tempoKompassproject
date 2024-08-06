import React from "react";
import { routes } from "../../constant";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import { useContextProvider } from "../contextProvider/PricingProvider";
export default function Navigation() {
  // const [isOpen,setIsOpen] = useState(false);

  const { isOpen, toggleDrawer } = useContextProvider();

  return (
    <div>
      <Drawer
        routes={routes}
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
      ></Drawer>
      <Navbar routes={routes} toggleDrawer={toggleDrawer} />
    </div>
  );
}
