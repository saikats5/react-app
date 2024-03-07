import { useState, useMemo, useCallback } from 'react'
import ChildPureComponent from './purecomponentFuncChild'

const PureComponent = () => {
  const [count, setCount] = useState(0)
  const [anotherCount, setAnotherCount] = useState(0)
  const data = useMemo(() => [1, 2], [])
  const multiplyDataMemo = useMemo(
    function multiplyData() {
      console.log('INSIDE MULTIPLY')
      return count * 5
    },
    [count]
  )
  const func = useCallback(() => {}, [])
  console.log('Pure Component Function Parent')
  return (
    <>
      <div>Count --- {count}</div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Button
      </button>
      <div>{multiplyDataMemo}</div>
      <div> Another Count --- {anotherCount}</div>
      <button type="button" onClick={() => setAnotherCount(anotherCount + 1)}>
        Another Button
      </button>
      <ChildPureComponent data={data} func={func} />
    </>
  )
}
export default PureComponent
