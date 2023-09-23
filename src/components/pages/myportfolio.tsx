type Props = {}

export default function portfolio({}: Props) {
  return (
    <div className="flex-auto">
      <h1 className="flex justify-center text-3xl font-bold text-text-color sm:text-4xl py-10">My <div className="mx-3 text-indigo-600">Projects:</div></h1>
      
      <div className=" flex items-center justify-center">
        <div className="bg-popclr/70 py-20 w-fit mx-8 border border-gray-700 rounded-2xl">
          <a aria-label="Github" className="" href="https://github.com/JustJoeYo/reactts">
            <img className="mx-2" width={300} src="https://soumyajit.vercel.app/static/media/codeEditor.1b585492490c8c1cace9.png" alt="card-img"></img>
          </a>
            <div className="mx-16 justify-center items-center text-text-color text-sm font-bold">React TypeScript Website</div>
            <p className="mx-3 text-text-color text-xs font-semibold">A Portfolio Website built with ReactJS and TypeScript.</p>
        </div>

        <div className="bg-popclr/70 py-20 w-fit mx-8 border border-gray-700 rounded-2xl">
          <a aria-label="Github" className="" href="https://github.com/JustJoeYo/reactts">
            <img className="mx-2" width={300} src="https://soumyajit.vercel.app/static/media/codeEditor.1b585492490c8c1cace9.png" alt="card-img"></img>
          </a>
            <div className="mx-16 justify-center items-center text-text-color text-sm font-bold">React TypeScript Website</div>
            <p className="mx-3 text-text-color text-xs font-semibold">A Portfolio Website built with ReactJS and TypeScript.</p>
        </div>

        <div className="bg-popclr/70 py-20 w-fit mx-8 border border-gray-700 rounded-2xl">
          <a aria-label="Github" className="" href="https://github.com/JustJoeYo/reactts">
            <img className="mx-2" width={300} src="https://soumyajit.vercel.app/static/media/codeEditor.1b585492490c8c1cace9.png" alt="card-img"></img>
          </a>
            <div className="mx-16 justify-center items-center text-text-color text-sm font-bold">React TypeScript Website</div>
            <p className="mx-3 text-text-color text-xs font-semibold">A Portfolio Website built with ReactJS and TypeScript.</p>
        </div>
      </div>

      <div className="absolute left-1/2 top-32 justify-center items-center -translate-x-1/2 blur-2xl" aria-hidden="true">
      <div className="aspect-[2000/800] w-[80rem] bg-gradient-to-tr from-[#1036e0] to-popclr opacity-20"></div>
    </div>

    </div>
  )
}