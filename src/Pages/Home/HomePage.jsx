import Hero from "../../components/sections/Hero/Hero";
import Features from "../../components/sections/Features/Features";
import About from "../../components/sections/About/About";
import Download from "../../components/sections/Download/Download";
import styles from "./HomePage.module.css";

export default function HomePage() {
    return (
        <main className={styles.home}>
            <Hero />
            <Features />
            <About />
            <Download />
        </main>
    );
}
