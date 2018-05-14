// containers
import AppContainer from 'containers/app/AppContainer';
import HomeContainer from 'containers/home/HomeContainer';

// components

// ComponentName will itself get added to the routes to avoid any human error, but in case of AsyncComponents you have to enter on your own
const routesConfig = [{
	component: AppContainer,
    path: "/",
    routes: [
    {
	    component: HomeContainer,
	    componentName: 'HomeContainer',
	    path: "/"
	  }
  ]
}];

export default routesConfig;
