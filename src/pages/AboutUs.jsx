
const AboutUs = () => {
    return (
        <div className="about-container container ">
            <h1 className="mb-4">About Us</h1>
            <p className="lead">
                Benvenuti nella nostra azienda! Siamo appassionati di tecnologia e
                design, e il nostro obiettivo è fornire prodotti di alta qualità e
                servizi eccellenti ai nostri clienti.
            </p>

            <div className="row mt-5 d-flex justify-content-around">
                <div className="col-md-3 mt-5">
                    <h3>La nostra missione</h3>
                    <p>
                        Offrire soluzioni innovative che semplificano la vita dei nostri
                        clienti. Crediamo nella qualità, nella trasparenza e nella
                        sostenibilità.
                    </p>
                </div>
                <div className="col-md-3 mt-5">
                    <h3>I nostri valori</h3>
                    <ul>
                        <li>Innovazione</li>
                        <li>Qualità</li>
                        <li>Trasparenza</li>
                        <li>Sostenibilità</li>
                        <li>Customer care</li>
                    </ul>
                </div>
            </div>

            <div className="team my-5">
                <h3>Il nostro team</h3>
                <div className="row mt-3">
                    <div className="col-md-4 text-center mt-4">
                        <h5>Mario Rossi</h5>
                        <p>CEO & Founder</p>
                    </div>
                    <div className="col-md-4 text-center mt-4">
                        <h5>Lucia Bianchi</h5>
                        <p>Marketing Manager</p>
                    </div>
                    <div className="col-md-4 text-center mt-4">
                        <h5>Giovanni Verdi</h5>
                        <p>Lead Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs