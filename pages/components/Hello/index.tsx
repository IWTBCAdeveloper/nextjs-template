import React from 'react'

interface Props {
    text: string;
}

export default function Hello({ text }: Props) {
  return (
    <div>{text}</div>
  )
}