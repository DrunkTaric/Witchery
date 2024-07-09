export default function Nav() {
  return (
    <section className="fixed flex w-auto h-auto p-2 pl-9 pr-9 space-x-20 bg-white/20 rounded-br-2xl">
      <img src="/images/logo_cutout.png" className="size-14" />
      <section className="space-x-10 p-3 text-lg font-medium mt-auto mb-auto">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#plans">Plans</a>
        <a href="#reviews">Reviews</a>
      </section>
    </section>
  )
}
