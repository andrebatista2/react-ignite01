import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
                alt="Isso aí" 
            />

            <div className={styles.profile}>
                <strong>André Batista</strong>
                <span>Memeiro da Pesada</span>
            </div>

            <footer>
                <a href="#">Editar perfil</a>
            </footer>
        </aside>
    )
}