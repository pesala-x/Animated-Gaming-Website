import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <NavBar />
            <Hero />
            <About />
        </main>
    )
}
export default App
