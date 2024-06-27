import { Outlet } from "react-router-dom";
import { Suspense, memo } from "react";

const AppLayout = memo(() => {
  return (
    <Suspense fallback={null}>
      <div>
        <Outlet />
      </div>
    </Suspense>
  );
});

export default AppLayout;
