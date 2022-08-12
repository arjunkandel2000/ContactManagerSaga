import Login from '../views/Login';
import Register from '../views/Register';
import Dashboard from '../views/Dashboard';
import Topic from '../views/Topic';
import SubTopic from '../views/SubTopic';
import LoaderSample from '../views/LoaderSample';
import Users from '../views/Users';
import AddUser from '../views/Users/AddUser';
import EditUser from '../views/Users/EditUser';
import NaxaMapperProjects from '../views/NaxaMapperProjects';
import Cars from '../views/Cars';

const indexRoutes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/user', name: 'Users', component: Users },
  { path: '/add', name: 'AddUser', component: AddUser },
  { path: '/edit/:id', name: 'EditUser', component: EditUser },
  { path: '/cars', name: 'Cars', component: Cars },
  { path: '/projects', name: 'NaxaMapperProjects', component: NaxaMapperProjects },
  {
    path: '/topics',
    name: 'Topic',
    component: [
      { path: '/topics/subtopic', name: 'Sub Topic', component: SubTopic },
      { path: null, name: 'Topic', component: Topic },
    ],
  },
  { path: '/actionloader', name: 'Loaders', component: LoaderSample },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    authenticated: true,
  },
];

export default indexRoutes;
