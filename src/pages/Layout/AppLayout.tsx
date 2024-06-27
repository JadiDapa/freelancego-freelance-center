import { Outlet } from "react-router-dom";
import { Suspense, memo } from "react";
import Navbar from "@/components/App/Navbar";
import Footer from "@/components/App/Footer";

const AppLayout = memo(() => {
  return (
    <Suspense fallback={null}>
      <div className="overflow-hidden font-mulish">
        <Navbar />
        <div className="mt-20">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Suspense>
  );
});

export default AppLayout;
