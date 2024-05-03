import Image from "next/image"
import Link from "next/link"
import NavItem from "./nav-item"

const nav_itens = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Projetos",
    href: "/projects"
  }
]

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/logo.svg"
            alt="Logo Sávio Nascimento"
          />
        </Link>
        <nav>
          {nav_itens.map(item => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}
