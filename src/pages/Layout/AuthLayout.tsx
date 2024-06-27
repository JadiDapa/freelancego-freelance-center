import { Outlet } from "react-router-dom";
import { Suspense, memo } from "react";

const AuthLayout = memo(() => {
  return (
    <Suspense fallback={null}>
      <div>
        <Outlet />
      </div>
    </Suspense>
  );
});

export default AuthLayout;
