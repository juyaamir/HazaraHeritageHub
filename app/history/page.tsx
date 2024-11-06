import React from 'react'
import Link from 'next/link'
const histories = [
  { title: 'Amir Khan' },
  { title: 'Juya khan' },
  { title: 'Elisa Juya' }
]
const History = () => {
  return (
    <div>
        <h1>Histories</h1>
        <ul>
          {
            histories.map((history) => (
              <li key={history.title}>
                <Link href={`/history/${history.title}`}>
                {history.title}
                </Link>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default History