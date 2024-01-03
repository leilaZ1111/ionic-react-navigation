import React from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonBackButton,
  IonButtons,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { useParams } from 'react-router-dom'; // we are importing the useParams hook from the react-router-dom library. We will use this hook to set up the routing for our app.

import { COURSE_DATA } from './Courses';

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string }>().courseId; // we are calling the useParams hook. We will use this hook to set up the routing for our app.

  const selectedCourse = COURSE_DATA.find((c) => c.id === selectedCourseId);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>
            {selectedCourse ? selectedCourse.title : 'No course found!'}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {selectedCourse &&
            selectedCourse.goals.map((goal) => (
              <IonItem key={goal.id} lines="full">
                <IonLabel>{goal.text}</IonLabel>
              </IonItem>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;

// The IonPage component is a component that we will use to wrap our app's routing. We will use the IonPage component to wrap the JSX code that we want to render. We will use the IonPage component to wrap the JSX code that we want to render because the IonPage component is a component that we will use to wrap our app's routing.

// The defaultHref prop is a prop that we can pass to the IonBackButton component. It's a string prop that we can set to the path that we want to route to. In this case, we want to set it to "/" because we want to route to the / path, defined in App.tsx, when the back button is clicked.
