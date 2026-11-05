const SERVICIOS = [
  {
    nombre: "Service básico",
    precio: "80.000",
    plazo: "24 h",
    incluye: ["Limpieza y lubricación de cadena", "Ajuste de frenos y cambios", "Presión y revisión de cubiertas"],
  },
  {
    nombre: "Service completo",
    precio: "180.000",
    plazo: "48 h",
    destacado: true,
    incluye: [
      "Desarme, limpieza y engrase total",
      "Centrado de ruedas",
      "Ajuste fino de frenos y cambios",
      "Revisión de rodamientos y dirección",
    ],
  },
  {
    nombre: "Frenos",
    precio: "60.000",
    plazo: "24 h",
    incluye: ["Cambio de pastillas o zapatas", "Purga en frenos hidráulicos", "Ajuste de manijas"],
  },
  {
    nombre: "Cambios",
    precio: "70.000",
    plazo: "24 h",
    incluye: ["Regulación de descarrilladores", "Cambio de cables y fundas", "Prueba en todas las marchas"],
  },
  {
    nombre: "Ruedas",
    precio: "50.000",
    plazo: "24 h",
    incluye: ["Centrado y tensión de rayos", "Parche o cambio de cámara", "Revisión de llanta"],
  },
];

const PASOS = [
  ["Escribinos", "Contanos qué le pasa a la bici y en qué barrio estás."],
  ["La retiramos", "Pasamos a buscarla el mismo día o el siguiente."],
  ["Te pasamos el presupuesto", "Antes de tocar nada. Si no te cierra, te la devolvemos sin cargo."],
  ["Vuelve lista", "Probada, limpia y con garantía de 30 días."],
];

const PREGUNTAS = [
  ["¿El retiro tiene costo?", "En Asunción no. En el resto de Gran Asunción se suma un recargo según la distancia, que te decimos antes."],
  ["¿Qué pasa si el arreglo cuesta más de lo que pensaba?", "Nada se hace sin tu OK. Si aparece algo nuevo en el desarme, te avisamos con el precio antes de seguir."],
  ["¿Trabajan con bicis eléctricas?", "Sí, en la parte mecánica: frenos, cambios, ruedas y transmisión. La parte eléctrica, no."],
  ["¿Cómo se paga?", "En efectivo o por transferencia, al recibir la bici."],
];

function Marca() {
  return (
    <svg className="marca-icono" viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="var(--fruta)" />
      <circle cx="20" cy="20" r="11" fill="none" stroke="var(--ciruela)" strokeWidth="3" />
      <g stroke="var(--ciruela)" strokeWidth="2.4" strokeLinecap="round">
        <path d="M20 9v22M9 20h22M12.2 12.2l15.6 15.6M27.8 12.2 12.2 27.8" />
      </g>
      <circle cx="20" cy="20" r="3.6" fill="var(--ciruela)" />
    </svg>
  );
}

function Bici() {
  const rayos = (cx, cy) =>
    Array.from({ length: 8 }, (_, i) => {
      const a = (i * Math.PI) / 4;
      return <line key={i} x1={cx} y1={cy} x2={cx + 62 * Math.cos(a)} y2={cy + 62 * Math.sin(a)} />;
    });
  return (
    <svg className="bici" viewBox="0 0 400 270" role="img" aria-label="Ilustración de una bicicleta">
      <g className="rueda">
        <circle cx="95" cy="180" r="70" />
        <circle cx="95" cy="180" r="62" className="llanta" />
        <g className="rayos">{rayos(95, 180)}</g>
      </g>
      <g className="rueda">
        <circle cx="305" cy="180" r="70" />
        <circle cx="305" cy="180" r="62" className="llanta" />
        <g className="rayos">{rayos(305, 180)}</g>
      </g>
      <g className="cuadro">
        <path d="M95 180 L190 185 L165 98 Z" />
        <path d="M165 98 L268 92 L190 185" />
        <path d="M262 112 L305 180" />
        <path d="M268 92 L262 112" />
      </g>
      <path className="manubrio" d="M268 92 L262 66 Q262 58 272 58 L296 58" />
      <path className="asiento" d="M146 82 Q166 74 188 82" />
      <line className="poste" x1="165" y1="98" x2="168" y2="82" />
      <circle cx="190" cy="185" r="15" className="plato" />
      <circle cx="95" cy="180" r="6" className="maza" />
      <circle cx="305" cy="180" r="6" className="maza" />
    </svg>
  );
}

function IconoWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icono">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.2-.2-.2-.5-.4Z"
      />
    </svg>
  );
}

export default function App() {
  return (
    <>
      <header className="encabezado">
        <a className="marca" href="#inicio">
          <Marca />
          <span>Taller Mburucuyá</span>
        </a>
        <nav aria-label="Secciones">
          <a href="#precios">Precios</a>
          <a href="#como">Cómo funciona</a>
          <a href="#horarios">Horarios</a>
        </nav>
        <a className="boton boton-chico" href="#contacto">
          <IconoWhatsApp /> Pedir turno
        </a>
      </header>

      <main id="inicio">
        <section className="portada">
          <div className="portada-texto">
            <p className="sobretitulo">Taller de bicicletas · Asunción</p>
            <h1>
              Tu bici, lista <span className="resaltado">en 48 horas</span>.
            </h1>
            <p className="bajada">
              Service, frenos, cambios y ruedas. La retiramos en tu casa y te la devolvemos lista, en toda Asunción.
            </p>
            <div className="acciones">
              <a className="boton" href="#contacto">
                <IconoWhatsApp /> Pedir turno por WhatsApp
              </a>
              <a className="boton boton-secundario" href="#precios">
                Ver precios
              </a>
            </div>
          </div>
          <div className="portada-arte">
            <Bici />
          </div>
        </section>

        <ul className="garantias" aria-label="Lo que incluye siempre">
          <li>
            <strong>Retiro y entrega</strong> a domicilio en Asunción
          </li>
          <li>
            <strong>Garantía de 30 días</strong> en cada arreglo
          </li>
          <li>
            <strong>Presupuesto antes</strong> de tocar nada
          </li>
        </ul>

        <section id="precios" className="seccion">
          <h2>Servicios y precios</h2>
          <p className="seccion-bajada">Precios cerrados, con mano de obra incluida. Los repuestos se presupuestan aparte.</p>
          <div className="servicios">
            {SERVICIOS.map((s) => (
              <article key={s.nombre} className={`servicio${s.destacado ? " destacado" : ""}`}>
                {s.destacado && <span className="etiqueta">El más pedido</span>}
                <h3>{s.nombre}</h3>
                <p className="precio">
                  <small>Gs.</small> {s.precio}
                </p>
                <p className="plazo">Listo en {s.plazo}</p>
                <ul>
                  {s.incluye.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="como" className="seccion">
          <h2>Cómo funciona</h2>
          <ol className="pasos">
            {PASOS.map(([titulo, texto], i) => (
              <li key={titulo}>
                <span className="paso-numero">{i + 1}</span>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="horarios" className="seccion horarios">
          <div>
            <h2>Horarios</h2>
            <dl>
              <dt>Lunes a viernes</dt>
              <dd>8:00 a 18:00</dd>
              <dt>Sábados</dt>
              <dd>8:00 a 12:00</dd>
              <dt>Domingos y feriados</dt>
              <dd>Cerrado</dd>
            </dl>
          </div>
          <div>
            <h2>Dónde trabajamos</h2>
            <p>
              El taller está en Villa Morra. Retiramos y entregamos sin costo en toda Asunción, y en Gran Asunción con un
              recargo según la distancia.
            </p>
          </div>
        </section>

        <section className="seccion">
          <h2>Preguntas frecuentes</h2>
          <div className="preguntas">
            {PREGUNTAS.map(([p, r]) => (
              <details key={p}>
                <summary>{p}</summary>
                <p>{r}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contacto" className="cierre">
          <h2>¿Tu bici hace ruidos raros?</h2>
          <p>Escribinos y la pasamos a buscar.</p>
          <a className="boton boton-fruta" href="#contacto" aria-describedby="nota-demo">
            <IconoWhatsApp /> Pedir turno por WhatsApp
          </a>
          <p id="nota-demo" className="nota-demo">
            Sitio de muestra: en la versión real, este botón abre WhatsApp con el mensaje listo.
          </p>
        </section>
      </main>

      <footer className="pie">
        <p>Taller Mburucuyá es un negocio ficticio: este sitio es un proyecto de muestra.</p>
        <p>Diseño y desarrollo: Trazuvia</p>
      </footer>
    </>
  );
}
