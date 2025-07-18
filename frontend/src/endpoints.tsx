export const backendPath = import.meta.env.PROD
  ? import.meta.env.VITE_BACKEND_PROD
  : import.meta.env.VITE_BACKEND_DEV;