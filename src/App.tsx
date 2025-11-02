import { PrimaryButton } from './components/common/PrimaryButton';
import { Landing } from './components/landingSection/Landing';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <h1 className="flex mt-[4rem] text-[5rem] text-accent font-black gap-4">
        AINO JYLHÄ
      </h1>
      <PrimaryButton text="Contact" />
    </>
  );
}

export default App;
