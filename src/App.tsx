import { NavbarHeader } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { RouteListRoutes, RouteListUseRoutes } from "./components/Routes/RouteList";


const App = () => {
  return (
    <main>
      <NavbarHeader />
        <RouteListUseRoutes />
        <RouteListRoutes />
      <Footer/>
    </main>
  );
};
export default App;
