function Skills({ skills }) {
    return (
        <section style={{ padding: '2rem 1rem', textAlign: 'center' }}>
            <h2>My Skills</h2>
            <ul
                style={{
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    padding: 0,
                }}
            >
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        style={{
                            background: '#e0e7ff',
                            color: '#1f2937',
                            padding: '0.7rem 1rem',
                            borderRadius: '999px',
                            fontWeight: 600,
                        }}
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;
       