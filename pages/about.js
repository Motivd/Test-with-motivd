function About() {
  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#333' }}>About TODOODO</h1>
      <p style={{ color: '#666', lineHeight: '1.6' }}>
        TODOODO is a simple and intuitive task management application designed to help you stay organized and productive.
      </p>
      <p style={{ color: '#666', lineHeight: '1.6' }}>
        Features include adding tasks, marking them as complete, and deleting tasks you no longer need.
      </p>
      <div style={{ marginTop: '30px' }}>
        <a 
          href="/" 
          style={{
            color: '#4CAF50',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          ← Back to Tasks
        </a>
      </div>
    </div>
  );
}

export default About;