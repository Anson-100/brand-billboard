import React, { useState, useEffect } from "react"
import thumbUp from "../assets/thumb up.svg"
import thumbDown from "../assets/thumb down.svg"

import JohnWickHydrate from "../assets/wick hydrate.jpg"

const Landing = () => {
  // YES/NO BUTTON LOGIC--------------------------------------------------------------------------------

  const [showYes, setShowYes] = useState(false)
  const [showNo, setShowNo] = useState(false)
  const [isGrayscale, setIsGrayscale] = useState(false)
  const [isBright, setIsBright] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const toggleYes = () => {
    if (showYes) return
    if (showNo) {
      setShowNo(false)
      setIsGrayscale(false)
    }

    setShowYes(true)
    setIsBright(true)

    setTimeout(() => setIsVisible(true), 10)

    setTimeout(() => setShowYes(false), 5000)
    setTimeout(() => setIsBright(false), 5000)
    setTimeout(() => setIsVisible(false), 5000)
  }

  const toggleNo = () => {
    if (showNo) return
    if (showYes) {
      setShowYes(false)
      setIsBright(false)
    }

    setShowNo(true)
    setIsGrayscale(true)

    setTimeout(() => setIsVisible(true), 10)

    setTimeout(() => setShowNo(false), 5000)
    setTimeout(() => setIsGrayscale(false), 5000)
    setTimeout(() => setIsVisible(false), 5000)
  }

  // COUNTDOWN LOGIC
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    let timer
    if (showYes || showNo) {
      timer = setInterval(() => {
        setCountdown(prevCountdown =>
          prevCountdown > 0 ? prevCountdown - 1 : 0
        )
      }, 1000)
    } else {
      setCountdown(5)
    }

    return () => clearInterval(timer)
  }, [showYes, showNo])

  return (
    <div>
      <div className="h-screen flex flex-col justify-between">
        {/* IMAGE AND BUTTONS SECTION-------------------------------------------------------------------- */}
        <div className="flex flex-col flex-grow">
          <div className="flex justify-center bg-cream">
            <div className="hidden lg:flex lg:border-t-4 lg:border-l-4 lg:border-gold flex-grow bg-black rounded-tl-[20rem] justify-center items-center">
              <div className="flex basis-4/5 h-4/5 bg-deeper-blue rounded-2xl rounded-tl-[16rem] justify-center items-center">
                <div className="flex basis-4/5 h-4/5 bg-burgundy rounded-xl rounded-tl-[12rem] justify-center items-center">
                  <div className="flex basis-4/5 h-4/5 bg-cadmium rounded-lg rounded-tl-[10rem] justify-center items-center">
                    <div className="flex basis-4/5 h-4/5 bg-orange rounded-md rounded-tl-[8rem] justify-center items-center">
                      {" "}
                      <div className="flex basis-4/5 h-4/5 bg-yellow rounded-md rounded-tl-[7rem] justify-center items-center">
                        <div className="flex basis-4/5 h-4/5 bg-black rounded-md rounded-tl-[6rem] justify-center items-center">
                          <div className="flex basis-4/5 h-4/5 bg-other-black rounded-md rounded-tl-[5rem] justify-center items-center">
                            {/* YES BUTTON */}
                            <a
                              href="https://www.youtube.com/watch?v=KcUX8oUyg70"
                              onClick={event => {
                                event.preventDefault()
                                toggleYes()
                                setTimeout(() => {
                                  window.open(
                                    "https://www.youtube.com/watch?v=KcUX8oUyg70&t=77",
                                    "_blank"
                                  )
                                }, 4500)
                              }}
                              className="font-semibold lg:text-[5rem] text-cream hidden lg:block transition-colors duration-300 hover:text-green-600"
                            >
                              ✓
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:bg-black bg-cream relative">
              {" "}
              <div className="border-4 border-gold bg-black saturate-120 rounded-t-[12rem] lg:rounded-b-2xl lg:rounded-t-none">
                <img
                  className={`rounded-t-[11.7rem] lg:rounded-b-2xl lg:rounded-t-none transition duration-[2000ms] ${
                    isGrayscale ? "grayscale" : ""
                  } ${isBright ? "brightness-200" : ""}`}
                  src={JohnWickHydrate}
                />
              </div>
              {showYes && (
                <div
                  className={`absolute inset-0 flex flex-col justify-center items-center`}
                >
                  <p
                    id="passFail"
                    className={`font-semibold text-[10rem] md:text-[16rem] text-green-600 transition duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    ✓
                  </p>
                  <div
                    id="caption"
                    className={`font-helvetica text-2xl text-semibold bg-white text-black text-center rounded-xl w-11/12
                    transform transition-transform duration-500 ease-in-out ${
                      isVisible ? "scale-100" : "scale-0"
                    }`}
                  >
                    <p>Be like John Wick.</p>
                    <p>He does whatever it takes to stay hydrated.</p>
                    <p className="text-cadmium">{countdown}</p>
                  </div>
                </div>
              )}
              {showNo && (
                <div
                  className={`absolute inset-0 flex flex-col justify-center items-center text-center`}
                >
                  <p
                    id="passFail"
                    className={`text-[10rem] md:text-[16rem]  text-red-600 transition duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    ✘
                  </p>
                  <div
                    id="caption"
                    className={`font-helvetica text-2xl text-semibold bg-white text-black rounded-xl w-11/12
                    transition-transform duration-300 ease-in-out transform ${
                      isVisible ? "scale-100" : "scale-0"
                    }`}
                  >
                    <p>Don't be like John Wick's enemies.</p>
                    <p>
                      Their constant boozing leaves them dehydrated and weak.
                    </p>
                    <p className="text-cadmium">{countdown}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden lg:flex lg:border-t-4 lg:border-r-4 lg:border-gold flex-grow bg-black rounded-tr-[20rem] justify-center items-center">
              <div className="flex basis-4/5 h-4/5 bg-deeper-blue rounded-2xl rounded-tr-[16rem] justify-center items-center">
                <div className="flex basis-4/5 h-4/5 bg-burgundy rounded-xl rounded-tr-[12rem] justify-center items-center">
                  <div className="flex basis-4/5 h-4/5 bg-cadmium rounded-lg rounded-tr-[10rem] justify-center items-center">
                    <div className="flex basis-4/5 h-4/5 bg-orange rounded-md rounded-tr-[8rem] justify-center items-center">
                      {" "}
                      <div className="flex basis-4/5 h-4/5 bg-yellow rounded-md rounded-tr-[7rem] justify-center items-center">
                        <div className="flex basis-4/5 h-4/5 bg-black rounded-md rounded-tr-[6rem] justify-center items-center">
                          <div className="flex basis-4/5 h-4/5 bg-other-black rounded-md rounded-tr-[5rem] justify-center items-center">
                            {/* NO BUTTON */}
                            <a
                              href="https://www.youtube.com/watch?v=xAZO4RXRnb8"
                              onClick={event => {
                                event.preventDefault()
                                toggleNo()
                                setTimeout(() => {
                                  window.open(
                                    "https://www.youtube.com/watch?v=xAZO4RXRnb8",
                                    "_blank"
                                  )
                                }, 4500)
                              }}
                              className="lg:text-[5rem] text-cream hidden lg:block transition-colors duration-300 hover:text-red-600"
                            >
                              ✘
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* TEXT SECTION----------------------------------------------------------------------------------- */}
          <div className="flex w-full txt-fit:w-[916px] lg:w-full mx-auto justify-center h-full border-b-4 border-r-4 border-l-4 rounded-b-2xl border-gold bg-black">
            <div className="hidden lg:block flex flex-col text-center items-center flex-grow bg-black rounded-bl-2xl">
              <p className="text-[7rem] text-yellow">⭡</p>
              <p className="font-goodvibes font-semibold xl:text-3xl lg:text-2xl text-yellow">
                Did you drink enough water today?
              </p>
            </div>

            <div className="flex flex-col">
              <div className="bg-black text-center ">
                <p className="font-limelight lg:text-[2.3rem] text-[1.2rem] sm:text-[1.5rem] text-cream pr-[5px] pl-[5px]">
                  In a world of chaos, <span className="text-blue">water</span>{" "}
                  is the clarity your body needs.
                </p>
              </div>
              <div className="lg:hidden flex flex-col justify-center items-center flex-grow">
                <div className="flex justify-center items-center h-2/6 bg-black w-4/6 flex-grow">
                  <div className="flex rounded-[13rem] justify-center items-center basis-11/12 h-11/12 bg-deeper-blue">
                    <div className="flex rounded-[10rem] justify-center items-center basis-11/12 h-11/12 bg-burgundy ">
                      <div className="flex rounded-[10rem] justify-center items-center basis-11/12 h-11/12 bg-cadmium ">
                        <div className="flex rounded-[10rem] justify-center items-center basis-11/12 h-11/12 bg-orange ">
                          <div className="flex rounded-[5rem] sm:rounded-[4rem] justify-center items-center basis-11/12 h-11/12 bg-yellow ">
                            <div className="flex rounded-[7rem] sm:rounded-[6rem] justify-center items-center h-11/12 basis-11/12 bg-black  text-center">
                              <a
                                id="yes-no"
                                href="https://www.youtube.com/watch?v=KcUX8oUyg70"
                                onClick={event => {
                                  event.preventDefault()
                                  toggleYes()
                                  setTimeout(() => {
                                    window.open(
                                      "https://www.youtube.com/watch?v=KcUX8oUyg70&t=77",
                                      "_blank"
                                    )
                                  }, 4500)
                                }}
                                className="text-[3rem] font-semibold text-green-600 p-2"
                              >
                                <img src={thumbUp} alt="thumbs up" />
                              </a>

                              <a
                                id="yes-no"
                                href="https://www.youtube.com/watch?v=xAZO4RXRnb8"
                                onClick={event => {
                                  event.preventDefault()
                                  toggleNo()
                                  setTimeout(() => {
                                    window.open(
                                      "https://www.youtube.com/watch?v=xAZO4RXRnb8",
                                      "_blank"
                                    )
                                  }, 4500)
                                }}
                                className="text-[3rem] text-red-600 p-2"
                              >
                                <img src={thumbDown} alt="thumbs down" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-yellow text-[4.5rem] font-semibold">⭡</div>
                <div className="flex justify-center items-center flex-col">
                  <p
                    id="mobile-question"
                    className="font-goodvibes font-semibold text-[1.5rem] text-center text-yellow"
                  >
                    Did you drink enough water today?
                  </p>
                </div>
              </div>
              <div className="sm:flex sm:flex-row flex-col text-center justify-center items-center bg-black rounded-b-2xl lg:rounded-none">
                <p className="font-retro text-[6.7rem] xxs:text-[7.5rem] xl:text-[7rem] lg:text-[6.3rem] md:text-[5.7rem] sm:text-[4.5rem] text-cream sm:ml-4 lg:ml-0">
                  STAY
                </p>
                <p className="font-retro xl:text-[7rem] lg:text-[6.3rem] md:text-[5.7rem] text-[3.1rem] xxs:text-[3.33rem] sm:text-[4.5rem] text-blue sm:ml-3">
                  HYDRATED
                </p>
              </div>
            </div>
            <div className="hidden lg:block flex flex-col text-center items-center flex-grow justify  bg-black rounded-br-2xl">
              <p className="text-[7rem] text-yellow">⭡</p>
              <p className="font-goodvibes font-semibold xl:text-3xl lg:text-2xl text-yellow">
                Did you drink enough water today?
              </p>
            </div>
          </div>
        </div>

        <div className="bg-cream flex justify-center items-center">
          <p className="font-cinzel font-semibold text-black p-[1rem]">
            Ⓒ Anson Hunnell, 2023
          </p>
        </div>
      </div>
    </div>
  )
}

export default Landing
