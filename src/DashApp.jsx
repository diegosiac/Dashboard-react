import { DashProvider } from './dashboard/context/DashProvider';
import { AppRouter } from './router/AppRouter';

export const DashApp = () => {
  return (
    <DashProvider>
        <AppRouter/>
    </DashProvider>
  );
};
