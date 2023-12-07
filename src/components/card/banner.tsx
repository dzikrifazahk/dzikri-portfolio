'use client'

import { useState } from 'react'
import { cn } from '@nextui-org/react'

function Banner() {
  const [selectedSize, setSelectedSize] = useState(2)

  return (
    <ul>
    <p>Sebagai seorang Fullstack Developer, Merancang antarmuka pengguna dan juga membangun logika bisnis yang kuat di sisi server.</p>
    </ul>
  )
}

export default Banner