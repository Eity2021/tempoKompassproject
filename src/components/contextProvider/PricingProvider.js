import React, {
    createContext,
    useState,
    useEffect,
    useRef,
    useContext,
  } from "react";
  
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
  const orderInfo = JSON.parse(localStorage.getItem("orderInfo"));
  export const PricingContext = createContext();
  
  export const PricingProvider = ({ children }) => {
    const [cart, setCart] = useState(cartFromLocalStorage || []);
    const [toggleAppoint, setToggleAppoint] = useState(false);
    const [toggleLobby, setToggleLobby] = useState(false);
    const [togglePayroll, setTogglePayroll] = useState(false);
    const [order, setOrder] = useState(orderInfo);
    const [calculation, setCalculation] = useState("");
    const [userData, setUserData] = useState([]);
    const [paymentData, setPaymentData] = useState("");
    const [finalData, setFinalData] = useState([]);
    const [page, setPage] = useState("checkout");
    const [location, setLocation] = useState([]);
    const [promoCode, setPromoCode] = useState([]);
    const [pCode, setPCode] = useState([]);
    const [disable, setDisable] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [customizeModal, setCustomizeModal] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const[selectedView,setSelectedView] = useState('');
    const [eventView,setEventView] = useState([])
    const toggleDrawer = () => {
      setIsOpen(!isOpen);
    };
  
    const solutions = useRef();
    const partners = useRef();
  
    useEffect(() => {
      const controller = new AbortController();
      const { signal } = controller;
      fetch("https://api.hellokompass.com/geoloacation-info", { signal })
        .then((res) => res.json())
        .then((data) => {
          setLocation(data);
          // console.log(data);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            // console.log("request cancelled");
          }
        });
      return () => controller.abort();
    }, []);
  
    function submitData() {
      setFinalData((finalData) => [...finalData, userData]);
      setUserData("");
      setPage("checkout");
    }
  
    useEffect(() => {
      const controller = new AbortController();
      const { signal } = controller;
      fetch("https://api.hellokompass.com/country", { signal })
        .then((res) => res.json())
        .then((data) => {
          setPCode(data.data);
          // localStorage.setItem('pCode', JSON.stringify(data.data));
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("request cancelled");
          }
        });
      return () => controller.abort();
    }, []);

 
    return (
      <PricingContext.Provider
        value={{
          /* A state that is being passed down to the children. */
          cart,
          setCart,
          /* A state that is being passed down to the children. */
          toggleAppoint,
          setToggleAppoint,
          toggleLobby,
          setToggleLobby,
          togglePayroll,
          setTogglePayroll,
          /* A state that is being passed down to the children. */
          calculation,
          setCalculation,
          userData,
          setUserData,
          page,
          setPage,
          finalData,
          setFinalData,
          location,
          setLocation,
          paymentData,
          setPaymentData,
          order,
          setOrder,
          // submitData,
          disable,
          setDisable,
          solutions,
          partners,
          promoCode,
          setPromoCode,
          pCode,
          setPCode,
          modalVisible,
          setModalVisible,
          customizeModal,
          setCustomizeModal,
          isOpen,
          setIsOpen,
          toggleDrawer,
          selectedView,setSelectedView,
          eventView,setEventView,
        }}
      >
        {children}
      </PricingContext.Provider>
    );
  };
  
//   export default PricingProvider;


  export const useContextProvider = () => {
    return useContext(PricingContext);
  };
  