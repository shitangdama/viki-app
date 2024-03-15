import { useSearchParams, useParams, useLocation } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import styles from './index.module.css';

// import ThemeProvider from 'react-bootstrap/ThemeProvider'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function GlobalHeader() {
    const navigate = useNavigate();

    return <div className={styles.header}>
                <nav >
                {/* <Container>
                    <Navbar.Brand href="#home">Saki-Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/home')}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
                        <Nav.Link onClick={() => navigate('/detail')}>About</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container> */}
                aaaa
                </nav>
            </div>
}



function GlobalContent() {
    return <div className={styles.main}>
        <div className={styles.mainContainer} >
            {/* outlet */}
            <Outlet />
        </div>
    </div>;
}

// export default function Index(){
//     return <ThemeProvider className={styles.baseLayout}>
//                 <GlobalHeader />
//                 <GlobalContent />
//                 {/* <GlobalFooter /> */}
//             </ThemeProvider>
// }

export default function Index(){
    return <>
                <GlobalHeader />
                <GlobalContent />
                {/* <GlobalFooter /> */}
            </>
}