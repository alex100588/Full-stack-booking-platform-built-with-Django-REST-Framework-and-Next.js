import Image from "next/image"
import Link from "next/link"
import SearchFilters from "./SearchFilters"
import UserNav from "./UserNav"
import AddPropertyButton from "./AddPropertyButton"

export const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-2 border-b bg-black z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center ">
          <Link href="/">
            <Image
              src="/logoAlex1.png"
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          <div className="flex space-x-6">
            <SearchFilters />
          </div>

          <div className="flex items-center space-x-6">
            <AddPropertyButton />
            <UserNav />
          </div>
        </div>
      </div>
    </nav>
  )
}
