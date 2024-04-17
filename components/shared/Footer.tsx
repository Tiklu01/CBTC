import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col
      gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
        <Image
        src="/assets/generated/eventplanner360.png"
        alt="logo"
        width={150}
        height={38}
        />
        </Link>
        <p>2024 Event Planner 360 all rights reserverd</p>
      </div>
    </footer>
  )
}

export default Footer