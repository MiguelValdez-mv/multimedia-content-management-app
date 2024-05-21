import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as AlertProvider } from "react-alert";

import { AppRouter } from "./router";
import { AuthProvider } from "./contexts/AuthProvider";
import { AlertTemplate } from "./components/layout/AlertTemplate";
import "./global.css";

const queryClient = new QueryClient();

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AlertProvider template={AlertTemplate} timeout={5 * 1000}>
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </AlertProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
