import useGoogleOptimize from '@react-hook/google-optimize'
import { useEffect } from 'react'

import styles from '../../styles/Contents.module.css'
import { useOptimize } from '../hooks/useOptimize'
import { A } from './A'
import { B } from './B'
import { C } from './C'
import { Default } from './Default'

export const Contents = () => {
  const experimentId = process.env.NEXT_PUBLIC_EXPERIMENT_ID ?? ''
  const variant = useOptimize(experimentId)

  console.log(variant)

  return (
    <div className={styles.container}>
      {/* {!ContentsVariant ? <Default /> : <ContentsVariant />} */}
    </div>
  )
}