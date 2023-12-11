function ProjectForm(){
    return (
        <form>
            <div>
                <input type="text" placeholder="Nome do projeto"/>
            </div>
            <div>
                <input type="number" placeholder="Insira o orçamento"/>
            </div>            
            <select name="category_id">
                <option disabled>Selecione a categoria</option>
            </select>
            <div>
                <input type="submit" value="Criar projeto"/>
            </div>
        </form>
    )
    }
export default ProjectForm;