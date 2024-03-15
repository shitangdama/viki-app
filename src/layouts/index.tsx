import { useSearchParams, useParams, useLocation } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./header";
import { UserNav } from "./userNav";
import styles from './index.module.css';

// import ThemeProvider from 'react-bootstrap/ThemeProvider'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function GlobalHeader() {
    const navigate = useNavigate();

    return <div className="flex h-16 items-center px-4">
        <Header />
        <div className="ml-auto flex items-center space-x-4">
            <UserNav />
        </div>
    </div>
}



function GlobalContent() {
    return <div className="md:mx-auto xl:max-w-[1280px]">
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