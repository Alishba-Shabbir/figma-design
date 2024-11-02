import Link from "next/link";
import logo1 from "@/public/logo1.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="header">
     
      <Image className="image"
        src={logo1} 
        alt="logo"
        height={100} 
        width={90} 
      />

      
      <li className="main-button">
        <Link href="/">MAIN</Link>
      </li>

      
      <ul className="header-buttons">
        <li>
          <Link href="/gallery">GALLERY</Link>
        </li>
        <li>
          <Link href="/project">PROJETS</Link>
        </li>
        <li>
          <Link href="/certificate">CERTIFICATION</Link>
        </li>
        <li>
          <Link href="/contact-us">CONTACTS</Link>
        </li>
      </ul>
    </div>
  );
}
