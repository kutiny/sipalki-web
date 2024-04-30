import SooNamYoo from '../../assets/soo_nam_yoo.png';
import './home-view.scss';

export function HomeView() {
    return (
        <div className='home-view'>
            <img src={SooNamYoo} className='soo-nam' />
            <p>El <span className='spk'>Sipalki-do</span> es un arte marcial coreano que se basa en las antiguas técnicas de combate desarrolladas a lo largo de los siglos en la península. Surgió en un contexto donde la supervivencia implicaba dominar técnicas para enfrentar invasiones y proteger la vida, la familia y el territorio.
<br />
<br />
Su historia se remonta a la invasión japonesa de 1592, cuando el maestro Han Kyo, con el respaldo de militares chinos, entrenó a soldados en técnicas de combate y armas. Este entrenamiento fue crucial para repeler la invasión. Posteriormente, se documentaron estas técnicas en manuales como el &quot;Muye Jebo&quot; y el &quot;Muye Shinbo&quot;.

<br />
<br />
Después de las campañas japonesas, el entrenamiento militar en Corea disminuyó, pero resurgió durante la ocupación japonesa en 1910. El Sipalki-do se mantuvo vivo en ámbitos familiares y resurgió en ese período.

<br />
<br />
Un estilo de Sipalki-do que perdura es el &quot;Ion bi ryu&quot; de la Familia Yoo, que enseña tanto técnicas de manos vacías como el manejo de diversas armas.

<br />
<br />
Las prácticas de Sipalki-do se llevan a cabo en doyangs, con sesiones de una o dos horas. Los instructores, llamados &quot;Sabom nim&quot; o &quot;Maestro&quot;, guían a los alumnos, llamados &quot;yeya&quot;. Las clases incluyen calentamiento, estiramientos, práctica de técnicas de golpes, patadas, defensa personal, formas (hyong), y ejercicios de lucha a un paso.

<br />
<br />
El énfasis del Sipalki-do está en el respeto, cuidado del compañero y desarrollo personal, más que en la competencia deportiva. Es una expresión importante de la cultura coreana, que busca preservar tradiciones ancestrales y promover el crecimiento individual.</p>
        </div>
    );
}
