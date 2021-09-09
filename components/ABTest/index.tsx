import useGoogleOptimize from '@react-hook/google-optimize'

import styles from '../../styles/ABTest.module.css'
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

  return (
    <div className={styles.container}>
      {!ContentsVariant ? <Default /> : <ContentsVariant />}
    </div>
  )
}