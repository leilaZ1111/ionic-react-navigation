import { Redirect, Route } from 'react-router-dom'; // we are importing the Redirect and Route components from the react-router-dom library. We will use these components to set up the routing for our app.
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonIcon,
  IonLabel,
  IonMenu,
  IonHeader,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle,
  IonToolbar,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router'; // we are importing the IonReactRouter component from the @ionic/react-router library. It's a component that we will use to wrap our app's routing.

import { list, options } from 'ionicons/icons';

import Home from './pages/Courses';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps  built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/theme.css';
import CourseTabs from './pages/CourseTabs';
import SideDrawer from './components/SideDrawer';
import Filter from './pages/Filter'; // we are importing the Filter component from the src/pages/Filter.tsx file. We will use this component to set up the routing for our app.

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <SideDrawer />
      <IonRouterOutlet id="main">
        <Route path="/filter" exact>
          <Filter />
        </Route>
        <Route path="/courses">
          <CourseTabs />
        </Route>
        <Redirect path="/" to="/courses/list" exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

// IonReactRouter component is a component that we will use to wrap our app's routing. We will use the Route component to set up the routing for our app.
// The Route component takes two props: path and component. The path prop is the path that we want to route to. The component prop is the component that we want to render when the path is matched. In this case, we want to render the Courses component when the path is matched.
// We also need to wrap the Route component in the IonRouterOutlet component. The IonRouterOutlet component is a component that we will use to wrap our app's routing.

// The "exact" prop is a prop that we can pass to the Route component. It's a boolean prop that we can set to true or false. If we set it to true, then the Route component will only render the component that we passed to the component prop if the path prop matches the path exactly. If we set it to false, then the Route component will render the component that we passed to the component prop if the path prop matches the path exactly or if the path prop matches the path plus any additional path segments. In this case, we want to set it to true because we only want to render the Courses component if the path prop matches the path exactly.

// The Redirect component is a component that we will use to set up the routing for our app, it serves to redirect the user to a specific path when none of the paths defined in the Route components match the path that the user is trying to access.

// The IonTabs component is a component that we will use to wrap our app's routing. We will use the IonTabs component to wrap the JSX code that we want to render. Tabs are a top level navigation component to implement a tab-based navigation. The component is a container of individual Tab components. https://ionicframework.com/docs/api/tabs

// The tab bar is a UI component that contains a set of tab buttons. A tab bar must be provided inside of tabs to communicate with each tab. https://ionicframework.com/docs/api/tab-bar

// The IonTabButton is a UI component that is placed inside of a tab bar. The tab button can specify the layout of the icon and label and connect to a tab view. https://ionicframework.com/docs/api/tab-button

// See the tabs documentation for more details on configuring tabs: https://ionicframework.com/docs/api/tabs
