'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; reset: () => void }>
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return <FallbackComponent error={this.state.error} reset={this.reset} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({
  error,
  reset,
}: {
  error?: Error
  reset: () => void
}) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='text-center p-8'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
          Something went wrong
        </h2>
        <p className='text-gray-600 mb-6'>
          We apologize for the inconvenience. Please try refreshing the page.
        </p>
        {error && (
          <details className='mb-6 text-left'>
            <summary className='cursor-pointer text-sm text-gray-500'>
              Error details
            </summary>
            <pre className='mt-2 text-xs text-red-600 bg-red-50 p-2 rounded'>
              {error.message}
            </pre>
          </details>
        )}
        <Button
          onClick={reset}
          className='bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors'
        >
          Try again
        </Button>
      </div>
    </div>
  )
}

export default ErrorBoundary
