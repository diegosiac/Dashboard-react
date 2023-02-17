import { BodyDashboardProvider, NavBar } from '../components';
import { Footer } from '../../components/Footer';

export const DashboardPage = () => {

  return (
    <>
      <NavBar /> 
      <BodyDashboardProvider/>
      <Footer/>
    </>
  );
};
