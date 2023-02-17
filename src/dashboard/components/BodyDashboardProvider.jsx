import { QueryClient, QueryClientProvider } from 'react-query';
import { BodyDashboard } from './';

export const BodyDashboardProvider = () => {

    
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <BodyDashboard />
    </QueryClientProvider>
  );
};
