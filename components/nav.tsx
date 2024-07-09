export default function Nav() {
  return (
    <section className="fixed flex w-full lg:w-auto h-auto p-2 pl-9 pr-9 space-x-20 bg-white/20 lg:rounded-br-2xl z-20">
      <img src="/images/logo.png" className="size-14 ml-auto mr-auto md:ml-0 md:mr-0" />
      <section className="hidden md:block p-3 text-lg font-medium mt-auto mb-auto space-x-10">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#plans">Plans</a>
        <a href="#reviews">Reviews</a>
      </section>
    </section>
  )
}
