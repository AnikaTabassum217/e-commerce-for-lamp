import React from 'react'

type Props={
    children:React.ReactNode;
}
const layout:React.FC<Props> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default layout