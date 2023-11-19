import { Link, Outlet } from "react-router-dom";

export default function() {
    return (
        <main className="max-w-5xl mx-auto min-h-screen w-full border-x ">
            <div className="border-b px-6 py-3 flex items-center justify-between">
                <Link to="/" className="hover:underline">Welcome to Pocketwitter</Link>
                
                <div className="space-x-2 flex">
                    <Link to="/login" className="button">Login</Link>
                    <Link to="/register" className="button is-primary">Register</Link>
                </div>
            </div>

            <Outlet />
        </main>
    );
}