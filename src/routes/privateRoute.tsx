import { Account, Home, Order } from 'views/Home';

const privateRoute = {
  home: {
    path: '/home',
    name: 'Quản lý SUNNY Tours',
    component: <Home />,
  },
  order: {
    path: '/order',
    name: 'Quản lý đặt tours',
    component: <Order />,
  },
  accountUser: {
    path: '/account',
    name: 'Quản lý Tài khoản',
    component: <Account />,
  },
};

export default privateRoute;
