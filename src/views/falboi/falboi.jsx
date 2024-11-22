import './falboi.scss';
import falBoiImage from '../../assets/FalBoi.svg';

export default function FalBoiView() {
    return (
        <div className="falboi-view">
            <h1>FalBoi</h1>
            <img className="falboi-image" src={falBoiImage} alt='FalBoi' />
            <p>
                El <strong>Falboi</strong>, también conocido como &quot;Palboi&quot;, es un concepto esencial, derivado de &quot;Palbo&quot; (팔보, 八步), que significa &quot;ocho pasos&quot; en coreano, representa un conjunto de movimientos estratégicos diseñados para mejorar el desempeño en combate. Más que un simple desplazamiento, el Falboi integra técnicas que combinan agilidad, precisión y táctica.
            </p>

            <h2>Características principales del Falboi</h2>

            <ul>
                <li><strong>Movilidad estratégica:</strong> El Falboi se enfoca en el uso eficiente del espacio mediante desplazamientos fluidos que permiten al practicante atacar, defender o reposicionarse según las necesidades del combate.</li>
                <li><strong>Coordinación corporal:</strong> Las técnicas del Falboi requieren una sincronización precisa entre brazos y piernas, asegurando que cada movimiento sea funcional y efectivo, tanto en ataque como en defensa.</li>
                <li><strong>Adaptación al entorno:</strong> Parte fundamental de este concepto es aprender a leer el espacio y anticipar las acciones del oponente, utilizando los pasos para ganar ventaja posicional y mantener el control de la situación.</li>
                <li><strong>Flexibilidad y fluidez:</strong> Los patrones del Falboi fomentan movimientos naturales y continuos, evitando rigidez y facilitando transiciones rápidas entre posturas.</li>
            </ul>

            <h2>¿Por qué es importante en el Sipalki-do?</h2>
            <p>
                El Falboi no solo es una técnica, sino una filosofía de movimiento que enseña al practicante a combinar fuerza, velocidad y estrategia en combate. Estas habilidades avanzadas forman parte de la evolución del estudiante dentro del Sipalki-do, ayudándolo a comprender cómo moverse con propósito y adaptarse a diferentes situaciones.
            </p>
        </div>
    );

}
