type Props = {}

export default function contact({}: Props) {
  return (
    <>    
    <div className="flex items-center justify-center">
      <div className="bg-popclr/70 border border-gray-700 rounded-2xl my-40 px-5 py-5">
        <h2 className="text-3xl mt-20 font-bold text-white sm:text-4xl">Contact Information:</h2>
        <p className="mt-4 text-lg flex justify-center items-center text-gray-300">Email: samerejoe@gmail.com</p>
        <p className="mt-4 text-lg flex justify-center items-center text-gray-300">Discord: justjoeyo</p>
        <p className="mt-4 text-lg flex justify-center items-center text-gray-300">Github: JustJoeYo</p>
        <p className="mt-4 text-lg flex justify-center items-center text-gray-300">LinkedIn: Joseph Samere</p>
      </div>
    </div>
    <div className="absolute left-1/2 top-40 justify-center items-center -translate-x-1/2 blur-2xl" aria-hidden="true">
      <div className="aspect-[1000/600] w-[60rem] bg-gradient-to-tr from-[#1036e0] to-mainclr opacity-40"></div>
    </div>

</>
  )
}