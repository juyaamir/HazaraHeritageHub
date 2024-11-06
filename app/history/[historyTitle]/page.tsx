import React from 'react'

const HistoryDetails = async ({ params }: {
    params: {
        historyTitle: string,
    }
}) => {
    const paramsAwaited = await params;
  return (
    <div>HistoryDetails { paramsAwaited.historyTitle }</div>
  )
}

export default HistoryDetails