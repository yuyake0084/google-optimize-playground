import { useOptimize } from '../hooks/useOptimize'

import { Default } from './Default'
import { A } from './A'
import { B } from './B'
import { C } from './C'

export const Button = () => {
  const experimentId = process.env.NEXT_PUBLIC_EXPERIMENT_ID_A ?? ''
  const variant = useOptimize(experimentId)
  const ContentsVariant = variant !== null ? [A, B, C][variant] : null
  
  console.log('Button Variant', variant, experimentId)

  return (
    <>
    {!ContentsVariant
      ? <Default />
      : <ContentsVariant />
    }
    </>
  )
}