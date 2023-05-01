import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import Container from './components/Container/Container'
import Header from './components/Header/Header'

function App() {


    return (
        <div className='App'>
            <Header />
            <Container>
                <Sidebar />
                <div style={{ width: "100%" }}>
                    <Navbar />
                    <Outlet />
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default App
