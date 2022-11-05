import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./components";
import { AdManagement, Dashboard } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/ad-management" element={<AdManagement />} />
      </Route>
    </Routes>
  );
};

export default App;
