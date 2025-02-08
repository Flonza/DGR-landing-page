import Job1 from '/Activities/AllJobs/Job-1.webp';
import Job2 from '/Activities/AllJobs/Job-2.webp';
import Job3 from '/Activities/AllJobs/Job-3.webp';
import Job4 from '/Activities/AllJobs/Job-4.webp';
import WhatsappButton from '../../../components/WhatsappButton/WhatsappButton';

export default function OurJobs() {
    const images = [
        '/Clients/Celsia.webp',
        '/Clients/Globalem.webp',
        '/Clients/SunVillage.webp',
        '/Clients/CascadasDePapa.webp',
    ]

    const imges2 = [
        '/Clients/Cadavid.webp',
        '/Clients/Ventolini.webp',
        '/Clients/ReservaDeRioCairo.webp',
    ]

    return (
        <article className="p-12 mt-10">
        <section>
            <h2 className="text-center text-xl font-bold mb-4 text-yellow-500">
                    TRABAJOS REALIZADOS
                </h2>
                <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-md:w-[90%]">
                    <div  className="flex justify-center">
                            <img
                                src={Job1}
                                alt={`Trabajo}`}
                                className="w-full shadow-lg"
                            />
                    </div>

                    <div  className="flex justify-center">
                            <img
                                src={Job2}
                                alt={`Trabajo}`}
                                className="w-full shadow-lg"
                            />
                    </div>


                    <div  className="flex justify-center">
                            <img
                                src={Job3}
                                alt={`Trabajo}`}
                                className="w-full shadow-lg"
                            />
                    </div>


                    <div  className="flex justify-center">
                            <img
                                src={Job4}
                                alt={`Trabajo}`}
                                className="w-full shadow-lg"
                            />
                    </div>
                </div>
                </div>
            </section>


            <section className='mt-10 p-4'>
            <h2 className="text-center text-xl font-bold mb-4 text-yellow-500">
                ALGUNOS DE NUESTROS CLIENTES EMPRESAS
            </h2>

                <div className="flex gap-y-4 flex-wrap">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center w-full md:gap-y-4">
                        {images.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`Cliente ${index + 1}`}
                                className="w-40 h-24 object-contain"
                            />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center mt-4 w-full md:gap-y-4">
                        {imges2.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`Cliente ${index + 5}`}
                                className="w-40 h-24 object-contain"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className='flex justify-center w-full'>
                <WhatsappButton></WhatsappButton>
            </section>
        </article>
    );
}