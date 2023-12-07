import { IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import React from 'react';

const Courses: React.FC = () => {
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2> This works - Courses page!</h2>
      </IonContent>
    </React.Fragment>
  );
};

export default Courses;
