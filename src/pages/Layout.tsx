import type { FC, PropsWithChildren } from 'react'

import { Header } from '../components'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full bg-slate-100 min-h-screen">
      <Header />
      <div className="w-[1140px] mx-auto mt-5">{children}</div>
    </div>
  )
}

export default Layout
