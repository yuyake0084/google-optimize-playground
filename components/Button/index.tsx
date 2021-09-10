import useGoogleOptimize from '@react-hook/google-optimize'

import { A } from './A'
import { B } from './B'
import { C } from './C'

export const Button = () => {
  const experimentId = process.env.NEXT_PUBLIC_EXPERIMENT_ID ?? ''
  const ContentsVariant = useGoogleOptimize(
    experimentId,
    [A, B, C],
  )
  
  return (
    <>
    {!ContentsVariant
      ? <><A /></>
      : <ContentsVariant />
    }
    </>
  )
}