import { motion } from "framer-motion";
import {
  FigmaLogoIcon,
  SketchLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  VercelLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { useDeviceDetection } from "@/hooks/DeviceDetection";

const slides = [
  { icon: <FigmaLogoIcon className="size-full" /> },
  { icon: <TwitterLogoIcon className="size-full" /> },
  { icon: <GitHubLogoIcon className="size-full" /> },
  { icon: <InstagramLogoIcon className="size-full" /> },
  { icon: <LinkedInLogoIcon className="size-full" /> },
  { icon: <DiscordLogoIcon className="size-full" /> },
  { icon: <SketchLogoIcon className="size-full" /> },
  { icon: <NotionLogoIcon className="size-full" /> },
  { icon: <VercelLogoIcon className="size-full" /> },
];


export default function Brands() {
  const isMobile = useDeviceDetection()
  const dupeslides = [...slides, ...slides, ...slides, ...slides, ...slides, ...slides]
  return (
    <section className="relative w-full overflow-x-hidden p-4">
      <motion.section className="flex max-h-[3rem]" animate={{
        x: ['-100%', '0%'],
        transition: {
          ease: 'linear',
          duration: 10,
          repeat: Infinity,
        }
      }}>
        {dupeslides.map((slide, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: `${(isMobile ? 200 : 100) / slides.length}%` }}>
            <div className="flex items-center justify-center h-full">
              {slide.icon}
            </div>
          </div>
        ))}
      </motion.section>
    </section>
  )
}
