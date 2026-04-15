import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { doc, runTransaction, serverTimestamp } from 'firebase/firestore';

const INITIAL_COUNT = 22000;

export const useVisitCounter = () => {
  const [visitCount, setVisitCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const recordVisit = async () => {
      try {
        const counterRef = doc(db, "stats", "visits");

        const newCount = await runTransaction(db, async (tx) => {
          const snap = await tx.get(counterRef);

          if (!snap.exists()) {
            const initial = INITIAL_COUNT + 1;

            tx.set(counterRef, {
              count: initial,
              lastUpdated: serverTimestamp(),
            });

            return initial;
          }

          const current = snap.data().count ?? INITIAL_COUNT;
          const updated = current + 1;

          tx.update(counterRef, {
            count: updated,
            lastUpdated: serverTimestamp(),
          });

          return updated;
        });

        setVisitCount(newCount);
      } catch (err) {
        console.error("Error contador visitas:", err);
        setError("No se pudo actualizar el contador");
      } finally {
        setIsLoading(false);
      }
    };

    recordVisit();
  }, []);

  return { visitCount, isLoading, error };
};