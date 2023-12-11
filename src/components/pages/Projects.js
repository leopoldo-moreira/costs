import styles from './NewProject.module.css'
import ProjectForm from '../projects/ProjectForm'


function Projects(){
    return(
        <div className={styles.project_container}> 
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm/>
        </div>
    )
}

export default Projects