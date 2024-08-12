import React, { Suspense, useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes"; // Correct import
import Layout from "./components/layout/Layout"; // Correct import
import Loader from "./components/loader/Loader"; // Correct import
import { PricingProvider } from "./components/contextProvider/PricingProvider"; // Correct import
import './app.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    setLoading(true);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PricingProvider>
      <div className="flex justify-center items-center">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <Loader loading={loading} />
            </div>
          }
        >
          <Layout>
            <AppRoutes />
          </Layout>
        </Suspense>
      </div>
    </PricingProvider>
  );
}

export default App;
