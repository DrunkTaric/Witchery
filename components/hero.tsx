import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="grid grid-cols-1 lg:grid-cols-2 h-[50rem]">
      <section className="flex flex-col w-full h-full p-20 order-2 lg:order-1">
        <section className="mt-auto mb-auto space-y-5">
          <h1 className="mt-52 lg:mt-0 text-center lg:text-left text-2xl md:text-4xl xl:text-5xl 2xl:text-7xl font-bold">Welcome to <span className="bg-gradient-to-r from-purple-700 to-blue-800 bg-clip-text text-transparent">Venom</span></h1>
          <h1 className="text-sm xl:text-lg text-center lg:text-left">Best Cursed Potions and Elixir company on the planet</h1>
        </section>
      </section>
      <section className="absolute lg:relative flex w-full h-full max-h-[35rem] lg:max-h-[50rem] m-auto order-1 lg:order-2">
        <Spline scene="https://prod.spline.design/qPqcMJYibNIZeXQh/scene.splinecode" />
      </section>
    </section>
  )
}
