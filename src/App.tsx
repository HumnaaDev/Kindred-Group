import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import StoreProvider from "./store/storeContext";

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
    </StoreProvider>
  );
}

export default App;
