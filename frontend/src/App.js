import { Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Payment from "./views/payment/Payment";
import OrdersTable from "./views/OrdersTable/OrdersTable";
import OrderDetailBdd from "./views/OrderDetailBdd/OrderDetailBdd";
import AfterTransfer from "./views/AfterOrders/AfterTransfer";
import AfterMpDenied from "./views/AfterOrders/AfterMpDenied";
import AfterMpPendient from "./views/AfterOrders/AfterMpPendient";
import AfterMpSuccess from "./views/AfterOrders/AfterMpSuccess";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/tabla-de-ordenes" component={OrdersTable} />
      <Route exact path="/order-detail/:id" component={OrderDetailBdd} />
      <Route exact path="/order-transferencia/:orden" component={AfterTransfer} />
      <Route exact path="/order-mp/:orden" component={AfterMpSuccess} />
      <Route exact path="/order-mp-pendiente/:orden" component={AfterMpPendient} />
      <Route exact path="/order-mp-rechazada/:orden" component={AfterMpDenied} />
    </div>
  );
}

export default App;