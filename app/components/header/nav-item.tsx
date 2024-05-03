import Link from "next/link"

type NavItemProps = {
  label: string
  href: string
}

export default function NavItem({ label, href }: NavItemProps) {
  return (
    <Link
      href={href}
      className="text-gray-400 flex items-center gap-2 font-medium font-mono"
    >
      <span className="text-purple-600">#</span>
      {label}
    </Link>
  )
}
