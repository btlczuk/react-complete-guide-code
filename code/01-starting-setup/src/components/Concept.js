function Concept({ src, alt, title, desc }) {
    return (
        <li className="concept">
            <img src={src} alt={alt} />
            <h2>{title}</h2>
            <p>{desc}</p>
        </li>
    );
}

export default Concept;