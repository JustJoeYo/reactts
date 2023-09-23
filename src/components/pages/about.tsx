import GithubIcon from "../../assets/GithubIcon"
import LinkedInIcon from "../../assets/LinkedInIcon"
import { TypeAnimation } from 'react-type-animation';

export default function about() {
  return (
    <>
      <div className="flex justify-center items-center sm:p-10 lg:p-15">
        <div className="bg-mainclr/80 h-fit py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold leading-7 text-indigo-600 flex justify-center">About Me:</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-text-color sm:text-4xl flex justify-center w-full">
              Joseph Samere
                <a aria-label="Github" className="hover:text-white flex h-9 w-9 rounded-lg popclr mt-1 mx-3" href="https://github.com/JustJoeYo">
                  <GithubIcon/>
                </a>
                <a aria-label="LinkedIn" className="hover:text-white flex h-9 w-9 rounded-lg popclr mt-1 mx-0" href="https://www.linkedin.com/in/joseph-samere-981a5b291/">
                  <LinkedInIcon/>
                </a>
              </p>

              <p className="mt-4 text-2xl pt-1 font-extrabold tracking-tight text-text-color sm:text-4xl flex justify-center">
                <div className="whitespace-nowrap text-3xl font-extrabold text-stone-300">&lt;<span className="font-extrabold text-2xl text-indigo-600">div</span>&gt;
                <span className="text-2xl mx-2 font-extrabold leading-7 text-stone-400">I build</span></div>
                <div className="text-xs pt-3 mx-5 font-black tracking-wide text-stone-300">
                <TypeAnimation
                  
                  sequence={[
                    'Websites',
                    1000,
                    'Game Modding Applications',
                    1000,
                    'Quality of Life Applications',
                    1000,
                    'GUI Frameworks',
                    1000,
                    'Everything!',
                    1000
                  ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                  />
                </div>
                <div className="animate-pulse p-0.5 pt-1 align-middle text-2xl font-bold text-white"></div>
                <div className="text-2xl font-bold pt-1 text-stone-300 ">&lt;/<span className="text-2xl pt-1 font-bold text-indigo-600">div</span>&gt;</div>
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">I am a freshman at University of Idaho and my major is computer science & I am a full stack software engineer. I have experience with websites, reverse engineering, memory manipulation, and other general applications.</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-text-color">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path>
                      </svg>
                    </div>
                    Study:
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Computer Science at University of Idaho</dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-text-color">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"></path>
                      </svg>
                    </div>
                    Residency
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">I live in Moscow Idaho. I was born in New York but was raised in Massachusetts and Colorado for the majority of my life.</dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-text-color">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
                      </svg>
                    </div>
                    Age & Date of birth:
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    I am 18 years old and was born April 3rd, 2005.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-text-color">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                      </svg>
                    </div>
                    Free Time:
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">In my free time I enjoy motorcycling, coding, swimming, and jet skiing</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}