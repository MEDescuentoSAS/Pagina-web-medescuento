/**
 * Hook personalizado para manejar el contador de visitas.
 * Ahora usa Firestore como backend global.
 * Mantiene Google Analytics y evita localStorage.
 */

import { useEffect, useState } from 'react';
import { db, doc, getDoc, updateDoc, increment, setDoc } from '@/lib/firebase';

export const useVisitCounter = () => {
  const [visitCount, setVisitCount] = useState<number>(22000); // valor inicial
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const recordVisit = async () => {
      try {
        setIsLoading(true);

        // 📌 Documento global en Firestore donde se almacenará el contador
        const counterRef = doc(db, "stats", "visits");

        // 📌 Verificar si el documento existe
        const snap = await getDoc(counterRef);

        let newCount = 0;

        if (snap.exists()) {
          // Si existe: obtener el contador actual
          const serverCount = snap.data().count || 22000;

          // 📌 Sumar +1 de forma segura
          await updateDoc(counterRef, {
            count: increment(1),
            lastUpdated: new Date().toISOString(),
          });

          newCount = serverCount + 1;
        } else {
          // Si no existe: crear el contador desde 22.000
          await setDoc(counterRef, {
            count: 22000,
            lastUpdated: new Date().toISOString(),
          });

          newCount = 22000;
        }

        // Actualizar estado local
        setVisitCount(newCount);
        setError(null);

        // 📊 Google Analytics (esto es tuyo, lo dejo tal cual)
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'visit_recorded', {
            visit_count: newCount,
            event_category: 'engagement',
            event_label: 'page_visit'
          });
        }

      } catch (err) {
        console.error("Error con Firestore:", err);
        setError("No se pudo actualizar el contador");
      } finally {
        setIsLoading(false);
      }
    };

    // Ejecutar solo una vez
    recordVisit();
  }, []);

  return { visitCount, isLoading, error };
};