import { createHashRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '@/components/Layout';

// Lazy load pages for better initial load performance
const Home = lazy(() => import('@/pages/Home'));
const Clinica = lazy(() => import('@/pages/Clinica'));
const Specialties = lazy(() => import('@/pages/Specialties'));
const Facilities = lazy(() => import('@/pages/Facilities'));
const Contact = lazy(() => import('@/pages/Contact'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-neutral-ice">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary-blue/30 border-t-primary-blue rounded-full animate-spin" />
      <p className="text-neutral-gray font-medium">Carregando...</p>
    </div>
  </div>
);

// Using HashRouter for GitHub Pages compatibility (static hosting)
const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Suspense fallback={<PageLoader />}><Home /></Suspense> },
      { path: 'clinica', element: <Suspense fallback={<PageLoader />}><Clinica /></Suspense> },
      { path: 'especialidades', element: <Suspense fallback={<PageLoader />}><Specialties /></Suspense> },
      { path: 'estrutura', element: <Suspense fallback={<PageLoader />}><Facilities /></Suspense> },
      { path: 'contato', element: <Suspense fallback={<PageLoader />}><Contact /></Suspense> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

