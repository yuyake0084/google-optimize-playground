import useGoogleOptimize from '@react-hook/google-optimize'

import { A } from './A'
import { B } from './B'
import { C } from './C'
import { Default } from './Default'

export const ABTest = () => {
  const experimentId = process.env.NEXT_PUBLIC_EXPERIMENT_ID ?? ''
  const ContentsVariant = useGoogleOptimize(
    experimentId,
    [A, B, C],
  )

  console.log('experimentId', experimentId)

  return !ContentsVariant ? <Default /> : <ContentsVariant />
}