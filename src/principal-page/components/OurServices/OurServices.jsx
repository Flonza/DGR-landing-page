import deterLimt from "/Activities/determinacion_limites.webp";
import lim_plastic from "/Activities/lim_plastico.webp";
import soil_survey from "/Activities/estudio_suelos.webp";
import urbanismo_soil from "/Activities/estudio_urbanismo.webp";
import concretos from "/Activities/concretos.webp";
import suelos from "/Activities/suelos.webp";

export default function OurServices() {
  return (
    <>
      <section className="bg-black flex justify-center Ourservices px-4">
        <div className="max-w-screen-xl w-full flex flex-col md:flex-row py-6 gap-6 md:gap-12">

          {/* Imagen visible solo en pantallas grandes */}
          <div className="hidden md:flex w-1/4 justify-center items-center">
            <img
              src={deterLimt}
              className="w-[90%] min-w-[200px] max-w-[300px] md:max-w-[400px]"
              alt="Imagen de prueba"
            />
          </div>

          {/* Contenido */}
          <div className="w-full md:w-4/5 flex flex-col items-start md:items-center text-center md:text-left justify-center">
            <div className="w-full md:w-3/4">
              <h2 className="text-[var(--golden)] text-lg text-center md:text-xl font-semibold">
                I.N.V.E - 125 -13 <br />
                DETERMINACIÓN DEL LÍMITE LÍQUIDO DE LOS SUELOS
              </h2>

              {/* Imagen visible solo en pantallas menores a MD */}
              <div className="md:hidden flex justify-center mt-4">
                <img
                  src={deterLimt}
                  className="w-[90%] min-w-[200px] max-w-[300px] md:max-w-[400px]"
                  alt="Imagen de prueba"
                />
              </div>

              <p className="text-white mt-4 text-left max-md:px-8">
                Se utiliza para caracterizar el{" "}
                <span className="font-semibold">
                  comportamiento de los suelos
                </span> finos.
              </p>

              {/* Secciones de información */}
              <div className="my-3 w-full px-8">
                <h4 className="font-bold text-left w-full">MUESTRO</h4>
                <p className="text-left">
                  Toma de muestras (Alteradas o inalteradas) deben ser representativas
                  de los suelos cuyas características se desean conocer.
                </p>
              </div>

              <div className="my-3 w-full px-8">
                <h4 className="font-bold text-left w-full">PROCESO</h4>
                <p className="text-left">
                  Evaluación de la consistencia del suelo mediante la norma técnica.
                </p>
              </div>

              <div className="my-3 w-full px-8">
                <h4 className="font-bold text-left w-full">RESULTADOS</h4>
                <p className="text-left">
                  Entrega de resultados en tiempo establecido y oportuno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-full flex justify-center px-4 py-12">
        <div className="max-w-screen-xl w-full flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Contenido */}
          <div className="w-full md:w-3/4 flex flex-col items-start md:items-center text-center md:text-left justify-center">
            <div className="w-full md:w-3/4">
              <h2 className="text-[var(--golden)] text-lg text-center md:text-xl font-semibold">
                I.N.V.E - 125 -13 <br />
                LÍMITE PLÁSTICO E ÍNDICE DE PLASTICIDAD DE SUELOS
              </h2>

              {/* Imagen visible solo en móviles */}
              <div className="md:hidden flex justify-center mt-4">
                <img
                  src={lim_plastic}
                  className="w-[90%] min-w-[200px] max-w-[300px] md:max-w-[400px]"
                  alt="Imagen de prueba"
                />
              </div>

              <p className="text-black mt-4 text-left max-md:px-8">
                Contenido de agua del suelo, expresado en porcentaje,
                cuando se halla en el límite entre los estados plástico y semisólido.
              </p>

              <div className="my-3 w-full max-md:px-8">
                <h4 className="font-bold text-left w-full text-black">MUESTREO</h4>
                <p className="text-left text-black">
                  Toma de muestras (Alteradas o inalteradas) deben ser representativas de los suelos cuyas características se desean conocer.
                </p>
              </div>

              <div className="my-3 w-full max-md:px-8">
                <h4 className="font-bold text-left w-full text-black">PROCESO</h4>
                <p className="text-left text-black">
                  Evaluación de la consistencia del suelo mediante la norma técnica.
                </p>
              </div>

              <div className="my-3 w-full max-md:px-8">
                <h4 className="font-bold text-left w-full text-black">RESULTADOS</h4>
                <p className="text-left text-black">
                  Entrega de resultados en tiempo establecido y oportuno.
                </p>
              </div>
            </div>
          </div>

          {/* Imagen visible en desktop */}
          <div className="hidden md:flex w-1/4 justify-center items-center">
            <img
              src={lim_plastic}
              className="w-[90%] min-w-[200px] max-w-[300px] md:max-w-[400px]"
              alt="Imagen de prueba"
            />
          </div>
        </div>
      </section>


      <section className="bg-[var(--smooth-black)] flex justify-center Ourservices">
      <div className="lg:w-4/5 max-lg:px-12 py-12 flex flex-wrap">
        {/* Imagen */}
        <div className="w-[40%] flex justify-center items-center flex-wrap max-md:hidden">
          <img src={soil_survey} className="w-[90%] " alt="Exploración de suelos" />
          <h2 className="w-full mt-3 mb-3">
            Apiques manuales para exploración. Profundidad 1.50 - 2.00 m.
          </h2>
        </div>

        {/* Contenido */}
        <div className="md:w-[60%]">
          <div className="flex flex-col items-center text-center w-full md:pt-12 md:pl-15">
            <h2 className="text-[var(--golden)]">
              ESTUDIO DE SUELOS
              <br /> PAVIMENTO
            </h2>

            <div className="md:hidden">
              <img src={soil_survey} className="w-full" alt="Exploración de suelos" />
            </div>

            <p className="text-left md:pl-12 max-md:my-4 text-md">
              Se elaboran los estudios geotécnicos que comprenden la
              investigación del subsuelo y los análisis de la información para
              el diseño de pavimentos rígidos o flexibles.
            </p>

            <h2 className="md:hidden w-full mt-3 mb-3">
              Apiques manuales para exploración. Profundidad 1.50 - 2.00 m.
            </h2>
          </div>
        </div>

        {/* Información Adicional */}
        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-3 max-md:gap-y-4">
          <div>
            <h2>
              Descripción e identificación de suelos (Procedimiento visual y
              manual). I.N.V. E -102-13
            </h2>
            <p>
              El laboratorio identifica suelos y se basa en el sistema de
              clasificación unificada. La identificación se hace mediante un
              examen visual y mediante ensayos manuales, lo cual se indica
              claramente al elaborar el respectivo informe.
            </p>
          </div>

          <div className="md:-mt-17">
            <h2 className="font-semibold text-lg">
              Relación de soporte de Suelos CBR I.N.V. E-148-13
            </h2>
            <p>
              Determinación de un índice de resistencia de los suelos
              denominado relación de soporte de California CBR (California
              Bearing Ratio).
            </p>
            <div className="pt-6">
              <h3 className="font-semibold">Clasificaciones</h3>
              <ul className="list-disc list-inside">
                <li>Determinación del límite líquido.</li>
                <li>Límite plástico e índice de plasticidad de los suelos.</li>
                <li>Análisis granulométrico.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className="bg-white w-full flex justify-center px-4 py-12">
        <div className="max-w-screen-xl w-full flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Contenido */}
          <div className="w-full md:w-3/4 flex flex-col items-start md:items-center text-center md:text-left justify-center">
            <div className="w-full md:w-3/4">
              <h2 className="text-[var(--golden)] text-lg text-center md:text-xl font-semibold">
                ESTUDIOS DE SUELOS <br /> URBANISMO
              </h2>

              {/* Imagen visible solo en móviles */}
              <div className="md:hidden flex justify-center mt-4">
                <img
                  src={urbanismo_soil}
                  className="w-[90%] min-w-[200px] max-w-[300px] md:max-w-[400px]"
                  alt="Imagen de prueba"
                />
              </div>

              <p className="text-black mt-4 text-left max-md:px-8">
                Los estudios geotécnicos son de obligatoria ejecución para todas las edificaciones urbanas y definidos en el título A del reglamento NSR-2010.
              </p>

              <div className="my-3 w-full max-md:px-8">
                <h4 className="font-bold text-left w-full text-black">EXPLORACIÓN DEL SUBSUELO</h4>
                <p className="text-left text-black">
                  Exploración mecánica a percusión SPT hasta 20 m.
                </p>
              </div>

              <div className="my-3 w-full max-md:px-8">
                <h4 className="font-bold text-left w-full text-black">IDENTIFICACIÓN DE SUELOS</h4>
                <p className="text-left text-black">
                  Descripción e identificación de suelos (procedimiento visual y manual) I.N.V. E-102-13.
                </p>
              </div>

              <div className="my-3 w-full max-md:px-8">
                <h4 className="font-bold text-left w-full text-black">ENSAYOS DE CLASIFICACIÓN</h4>
                <p className="text-left text-black">
                  Ensayos según I.N.V. E-125-126, Compresión Inconfinada INV E-152, entre otros.
                </p>
              </div>
            </div>
          </div>

          {/* Imagen visible en desktop */}
          <div className="hidden md:flex w-1/4 justify-center items-center">
            <img
              src={urbanismo_soil}
              className="w-[90%] min-w-[200px] max-w-[300px] md:max-w-[400px]"
              alt="Imagen de prueba"
            />
          </div>
        </div>
      </section>


      <section className="bg-black flex items-center flex-col Ourservices">
        <div className="w-4/5 py-12 max-md:pb-0 max-md:pt-10 flex gap-32 max-md:w-full max-md:justify-center">
          {/* Imagen */}
          <div className="max-md:hidden w-2/5 flex justify-center items-center">
            <img src={concretos} className="w-[90%] min-w-[200px] max-w-[300px] md:max-w-[400px]" alt="Imagen de prueba" />
          </div>

          {/* Contenido */}
          <div className="md:w-3/5 flex flex-wrap items-center max-md:justify-center">
            <div className="bg-black p-6 text-white max-w-lg">
              <h1
                className="text-xl font-bold text-[var(--golden)] max-md:text-center max-md:mb-4"
              >
                ESTUDIO GEOTÉCNICOS MECÁNICA Y ENSAYOS DE LABORATORIO
              </h1>

              <div className="md:hidden flex justify-center items-center">
                <img src={concretos} className="w-[90%] min-w-[200px] max-w-[300px] md:max-w-[400px]" alt="Imagen de prueba" />
              </div>
              
              <h2 className="text-lg font-semibold text-white mt-4">SUELOS</h2>
              <ul className="list-disc list-inside mt-2 space-y-2 pl-4">
                <li>
                  Investigación del subsuelo por método mecánico a percusión
                  (SPT)
                </li>
                <li>Límites líquidos y plásticos</li>
                <li>Granulometría Contenido de humedad</li>
                <li>Proctor modificado y estándar CBR</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-4/5 py-12 max-md:pb-10 max-md:pt-0 flex gap-32 max-md:w-full max-md:justify-center">
          {/* Imagen */}
          <div className="max-md:hidden  w-2/5 flex justify-center items-center">
            <img src={suelos} className="w-[90%] min-w-[200px] max-w-[300px] md:max-w-[400px]" alt="Imagen de prueba" />
          </div>

          {/* Contenido */}
          <div className="md:w-3/5 flex flex-wrap items-center max-md:justify-center">
            <div className="bg-black p-6 text-white max-w-lg">
              <div className="md:hidden flex justify-center items-center">
                <img src={suelos} className="w-[90%]" alt="Imagen de prueba" />
              </div>

              <h2 className="text-lg font-semibold text-white mt-4">CONCRETOS</h2>
              <ul className="list-disc list-inside mt-2 space-y-2 pl-4">
                <li>
                  Control de calidad de materiales pétreo.
                </li>
                <li>Diseño de mezcla de concreto </li>
                <li>Extracción de núcleos de concreto</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
