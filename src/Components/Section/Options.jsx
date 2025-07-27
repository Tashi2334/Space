import React from "react";

export default function Options() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-10">
      {/* Card 1 */}
      <div className="border-2 w-[23vw] h-[50vh] bg-[#D9D9D9] border-[#D9D9D9] p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="ml-25 text-[#C68313]"
        >
          <path d="M10.386 9.836a2.5 2.5 0 1 1 3.611.667C15.212 11.173 16 12.46 16 14v1.5a.5.5 0 1 1-1 0V14c0-1.724-1.276-3-3-3c-.91 0-1.298-.02-1.805-.122c-1.25-.254-2.333-1-3.585-2.566a.5.5 0 1 1 .78-.624c.9 1.124 1.653 1.74 2.434 2.043c.155.052.345.083.562.105m1.785.128q.125.015.251.034L12.5 10a1.5 1.5 0 1 0-.33-.036M9.78 11.97a.5.5 0 0 1 .5.5a1 1 0 0 1-.05.231c-.179.38-.23.774-.23 1.302v1.5a.5.5 0 1 1-1 0v-1.5c0-.657.072-1.186.307-1.696a.5.5 0 0 1 .473-.337M5.958 5.772a.5.5 0 0 1-.78.625L3.11 3.812a.5.5 0 1 1 .78-.624zM1 11h5.5a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5V.5A.5.5 0 0 1 .5 0h12a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0V1H1z" />
        </svg>
        <div className="text-2xl font-medium mt-4 ml-4">
          Astronaut <span className="text-[#C68313]">Training</span>
        </div>
        <div className="mt-3 ml-3 text-lg">
          Lorem ipsum dolor sit amet, <br />
          adipiscing elit, sed do eiusmod
        </div>
        <button className="flex items-center gap-2 px-4 py-2 mt-7 ml-10 justify-center text-xl text-[#C68313] rounded-lg hover:bg-[#a86f10]  hover:text-[white] transition duration-300">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
            />
          </svg>
        </button>
      </div>

      {/* Duplicate Card Example — you can copy or map more */}
      <div className="border-2 w-[23vw] h-[50vh] bg-[#D9D9D9] border-[#D9D9D9] p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="text-[#C68313] ml-25"
        >
          <path d="M477.64 38.26a4.75 4.75 0 0 0-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 0 0-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0 0 10.55 11.2l87.31-9.63a194 194 0 0 0 1.19 19.7a19.53 19.53 0 0 0 5.7 12L170.7 375a19.6 19.6 0 0 0 12 5.7a194 194 0 0 0 19.59 1.19l-9.58 87.2a9.65 9.65 0 0 0 11.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5c8.4-19.27 10.12-41.77 8.18-64.27a317.7 317.7 0 0 0 42.21-35.64C441 232.05 491.74 99.74 477.64 38.26M294.07 217.93a48 48 0 1 1 67.86 0a47.95 47.95 0 0 1-67.86 0" />
          <path d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46c-23.77 4.05-44.76-16.49-40.49-40.52c1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 0 0-3.65-7.45a60 60 0 0 0-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.7 59.7 0 0 0 176 403.09c.37-4.18-4.72-6.67-7.6-3.66" />
        </svg>
        <div className="text-2xl font-medium mt-4 ml-3">
          Rocket launch <span className="text-[#C68313]">Tours</span>
        </div>
        <div className="mt-3 ml-3 text-lg">
          Lorem ipsum dolor sit amet, <br />
          adipiscing elit, sed do eiusmod
        </div>
        <button className="flex items-center gap-2 px-4 py-2 mt-7 ml-10  text-xl text-[#C68313] rounded-lg hover:bg-[#a86f10]  hover:text-[white] transition duration-300">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
            />
          </svg>
        </button>
      </div>

      {/* You can repeat or map more cards here */}
      <div className="border-2 w-[23vw] h-[50vh] bg-[#D9D9D9] border-[#D9D9D9] p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="text-[#C68313] ml-25 mt-4"
        >
          <path d="M5 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M6.5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 1.5A1.5 1.5 0 0 1 3.5 0h9A1.5 1.5 0 0 1 14 1.5v10c0 .546-.292 1.02-.728 1.29l-.141.423a2.5 2.5 0 0 0 0 1.58l.07.209h.3a.5.5 0 0 1 0 1H4c-1.1 0-2-.895-2-2v-12.5zM12.5 1h-9a.5.5 0 0 0-.5.5v10.8c.294-.17.636-.268 1-.268h8.5a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5zm-.352 12h-8.15a1 1 0 0 0 0 2h8.15a3.5 3.5 0 0 1 0-2"
          />
        </svg>
        <div className="text-2xl font-medium mt-1 ml-2">
          Explorer's <span className="text-[#C68313]">Logbook</span>
        </div>
        <div className="mt-3 ml-3 text-lg">
          Lorem ipsum dolor sit amet, <br />
          adipiscing elit, sed do eiusmod
        </div>
        <button className="flex items-center gap-2 px-4 py-2 mt-7 ml-10  text-xl text-[#C68313] rounded-lg hover:bg-[#a86f10] hover:text-[white] transition duration-300">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
            />
          </svg>
        </button>
      </div>
      <div className="border-2 w-[23vw] h-[50vh] bg-[#D9D9D9] border-[#D9D9D9] p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="ml-24 mt-3 text-[#C68313]"
        >
          <path d="M19 7s-5 7-12.5 7c-2 0-5.5 1-5.5 5v4h11v-4c0-2.5 3-1 7-8l-1.5-1.5M3 5V2h20v14h-3M11 1h4v2h-4zM6.5 14a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Z" />
        </svg>
        <div className="text-2xl font-semibold mt-4 ml-4">
          Galaxy <span className="text-[#C68313]">Workshops</span>
        </div>
        <div className="mt-3 ml-3 text-lg">
          Lorem ipsum dolor sit amet, <br />
          adipiscing elit, sed do eiusmod
        </div>
        <button className="flex items-center gap-2 px-4 py-2 mt-7 ml-10  text-xl text-[#C68313] rounded-lg hover:bg-[#a86f10]  hover:text-[white] transition duration-300">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
            />
          </svg>
        </button>
      </div>
      <div className="border-2 w-[23vw] h-[50vh] bg-[#D9D9D9] border-[#D9D9D9] p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          className="text-[#C68313] ml-24 mt-4 "
        >
          <path d="M22 12H2" />
          <path d="M20 17h-4c-1.886 0-2.828 0-3.414-.586S12 14.886 12 13v-1" />
          <path d="M4 12v10" />
          <path d="M20 12v10" />
          <path d="M15.04 2.599a1.94 1.94 0 0 0-2.648 0c-.414.393-.572.845-.115 1.28l1.416 1.348c.456.434.929.29 1.347-.108a1.72 1.72 0 0 0 0-2.52" />
          <path d="M15.04 2.599c.496-.326 1.053-.781 1.672-.523c.29.122.49.419.889 1.013l1.498 2.233c.565.842.847 1.263.894 1.74c.047.476-.148.94-.539 1.865L18.158 12" />
          <path d="M4 12V7.5C4 6.373 4.45 6 5.5 6S7 6.373 7 7v5" />
          <path d="M7 12V7.5C7 6.373 7.45 6 8.5 6s1.5.373 1.5 1.5V12" />
        </svg>
        <div className="text-2xl font-medium mt-4 ml-4">
          Educational <span className="text-[#C68313]">Camps</span>
        </div>
        <div className="mt-3 ml-3 text-lg">
          Lorem ipsum dolor sit amet, <br />
          adipiscing elit, sed do eiusmod
        </div>
        <button className="flex items-center gap-2 px-4 py-2 mt-7 ml-10 text-xl text-[#C68313] rounded-lg hover:bg-[#a86f10]  hover:text-[white] transition duration-300">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
            />
          </svg>
        </button>
      </div>
      <div className="border-2 w-[23vw] h-[50vh] bg-[#D9D9D9] border-[#D9D9D9] p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 576 512"
          fill="currentColor"
          className="text-[#C68313] ml-24 mt-5"
        >
          <path d="M256-32h64c17.7 0 32 14.3 32 32v64H224V0c0-17.7 14.3-32 32-32M64 32h112v32c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V32h112c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64m112 368c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80h-64c-44.2 0-80 35.8-80 80m112-120a56 56 0 1 0 0-112a56 56 0 1 0 0 112" />
        </svg>
        <div className="text-2xl font-medium mt-4 ml-10">
          Identity <span className="text-[#C68313]">Cards</span>
        </div>
        <div className="mt-3 ml-2 text-lg">
          Lorem ipsum dolor sit amet, <br />
          adipiscing elit, sed do eiusmod
        </div>
        <button className="flex items-center gap-2 px-4 py-2 mt-5 ml-3 text-xl text-[#C68313] rounded-lg hover:bg-[#a86f10]  hover:text-[white] transition duration-300">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
