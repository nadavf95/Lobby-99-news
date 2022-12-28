// See how we use <Link /> instead of <a>
// That is because Next.js provides some special features
// To allow client-side route navigation
import Link from "next/link";

// Just a generic Navbar, part of the default layout
// so it appears on all pages that use the default layout
export default function Navbar() {
  return (
    <div id="navbar">
      <div className="container">
        <div className="row navbar-items">

          <button className="navbar-logo">
              <Link href="/">logo</Link>
          </button>

          <button className="cto-button">
            <Link href="/">cto</Link>
          </button>

          <button className="account-button">
            <Link href="/">acnt</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
