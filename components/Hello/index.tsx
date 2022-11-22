import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';
import Clock from '../Clock';
import Counter from '../Counter';

interface Props {
  text: string;
}

export default function Hello({ text }: Props) {
  const placeholderData = useSelector((state: any) => state.placeholderData)
  const error = useSelector((state: any) => state.error)
  const light = useSelector((state: any) => state.light)
  const lastUpdate = useSelector((state: any) => state.lastUpdate)

  return (
    <div>
      <h1>{text}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href="/other" >Navigate: Other Page</Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  )
}