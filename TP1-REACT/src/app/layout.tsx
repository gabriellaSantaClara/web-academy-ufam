import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'React TP01',
  description: 'Trabalho prático com Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="container mt-4">{children}</main>
      </body>
    </html>
  );
}
