import Header from "./components/header";
import NavBar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const skills = ["Python", "React", "C++", "JavaScript"];

  return (
    <div className="app-shell">
      <Header name="Vidhi" themeColor="#2563eb" />
      <NavBar />
      <main className="main-content">
        <About />
        <Skills skills={skills} />
      </main>
      <Footer />
    </div>
  );
}

export default App;