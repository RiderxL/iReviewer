import Link from 'next/link'
import Image from 'next/image'
import { StyledFirebaseAuth } from 'react-firebaseui'
import firebase from '../firebase/clientApp'
import SignInScreen from './Auth'

function Header() {
  return (
    <header className="mx-6 flex max-h-20 justify-between p-6 text-base font-semibold sticky">
      <div className="flex items-center space-x-6">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="/iReviewer-Logo.png"
            alt=""
          />
        </Link>
        <div className="hidden cursor-pointer items-center space-x-6 text-[#767676] md:inline-flex">
          <h3>Explore</h3>
          <h3>Trending</h3>
          <h3>Rewards</h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 font-semibold text-[#9f9f9f]">
        <Link href="/signIn">
          <button className="transtion rounded-xl bg-[#9C84C4] px-4 py-1 text-white delay-75 duration-300  ease-in-out hover:bg-indigo-500">
            Get Started
          </button>
        </Link>
      </div>
    </header>
  )
}

export default Header
