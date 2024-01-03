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
  IonButton,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonFabButton,
  IonFab,
  isPlatform,
} from '@ionic/react';
import { useParams } from 'react-router-dom'; // we are importing the useParams hook from the react-router-dom library. We will use this hook to set up the routing for our app.
import { create, trash, addOutline } from 'ionicons/icons';

import { COURSE_DATA } from './Courses';

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string }>().courseId; // we are calling the useParams hook. We will use this hook to set up the routing for our app.

  const selectedCourse = COURSE_DATA.find((c) => c.id === selectedCourseId);

  const detleteGoalHandler = () => {
    console.log('Deleted...');
  };

  const startEditGoalHandler = (event: React.MouseEvent) => {
    event.stopPropagation(); // we are calling the stopPropagation() method on the event object. We are calling the stopPropagation() method on the event object because we want to stop the event from bubbling up to the parent element.
    console.log('Editing...');
  };

  const startAddGoalHandler = () => {
    console.log('Adding...');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/courses/list" />
          </IonButtons>
          <IonTitle>
            {selectedCourse ? selectedCourse.title : 'No course found!'}
          </IonTitle>
          {!isPlatform('android') && (
            <IonButtons slot="end">
              <IonButton onClick={startAddGoalHandler}>
                <IonIcon slot="icon-only" icon={addOutline} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {selectedCourse && (
          <IonList>
            {selectedCourse.goals.map((goal) => (
              <IonItemSliding key={goal.id}>
                <IonItemOptions side="start">
                  <IonItemOption onClick={detleteGoalHandler} color="danger">
                    <IonIcon slot="icon-only" icon={trash} />
                  </IonItemOption>
                </IonItemOptions>
                <IonItem
                  lines="full"
                  // button
                  // onClick={detleteItemmHandler}
                >
                  <IonLabel>{goal.text}</IonLabel>
                  {/* <IonButton
                  fill="clear"
                  color="dark"
                  slot="end"
                  onClick={startEditGoalHandler}
                >
                  <IonIcon slot="icon-only" icon={create} />
                </IonButton> */}
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption onClick={startEditGoalHandler}>
                    <IonIcon slot="icon-only" icon={create} />
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
          </IonList>
        )}
        {isPlatform('android') && (
          <IonFab horizontal="end" vertical="bottom" slot="fixed">
            <IonFabButton color="secondary" onClick={startAddGoalHandler}>
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;

// The IonPage component is a component that we will use to wrap our app's routing. We will use the IonPage component to wrap the JSX code that we want to render. We will use the IonPage component to wrap the JSX code that we want to render because the IonPage component is a component that we will use to wrap our app's routing.

// The defaultHref prop is a prop that we can pass to the IonBackButton component. It's a string prop that we can set to the path that we want to route to. In this case, we want to set it to "/" because we want to route to the / path, defined in App.tsx, when the back button is clicked.
