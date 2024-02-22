import React, { memo } from 'react'

const MemoComp = () => {
  console.log('MemoComp render')
  return (
    <div>Memo Comp</div>
  )
}

export default memo(MemoComp)