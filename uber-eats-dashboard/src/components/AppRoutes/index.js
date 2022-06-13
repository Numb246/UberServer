import DetailedOrder from "../../modules/DetailedOrder";
import Orders from "../../modules/Orders";
import RestaurantMenu from "../../modules/RestaurantMenu";
import CreateMenuItem from "../../modules/CreateMenuItem";
import OrderHistory from "../../modules/OrderHistory";
import { Routes, Route } from 'react-router-dom';


const AppRoutes = () => {
    return (
        <Routes>
              <Route path="/" element={<Orders/>}/>
              <Route path="order/:id" element={<DetailedOrder/>}/>
              <Route path= "menu" element ={<RestaurantMenu />} />
              <Route path= "menu/create" element ={<CreateMenuItem />} />
              <Route path= "order-history" element ={<OrderHistory />} />
        </Routes>
    );
};

export default AppRoutes;