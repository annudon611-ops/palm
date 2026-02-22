import { useCallback } from 'react';
import { toast } from '../components/ui/Toast';

/**
 * 🪝 useToast
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A simple hook to trigger glassmorphism notifications.
 * 
 * Usage:
 * const { showToast } = useToast();
 * showToast("Reading Complete", "success");
 */
const useToast = () => {
  const showToast = useCallback((message, type = 'info', duration = 3000) => {
    toast.show(message, type, duration);
  }, []);

  const success = useCallback((message, duration = 3000) => {
    toast.success(message, duration);
  }, []);

  const error = useCallback((message, duration = 3000) => {
    toast.error(message, duration);
  }, []);

  const info = useCallback((message, duration = 3000) => {
    toast.info(message, duration);
  }, []);

  return {
    showToast,
    success,
    error,
    info
  };
};

export default useToast;
