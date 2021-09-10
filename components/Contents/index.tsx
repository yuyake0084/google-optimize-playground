import useGoogleOptimize from '@react-hook/google-optimize'
import { useEffect } from 'react'

import styles from '../../styles/Contents.module.css'
import { A } from './A'
import { B } from './B'
import { C } from './C'
import { Default } from './Default'

declare global {
  interface Window {
    google_optimize: {
      get: (experimentId: string) => number
    }
  }
}


export const Contents = () => {
  const experimentId = process.env.NEXT_PUBLIC_EXPERIMENT_ID ?? ''
  const ContentsVariant = useGoogleOptimize(
    experimentId,
    [A, B, C],
  )

  useEffect(() => {
    const variant = window.google_optimize.get(experimentId);

    console.log(ContentsVariant, variant)
  }, [])
  

  return (
    <div className={styles.container}>
      {!ContentsVariant ? <Default /> : <ContentsVariant />}
    </div>
  )
}