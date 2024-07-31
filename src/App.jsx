import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  AboutPage,
  Landing,
  ProjectsPage,
  ProjectsCategorizedPage,
  PrivacyPolicy,
  OwnerShip,
} from './pages';
import { GlobalProvider, useGlobalContext } from './context/GlobalContext';
import { GlobalDataProvider } from './context/GlobalDataContext';

// loaders
import {loader as layoutLoader} from "./pages/Home"
import {loader as aboutLoader} from "./pages/AboutPage"
import {loader as projectsLoader} from "./pages/ProjectsPage"
import  {loader as projectsCatLoader} from "./pages/ProjectsCategorizedPage"
const Home = React.lazy(() => import('./pages/Home'));

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

const AppRouter = () => {
  const { isArabic } = useGlobalContext();
  const language = isArabic ? 'ar' : 'en';

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      ),
      loader: layoutLoader(queryClient, language),
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: '/about',
          element: <AboutPage />,
          loader: aboutLoader(queryClient, language),
        },
        {
          path: '/projects',
          element: <ProjectsPage />,
          loader: projectsLoader(queryClient, language),
        },
        {
          path: '/privacy',
          element: <PrivacyPolicy />,
        },
        {
          path: '/ownerShip',
          element: <OwnerShip />,
        },
       
        {
          path: '/projects/category/:cat',
          element: <ProjectsCategorizedPage />,
          loader: projectsCatLoader(queryClient, language),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <GlobalDataProvider>
          <AppRouter />
          <ReactQueryDevtools initialIsOpen={false} />
        </GlobalDataProvider>
      </GlobalProvider>
    </QueryClientProvider>
  );
}

export default App;
