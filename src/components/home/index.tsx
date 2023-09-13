import { motion } from "framer-motion";

type Props = {

}

const Home = ({  }: Props) => {
  return (
    <section id="dashboard" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        <motion.div
        className="mx-auto w-auto items-center justify-center md:flex md:h-5/6"
      >
        <div>Yo?</div>
      </motion.div>
    </section>
  )
}

export default Home