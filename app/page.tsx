import Header from "@/components/Header";
import PostView from "@/components/PostView";
import Footer from "@/components/Footer";
import HashFunc from "@/components/hash-func";

export default function Home() {
  return (
    <main className="">
      <HashFunc password="ErkanDemir35" />
     <Header/>
     <PostView/>
     <Footer/>
    </main>
  );
}
