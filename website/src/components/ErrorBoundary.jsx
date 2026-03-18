import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to monitoring service in production
    if (import.meta.env.PROD) {
      // Add your error tracking service here (e.g., Sentry)
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-white px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-black">Oops!</h1>
            <p className="mb-8 text-lg text-gray-600">
              Something went wrong. Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-lg bg-light-cream px-6 py-3 text-white transition-colors hover:bg-dark-cream"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
