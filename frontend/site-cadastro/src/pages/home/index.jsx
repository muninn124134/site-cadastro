import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/trash-svgrepo-com.svg";
import api from '../../services/api.js'

function Home() {
  
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  
  const [users, SetUsers] = useState([])

  async function createUser() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    getUsers()
  }

    async function getUsers() {
        const userFromApi = await api.get('/usuarios')
        
        SetUsers(userFromApi.data)
    }

    async function deleteUsers(id) {
      await api.delete(`/usuarios/${id}`)
      getUsers()
    }

    useEffect(() => {
        getUsers()
    }, [])
  
  
  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuarios</h1>
        <input placeholder="Nome" type="text" name="name" ref={inputName}/>
        <input placeholder="Email" type="email" name="email" ref={inputEmail}/>
        <input placeholder="Idade" type="text" name="age" ref={inputAge}/>
        <button type="button" onClick={createUser}>Cadastrar</button>
      </form>

      <div className="containerUsers">
            {users.map((user) => (
                <div key={user.id} className="card">
                    <div>
                    </div>

                    <div>
                        <p>Nome: <span>{user.name}</span></p>
                        <p>Idade: <span>{user.age}</span></p>
                        <p>Email: <span>{user.email}</span></p>
                    </div>
                    <button onClick={() => deleteUsers(user.id)}>
                        <img src={Trash} />
                    </button>
                </div>
            ))}
        </div>
    
    </div>

  );
}

export default Home;
