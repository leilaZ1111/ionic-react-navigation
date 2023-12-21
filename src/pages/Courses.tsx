import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonCard,
  IonCardContent,
  IonPage,
  IonCol,
  IonRow,
  IonButton,
} from '@ionic/react';

import React from 'react';
// import { useHistory } from 'react-router-dom'; // (ALTERNATIVE) we are importing the useHistory hook from the react-router-dom library. We will use this hook to set up the routing for our app.

const COURSE_DATA = [
  { id: 'c1', title: 'Ionic + React - The Practical Guide' },
  { id: 'c2', title: 'React.js - The Complete Guide' },
  { id: 'c3', title: 'JavaScript - The Complete Guide' },
];

const Courses: React.FC = () => {
  // const history = useHistory(); // (ALTERNATIVE) we are calling the useHistory hook. We will use this hook to set up the routing for our app.

  // const changePageHandler = () => {
  //   history.push('/course-goals'); // (ALTERNATIVE) we are calling the push() method on the history object. We will use this method to set up the routing for our app. We are passing the "/course-goals" path to the push() method. We are passing the "/course-goals" path to the push() method because we want to route to the /course-goals path, defined in App.tsx, when the button is clicked. //////////>>>>>>>>>> This is an alternative to using the routerLink prop that will work with the IonButton component and show as a "a" link when inspected in the browser.
  // };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {COURSE_DATA.map((course) => (
            <IonRow key={course.id}>
              <IonCol size-md="4" offset-md="4">
                <IonCard>
                  <IonCardContent>
                    <h2 className="ion-text-center">{course.title}</h2>
                    <IonButton routerLink="">View Course Goals</IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Courses;

// we need the return statement to return the JSX code that we want to render.

// (Initialy) We can't have multiple root elements in a React component. In this project, our root element is the <IonApp> component in src/App.tsx. So the React.Fragment component is a way to wrap multiple elements in a single root element. It's a way to trick React into thinking that we have a single root element, when in fact we have multiple elements. It doesn't render anything to the DOM, it's just a way to trick React into thinking that we have a single root element.
// (Now) The IonPage component is a component that we will use to wrap our app's routing. We will use the IonPage component to wrap the JSX code that we want to render. We will use the IonPage component to wrap the JSX code that we want to render because the IonPage component is a component that we will use to wrap our app's routing.

// The routerLink prop is a prop that we can pass to the IonButton component. It's a string prop that we can set to the path that we want to route to. In this case, we want to set it to "/course-goals" because we want to route to the /course-goals path, defined in App.tsx, when the button is clicked.

// (ALTERNATIVE)  <IonButton onClick={changePageHandler}>To Course Goals</IonButton>  is an alternative to using the routerLink prop. Unlike the routerLink prop, that will work with the IonButton component and show as a "a" link when inspected in the browser, the onClick prop will not show as a "a" link when inspected in the browser. Sometimes, we may want to use the onClick prop instead of the routerLink prop. For example, if we want to execute some JavaScript code when the button is clicked, then we may want to use the onClick prop instead of the routerLink prop.
