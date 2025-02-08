import Logo from "/Company/Logo.webp";
import "./HeaderComponent.css";

export default function HeaderComponent() {
    return (
        <>
            <header className="menu">
                {/* SECCION DEL LOGO */}
                <section className="logo">
                    <img src={Logo} alt="" className="w-36 h-auto" />
                </section>

                {/* SECCION DE LOS BOTONES DE NAVEGACION */}

                <section>
                    <ul className="flex list-none gap-8">
                        <li>
                            <a className="links-routes" href="#aboutUs">
                                Quienes somos
                            </a>
                        </li>
                        <li>
                            <a className="links-routes" href="#ourServices">
                                Nuestros servicios
                            </a>
                        </li>
                        <li>
                            <a className="links-routes" href="#ourJobs">
                                Trabajos realizados
                            </a>
                        </li>
                    </ul>
                </section>
            </header>
        </>
    );
}
