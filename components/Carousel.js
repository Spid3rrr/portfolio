import React from "react";
import Image from "next/image";
import { useCallback } from "react";
import styles from "../styles/Carousel.module.css";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import safe1Pic from "../public/projects/safe1.jpg";
import m33tPic from "../public/projects/m33t.jpg";
import tictactoePic from "../public/projects/tictactoe.PNG";
import landingPagePic from "../public/projects/4a4b.png";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const checkScrolls = useCallback(() => {
    if (emblaApi) {
      if (emblaApi.canScrollNext())
        document.getElementById("next_button").classList.remove(styles.greyed);
      else document.getElementById("next_button").classList.add(styles.greyed);
      if (emblaApi.canScrollPrev())
        document.getElementById("prev_button").classList.remove(styles.greyed);
      else document.getElementById("prev_button").classList.add(styles.greyed);
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  if (emblaApi) emblaApi.on("select", checkScrolls);

  checkScrolls();

  return (
    <div className="h-screen items-center justify-center center w-4/5 text-center mx-auto">
      <div className="text-center text-amber-500 text-4xl pt-9 pb-3">Projects</div>
      <div><span className="text-base md:text-2xl"> Whether working independently or as part of a team, I am always focused on delivering results that exceed expectations. If you are looking for a reliable and talented programming freelancer, I would be honored to bring my skills and expertise to your next project.</span></div>
      <div className="flex flex-row h-[80vh]">
        <button id="prev_button" className="left m-4" onClick={scrollPrev}>
          <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        </button>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.embla__slide}>
              <CarouselItem
                name="4A4B Landing Page"
                img={landingPagePic}
                description="Example of a landing page for a tech startup to attract more customers and introduce the company in a fluid manner"
                skills="NextJs - TailWindCSS - Framer Motion"
                demo="https://landing-page-spid3rrr.vercel.app/"
              />
            </div>
            <div className={styles.embla__slide}>
              <CarouselItem
                name="M33t Discord Bot"
                img={m33tPic}
                description="I built a helpful Discord bot to organize meetings. This bot will only allow one person to speak at a time, and implements a queue to give everyone a chance to speak"
                skills="Javascript - DiscordJS"
              />
            </div>
            <div className={styles.embla__slide}>
              <CarouselItem
                name="Safe1 Android App"
                img={safe1Pic}
                description="This app is a way to make sure that you can easily control what apps can access your data and peripherals to preserve your privacy"
                skills="Java - Android Studio"
              />
            </div>
            <div className={styles.embla__slide}>
              <CarouselItem
                name="Unbeatable TicTacToe"
                img={tictactoePic}
                description="I built a tic-tac-toe game with a bot that simply cannot lose. Don`t believe me ? try it yourself !"
                skills="React - Flask"
                demo="https://tictactoe-sand.vercel.app/"
              />
            </div>
          </div>
        </div>
        <button id="next_button" className="right m-4" onClick={scrollNext}>
          <FontAwesomeIcon icon={faAngleRight} size="2x" />
        </button>
      </div>
    </div>
  );
}

function CarouselItem(props) {
  return (
    <div className="h-[60vh] w-[60vw] md:w-[70vw] m-6 flex flex-col md:flex-row justify-center items-center text-left">
      <div id="image" className="w-full mb-4 mx-4 center items-center ">
        <Image
          src={props.img}
          className=""
          alt="project img"
        />
      </div>
      <div className="text-xl font-sans mx-4">
        <div>
        <div>
          <b>{props.name}</b>
        </div>
        <div><p>{props.description}</p></div>
        </div>
        <div>
          {" "}
          Built with : <a className="text-sky-400 ml-4">{props.skills}</a>
        </div>
        {props.demo?
        <div className="center text-center text-2xl hover:text-lime-500 underline">
            <Link href={props.demo}><a>Demo</a></Link>
        </div>
        :""}
      </div>
    </div>
  );
}
