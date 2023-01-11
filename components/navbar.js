// See how we use <Link /> instead of <a>
// That is because Next.js provides some special features
// To allow client-side route navigation
import Link from "next/link";

// Just a generic Navbar, part of the default layout
// so it appears on all pages that use the default layout
export default function Navbar() {
  return (
    <div id="navbar">
      <div className="navbar-container">

<<<<<<< HEAD
          <button className="navbar-logo">
              <Link href="/">logo</Link>
          </button>
        
          <button className="cto-button">
            <Link href="/">cto</Link>
          </button>

          <li><Link href="/onboarding">START</Link></li>

          <button className="account-button">
            <Link href="/">acnt</Link>
          </button>
        </div>
=======
        <button className="account-button">
          <Link href="/">acnt</Link>
        </button>

        <button className="navbar-logo">
            <Link href="/">logo</Link>
        </button>
          
>>>>>>> eb62692f36a6611acdb426f6ff18d4d3ce99f8b4
      </div>
    </div>
  )
}
