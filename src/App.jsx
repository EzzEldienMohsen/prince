import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {Home, Landing} from "./pages"
import { GlobalProvider } from './context/GlobalContext';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index:true,
        element:<Landing/>
      }
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <GlobalProvider>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </GlobalProvider>
    </QueryClientProvider>
  );
}
export default App;
