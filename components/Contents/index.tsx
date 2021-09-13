import styles from '../../styles/Contents.module.css'
import { useOptimize } from '../hooks/useOptimize'
import { A } from './A'
import { B } from './B'
import { C } from './C'
import { Default } from './Default'

export const Contents = () => {
  const experimentId = process.env.NEXT_PUBLIC_EXPERIMENT_ID_B ?? ''
  const variant = useOptimize(experimentId)
  const ContentsVariant = variant !== null ? [A, B, C][variant] : null

  console.log('Content Variant', variant, experimentId)

  return (
    <div className={styles.container}>
      {!ContentsVariant ? <Default /> : <ContentsVariant />}
    </div>
  )
}