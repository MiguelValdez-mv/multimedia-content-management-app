import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as AlertProvider } from "react-alert";

import { AppRouter } from "./router";
import { AuthProvider } from "./contexts/AuthProvider";
import { AlertTemplate } from "./components/layout/AlertTemplate";
import { Loader } from "./components/layout/Loader";
import { Col } from "./components/layout/Col";
import { useAuth } from "./hooks/useAuth";
import "./global.css";

const queryClient = new QueryClient();

function Wrapper() {
  const { isLoggedIn, user, isCheckingSession } = useAuth();

  return isCheckingSession ? (
    <Loader />
  ) : (
    <Col>
      <AppRouter />
    </Col>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AlertProvider template={AlertTemplate} timeout={5 * 1000}>
          <AuthProvider>
            <Wrapper />
          </AuthProvider>
        </AlertProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
