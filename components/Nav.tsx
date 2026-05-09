import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/content";
import { MobileMenu } from "./MobileMenu";

export function Nav() {
  return (
    <nav className="top">
      <div className="inner">
        <div className="left">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} className="navlink" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link className="brand" href="/" aria-label="LAZ Press — home">
          <span className="mark">
            <Image
              src="/lazpress.png"
              alt=""
              width={240}
              height={240}
              priority
              sizes="(max-width: 640px) 140px, 200px"
            />
          </span>
        </Link>

        <div className="right">
          <Link className="navlink" href="/contact">
            Contact
          </Link>
          <Link className="btn" href="/contact#quote">
            Get a quote
          </Link>
          <Link className="btn primary" href="/contact#upload">
            Upload artwork <span className="arr">→</span>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
