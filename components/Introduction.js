export default function Introduction() {
  return (
    <div className="h-screen flex flex-col items-center justify-center center w-4/5 mx-auto">
      <div className="text-center pt-5 text-lime-500 text-5xl">WELCOME !</div>
      <div className="h-[80vh] flex flex-col md:flex-row items-center md:justify-between justify-around center text-left">
        <div
          id="description"
          className="text-xl md:text-3xl pb-2 md:pb-0 md:w-3/5 md:pr-3"
        >
          Hello there !
          <div>
            I'm <span className="text-lime-500">Amine Braham</span> ! I love
            coding, solving problems and building stuff. I'm passionate about learning everything
            related to tech, from{" "}
            <span className="text-amber-600">full-stack development</span>, to{" "}
            <span className="text-teal-400">mobile apps</span> and{" "}
            <span className="text-amber-400"> games</span>,
            <span className="text-sky-600"> AI</span> and more !
            <div>
              Whether you need a custom web application, a mobile app, or a
              software solution, I have the experience and technical expertise
              to bring your vision to life.
            </div>
          </div>
        </div>
        <div id="leftside" className="md:w-2/5 flex flex-col center items-center space-y-8">
          <div>
            <span className="block text-4xl p-4 border-b-4 dark:border-b-lime-500 border-b-lime-500">Freelancer on </span>
          </div>
          <div id="companies" className="flex flex-row justify-around space-x-4">
            <a href="https://www.upwork.com/freelancers/~010f8357d7483b57e6">
              <span className="sr-only">Upwork</span>
              <Upwork size={72}/>
            </a>
            <a href="https://www.fiverr.com/aminbrahem">
              <span className="sr-only">Fiverr</span>
              <Fiverr size={72}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Upwork = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 2500 2500"
    fill="currentColor"
  >
    <path
      d="m2315.4 0h-2130.7c-102 0-184.7 80.2-184.7 179.1v2141.7c0 99 82.7 179.2 184.7 179.2h2130.7c102 0 184.6-80.3 184.6-179.2v-2141.7c0-98.9-82.6-179.1-184.6-179.1z"
      fill="#6fda44"
    />
    <path
      d="m1834.6 1453.7c-98.4 0-190.5-41.7-274.3-109.6l20.4-95.8.9-3.5c18.2-102 75.8-273.3 253-273.3 132.9 0 241 108.3 241 241.3-.4 132.6-108.5 240.9-241 240.9zm0-726.7c-226.4 0-401.9 147.3-473.2 389.5-109-163.7-191.4-360.2-239.7-525.7h-243.6v634.8c0 125.1-101.9 227.1-226.9 227.1s-226.8-102-226.8-227.1v-634.8h-243.7v634.8c-.9 260 210.5 473.4 470.1 473.4s471-213.4 471-473.4v-106.5c47.4 98.9 105.4 198.7 175.9 287.5l-149.3 702.7h249.5l108.1-509.7c94.8 60.8 203.8 98.9 328.8 98.9 267.2 0 484.7-219.2 484.7-486.7-.2-267-217.7-484.8-484.9-484.8z"
      fill="#fff"
    />
  </svg>
);

const Fiverr = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 400 400"
    fill="currentColor"
  >
    <circle cx="200" cy="200" fill="#00b22d" r="200" />
    <g fill="#fff">
      <path d="M364.4 162.7c0-6.6-5.2-12-11.8-12-6.4 0-11.7 5.3-11.7 12 0 6.6 5.2 12 11.7 12 6.6.1 11.8-5.3 11.8-12zm-11.8 8.7c-4.5 0-8-3.8-8-8.7 0-4.8 3.5-8.6 8-8.6 4.6 0 8.2 3.8 8.2 8.6 0 4.9-3.6 8.7-8.2 8.7z" />
      <path d="M355.8 163.7c.6-.2 1.9-1.1 1.9-3 0-2.3-1.5-3.7-4-3.7h-5.3v11.3h3.5v-3.8h.9l1.6 3.8h3.8l-2.1-3.9c-.2-.6-.3-.7-.3-.7zm-3-1.6h-.9v-2.7h.9c.8 0 1.2.4 1.2 1.3.1.9-.4 1.4-1.2 1.4z" />
      <circle cx="104.6" cy="163" r="9" />
      <path d="M114 177.9H72.8v-2.7c0-5.3 5.3-5.4 8-5.4 3.1 0 4.5.3 4.5.3v-14.6s-2.8-.4-6.6-.4c-8.6 0-24.5 2.4-24.5 20.6v2.3h-7.5v13.5h7.5V220h-7v13.5H81V220h-8.2v-28.5h22.5V220h-7v13.5H121V220h-7zm70 0h-29.5v13.5h5l-6.4 20c-1.2 3.3-1.5 7.3-1.5 7.3h-.4s-.3-4-1.5-7.3l-6.4-20h5v-13.5h-29.5v13.5h6.2l15.4 42h22l15.4-42h6.2zm54.6 25.5c0-15.4-9.3-26.8-25.8-26.8-17.9 0-28.9 12.7-28.9 29 0 14.8 10.7 29.1 30.5 29.1 15 0 23.9-7.8 23.9-7.8l-6.8-12.9s-7.4 5.3-15.6 5.3c-5.9 0-11.5-3.1-12.9-10.2h35.2c-.1-.1.4-3.9.4-5.7zm-35.2-4.6c1-4.3 3.6-8.2 8.9-8.2 4.1 0 7 3.8 7 8.2zm114.1-8.1h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.4-.1-15.4 6.1-17.8 13.7zm-49.3 0h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.5-.1-15.5 6.1-17.8 13.7z" />
    </g>
  </svg>
);
