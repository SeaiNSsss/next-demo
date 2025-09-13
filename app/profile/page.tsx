export default function Profile() {
  return (
    <div style={{ marginTop: 24 }}>
      <h2>Featured Profile</h2>
      <div className="card" style={{ maxWidth: 400 }}>
        <h3>Peeniti Pikunngam</h3>
        <p><strong>Email:</strong> Seian@example.com</p>
        <p><strong>Location:</strong> Thailand</p>
        <p><strong>Age:</strong> 21 years</p>
        <div style={{ marginTop: 16 }}>
          <a href="/" style={{ 
            display: 'inline-block', 
            padding: '8px 16px', 
            backgroundColor: '#666', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '4px',
            fontSize: '14px'
          }}>
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}