import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

const AppTable = Loadable(lazy(() => import('./tables/AppTable')));
const AppForm = Loadable(lazy(() => import('./forms/AppForm')));
const AppButton = Loadable(lazy(() => import('./buttons/AppButton')));

const AppAutoComplete = Loadable(lazy(() => import('./auto-complete/AppAutoComplete')));


const materialRoutes = [
  { path: '/material/table', element: <AppTable /> },
  { path: '/material/form', element: <AppForm /> },
  { path: '/material/buttons', element: <AppButton /> },

  { path: '/material/autocomplete', element: <AppAutoComplete /> },


];

export default materialRoutes;
