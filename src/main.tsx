import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

// taliwind css
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
);
