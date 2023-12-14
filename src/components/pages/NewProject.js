import { useNavigate } from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../projects/ProjectForm'


function Projects(){

    const navigate = useNavigate();

    function createPost(project){
        project.cost = 0;
        project.sevices = [];

        fetch("http://localhost:5000/projects",{method: "POST", headers: {'Content-Type':'application/json'}, body: JSON.stringify(project)})
        .then((resp)=> resp.json())
        .then((data)=> {
            console.log(data)
            //redirect
            navigate('/projects', { state: { message: 'Projeto criado com sucesso !!' } })
        })
        .catch((err)=> console.log(err))
    }


    return(
        <div className={styles.project_container}> 
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

export default Projects