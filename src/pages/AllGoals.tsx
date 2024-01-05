import React from 'react';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';

import { COURSE_DATA } from './Courses';

const AllGoals: React.FC = () => {
  const goals = COURSE_DATA.map((course) => {
    return course.goals.map((goal) => {
      return {
        id: goal.id,
        text: goal.text,
        courseTitle: course.title,
      };
    });
  }).reduce((goalArr, nestedGoals) => {
    let updatedGoalArray = goalArr;
    for (const goal of nestedGoals) {
      updatedGoalArray = updatedGoalArray.concat(goal);
    }
    return updatedGoalArray;
  }, []);

  console.log(goals);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>All goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {goals.map((goal) => (
            <IonItem key={goal.id}>
              <IonLabel>
                <h2>{goal.text}</h2>
                <p>{goal.courseTitle}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;

// we need the return statement to return the JSX code that we want to render.

// (Initialy) We can't have multiple root elements in a React component. In this project, our root element is the <IonApp> component in src/App.tsx. So the React.Fragment component is a way to wrap multiple elements in a single root element. It's a way to trick React into thinking that we have a single root element, when in fact we have multiple elements. It doesn't render anything to the DOM, it's just a way to trick React into thinking that we have a single root element.
// (Now) The IonPage component is a component that we will use to wrap our app's routing. We will use the IonPage component to wrap the JSX code that we want to render. We will use the IonPage component to wrap the JSX code that we want to render because the IonPage component is a component that we will use to wrap our app's routing.

// The routerLink prop is a prop that we can pass to the IonButton component. It's a string prop that we can set to the path that we want to route to. In this case, we want to set it to "/course-goals" because we want to route to the /course-goals path, defined in App.tsx, when the button is clicked.
