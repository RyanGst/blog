import { constants } from "../../constants";
import { globals } from "../../globals";


const Links = () => {
    return (
        <div className="container">
            <section>
                <h1>
                    <mark>connect with me</mark>
                </h1>
            </section>

            <section>
                <h2>Social Media</h2>
                <div className="image-grid">
                    {constants.links.map((socialMedia) => (
                        <a
                            key={socialMedia.name}
                            href={socialMedia.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="terminal-card clickable"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem',
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                        >
                            <img
                                src={socialMedia.icon}
                                alt={socialMedia.name}
                                width="24"
                                height="24"
                            />
                            <span>{socialMedia.name}</span>
                        </a>
                    ))}
                </div>
            </section>

            <section>
                <h2>Email</h2>
                <div className="terminal-card" style={{ padding: '1rem' }}>
                    <a
                        href={`mailto:${globals.email}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <img
                            src="/img/icons/email.svg"
                            alt="Email"
                            width="24"
                            height="24"
                        />
                        <span>{globals.email}</span>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Links;
