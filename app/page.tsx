import Image from 'next/image'
import City from '@/components/Select/City'
import Data from '@/components/Select/Data'

export default function Home() {
  return (
    <div>
      <City />
      <Data />
    </div>
  )
}
