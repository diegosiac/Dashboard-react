import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../dashboard/pages/DashboardPage';
import { HomePage } from '../home/Pages/homePage';

export const AppRouter = () => {  
  
  return (
    <>
      <Routes>

        <Route path="/home" element={ <HomePage /> }/>
        <Route path="/dashboard/*" element={ <DashboardPage /> }/>

        <Route path="/*" element={ <Navigate to={"/home"}/> }/>
      </Routes>
    </>
  );
};
