import styles from "./Header.module.css"

function Header() {
    return(
        <header className={styles.header}>
            <a href=""><span>km.</span></a>
            <nav>
                <a href="">Home</a>
                <a href="">Projetos</a>
                <a href="">Serviços</a>
                <a href="">Sobre</a>
            </nav>
            <button>Contate-me</button>
        </header>
    )
}
export default Header;