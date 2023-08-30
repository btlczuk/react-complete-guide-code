import Concept from './Concept';

function Concepts(props) {
    return (
        <ul id="concepts">
            {props.concepts.map((concept) => (
                <Concept key={concept.title} src={concept.image} alt={concept.alt} title={concept.title} desc={concept.desc} />
            ))}
        </ul>
    );
}

export default Concepts;