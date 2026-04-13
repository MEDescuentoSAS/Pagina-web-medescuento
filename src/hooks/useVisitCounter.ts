/**
 * Hook personalizado para manejar el contador de visitas.
 * Incluye fallback y manejo de errores.
 */
// Tipos e interfaces para garantizar el tipado estricto en el hook
import { useEffect, useState } from 'react';

interface VisitResponse {
  success: boolean;
  visits: number;
  lastUpdated?: string;
  error?: string;
}

export const useVisitCounter = () => {
  const [visitCount, setVisitCount] = useState<number>(22000);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const recordVisit = async () => {
      try {
        setIsLoading(true);
        
        let apiUrl = '/api/visits';
        // Uso de import.meta.env.MODE para detectar el entorno de ejecución (compatible con Vite)
        if (import.meta.env.MODE === 'development') {
          
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
          
          // Enviar evento a Google Analytics
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'visit_recorded', {
              'visit_count': data.visits,
              'timestamp': data.lastUpdated,
              'event_category': 'engagement',
              'event_label': 'page_visit'
            });
          }
        } else {
          throw new Error(data.error || 'Failed to record visit');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        // Aquí se maneja el error y se activa el fallback
        console.warn('Warning: Could not connect to API, using localStorage fallback:', errorMessage);
        setError(null); // No mostrar error al usuario, usar fallback silenciosamente
        
        // Fallback: usar localStorage si la API falla
        try {
          const localCount = localStorage.getItem('visitCount');
          const newCount = (parseInt(localCount || '22000', 10) || 22000) + 1;
          localStorage.setItem('visitCount', newCount.toString());
          setVisitCount(newCount);
          
          // Enviar evento a Google Analytics para fallback
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'visit_recorded_fallback', {
              'visit_count': newCount,
              'event_category': 'engagement',
              'event_label': 'offline_visit'
            });
          }
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
