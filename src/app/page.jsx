import Banner from "@/components/home/Banner";
import Latest from "@/components/home/Latest";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10">
       <section>
       <Banner></Banner>
      </section> 

      <section >
         <Latest></Latest>
      </section>
    </div>
  );
}
