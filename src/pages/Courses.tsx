import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonPage,
} from '@ionic/react';

import React from 'react';

const Courses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2> This works - Courses page!</h2>
        <div>
          <IonButton routerLink="/course-goals">To Course Goals</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Courses;

// we need the return statement to return the JSX code that we want to render.

// (Initialy) We can't have multiple root elements in a React component. In this project, our root element is the <IonApp> component in src/App.tsx. So the React.Fragment component is a way to wrap multiple elements in a single root element. It's a way to trick React into thinking that we have a single root element, when in fact we have multiple elements. It doesn't render anything to the DOM, it's just a way to trick React into thinking that we have a single root element.
// (Now) The IonPage component is a component that we will use to wrap our app's routing. We will use the IonPage component to wrap the JSX code that we want to render. We will use the IonPage component to wrap the JSX code that we want to render because the IonPage component is a component that we will use to wrap our app's routing.

// The routerLink prop is a prop that we can pass to the IonButton component. It's a string prop that we can set to the path that we want to route to. In this case, we want to set it to "/course-goals" because we want to route to the /course-goals path, defined in App.tsx, when the button is clicked.
