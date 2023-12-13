import React from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonBackButton,
  IonButtons,
} from '@ionic/react';

const CourseGoals: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Course Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2> This works - Course goals page!</h2>
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;

// The IonPage component is a component that we will use to wrap our app's routing. We will use the IonPage component to wrap the JSX code that we want to render. We will use the IonPage component to wrap the JSX code that we want to render because the IonPage component is a component that we will use to wrap our app's routing.

// The defaultHref prop is a prop that we can pass to the IonBackButton component. It's a string prop that we can set to the path that we want to route to. In this case, we want to set it to "/" because we want to route to the / path, defined in App.tsx, when the back button is clicked.
