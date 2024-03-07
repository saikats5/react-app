import { memo } from 'react'

const ChildPureComponent = () => {
  console.log('Pure Component Child')
  return (
    <>
      <div>I AM THE CHILD</div>
    </>
  )
}
export default memo(ChildPureComponent)
