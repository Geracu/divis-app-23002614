import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonText } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [quetzales, setQuetzales] = useState<number | null>(null);
  const [dollars, setDollars] = useState<number | null>(null);

  const conversionRate = 8;

  const handleConvert = () => {
    if (quetzales !== null) {
      setDollars(quetzales / conversionRate);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DivisApp 23002614</IonTitle> 
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>
          <h2>Conversor de Divisas</h2>
        </IonText>
        <IonInput
          placeholder="Ingrese la cantidad en Quetzales"
          type="number"
          value={quetzales !== null ? quetzales : ''}
          onIonChange={(e) => setQuetzales(Number(e.detail.value))}
          clearInput
        />
        <IonButton expand="block" onClick={handleConvert}>
          Convertir a Dolares
        </IonButton>
        {dollars !== null && (
          <IonText>
            <h3>{quetzales} Quetzales = ${dollars.toFixed(2)} Dollars</h3>
          </IonText>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
