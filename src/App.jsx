// import Header from "./components/Layout/Header"
// import Footer from "./components/Layout/Footer"
import Body from "./components/Body/Body"
import Layout from "./components/Layout/Layout";
function App() {

  return (
    <div
      className="rtl bg-[#e5ebef] flex flex-col overflow-x-hidden"
    >
        <Layout>
          <Body />
        </Layout>
    </div>
  )
}

export default App
