'use client'

import { Layout } from "@/components/layout"
import { ISpheresHomeProps } from "@/interfaces/client/ihome"

export default function SpheresHome({ config }: ISpheresHomeProps) {
  // client side
  return (
    <div>
      <Layout config={config} />
    </div>
  )
}