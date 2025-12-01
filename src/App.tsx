import { Button } from "./components/ui/button";
import { LiquidButton } from "./components/animate-ui/components/buttons/liquid"
import { FlipButton, FlipButtonBack, FlipButtonFront } from "./components/animate-ui/components/buttons/flip"
import { Link, MapPin, Twitter, } from "lucide-react";
import {Card} from 'flowbite-react';
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
import { Tooltip, TooltipContent, TooltipTrigger } from "./components/ui/tooltip";
import { useState } from "react";
function App() {
    const [showAll, setShowAll] = useState(false);

  const skills = [
    { front: <SiReact className="w-1/3 text-white h-10" />, back: "React" },
    { front: <SiTypescript className="w-1/3 text-white h-10" />, back: "Typescript" },
    { front: <SiDocker className="w-1/3 text-white h-10" />, back: "Docker" },
    { front: <SiJavascript className="w-1/3 text-white h-10" />, back: "Javascript" },
    { front: <SiTailwindcss className="w-1/3 text-white h-10" />, back: "Tailwind CSS" },
    { front: <SiNextdotjs className="w-1/3 text-white h-10" />, back: "Next.js" },

    // rest items...
    { front: <SiMongodb className="w-1/3 text-white h-10" />, back: "MongoDB" },
    { front: <SiExpress className="w-1/3 text-white h-10" />, back: "Express" },
    { front: <SiPython className="w-1/3 text-white h-10" />, back: "Python" },
    { front: <SiVercel className="w-1/3 text-white h-10" />, back: "Vercel" },
    { front: <SiGit className="w-1/3 text-white h-10" />, back: "Git" },
    { front: <SiCplusplus className="w-1/3 text-white h-10" />, back: "C++" },
    { front: <SiC className="w-1/3 text-white h-10" />, back: "C" },
    { front: <SiHtml5 className="w-1/3 text-white h-10" />, back: "HTML5" },
    { front: <SiCss3 className="w-1/3 text-white h-10" />, back: "CSS3" },
    { front: <SiLinux className="w-1/3 text-white h-10" />, back: "Linux" },
    { front: <i className="devicon-java-plain text-white"></i>, back: "Java" },
  ];

  const visibleSkills = showAll ? skills : skills.slice(0, 6);
  return(
    <>
    <div className="h-full w-full md:my-10  md:px-50  p-8">
    <div>
      {/* heading */}
      {/* <div></div> */}
      {/* herosection */}
      <div className="w-full h-auto md:flex">
        <div className="md:w-2/3">
            <p className="font-serif md:text-6xl text-2xl font-bold text-gray-900 leading-snug tracking-tight">
              Hi I am <span className="text-indigo-600">Md Shami</span> <br />
              A Full Stack Developer
            </p>
            <p className="md:text-xl tracking-tight font-serif">
              I am skilled in react and express js  currently seeking knowledge in next js  i want to 
              controbute for real world projects and learn new things that encourage me to learn more .
            </p>
            <div className="gap-1 md:w-auto h-auto p-5 flex flex-col md:flex-row">
              <LiquidButton className="liquid-red text-gray-800 m-2 border hover:text-white">
                Work with Me
              </LiquidButton>
              <LiquidButton className="liquid-red text-gray-800 m-2 border hover:text-white cursor-pointer"  onClick={() => window.open("/resume.pdf", "_blank")}>
                Download CV
              </LiquidButton>
            </div>
        </div>
        <div className="md:w-1/3 flex justify-center item-center h-auto">
          <div className="rounded"> 
            <img src="/profile.svg" alt="profile" className="h-full w-full"/>
          </div>
        </div>
      </div>
      {/* experience */}
      <div className="py-10 w-full">
        <div className=" p-2"><h1 className="text-5xl text-indigo-600 tracking-tight font-serif font-bold">Experience</h1></div>
        <div className="w-full p-3">
              <div className="md:flex justify-between w-full">
                <div className="text-2xl font-semibold tracking-tight font-serif">Full Stack Engineer <Button className="bg-indigo-500 text-white text-lg font-serif">Remote</Button></div>
                <div>
                  <div className="text-xl font-semibold tracking-wider font-serif text-gray-800 cursor-pointer">Hubnex Labs </div>
                  <div className="py-2"><p className="font-serif tracking-tighter text-gray-800">oct 2024 - jan 2025</p></div>
                  <div className="flex justify-center text-gray-900 item-center font-sans tracking-tight"><span><MapPin className="text-red-600 font-bold" height={20} width={20}/></span>gurugram, haryana </div>
                </div>
              </div>
              <div className="px-5">
                <li className="text-gray-800 font-serif tracking-wide">
                  <ul>Built and maintained full-stack features using <span className="text-indigo-600 font-semibold">React</span>,<span className="text-indigo-600 font-semibold">Node.js</span>, <span className="text-indigo-600 font-semibold">Express</span>, and <span className="text-indigo-600 font-semibold">MongoDB</span>for real-world client projects.</ul>
                  <ul>Developed responsive UI components, integrated REST APIs, and improved user experience using Tailwind CSS and modern frontend practices.</ul>
                  <ul>Worked closely with a cross-functional team, collaborated on feature planning, resolved issues together, and followed Git-based workflows.</ul>
                </li>
              </div>
        </div>
      </div>
      {/* Skills */}
      <div className="py-10 w-full  ">
         <div className=" p-2"><h1 className="text-5xl text-indigo-600 tracking-tight font-serif font-bold">Skills</h1></div>
          <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-3 justify-evenly md:px-40 transition">
        {visibleSkills.map((item, idx) => (
          <FlipButton key={idx} className="h-20 w-40">
            <FlipButtonFront className="w-full bg-indigo-600 flex justify-center items-center">
              {item.front}
            </FlipButtonFront>
            <FlipButtonBack className="w-full text-xl tracking-tight font-serif font-bold text-white bg-indigo-600 flex justify-center items-center">
              {item.back}
            </FlipButtonBack>
          </FlipButton>
        ))}
      </div>

      {/* SEE MORE / SEE LESS BUTTON */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        {showAll ? "See Less" : "See More"}
      </button>
    </div>
      </div>
      {/* projects */}
      <div className="py-5">
         <div className=" p-2"><h1 className="text-5xl text-indigo-600 tracking-tight font-serif font-bold">Projects</h1></div>
        <div className="flex flex-wrap w-full justify-evenly">
        <Card
      className="max-w-sm m-1"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="./gofund.png"
    >
      <div className="flex justify-between"><h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-2">
        Grow Fund
      </h5>
      <a href="https://crowd-funding-client-dbq7.vercel.app/"><LiquidButton className="liquid-red text-gray-800 m-2 border hover:text-white cursor-pointer">Visit <Link/></LiquidButton></a>
      </div>
      
      <p className="font-normal text-gray-700 dark:text-gray-400 px-2 tracking-wide font-serif">
       A Crowd-funding platform where user create campaign and start to achieve their goal.
       <div>
       <span className="text-serif font-semibold text-indigo-600 tracking-tight p-1">React</span>
       <span className="text-serif font-semibold text-indigo-600 tracking-tight p-1">express js</span>
       <span className="text-serif font-semibold text-indigo-600 tracking-tight p-1">Razorpay</span>
       <span className="text-serif font-semibold text-indigo-600 tracking-tight p-1">Typescript</span>
       </div>
      </p>
    </Card>
    <Card
      className="max-w-sm m-1"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="./nowizo.png"
    >
      <div className="flex justify-between"><h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-2">
        Nowizo
      </h5>
      <a href="https://nowizo.vercel.app/auth/signup"><LiquidButton className="liquid-red text-gray-800 m-2 border hover:text-white cursor-pointer">Visit <Link/></LiquidButton></a>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400 px-2 tracking-wide font-serif">
        A social media flatform for blogging and texting.
        <div>
       <span className="text-serif font-semibold text-indigo-600 tracking-tight p-1">Next js</span>
       <span className="text-serif font-semibold text-indigo-600 tracking-tight p-1">Typescript</span>
       <span className="text-serif font-semibold text-indigo-600 tracking-tight p-1">Tailwind css</span>
       </div>
      </p>
    </Card>
    <Card
      className="max-w-sm m-1"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="./chat.jpg"
    >
      <div className="flex justify-between"><h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-2">
        Clear Chat
      </h5>
      <a href="https://clearchat.netlify.app/"><LiquidButton className="liquid-red text-gray-800 m-2 border hover:text-white cursor-pointer">Visit <Link/></LiquidButton></a>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400 px-2 tracking-wide font-serif">
        Chatting web app for real time chat experience.
        <div>
       <span className="text-serif font-semibold text-indigo-600 tracking-tight p-1">React</span>
       <span className="text-serif font-semibold text-indigo-600 tracking-tight p-1">Firebase</span>
      </div>
      </p>
    </Card>
    <Card
      className="max-w-sm m-1"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="./jarvis.jpg"
    >
      <div className="flex justify-between"><h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-2">
        Jarvis Desktop Assistant
      </h5>
      <LiquidButton className="liquid-red text-gray-800 m-2 border hover:text-white cursor-pointer">Visit <Link/></LiquidButton>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400 px-2 tracking-wide font-serif">
        Desktop Assistant where it give local and global information by voice command.
        <div>
       <span className="text-serif font-semibold text-indigo-600 tracking-tight p-1">Python</span>
       <span className="text-serif font-semibold text-indigo-600 tracking-tight p-1">Gemini</span>
        </div>
      </p>
    </Card>
    </div>
      </div>
      {/* connect */}
      <div></div>
      {/* footer  */}
      <div>
         <div className=" flex flex-col justify-center items-center">
          <div className="gap-2 flex">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full text-white bg-indigo-600"
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
                  className="rounded-full text-white bg-indigo-600"
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
                  className="rounded-full text-white bg-indigo-600"
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
                  className="rounded-full text-white bg-indigo-600"
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
    </div>
    </div>
    </>
  )
}

export default App
