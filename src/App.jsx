import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AboutPage, Landing } from './pages';
import { GlobalProvider } from './context/GlobalContext';
import { GlobalDataProvider } from './context/GlobalDataContext';

// loaders

const Home = React.lazy(() => import('./pages/Home'));

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>loading....</div>}>
        <Home />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <GlobalDataProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </GlobalDataProvider>
      </GlobalProvider>
    </QueryClientProvider>
  );
}
export default App;
