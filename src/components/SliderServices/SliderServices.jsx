import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import WhatsappButton from '../WhatsappButton/WhatsappButton';

const SliderServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = [

    {
      title: "I.N.V.E - 125 -13 DETERMINACIÓN DEL LÍMITE LÍQUIDO DE LOS SUELOS",
      description: "Se utiliza para caracterizar el comportamiento de los suelos finos.",
      image: "/Activities/determinacion_limites.webp",
      points: [
        {
          title: "MUESTREO",
          description: "Toma de muestras (Alteradas o inalteradas) deben ser representativas de los suelos cuyas características se desean conocer.",
        },
        {
          title: "PROCESO",
          description: "Evaluación de la consistencia del suelo mediante la norma técnica.",
        },
        {
          title: "RESULTADOS",
          description: "Entrega de resultados en tiempo establecido y oportuno.",
        },
      ],
      bgColor: "bg-[#414141]",
    },
    {
      title: "I.N.V.E - 125 -13 LÍMITE PLÁSTICO E ÍNDICE DE PLASTICIDAD DE SUELOS",
      description: "Contenido de agua del suelo, expresado en porcentaje, cuando se halla en el límite entre los estados plástico y semisólido.",
      image: "/Activities/lim_plastico.webp",
      points: [
        {
          title: "MUESTREO",
          description: "Toma de muestras (Alteradas o inalteradas) deben ser representativas de los suelos cuyas características se desean conocer.",
        },
        {
          title: "PROCESO",
          description: "Evaluación de la consistencia del suelo mediante la norma técnica.",
        },
        {
          title: "RESULTADOS",
          description: "Entrega de resultados en tiempo establecido y oportuno.",
        },
      ],
      bgColor: "bg-white",
    },
    {
      title: "ESTUDIO DE SUELOS PAVIMENTO",
      description: "Se elaboran los estudios geotécnicos que comprenden la investigación del subsuelo y los análisis de la información para el diseño de pavimentos rígidos o flexibles.",
      image: "/Activities/estudio_suelos.webp",
      subtitle: "Apiques manuales para exploración. Profundidad 1.50 - 2.00 m.",
      points: [
        {
          title: "Descripción e identificación de suelos (Procedimiento visual y manual). I.N.V. E -102-13",
          description: "El laboratorio identifica suelos y se basa en el sistema de clasificación unificada. La identificación se hace mediante un examen visual y mediante ensayos manuales, lo cual se indica claramente al elaborar el respectivo informe.",
        },
        {
          title: "Relación de soporte de Suelos CBR I.N.V. E-148-13",
          description: "Determinación de un índice de resistencia de los suelos denominado relación de soporte de California CBR (California Bearing Ratio).",
        },
      ],
      bgColor: "bg-[#414141]",
    },
    {
      title: "ESTUDIOS DE SUELOS URBANISMO",
      description: "Los estudios geotécnicos son de obligatoria ejecución para todas las edificaciones urbanas y definidos en el título A del reglamento NSR-2010.",
      image: "/Activities/estudio_urbanismo.webp",
      points: [
        {
          title: "EXPLORACIÓN DEL SUBSUELO",
          description: "Exploración mecánica a percusión SPT hasta 20 m.",
        },
        {
          title: "IDENTIFICACIÓN DE SUELOS",
          description: "Descripción e identificación de suelos (procedimiento visual y manual) I.N.V. E-102-13.",
        },
        {
          title: "ENSAYOS DE CLASIFICACIÓN",
          description: "Ensayos según I.N.V. E-125-126, Compresión Inconfinada INV E-152, entre otros.",
        },
      ],
      bgColor: "bg-white",
    },
    {
      title: "ESTUDIO GEOTÉCNICOS MECÁNICA Y ENSAYOS DE LABORATORIO",
      description: "Servicios especializados para suelos y concretos.",
      image: "/Activities/concretos.webp",
      columns: [
        {
          title: "SUELOS",
          points: [
            "Investigación del subsuelo por método mecánico a percusión (SPT)",
            "Límites líquidos y plásticos",
            "Granulometría Contenido de humedad",
            "Proctor modificado y estándar CBR",
          ],
        },
        {
          title: "CONCRETOS",
          points: [
            "Control de calidad de materiales pétreo",
            "Diseño de mezcla de concreto",
            "Extracción de núcleos de concreto",
          ],
        },
      ],
      bgColor: "bg-[#414141]",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Render current slide content
  const renderSlideContent = (slide) => {
    return (
      <div className={`w-full ${slide.bgColor} transition-all duration-500 ease-in-out`}>
        <div className="max-w-screen-xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 min-h-[500px] max-[578px]:min-h-[940px] max-[768px]:min-h-[826px] justify-center" >
          {/* Left side - image visible on all screens */}
          <div className="w-full md:w-1/3 flex justify-center items-center">
            <img
              src={slide.image}
              className="w-[90%] min-w-[200px] max-w-[300px] rounded-lg shadow-md"
              alt={slide.title}
            />
          </div>
          
          {/* Right side - content */}
          <div className="w-full md:w-2/3 flex flex-col">
            <h2 className="text-amber-600 text-lg md:text-xl font-semibold text-center md:text-left mb-4">
              {slide.title}
            </h2>
            
            <p className={`${slide.bgColor == 'bg-white' ? 'text-gray-800' : 'text-white'} mb-4`}>{slide.description}</p>
            
            {slide.subtitle && (
              <p className={`font-medium mb-4 ${slide.bgColor == 'bg-white' ? 'text-gray-700' : 'text-white'}`}>{slide.subtitle}</p>
            )}
            
            {slide.points && (
              <div className="space-y-4 mt-2">
                {slide.points.map((point, idx) => (
                  <div key={idx} className="mb-2">
                    <h4 className={`font-bold ${slide.bgColor == 'bg-white' ? 'text-gray-800' : 'text-white'}`} >{point.title}</h4>
                    <p className={`${slide.bgColor == 'bg-white' ? 'text-gray-700' : 'text-white'}`}>{point.description}</p>
                  </div>
                ))}
              </div>
            )}
            
            {slide.columns && (
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {slide.columns.map((column, idx) => (
                  <div key={idx} className="mb-4">
                    <h4 className={`font-bold mb-2 ${slide.bgColor == 'bg-white' ? 'text-gray-800' : 'text-white'}`}>{column.title}</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {column.points.map((point, pidx) => (
                        <li key={pidx} className={`${slide.bgColor == 'bg-white' ? 'text-gray-700' : 'text-white'}`}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            
            {slide.showButton && (
                <div className="flex justify-center">
                    <div className="w-20">
                        <WhatsappButton />
                    </div>
                </div>
        )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative h-full">
      <div className="overflow-hidden relative">
        <div 
          className="transition-transform duration-500 ease-in-out flex" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {services.map((slide, index) => (
            <div key={index} className="min-w-full">
              {renderSlideContent(slide)}
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#cccccc15] hover:bg-gray-200 rounded-full p-2 shadow-md z-10 transition-all cursor-pointer"
        
      >
        <ChevronLeft />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#cccccc15] hover:bg-gray-200 rounded-full p-2 shadow-md z-10 transition-all cursor-pointer"
        
      >
        <ChevronRight />
      </button>
      
      {/* Indicator dots */}
      <div className="flex justify-center mt-4 mb-6 gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all cursor-pointer ${
              currentSlide === index ? "bg-amber-600 w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderServices;