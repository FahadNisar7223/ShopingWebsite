import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignupContainer from "./container/signUpContainer";
import CategoriesContainer from "./container/categoriesContainer";
import CartContainer from "./container/cartContainer";
import ProductsContainer from "./container/productsContainer";
import HomeContainer from "./container/homeContainer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/signup" element={<SignupContainer />} />
          <Route
            path="/categories/:buttonText"
            element={<CategoriesContainer />}
          />
          <Route path="/products/:productId" element={<ProductsContainer />} />
          <Route path="/cart/:userId" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
