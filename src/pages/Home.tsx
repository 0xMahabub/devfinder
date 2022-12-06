import type { FC } from 'react'
import { useState } from 'react'

import { SearchBar } from '../components'

interface IInfo {
  userInfo: any
}

const Home: FC = () => {
  const [info, setInfo] = useState({ userInfo: {} } as IInfo)

  async function getUserInfo(username: string) {
    await fetch(`https://api.github.com/users/` + username)
      .then((r) => r.json())
      .then((d) => {
        setInfo({ ...info, userInfo: d })
        // eslint-disable-next-line no-console
        console.log(d)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)
      })
  }

  return (
    <div>
      <SearchBar findUser={getUserInfo} />
    </div>
  )
}

export default Home
