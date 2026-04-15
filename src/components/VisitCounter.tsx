import { useVisitCounter } from '@/hooks/useVisitCounter';
import { Eye } from 'lucide-react';

export const VisitCounter = () => {
  const { visitCount, isLoading, error } = useVisitCounter();

  return (
    <div className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-3 z-50">
      <Eye className="w-5 h-5" />

      <div className="text-sm font-semibold">
        {error ? (
          <span className="text-xs">Error</span>
        ) : isLoading ? (
          <span className="animate-pulse">Cargando...</span>
        ) : (
          <>
            <span className="block text-lg font-bold text-white">
              {(visitCount ?? 0).toLocaleString()}
            </span>
            <span className="block text-xs opacity-90">Visitas</span>
          </>
        )}
      </div>
    </div>
  );
};