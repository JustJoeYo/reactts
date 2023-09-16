type Props = {}

export default function contact({}: Props) {
  return (
    <>

    <div className="">
      <h2 className="text-3xl mt-60 justify-center items-center font-bold tracking-tight text-white sm:text-4xl">Contact Information:</h2>
      <p className="mt-4 text-lg text-gray-300">Email: samerejoe@gmail.com</p>
      <p className="mt-4 text-lg text-gray-300">Discord: justjoeyo</p>
      <p className="mt-4 text-lg text-gray-300">Github: JustJoeYo</p>
      <p className="mt-4 text-lg text-gray-300">LinkedIn: Joseph Samere</p>
    </div>
    <div className="absolute left-1/2 top-40 justify-center items-center -translate-x-1/2 blur-2xl" aria-hidden="true">
      <div className="aspect-[1000/600] w-[60rem] bg-gradient-to-tr from-[#1036e0] to-mainclr opacity-40"></div>
    </div>

</>
  )
}