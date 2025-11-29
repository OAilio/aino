import { About } from './components/aboutSection/About';
import { Landing } from './components/landingSection/Landing';
import { Navbar } from './components/navbar/Navbar';
import { WorkExperience } from './components/workExperience/WorkExperience';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <WorkExperience />
    </>
  );
}

export default App;
