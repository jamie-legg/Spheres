import Client from './client'
import { getCurrentConfig } from './server'

export default function SpheresHome() {
  // server side
  // get config

  const config = getCurrentConfig()
  return (
    <div>
      <Client config={config}/>
    </div>
  )
}
