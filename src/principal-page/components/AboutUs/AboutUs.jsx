
import WhatsappButton from '../../../components/WhatsappButton/WhatsappButton';
import PropTypes from 'prop-types';
import BannerImg from '/Activities/banner_aboutus.webp';
import { CheckIcon } from 'lucide-react';

const ServiceItem = ({ service }) => (
    <div className="flex items-center space-x-3 py-2 hover:bg-gray-50 rounded-lg md:px-2 transition-colors">
        <div className="bg-[var(--golden)] rounded p-1 mt-1 flex-shrink-0">
            <CheckIcon size={16} className="text-white" />
        </div>
        <p className="text-gray-800 leading-tight">{service}</p>
    </div>
);

ServiceItem.propTypes = {
    service: PropTypes.string.isRequired,
};

export default function AboutUs() {

    const services = [
        "Estudio de suelos para viviendas de 1 a 3 pisos.",
        "Estudios de suelos para edificaciones de 3 a 10 pisos o más.",
        "Estudios de suelos para obras civiles, Vías, andenes, graderías.",
        "Estudios civiles para radicar en secretaría de planeación o curadurías.",
        "Estudios de suelos para granjas solares, vallas, antenas y postes.",
        "Laboratorio de concretos, control de calidad en agregados, diseños de mezclas.",
        "Control de calidad.",
        "Clasificaciones.",
        "Toma de núcleos.",
        "Toma de densidades."
    ]

    return (
        <>
            <article>
                <section className="bg-[var(--deep-black)] w-full mb-8 flex justify-center px-4 md:pt-24 max-md:pt-8">
                    <div className="max-w-screen-xl w-full flex flex-col md:flex-row py-6 gap-6 md:gap-12">
                        <div className="hidden md:flex w-1/4 justify-center items-center">
                            <img
                                src={BannerImg}
                                className="w-[90%] min-w-[200px] max-w-[300px] md:max-w-[400px]"
                                alt="Imagen de prueba"
                            />

                        </div>

                        {/* Contenido */}
                        <div className="w-full md:w-4/5 flex flex-col items-start md:items-center text-center md:text-left justify-center">
                            <div className="w-full md:w-3/4">
                                <h2 className="text-[var(--golden)] text-lg text-center md:text-xl font-semibold">
                                    ESTUDIOS GEOTÉCNICOS Y CARACTERIZACIÓN <br />
                                    ESTRATIGRÁFICA DEL SUELO - ASESORÍAS
                                </h2>

                                <div className="md:hidden flex justify-center mt-4">
                                    <img
                                        src={BannerImg}
                                        className="w-[90%] min-w-[200px] max-w-[300px] md:max-w-[400px]"
                                        alt="Imagen de prueba"
                                    />

                                </div>

                                <p className="text-white mt-4 text-sm text-left max-md:px-8">
                                    Somos un laboratorio que ofrece servicios de ingeniería Geotécnica,
                                    logrando alianzas estratégicas. Contamos con personal altamente capacitado dispuestos a
                                    ofrecer resultados de la mejor calidad.
                                </p>
                            </div>

                            {/* Botón */}
                            <div className="mt-6 max-md:flex max-md:justify-center max-md:w-full">
                                <WhatsappButton name="Cotiza con nosotros" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ctn-services flex md:justify-center flex-wrap justify-start">
                    <h2 className="text-center w-full">¿Qué tipo de servicio estás buscando?</h2>
                    <div className="w-[75%] mx-auto">
                        {services.map((service, index) => (
                            <ServiceItem key={index} service={service} />
                        ))}
                        <div className="ctn-button my-6 md:px-2">
                            <WhatsappButton name={'Cotiza con nosotros'}></WhatsappButton>
                        </div>
                    </div>
                </section>

            </article>
        </>
    )
}