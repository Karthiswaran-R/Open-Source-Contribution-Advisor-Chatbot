// components/ProjectCard.js

export default function ProjectCard({ projectName, githubUrl, description }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', marginBottom: '15px' }}>
      <h3>{projectName}</h3>
      <p>{description}</p>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}
