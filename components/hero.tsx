import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="grid grid-cols-2 h-[50rem]">
      <section className="flex flex-col w-full h-full p-20">
        <section className="mt-auto mb-auto space-y-5">
          <h1 className="text-7xl font-bold">Welcome to <span className="bg-gradient-to-r from-purple-700 to-blue-800 bg-clip-text text-transparent">Venom</span></h1>
          <h1 className="text-lg">Best Cursed Potions and Elixir company on the planet</h1>
          <button className="p-3 pl-5 pr-5 border-2 border-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-black duration-500 transition-all">Explore</button>
        </section>
      </section>
      <section className="w-full">
        <Spline scene="https://prod.spline.design/hHD6D5eABZz0Ggvl/scene.splinecode" />
      </section>
    </section>
  )
}
