import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import { Suspense } from 'react';

export default function Hero() {
  return (
    <section id="hero" className="grid grid-cols-1 lg:grid-cols-2 h-[48rem] md:h-[50rem]">
      <section className="flex flex-col w-full h-auto lg:p-20 order-2 lg:order-1">
        <section className="lg:mt-auto lg:mb-auto space-y-5">
          <h1 className="text-center lg:text-left text-4xl xl:text-5xl 2xl:text-6xl font-bold">Welcome to <span className="bg-gradient-to-r from-purple-700 to-blue-800 bg-clip-text text-transparent">Venom</span></h1>
          <h1 className="text-sm xl:text-lg text-center lg:text-left">Best Cursed Potions and Elixir company on the planet</h1>
        </section>
      </section>
      <section className="relative flex w-full h-full max-h-[35rem] lg:max-h-[50rem] m-auto order-1 lg:order-2">
        <Suspense fallback={<></>}>
          <Spline scene="https://prod.spline.design/qPqcMJYibNIZeXQh/scene.splinecode" className="hidden lg:block" />
        </Suspense>
        <Image src={"/images/logo.webp"} alt="Company's logo" width={400} height={300} className="block lg:hidden object-contain ml-auto mr-auto" />
      </section>
    </section>
  )
}
