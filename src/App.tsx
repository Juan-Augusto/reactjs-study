import { NavbarHeader } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { RouteListUseRoutes } from "./components/Routes/RouteList";


const App = () => {
  return (
    <main>
      <NavbarHeader />
        <RouteListUseRoutes />
      <Footer/>
    </main>
  );
};
export default App;
