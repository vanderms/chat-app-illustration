import { Header } from "./components/header";
import { MobileIllustration } from "./components/mobile";

function App() {
  return (
    <main className="bg-patterns">
      <div className="container relative z-10 py-16 grid grid-cols-1 gap-16">
        <MobileIllustration />
        <Header />
      </div>
    </main>
  );
}

export default App;
