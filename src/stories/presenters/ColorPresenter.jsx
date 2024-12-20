import React from 'react'

export function ColorPresenter({ token }) {
  console.log(token)
  return (
    <div className="overflow-hidden rounded-2xl border border-black/40 shadow-lg">
      <div
        className="border-b border-black/10"
        style={{
          height: 120,
          backgroundColor: `var(${token.name})`,
        }}
      />

      <div className="flex flex-col items-center justify-center gap-1 p-5">
        <div className="text-sm font-bold">{token.value}</div>
      </div>
    </div>
  )
}
