import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/bruno-c%C3%A2ndido-3480a1186/" target="_blank">
                        <img src="/images/lin.png" alt="linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/BrunoC2711" target="_blank">
                        <img src="/images/git.png" alt="github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/brunoc.albuquerque/" target="_blank">
                        <img src="/images/ig.png" alt="instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <p>
                Desenvolvido por Bruno C.
            </p>
        </section>
    </footer>)
}

export default Rodape
