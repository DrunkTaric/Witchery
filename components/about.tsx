import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="pt-10 md:p-10 md:pb-0 space-y-10 md:space-y-20">
      <h1 className="font-bold text-5xl lg:text-7xl text-center">About us</h1>
      <section className="grid grid-cols-1 xl:grid-cols-2 xl:space-y-0">
        <section className="text-lg space-y-10 order-2 xl:order-1 xl:mt-auto xl:mb-auto">
          <h1 className="text-4xl md:text-6xl text-center xl:text-left">Venom Industries</h1>
          <section className="space-y-5 text-center xl:text-left">
            <h1>In the early 19th century, Dr. Archibald Venom, a brilliant but misunderstood chemist, discovered a passion for poisons while experimenting in his basement laboratory. With a flair for the dramatic and a vision for a world where poisons could solve everyday problems, he founded Venom Industries.</h1>
            <h1>Dr. Venom&apos;s early creations were revolutionary. From the potent &apos;RatBegone&apos; to the versatile &apos;SneakySnakes&apos;, his poisons quickly gained a reputation for effectiveness and, dare we say, a touch of elegance. Over the years, our product line has expanded to include a wide variety of lethal concoctions, each crafted with precision and care.</h1>
            <h1>At Venom Industries, we believe that a little poison can go a long way. Our mission is to provide innovative and effective solutions for those pesky, unwanted problems in life. We pride ourselves on our commitment to quality, safety (for the user, not the target), and customer satisfaction. Whether you&apos;re dealing with a rodent infestation or need to make a statement at a dinner party, we have the perfect poison for you.</h1>
          </section>
        </section>
        <section className="flex order-1 xl:order-2">
          <Image src="/images/guide.webp" alt="skeleton holding a torch" width={650} height={700} className="w-[40rem] object-contain bg-cent m-auto" />
        </section>
      </section>
    </section>
  )
}
