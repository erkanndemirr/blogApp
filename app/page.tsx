
import HomePage from "@/components/HomePage/HomePage";
;
import HashFunc from "@/components/hash-func";

export default function Home() {
  return (
    <main className="w-full">
      {/* HashFunc Hasleme Fonksiypnudur Registere Gerek Kalmadan Kullanılabilinir Kaldırabilirsin İstersen */}
      {/* <HashFunc password="" />  */}
      <HomePage/>

    </main>
  );
}
