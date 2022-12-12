import Global from "./components/styles/Global";
import "react-toastify/dist/ReactToastify.min.css";
import { RoutesMain as Routes } from "./routes";
import { Providers } from "./components/Providers";

export const App = () => {
  return (
    <>
      <Global />
      <Providers>
        <Routes />
      </Providers>
    </>
  );
};
