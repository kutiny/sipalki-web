import { Outlet } from "react-router";
import { Header } from "../../components/header/header";
import './home.scss';

export default function Home() {
    return (
        <div className="view">
            <Header />
            <Outlet />
        </div>
    )
}

