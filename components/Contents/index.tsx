import useGoogleOptimize from '@react-hook/google-optimize'

import styles from '../../styles/Contents.module.css'
import { A } from './A'
import { B } from './B'
import { C } from './C'
import { Default } from './Default'

export const Contents = () => {
  const experimentId = process.env.NEXT_PUBLIC_EXPERIMENT_ID ?? ''
  const ContentsVariant = useGoogleOptimize(
    experimentId,
    [A, B, C],
  )

  console.log(ContentsVariant)

  return (
    <div className={styles.container}>
      {!ContentsVariant ? <Default /> : <ContentsVariant />}
    </div>
  )
}