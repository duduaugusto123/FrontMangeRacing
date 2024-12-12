<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Usuario {
  id: number;
  login: string;
  senha: string;
}


const login = ref('');
const senha = ref('');
const errorMessage = ref('');


const logout = ()=>{
  localStorage.setItem('logado', 'false');
  localStorage.setItem('gerenciador', 'false');
  window.location.reload();
}

const handleLogin = async () => {
  try {
    
    const response = await axios.get('http://localhost:3000/Username');
    console.log(response.data)
    
    const usuarios: Usuario[] = response.data;
    const usuario = usuarios.find((u) => u.login === login.value && u.senha === senha.value);

    console.log(usuario)

    if(usuario?.login === "gerenciador1" && usuario?.senha === "gerenciador1234"){
      console.log("Gerenciador")
      localStorage.setItem('gerenciador', 'true');

    }
    
    if (usuario) {
      console.log("logado")
      localStorage.setItem('logado', 'true');
      errorMessage.value = ''; 
      window.location.reload();
      
    } else {
      errorMessage.value = 'Credenciais inválidas';
      localStorage.setItem('logado', 'false');
      localStorage.setItem('gerenciador', 'false');
      window.location.reload();
    }
  } catch (error) {
    
    errorMessage.value = 'Erro ao conectar com o servidor';
    localStorage.setItem('logado', 'false');
    localStorage.setItem('gerenciador', 'false');
    window.location.reload();
  }
};

const logado = localStorage.getItem('logado')

console.log(logado)
</script>

<template>
    <div class="conteiner">
      <div class="login" v-if="logado === 'false' || logado=== null ">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
        <div>
            <label for="login">Login:</label>
            <input type="text" id="login" v-model="login" required />
        </div>
        <div>
            <label for="senha">Senha:</label>
            <input type="password" id="senha" v-model="senha" required />
        </div>
        <button type="submit">Entrar</button>
        </form>
        <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
      </div>

      <div class="logout" v-if="logado === 'true'">
        <h1>Você Já Está Logado</h1>
        <button @click="logout()">Deslogar</button>

      </div>
        
    </div>
</template>

<style scoped lang="scss">
.conteiner{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
     

    
   
    background: #0D0630;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    
    .login{
      display: flex;
      flex-direction:column ;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      width: 40rem;
      height: 30rem;
      border-radius: 25px;
      border: 1px solid #202020;
      form{
        display: flex;
          flex-direction:column ;
          align-items: center;
          justify-content: center;
      }
    }
    button{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid #5c5c5c;
            background-color: #ffffff9c;
            border-radius: 25px;
            width: 10rem;
            height: 1.5rem;
            transition: all .5s ease-in-out;

            &:hover{
                scale: 1.1;
            }
        }
}

.logout{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
  }
  button{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10rem;

    height: 1.5rem;
    border: 1px solid #202020;
    border-radius: 25px;
    transition: all .5s ease-in-out;

    &:hover{
      scale: 1.1;
    }
  }

}


input{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 2rem;
            height: 1.5rem;
            width: 13rem;
            border: solid #5c5c5c 1px;
            border-radius: 25px;
            background-color: #ffffff9c;

        }
</style>