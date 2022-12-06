import type { FC } from 'react'
import { useState } from 'react'
import { GoLocation } from 'react-icons/go'
import { HiOutlineUsers, HiOutlineOfficeBuilding } from 'react-icons/hi'
import { RiGitRepositoryCommitsLine } from 'react-icons/ri'
import { VscGistSecret, VscLink } from 'react-icons/vsc'

import { SearchBar } from '../components'

interface IInfo {
  userInfo: any
}

const Home: FC = () => {
  const [info, setInfo] = useState({ userInfo: {} } as IInfo)

  async function getUserInfo(username: string) {
    await fetch(`https://api.github.com/users/` + username)
      // await fetch('http://localhost:3080/user')
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

  const infoCards = [
    {
      icon: RiGitRepositoryCommitsLine,
      info: info.userInfo?.public_repos,
      label: 'repos',
    },
    {
      icon: HiOutlineUsers,
      info: info.userInfo?.followers,
      label: 'followers',
    },
    {
      icon: HiOutlineUsers,
      info: info.userInfo?.following,
      label: 'following',
    },
    {
      icon: VscGistSecret,
      info: info.userInfo?.public_gists,
      label: 'gists',
    },
  ]

  return (
    <div>
      <SearchBar findUser={getUserInfo} />

      <div className="flex items-center justify-between w-full my-10">
        {infoCards.length > 0
          ? infoCards.map((infocard, index) => (
              <div
                key={index}
                className="flex justify-between py-5 px-16 rounded-md gap-x-8 bg-white"
              >
                <span className="flex items-center justify-center text-4xl text-blue-600 bg-gray-200 w-12 h-12 rounded">
                  {<infocard.icon />}
                </span>
                <p className="flex flex-col">
                  <strong className="text-2xl text-gray-600">
                    {infocard.info}
                  </strong>
                  <span className="capitalize">{infocard.label}</span>
                </p>
              </div>
            ))
          : null}
      </div>

      <div className="my-5 flex justify-between items-start gap-6">
        <div className="py-10 px-5 bg-white w-full rounded-md">
          <div className="flex flex-col px-6">
            <div className="flex items-center justify-start mb-6 gap-x-3">
              <a href={info.userInfo?.html_url} target="_blank">
                <img
                  src={info.userInfo?.avatar_url}
                  alt={info.userInfo?.login}
                  className="w-16 h-16 rounded-[50%]"
                />
              </a>

              <p className="flex items-start flex-col">
                <strong>{info.userInfo?.name}</strong>
                <span className="text-gray-400">
                  {`@` + info.userInfo?.twitter_username}
                </span>
              </p>

              <div className="ml-auto">
                <a
                  target="_blank"
                  className="bg-blue-500 text-white capitalize py-3 px-7 rounded-md hover:bg-blue-600 hover:text-white"
                  href={
                    `https://twitter.com/@` + info.userInfo?.twitter_username
                  }
                >
                  follow
                </a>
              </div>
            </div>
            <p className="text-gray-600">{info.userInfo?.bio}</p>
            <p className="flex flex-col">
              <span className="flex gap-x-2 items-center">
                <GoLocation />
                {info.userInfo?.location}
              </span>
              <span className="flex gap-x-2 items-center">
                <VscLink />
                <a
                  href={info.userInfo?.blog}
                  target="_blank"
                  className="flex gap-x-2 items-center"
                >
                  {info.userInfo?.blog}
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="py-10 px-5 bg-white w-full rounded-md">
          <p>In development</p>
        </div>
      </div>
    </div>
  )
}

export default Home
