import { serverFetch } from '@/lib/server-fetch';
import Link from 'next/link';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function getSummary() {
  const [uRes, pRes] = await Promise.all([
    serverFetch('/api/users'),
    serverFetch('/api/posts'),
  ]);
  if (!uRes.ok || !pRes.ok) {
    return { error: `users:${uRes.status} posts:${pRes.status}`, users: 0, posts: 0 };
  }
  const [users, posts] = await Promise.all([uRes.json(), pRes.json()]);
  return { users: users.length, posts: posts.length };
}

export default async function Home() {
  const data = await getSummary();
  return (
    <section>
      <h1>Next.js API-first (SSR) • Vercel-ready</h1>
      {'error' in data && data.error ? (
        <p style={{ color: '#c00' }}>API error → {data.error}</p>
      ) : null}
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <div className="card"><h3>Users</h3><p>Total: <b>{'users' in data ? data.users : 0}</b></p></div>
        <div className="card"><h3>Posts</h3><p>Total: <b>{'posts' in data ? data.posts : 0}</b></p></div>
      </div>
      
      <div style={{ marginTop: 24 }}>
        <h2>Featured Profile</h2>
        <div className="card" style={{ maxWidth: 400 }}>
          <h3>Alice Johnson</h3>
          <p><strong>Email:</strong> alice@example.com</p>
          <p><strong>Role:</strong> Full Stack Developer</p>
          <p><strong>Bio:</strong> Passionate about building modern web applications with Next.js and React. Loves creating user-friendly interfaces and solving complex problems.</p>
          <p><strong>Location:</strong> Bangkok, Thailand</p>
          <p><strong>Experience:</strong> 5+ years</p>
          <div style={{ marginTop: 16 }}>
            <Link href="/profile" legacyBehavior>
              <a style={{ 
                display: 'inline-block', 
                padding: '8px 16px', 
                backgroundColor: '#0070f3', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                View Full Profile →
              </a>
            </Link>
          </div>
        </div>
      </div>
      <p style={{ marginTop: 12, color: '#666' }}>
        SSR calls2 <code>/api/users</code> and <code>/api/posts</code> and forwards cookies/headers.
      </p>
    </section>
  );
}
