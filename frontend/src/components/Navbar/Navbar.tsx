import { NavbarProps } from "./Navbar.props"
import Link from "next/link"
function Navbar(props: any){
    return (<nav className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div  tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <Link href="/planechase">Partida</Link>
          </li>
          <li>
            <ul className="p-2">
              <li><Link href="/rules">Regras</Link></li>
              <li><Link href="/about">O que é?</Link></li>
            </ul>
          </li>
        </ul>
      </div>
      <Link href="/" className="btn btn-ghost text-xl">Planechase</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><Link href="/planechase">Partida</Link></li>
        <li><Link href="/rules">Regras</Link></li>
        <li><Link href="/about">O que é?</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
    <ul className="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>Tema</summary>
            <ul className="p-2">
              <div className="join join-vertical">
                  <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Cyberpunk" value="cyberpunk"/>                  
                  <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Light" value="light"/>
                  <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Dark" value="dark"/>
                  <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Cupcake" value="cupcake"/>
                  <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Synthwave" value="synthwave"/>
                  <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Retro" value="retro"/>
                </div>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </nav>)
}

export default Navbar