import { useDeviceDetection } from "@/hooks/DeviceDetection"
import { useAnimate } from "framer-motion"
import { useEffect, useState } from "react"

type Customer = { image: string, header: string, discription: string }

const Customers: Customer[] = [
  { image: "/images/customers/1.webp", header: "\"A Delightful Demise!\"", discription: "\"I chose Venom Industries' 'Whispering Death' for a truly unforgettable evening. The taste was surprisingly pleasant, with a hint of almond that was to die for. Within minutes, I felt a soothing numbness spread through my body, followed by a blissful, eternal sleep. As a former food critic, I must say, this poison was top-notch. Highly recommend for anyone looking for a quick, painless exit.\"" },
  { image: "/images/customers/2.webp", header: "\"Spectacularly Swift!\"", discription: "\"I was skeptical at first, but Venom Industries' 'Ninja Toxin' lived up to its reputation. The delivery was prompt, and the packaging discreet. One sip, and it felt like a gentle whisper in the night. No mess, no fuss, just a swift end. Perfect for the modern poison aficionado! I can’t imagine a better way to go.\"" },
  { image: "/images/customers/3.webp", header: "\"Elegant and Effective!\"", discription: "\"The 'Silent Nightshade' was an experience like no other. It had a subtle, earthy flavor that hinted at the power within. As a connoisseur of fine poisons, I appreciated the craftsmanship. The effects were gradual, allowing me to savor each moment as I drifted off into the eternal beyond. Venom Industries has truly perfected the art of poisoning. Bravo!\"" },
  { image: "/images/customers/4.webp", header: "\"A True Masterpiece!", discription: "\"I opted for the classic 'Cyanide Symphony,' and it did not disappoint. The transition was as smooth as the finest wine, with a delicate bouquet that masked the lethal punch. The sensation of peace and release was unparalleled. If you're considering a final toast, this is the poison of choice. Venom Industries has my full endorsement!\"" },
]

const Review = function(props: Customer) {
  const [scope, animate] = useAnimate()
  const isMobile = useDeviceDetection()
  const [Hovered, setHovered] = useState<boolean>(false)
  const [Loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setHovered(isMobile)
  }, [isMobile])

  useEffect(() => {
    if (!Loading) {
      if (Hovered) {
        const ShowContent = async () => {
          setLoading(true)
          await animate("#container", { height: "50%" }, { duration: 0.3 })
          await animate("#content", { display: "block" }, { duration: 0 })
          await animate("#content", { opacity: 1 }, { duration: 0.3 })
          setLoading(false)
        }
        ShowContent()
      } else {
        const HideContent = async () => {
          setLoading(true)
          await animate("#content", { opacity: 0 }, { duration: 0.3 })
          await animate("#content", { display: "none" }, { duration: 0 })
          await animate("#container", { height: "0%" }, { duration: 0.3 })
          setLoading(false)
        }
        HideContent()
      }
    }
  }, [Hovered, Loading])

  return (
    <section ref={scope} className="min-h-[45rem] max-w-[399px] md:max-w-[370px] lg:max-w-[399px] xl:max-w-[350px] scale-95 hover:scale-100 duration-300" onMouseEnter={() => { if (!isMobile) { setHovered(true) } }} onMouseLeave={() => { if (!isMobile) { setHovered(false) } }} >
      <div className="absolute flex w-full h-[45rem] z-10 mb-0 mt-auto">
        <div id="container" className={"bg-gradient-to-t from-black via-black/85 to-black/85 mb-0 mt-auto w-full rounded-2xl h-[0%]"}>
          <div id="content" className={"p-5 space-y-10 hidden"}>
            <h1 className="text-xl text-center">{props.header}</h1>
            <h1 className="text-md text-center">{props.discription}</h1>
          </div>
        </div>
      </div>
      <img src={props.image} className="h-full w-full object-cover rounded-2xl" />
    </section >
  )
}


export default function Reviews() {
  return (
    <section id="reviews" className="flex flex-col w-full h-auto space-y-10 p-10 pt-2 md:pl-3 md:pr-3">
      <h1 className="font-bold text-7xl text-center">Reviews</h1>
      <section className="flex w-full items-center justify-center">
        <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10 md:gap-5">
          {
            Customers.map((item, index) => {
              return <Review key={index} {...item} />
            })
          }
        </section>
      </section>
    </section>
  )
}
