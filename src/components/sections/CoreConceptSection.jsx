import CoreConcepts from '../CoreConcepts.jsx';
import { CORE_CONCEPTS } from '../../data.js';

export default function CoreConceptSection() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((item) => <CoreConcepts key={item.title} {...item}></CoreConcepts>)}
            </ul>
        </section>
    )
}
