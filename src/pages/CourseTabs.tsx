import React from 'react';
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { list, trophyOutline } from 'ionicons/icons';

import AllGoals from './AllGoals';
import Courses from './Courses';
import CourseGoals from './CourseGoals';

const CourseTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect path="/courses" to="/courses/all-goals" exact />
        <Switch>
          <Route path="/courses/list" exact>
            <Courses />
          </Route>
          <Route path="/courses/all-goals" exact>
            <AllGoals />
          </Route>
          <Route path="/courses/:courseId">
            <CourseGoals />
          </Route>
        </Switch>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="all-goals" href="/courses/all-goals">
          <IonIcon icon={list} />
          <IonLabel>All Goals</IonLabel>
        </IonTabButton>
        <IonTabButton tab="courses" href="/courses/list">
          <IonIcon icon={trophyOutline} />
          <IonLabel>Courses</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default CourseTabs;
