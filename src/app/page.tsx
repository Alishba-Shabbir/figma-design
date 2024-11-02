import Header from "@/app/components/header";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <div className="portfolio">
      <Header />
      <div className="content">
        <h1>Hi,</h1>
        <h2>I'M ALISHBA SHABBIR</h2>
        <p>
       A front-end developer skilled in HTML, CSS, and TypeScript.
         I’m passionate about building responsive,
          user-friendly web applications that offer a seamless experience across devices..
        </p>
      </div>
      <Footer />
    </div>
  );
}
