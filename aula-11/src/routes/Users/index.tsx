import { useEffect, useState } from "react";

export default function Users() {

    const [listaUsuarios, setListaUsuarios] = useState([{
    login:"",
    id:0,
    avatar_url:""
    }]);


    useEffect(() => {
        
       const chamaUsers = async () => {
            const usuarios = await fetch("https://api.github.com/users");

            const data = await usuarios.json();

            setListaUsuarios(data);

            console.log(data);
        }
        
        chamaUsers();
    }, [])
    

    

    


  return (
    <main>
        <h1>Users</h1>

        <div>

            <ul>
                {listaUsuarios.map((u,indice)=>(
                    <li key={indice}>{u.id} - {u.login} - <img src={u.avatar_url} alt="Face do user" /></li>
                ))}
            </ul>

        </div>

    </main>
  )
}
