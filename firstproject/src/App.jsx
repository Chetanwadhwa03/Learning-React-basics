import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="Card1" description="Desc 1" />
        <Card title="Card2" description="Desc 2" />
        <Card title="Card3" description="Desc 3" />
        <Card title="Card4" description="Desc 4" />
        <Card title="Card5" description="Desc 5" />
      </div>

      <div className="maincontent">
        <h3>This is my main content</h3>
      </div>

      <Footer />
    </>
  )
}


export default App
