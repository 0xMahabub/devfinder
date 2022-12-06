import type { ChangeEvent, FC } from 'react'
import { useEffect, useState } from 'react'

interface IInputUser {
  user: string
}

interface ISearchBar {
  findUser: (username: string) => void
}

const SearchBar: FC<ISearchBar> = ({ findUser }) => {
  const [username, setUsername] = useState({ user: '' } as IInputUser)
  const [isLoaded, setIsLoaded] = useState(false)
  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername({
      ...username,
      user: e.target.value,
    })
  }

  useEffect(() => {
    if (!isLoaded) {
      // fetch info
      findUser('0xMahabub')
      setIsLoaded(true)
    }
  }, [])

  return (
    <div className="flex max-w-[600px] mx-auto items-center gap-3">
      <input
        type="text"
        className="py-[1rem] px-5 min-w-[540px] rounded text-xl outline-none"
        id="searchBar"
        onChange={(e) => handleSearchInput(e)}
        autoComplete="false"
        defaultValue={''}
        name="find_user"
        placeholder="Enter a github username"
      />
      <button
        onClick={() => findUser(username.user)}
        type="submit"
        className="rounded py-[1rem] px-7 bg-blue-600 text-white capitalize"
      >
        search
      </button>
    </div>
  )
}

export default SearchBar
