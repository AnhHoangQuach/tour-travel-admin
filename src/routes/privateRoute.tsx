import OrderList from 'views/Order/OrderList';
import { TravelList } from 'views/Travel';
import { UserList } from 'views/User';

const privateRoute = {
  home: {
    path: '/users',
    name: 'Danh sách người dùng',
    component: <UserList />,
  },
  travel: {
    path: '/travels',
    name: 'Danh sách tours',
    component: <TravelList />,
  },
  order: {
    path: '/orders',
    name: 'Danh sách orders',
    component: <OrderList />,
  },
};

export default privateRoute;
