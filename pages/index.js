import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Welcome from "../components/Welcome";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amine Braham</title>
      </Head>
      <div className="snap-start md:snap-align-none">
        <Header />
        <Welcome />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="snap-start md:snap-align-none">
          <Introduction />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="snap-start md:snap-align-none">
          <Carousel />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="snap-end md:snap-align-none">
          <Contact />
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}
