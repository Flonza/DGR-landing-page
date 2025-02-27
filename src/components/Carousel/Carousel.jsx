import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ images }) {
  const glideRef = useRef(null);

  useEffect(() => {
    // Configuración de Glide.js
    const glideInstance = new Glide(glideRef.current, {
      type: "carousel",
      perView: 4,
      focusAt: "center",
      gap: 30,
      autoplay: 3000,
      hoverpause: true,
      breakpoints: {
        1024: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
        480: {
          perView: 1,
        },
      },
    });

    // Inicializar Glide
    glideInstance.mount();

    // Limpieza al desmontar el componente
    return () => {
      glideInstance.destroy();
    };
  }, []);

  return (
    <div className="glide-wrapper">
      <div className="glide" ref={glideRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {images.map((image, index) => (
              <li className="glide__slide" key={index}>
                <div className="client-slide">
                  <img
                    src={image}
                    alt={`Cliente ${index + 1}`}
                    className="client-image"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="absolute left-0 top-2/5 transform -translate-y-1/2 bg-[#cccccc15] hover:bg-gray-200 rounded-full p-2 shadow-md z-10 transition-all cursor-pointer"
            data-glide-dir="<"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-0 top-2/5 transform -translate-y-1/2 bg-[#cccccc15] hover:bg-gray-200 rounded-full p-2 shadow-md z-10 transition-all cursor-pointer"
            data-glide-dir=">"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="glide__bullets" data-glide-el="controls[nav]">
          {images.map((_, index) => (
            <button
              className="glide__bullet"
              data-glide-dir={`=${index}`}
              key={index}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
