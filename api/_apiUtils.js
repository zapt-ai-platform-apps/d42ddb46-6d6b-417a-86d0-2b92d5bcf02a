import { initializeZapt } from '@zapt/zapt-js';
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.VITE_PUBLIC_APP_ID
    }
  }
});

const { supabase } = initializeZapt(process.env.VITE_PUBLIC_APP_ID);

export async function authenticateUser(req) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error('Missing Authorization header');
    }

    const token = authHeader.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error) {
      console.error('Authentication error:', error);
      Sentry.captureException(error);
      throw new Error('Invalid token');
    }

    return user;
  } catch (error) {
    console.error('Error in authenticateUser:', error);
    Sentry.captureException(error);
    throw error;
  }
}

export function captureError(error, context = {}) {
  console.error('API Error:', error);
  
  Sentry.withScope((scope) => {
    Object.entries(context).forEach(([key, value]) => {
      scope.setExtra(key, value);
    });
    Sentry.captureException(error);
  });
}