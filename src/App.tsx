import { Header } from "./components/header";
import { MobileIllustration } from "./components/mobile";

function App() {
  return (
    <main className="bg-patterns">
      <div
        className="container relative z-10 py-16 grid grid-cols-1 gap-16 
        xl:grid-cols-[15.4375rem,27.8125rem] xl:justify-between xl:py-[9.25rem]"
      >
        <MobileIllustration />
        <div className="self-center">
          <Header />
        </div>
      </div>
    </main>
  );
}

export default App;
