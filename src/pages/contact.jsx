import {useState} from 'react';

function Contact() {
    const [message, setMessage] = useState('');
    const [showHelp, setShowHelp] = useState(false);
    return (
        <div>
            <h2>Contact Me</h2>
             <input
                type="text"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <p>your message: {message}</p>
            
            <button onClick={() => setShowHelp(!showHelp)}>Help</button>
            {showHelp && (
                <div>
                    <p>Enter your message and click the button to send it.</p>
                </div>
            )}  
        </div>
    );
}

export default Contact;