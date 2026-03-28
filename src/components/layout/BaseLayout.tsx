import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function BaseLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
