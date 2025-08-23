import { Twitter,CircleDotDashedIcon } from "lucide-react";
import { FlipWords } from "./components/ui/flip-words";
import { Button } from "@/components/ui/button"

import {
  SiTypescript,
  SiReact,
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiMongodb,
  SiExpress,
  SiDocker,
  SiGit,
  SiHtml5,
  SiCss3,
  SiPython,
  SiCplusplus,
  SiC,
  SiLinux,
  SiVercel,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,

} from "react-icons/si";
import { WobbleCard } from "./components/ui/wobble-card";
import { Tooltip, TooltipContent, TooltipTrigger } from "./components/ui/tooltip";

function App() {
  const words = ["websites", "saas"];
  return (
    <>
      <div className="w-screen h-full bg-[#03071e] px-10 py-5 overflow-x-hidden ">
        {/* Introduction section */}
        <div className="w-full md:flex">

          <div className="md:w-2/3 md:py-10">
            <div className=" flex flex-col  md:px-4">
              <div className="md:text-5xl  text-3xl font-bold text-white font-stretch-50% font-serif ">MD SHAMI!</div>
              <div className="md:text-4xl text-2xl p-3 md:p-6 mx-auto font-mono text-white dark:text-neutral-400 w-full">
                I am full stack engineer building
                <FlipWords words={words} className="text-white" /> <br />
                <p className="flex items-center"><CircleDotDashedIcon  className="text-green-500 m-1"/>Currently available for work</p>
                
              </div>
              <div className="text-white p-2 font-serif font-stretch-100%  max-w-fit md:text-xl" onClick={() => window.open("https://mail.google.com/","_blank")}>Gmail - <a href="#" className="text-blue-200  hover:text-green-400">shamiimd94@gmail.com</a></div>
              <div>
                <Button className="p-5 m-3 rounded-none bg-green-600 text-2xl text-white font-serif hover:cursor-pointer"
                onClick={() => window.open("/resume.pdf", "_blank")}
                > Download CV</Button>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 flex  items-center">
            <img src="/profile.svg" alt="photo" className="md:h-1/2 w-auto rounded-full bg-green-300" />
          </div>
        </div>
        {/* experience section */}
        <div className="md:py-10 flex flex-col">
          <div className="font-bold font-serif md:text-6xl text-3xl text-white md:py-2 ">Experience</div>
          <div>
            <p className="md:text-3xl text-2xl font-mono text-white md:p-4 p-2 font-semibold">HUBNEX LABS</p>
            <p className="text-xl font-serif text-white px-5 flex">FULL-STACK-ENGINEER - <p className="text-green-500">Remote</p></p>
            <div className="md:px-10 px-8">
              <li className="md:text-lg font-sans text-white">Contributed to the development of real-world applications with a focus on scalability, efficiency, and seamless user experiences.</li>
              <li className="md:text-lg font-sans text-white">Actively participated in code reviews, debugging, and optimizations, aligning solutions with industry standards and company goals to drive impact and deliver measurable results.</li>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="md:py-10 p-4 flex flex-col">
          <div className="font-bold font-serif md:text-6xl text-3xl text-white md:py-2 ">Skills</div>
          <div className="flex flex-wrap flex-grid md:grid-cols-4 grid-cols-2 md:gap-1 gap-2.5">
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg">
              <SiJavascript />  JavaScript
            </Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"> <SiTypescript />TypeScript</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><SiReact />React</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><SiNextdotjs />Node.js</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><SiExpress />Express.js</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><SiMongodb />MongoDB</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:md:text-lg">SQL</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><SiHtml5 />HTML5</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><SiCss3 />CSS3</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><SiGit />Git</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><SiDocker />Docker</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><img src="/aws.png" alt="aws" className="h-auto w-15" /></Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><SiPython />Python</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><i className="devicon-java-plain "></i>Java</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><SiCplusplus /> C++</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><SiC /> C</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><SiLinux />Linux</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><SiVercel /> Vercel</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg"><SiTailwindcss /> TailwindCss</Button>
            <Button className="md:m-4 md:p-5 rounded bg-blue-600 text-white font-serif hover:cursor-pointer md:text-lg">DSA</Button>
          </div>
        </div>
        {/* projects */}
        <div className="md:py-10 p-4 flex flex-col">
          <div className="font-bold font-serif md:text-6xl text-3xl text-white md:py-2 text-center">Projects</div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Grow Fund
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  A crowd funding platform that connects startups with investors, providing a seamless experience for both parties to raise and invest funds securely.

                </p>
              </div>
              <img
                src="/profile.svg"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
              <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Clear Chat
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                A chat application that enables real-time messaging , file sharing and a user-friendly interface for seamless communication.

              </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Nowizo
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">

                  A social media platform that allows users to connect, share content, and engage with a vibrant community through posts, comments, and likes.

                </p>
              </div>
              <img
                src="/linear.webp"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
          </div>
        </div>
        {/* connects Links */}
        <div className="md:py-10 py-4 flex flex-col justify-center items-center">
          <div className="gap-2 flex">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full text-white"
                  onClick={() => window.open("https://x.com/ShamiiMd/", "_blank")}
                ><Twitter /></Button>
              </TooltipTrigger>
              <TooltipContent className="bg-black">
                <p className="text-white">Twitter</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full text-white"
                  onClick={() => window.open("https://github.com/asif-iqbaal/", "_blank")}
                ><SiGithub /></Button>
              </TooltipTrigger>
              <TooltipContent className="bg-black">
                <p className="text-white">Github</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full text-white"
                  onClick={() => window.open("https://www.linkedin.com/in/mdshami712/", "_blank")}
                >
                  <SiLinkedin />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-black">
                <p className="text-white">Linkedin</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full text-white"
                  onClick={() => window.open("https://www.instagram.com/shami_md07/", "_blank")}
                ><SiInstagram /></Button>
              </TooltipTrigger>
              <TooltipContent className="bg-black">
                <p className="text-white">Instagram</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
