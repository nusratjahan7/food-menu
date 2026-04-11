
import Hero from "@/Component/Hero";
import Menu from "@/Component/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Hero/>
      <section className=" w-11/12 mx-auto my-10">
        <div>
          <h2 className="text-center text-2xl font-bold">Our Menu</h2>
        </div>
        <div>
          <Menu/>
        </div>
      </section>
    </div>
  );
}
