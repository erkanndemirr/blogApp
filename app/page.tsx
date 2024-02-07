import Header from "@/components/Header";
import PostView from "@/components/PostView";
import Footer from "@/components/Footer";
import HashFunc from "@/components/hash-func";

export default function Home() {
  return (
    <main className="">
      {/* HashFunc Hasleme Fonksiypnudur Registere Gerek Kalmadan Kullanılabilinir Kaldırabilirsin İstersen */}
      <HashFunc password="ErkanDemir35" /> 
     <Header/>
     <PostView/>
     <Footer/>
    </main>
  );
}
