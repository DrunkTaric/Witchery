import clsx from "clsx";
import Image from "next/image";
import { CheckIcon } from '@radix-ui/react-icons';

type Tier = { id: number, name: string, image: string, futures: string[], open?: (id: number) => void }

const Tiers: Tier[] = [
  {
    id: 1, name: "Starter Cobra", image: "/images/plans/1.webp", futures: [
      "Receive our \"Toxic Times\" newsletter with tips, tricks, and the latest in poison news.",
      "Enjoy a 5% discount on all standard poison products.",
      "Access to our beginner's guide to poisons, \"Poisoning 101\" and \"Stealth 101\".",
      "Join our Starter Cobra forum to connect with fellow enthusiasts and share ideas.",
      "A small starter kit with samples of our most popular basic poisons."
    ]
  },
  {
    id: 2, name: "Gold Serpent", image: "/images/plans/2.webp", futures: [
      "All Starter Cobra Benefits",
      "10% discount on all poison products, including exclusive items.",
      "Receive a curated selection of poisons each month to experiment with.",
      "Attend monthly webinars hosted by our experts on advanced poisoning techniques and creative uses.",
      "Get a free Venom Industries T-shirt and mug with our iconic logo.",
      "Dedicated customer support line for all your poisoning queries and needs."
    ]
  },
  {
    id: 3, name: "Diamond Viper", image: "/images/plans/3.webp", futures: [
      "All Gold Serpent Benefits",
      "20% discount on all poison products, including custom orders.",
      "Receive a premium selection of rare and potent poisons each month.",
      "Schedule one-on-one consultations with Dr. Viper Venom or Morticia Blackwood for personalized advice and custom poison creation.",
      "Invitations to VIP-only events, such as our annual \"Nightshade Gala\" and \"Toxic Tasting Parties\"."
    ]
  }
]

const Plan = function(props: Tier & { classNames: string }) {
  return (
    <section
      className={clsx("max-w-[35rem] p-5 lg:p-10 h-auto mt-0 border-4 border-purple-700 rounded-2xl scale-90 lg:hover:scale-[92%] transition-all duration-300 space-y-5", props.classNames)}
    >
      <h1 className="text-3xl font-bold text-center">{props.name}</h1>
      <section className="space-y-10">
        <Image src={props.image} width={200} height={200} alt={props.name} className="object-contain max-h-[10rem] lg:max-h-[15rem] ml-auto mr-auto" />
        <section className="space-y-3">
          {
            props.futures.map((item, index) => {
              return (
                <div key={index} className="flex space-x-2">
                  <div>
                    <CheckIcon className="size-4 lg:size-8 text-gray-500" />
                  </div>
                  <h1 className="text-md lg:text-xl font-medium">{item}</h1>
                </div>
              )
            })
          }
        </section>
      </section>
    </section >
  )
}

export default function Plans() {
  return (
    <section id="plans" className="w-full h-auto pt-10">
      <h1 className="font-bold text-7xl text-center">Our Plans</h1>
      <div className="flex h-full items-center justify-center">
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-4 md:grid-rows-2 xl:grid-cols-3 lg:grid-rows-1  ml-auto mr-auto">
          <Plan classNames="col-span-1 col-start-1 md:col-span-2 md:col-start-2 xl:col-start-1 xl:col-span-1" {...Tiers[0]} />
          <Plan classNames="col-span-1 md:col-span-2 xl:col-span-1" {...Tiers[1]} />
          <Plan classNames="col-span-1 md:col-span-2 xl:col-span-1" {...Tiers[2]} />
        </div>
      </div>
    </section>
  )
}
