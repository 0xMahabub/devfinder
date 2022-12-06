import type { FC } from 'react'

import reactSvg from '../../assets/react.svg'

const Header: FC = () => {
  return (
    <header className="flex py-4 bg-white justify-center items-center gap-x-2">
      <img className="w-10 h-10 rounded" src={reactSvg} alt="appLogo" />
      <h2 className="text-2xl font-bold text-gray-600">Search Developers</h2>
    </header>
  )
}

export default Header
