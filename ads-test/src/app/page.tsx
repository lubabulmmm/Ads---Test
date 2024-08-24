import Navbar from './components/navbar';
import Home from '@/app/home/page';
export default function Landingpage() {
 
    return (
      <>
        <Navbar />
        <Home /> 
        <main className="container mx-auto mt-10">
          {/* Konten utama Anda */}
        </main>
      </>
    );
  }