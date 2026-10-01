function Header({ name, themeColor = '#4f46e5' }) {
    return (
        <header
            style={{
                background: themeColor,
                color: '#fff',
                padding: '2rem 1rem',
                textAlign: 'center',
            }}
        >
            <h1> My Portfolio </h1>
            <h2 style={{ color: '#fff' }}> welcome , {name} </h2>
        </header>
    );
}

export default Header;