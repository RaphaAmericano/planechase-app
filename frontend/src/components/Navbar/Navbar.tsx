import { NavbarProps } from "./Navbar.props"
function Navbar(props: any){
    return (<div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Partida</a></li>
          <li>
            <a>Partida</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>
                
              </a>
              </li>
              
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">Planechase</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Partida</a></li>
        <li><a>Regras</a></li>
        <li><a>O que é</a></li>
      </ul>
    </div>
    <div className="navbar-end">
    <ul className="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>Tema</summary>
            <ul className="p-2">
              
              <div className="join join-vertical">
                  <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Default" value="default"/>
                  <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Retro" value="retro"/>
                  <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Cyberpunk" value="cyberpunk"/>
                  <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Valentine" value="valentine"/>
                  <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Aqua" value="aqua"/>
                </div>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>)
}

export default Navbar