import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
          <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;