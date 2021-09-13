import * as React from 'react'

declare global {
  interface Window {
    dataLayer: Record<string, string | number>[]

    google_optimize?: {
      get: (experimentId: string) => string
    }
  }
}

export const useOptimize = <T>(experimentId: string): number | null => {
  const [variant, setVariant] = React.useState<number | null>(null)

  React.useEffect(() => {
    (async () => {
      if (window.dataLayer) {
        await window.dataLayer.push({
          event: 'optimize.active'
        })
      }

      const intervalId = setInterval(() => {
        if (window.google_optimize) {
          const result = window.google_optimize.get(experimentId)

          console.log('!!!!!', result)
          setVariant(parseInt(result, 10))
          clearInterval(intervalId)
        }
      }, 100)
    })()
  }, [])

  return variant
}