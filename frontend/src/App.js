import { Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Payment from "./views/payment/Payment";
import OrdersTable from "./views/OrdersTable/OrdersTable";
import OrderDetailBdd from "./views/OrderDetailBdd/OrderDetailBdd";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/tabla-de-ordenes" component={OrdersTable} />
      <Route exact path="/order-detail/:id" component={OrderDetailBdd} />
    </div>
  );
}

export default App;