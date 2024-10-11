import Header from './components/Header/Header.jsx'
import CoreConceptSection from './components/sections/CoreConceptSection.jsx'
import ExamplesSection from './components/sections/ExamplesSection.jsx';
function App() {
 
  return (
    <div>
      <Header></Header>
      <main>
      <CoreConceptSection></CoreConceptSection>
      <ExamplesSection></ExamplesSection>
      </main>
    </div>
  )
}
export default App;