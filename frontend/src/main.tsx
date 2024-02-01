import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import HomePage from './pages/Home.tsx';
import LoginPage from './pages/Login.tsx';
import PlansPage from './pages/SubscriptionPlans.tsx';
import BrowsePage from './pages/Browse.tsx';
import WatchPage from './pages/Watch.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/plans" element={<PlansPage />} />
      <Route path="/browse" element={<BrowsePage />} />
      <Route path="/browse/watch/:id" element={<WatchPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
