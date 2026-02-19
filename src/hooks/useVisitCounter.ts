import { useEffect, useState } from 'react';

interface VisitResponse {
  success: boolean;
  visits: number;
  lastUpdated?: string;
  error?: string;
}

export const useVisitCounter = () => {
  const [visitCount, setVisitCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const recordVisit = async () => {
      try {
        setIsLoading(true);
        
        // Intentar usar la API de Vercel
        let apiUrl = '/api/visits';
        
        // Si está en desarrollo y no está en Vercel, usar localhost
        if (process.env.NODE_ENV === 'development') {
          // En desarrollo, la API estará en el mismo servidor Vite
          apiUrl = '/api/visits';
        }

        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to record visit: ${response.statusText}`);
        }

        const data: VisitResponse = await response.json();
        
        if (data.success) {
          setVisitCount(data.visits);
          setError(null);
        } else {
          throw new Error(data.error || 'Failed to record visit');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        console.warn('Warning: Could not connect to API, using localStorage fallback:', errorMessage);
        setError(null); // No mostrar error al usuario, usar fallback silenciosamente
        
        // Fallback: usar localStorage si la API falla
        try {
          const localCount = localStorage.getItem('visitCount');
          const newCount = (parseInt(localCount || '0', 10) || 0) + 1;
          localStorage.setItem('visitCount', newCount.toString());
          setVisitCount(newCount);
        } catch (storageError) {
          console.error('Storage error:', storageError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    // Registrar la visita solo una vez cuando el componente se monta
    recordVisit();
  }, []);

  return { visitCount, isLoading, error };
};
