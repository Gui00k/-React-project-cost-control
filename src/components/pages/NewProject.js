import { useNavigate } from "react-router-dom";
import ProjectForm from "../projects/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  const history = useNavigate();
  function createPost(project) {
    //initaliza cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        history("/projects", {
          state: { message: "Criado com sucesso", type: "success" },
        });
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie Seu projeto para depois adicionar os Servicos</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
