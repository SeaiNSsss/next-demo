import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js API-first (SSR) • Demo',
  description: 'Pages fetch API directly; Vercel-ready'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '12px 16px', borderBottom: '1px solid #eee' }}>
          <b>API-first Demo</b>
          <nav style={{ display: 'inline-block', marginLeft: 16 }}>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <span style={{ margin: '0 8px' }}>|</span>
            <Link href="/users" legacyBehavior><a>Users</a></Link>
            <span style={{ margin: '0 8px' }}>|</span>
            <Link href="/posts" legacyBehavior><a>Posts</a></Link>
            <span style={{ margin: '0 8px' }}>|</span>
            <Link href="/profile" legacyBehavior><a>Profile</a></Link>
          </nav>
        </header>
        <main style={{ padding: 16 }}>{children}</main>
        <footer style={{ padding: 16, borderTop: '1px solid #eee', color: '#555' }}>
          API-first • SSR • Vercel
        </footer>
      </body>
    </html>
  );
}
