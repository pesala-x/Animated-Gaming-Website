import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import NavBar from "./components/NavBar.jsx";
import Features from "./components/Features.jsx";
import Story from "./components/Story.jsx";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <NavBar />
            <Hero />
            <About />
            <Features />
            <Story />
        </main>
    )
}
export default App
