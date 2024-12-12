<script setup lang="ts">
import { useCart } from '@/stores/cart';

const cart = useCart();

const logado = localStorage.getItem('logado');

console.log(logado)

</script>

<template>
    <div>
        
        <table>
            <thead class="trdiv">
                <th>Item</th>
                <th>dianteira</th>
                <th>guidao</th>
                <th>motor</th>
                <th>traseira</th>                  
                <th>Custo</th>    
            </thead>
            <tbody>
                <tr  v-for="(motors,index) in cart.motors" :key="index">
                    <td>{{ index }}</td>
                    <td><img :src="motors.dianteira.src" alt=""></td>
                    <td><img :src="motors.guidao.src" alt=""></td>
                    <td><img :src="motors.motor.src" alt=""></td>                    
                    <td><img :src="motors.traseira.src" alt=""></td> 
                    <td>{{ motors.cost }}</td> 
                    <td><button id="aprovar" @click="cart.removeMotors(index)">Aprovar</button></td>
                    <td><button @click="cart.removeMotors(index)">Excluir</button></td>
                </tr>
                <tr>
                    <td colspan="5"><strong>Valor total:</strong></td>
                    <td><strong>{{ cart.cost }}</strong></td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<style scoped lang="scss">
.trdiv{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    th{
        margin: 2rem;
    }
}
img{
    display: flex;
    width: 2rem;
    height: auto;
}
#aprovar{
    display: flex;
    background-color: #57da4b;
}
tr{display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    td{
        margin: 1.6rem;
        margin-right: 4.2rem;
        display: flex;
        position: relative;
        left: 6rem;
    }    
}
</style>