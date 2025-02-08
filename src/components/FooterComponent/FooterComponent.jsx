export default function FooterComponent() {
    return (
        <>
            <footer className="py-6">
                <div className="title pb-3 text-black">
                    <h2>Contáctanos para tener el gusto de atenderte</h2>
                </div>

                <article className="flex flex-col justify-around items-start gap-y-2 sm:flex-row sm:items-center max-sm:gap-y-2">
                    <section className="flex items-center gap-1 max-sm:w-full max-sm:justify-center max-sm:gap-4">
                        <div>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="#000000"
                                    d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V3C4 2.45 4.19583 1.97917 4.5875 1.5875C4.97917 1.19583 5.45 1 6 1H16C16.55 1 17.0208 1.19583 17.4125 1.5875C17.8042 1.97917 18 2.45 18 3V7H16V6H6V18H16V17H18V21C18 21.55 17.8042 22.0208 17.4125 22.4125C17.0208 22.8042 16.55 23 16 23H6ZM6 20V21H16V20H6ZM14.95 16L10.7 11.75L12.1 10.35L14.95 13.2L20.6 7.55L22 8.95L14.95 16ZM6 4H16V3H6V4Z"
                                />
                            </svg>
                        </div>

                        <div>
                            <a href="tel:3126850983" className="text-black">312 685 0983</a>
                            <br />
                            <a href="tel:3234580413" className="text-black">323 458 0413</a>
                        </div>
                    </section>

                    <section className="flex items-center gap-1 max-sm:w-full max-sm:justify-center max-sm:gap-4">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" /></svg>
                        </div>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dgrestudios.suelos@gmail.com" className="text-black">dgrestudios.suelos@gmail.com</a>
                    </section>

                    <section className="flex min-sm:justify-center items-center gap-1 max-sm:w-full max-sm:justify-center max-sm:gap-4">

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M19 9A7 7 0 1 0 5 9c0 1.387.409 2.677 1.105 3.765h-.008L12 22l5.903-9.235h-.007A6.97 6.97 0 0 0 19 9m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6" /></svg>
                        </div>
                        <a className="text-black">Valle del Cauca</a>
                    </section>
                </article>
            </footer>
        </>
    );
}
