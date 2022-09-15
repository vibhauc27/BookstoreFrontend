import logo from './logo.svg';
import './App.css';
import Login from './components/LoginPage/login';
import SignUp from './components/SignUpPage/signup';
import Dashboard from './components/Dashboard/dashboard';
import HomePage from './components/Header/Header';
import Header from './components/Header/Header';
import Book from './components/Book/Book';
import DashboardTwo from './components/Dashboard/dashboardTwo';
import BookDetail from './components/BookDetail/BookDetail';
import Wishlist from './components/Wishlist/Wishlist';
import PlusorMinus from './components/AddtoBag/PlusorMinus';
import MyCart from './components/MyCart/MyCart';
import CustomerDetail from './components/CustomerDetails/CustomerDetail';
import OrderSummary from './components/OrderSummary/OrderSummary';
import Success from './components/Success/Success';
import MyCartDashboard from './components/MyCart/MyCartDashboard';
// import Router from './components/Router/Router';
// import { Provider } from 'react-redux';
// import store from './components/redux/store';
import Router from './components/Router/Router';

function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Dashboard /> */}
      {/* <Header /> */}
      {/* <Book /> */}
      <DashboardTwo />
      {/* <BookDetail /> */}
      {/* <Wishlist /> */}
      {/* <PlusorMinus /> */}
      {/* <MyCart /> */}
      {/* <MyCartDashboard /> */}
      {/* <CustomerDetail /> */}
      {/* <OrderSummary /> */}
      {/* <Success /> */}

      {/* <Provider store={store}>
        <Router />
      </Provider> */}

      {/* <Router /> */}

       
    </div>
  );
}

export default App;
