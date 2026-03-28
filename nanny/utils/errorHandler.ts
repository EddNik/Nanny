import { ApiError } from 'next/dist/server/api-utils';
import toast from 'react-hot-toast';

export const handleApiError = (
  error: unknown,
  fallbackMessage = 'An error occurred',
) => {
  let message = fallbackMessage;

  if (error instanceof Error) {
    message = error.message;
  }

  toast.error(message);
};
