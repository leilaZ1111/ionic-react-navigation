import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonPage,
  IonCol,
  IonRow,
  IonButton,
  IonButtons,
  IonIcon,
  isPlatform,
  IonFab,
  IonFabButton,
} from '@ionic/react';

import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // (ALTERNATIVE) we are importing the useHistory hook from the react-router-dom library. We will use this hook to set up the routing for our app.
import { addOutline } from 'ionicons/icons';
import AddCourseModal from '../components/AddCourseModal';
import CourseItem from '../components/CourseItem';

export const COURSE_DATA = [
  {
    id: 'c1',
    title: 'Ionic + React - The Practical Guide',
    enrolled: new Date('03/01/2024'),
    goals: [
      { id: 'c1g1', text: 'Finish the course!' },
      { id: 'c1g2', text: 'Learn a lot!' },
    ],
  },
  {
    id: 'c2',
    title: 'React.js - The Complete Guide',
    enrolled: new Date('02/01/2024'),
    goals: [
      { id: 'c2g1', text: 'Finish the course!' },
      { id: 'c2g2', text: 'Learn a lot!' },
    ],
  },
  {
    id: 'c3',
    title: 'JavaScript - The Complete Guide',
    enrolled: new Date('01/01/2024'),
    goals: [
      { id: 'c3g1', text: 'Finish the course!' },
      { id: 'c3g2', text: 'Learn a lot!' },
    ],
  },
];

const Courses: React.FC = () => {
  // const history = useHistory(); // (ALTERNATIVE) we are calling the useHistory hook. We will use this hook to set up the routing for our app.

  // const changePageHandler = () => {
  //   history.push('/course-goals'); // (ALTERNATIVE) we are calling the push() method on the history object. We will use this method to set up the routing for our app. We are passing the "/course-goals" path to the push() method. We are passing the "/course-goals" path to the push() method because we want to route to the /course-goals path, defined in App.tsx, when the button is clicked. //////////>>>>>>>>>> This is an alternative to using the routerLink prop that will work with the IonButton component and show as a "a" link when inspected in the browser.
  // };

  const [isAdding, setIsAdding] = useState(false);

  const startAddCourseHandler = () => {
    setIsAdding(true);
  };

  const cancelAddCourseHandler = () => {
    setIsAdding(false);
  };

  const courseAddHandler = (title: string, date: Date) => {};

  return (
    <React.Fragment>
      <AddCourseModal
        show={isAdding}
        onCancel={cancelAddCourseHandler}
        onSave={courseAddHandler}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Courses</IonTitle>
            {!isPlatform('android') && (
              <IonButtons slot="end">
                <IonButton onClick={startAddCourseHandler}>
                  <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {COURSE_DATA.map((course) => (
              <IonRow key={course.id}>
                <IonCol size-md="4" offset-md="4">
                  <CourseItem
                    title={course.title}
                    id={course.id}
                    enrolmentDate={course.enrolled}
                  />
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
          {isPlatform('android') && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={startAddCourseHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Courses;

// we need the return statement to return the JSX code that we want to render.

// (Initialy) We can't have multiple root elements in a React component. In this project, our root element is the <IonApp> component in src/App.tsx. So the React.Fragment component is a way to wrap multiple elements in a single root element. It's a way to trick React into thinking that we have a single root element, when in fact we have multiple elements. It doesn't render anything to the DOM, it's just a way to trick React into thinking that we have a single root element.
// (Now) The IonPage component is a component that we will use to wrap our app's routing. We will use the IonPage component to wrap the JSX code that we want to render. We will use the IonPage component to wrap the JSX code that we want to render because the IonPage component is a component that we will use to wrap our app's routing.

// The routerLink prop is a prop that we can pass to the IonButton component. It's a string prop that we can set to the path that we want to route to. In this case, we want to set it to "/course-goals" because we want to route to the /course-goals path, defined in App.tsx, when the button is clicked.

// (ALTERNATIVE)  <IonButton onClick={changePageHandler}>To Course Goals</IonButton>  is an alternative to using the routerLink prop. Unlike the routerLink prop, that will work with the IonButton component and show as a "a" link when inspected in the browser, the onClick prop will not show as a "a" link when inspected in the browser. Sometimes, we may want to use the onClick prop instead of the routerLink prop. For example, if we want to execute some JavaScript code when the button is clicked, then we may want to use the onClick prop instead of the routerLink prop.
