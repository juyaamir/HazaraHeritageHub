import { getDisplayName } from 'next/dist/shared/lib/utils'
import React, { CSSProperties } from 'react'

const Card = ({children}: {
    children: React.ReactNode
}) => {

    const cardStyle: CSSProperties = {
        padding: '100px',
        margin: '10px',
        boxShadow: '8px 8px 2px 60px rgb(255, 0, 0) inset, -8px -8px 2px 60px rgb(255, 0, 0) inset',
        border: '1px solid #e0e0e0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    }
  return (
    <div style={cardStyle}>
        { children }
    </div>
  )
}

export default Card