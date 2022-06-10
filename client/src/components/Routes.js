import { useLocation, Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { RequireAuth } from "./auth/RequireAuth";
import { PersistLogin } from "./auth/PersistLogin";

import { Layout } from "./Layout";

import { HomePage } from "./pages/HomePage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { UnauthorizedPage } from "./pages/UnauthorizedPage";
import { ProfilePage } from "./pages/ProfilePage";
import { PostsByTagsPage } from "./pages/PostsByTagsPage";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

export const AllRoutes = ({ toggle }) => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout toggle={toggle} />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="unauthorized" element={<UnauthorizedPage />} />

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/:id" element={<ProfilePage />} />
              <Route path="/tags/:id" element={<PostsByTagsPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
