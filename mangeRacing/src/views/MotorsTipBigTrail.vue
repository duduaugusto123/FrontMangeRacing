<script setup lang="ts">
  import { PartsResponse, type PartsResponseType, Part } from '@/models/Parts';
  import { MotoTypes, getPartsMoto } from '@/services/part.service';
  import { type Ref, ref, reactive } from 'vue';
  import PartSelector from '@/components/PartSelector.vue';
  import { ItemCart } from '@/models/Cart';
  import { useCart } from '@/stores/cart';
  import axios from 'axios';

  const cart = useCart();


  const availableParts: Ref<PartsResponse> = ref(new PartsResponse());

  const itemCart = new ItemCart();  
  const selectedParts = reactive<ItemCart>(itemCart);



  getPartsMoto(MotoTypes.BIG_TRAIL)
    .then(parts=>{
      availableParts.value = parts;
      const { dianteira, guidao, motor, traseira } = parts;

      selectedParts.dianteira = dianteira[0];
      selectedParts.guidao = guidao[0];
      selectedParts.motor = motor[0];
      selectedParts.traseira = traseira[0];

    })
    .catch(error=>console.error(error));
  
const addCart = ()=> {
  console.log("Adicionado no carrinho os seguintes itens:");
  console.log("Parts: ", selectedParts); 

  selectedParts.updateCost();
  cart.addCart(selectedParts);
} 

console.log(availableParts)


</script>

<template>

    
    <div class="conteiner" id="motorpagebigtrail">
      <header>
        <nav class="navv ml-5">
            <RouterLink class="m-4" to="/custom">Custom</RouterLink>
            <RouterLink class="m-4" to="/sport">Sport</RouterLink>
            <RouterLink class="m-4" to="/bigtrail">BigTrail</RouterLink>
            
        </nav>
      </header>
        <h1 class="text-center mb-2">Personalize sua BigTrail</h1>        
        <section class="top-row">
          <PartSelector id="a" v-if="availableParts.guidao"
          :parts="availableParts.guidao"
          position="top"
          type="MotoTipCustom"
          v-model="selectedParts.guidao"
          />
        </section>
        <section class="middle-row">
          
          <PartSelector id="b" v-if="availableParts.dianteira"
          :parts="availableParts.dianteira"
          position="top"
          type="MotoTipCustom"
          v-model="selectedParts.dianteira"          
          />
          <PartSelector id="c" v-if="availableParts.motor"
          :parts="availableParts.motor"
          position="center"
          type="MotoTipCustom"
          v-model="selectedParts.motor"
          />
          <PartSelector id="d" v-if="availableParts.traseira"
          :parts="availableParts.traseira"
          position="right"
          type="MotoTipCustom"
          v-model="selectedParts.traseira"
          />
        </section>        
        <div class="addcartdiv flex flex-row align-items-center justify-content-center">
          <button @click="addCart" id="add-cart" class="mt-4 app-dark-button">
            Add to Cart
          </button>
        </div>       
      </div>
      
</template>

<style scoped lang="scss">
.conteiner{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0D0630;
  h1{
    margin-bottom: 7rem;
  }
}
header{
    height: 5rem;
    width: 100vw;
    max-width: 100%;
    display: flex;
    position: absolute;
    top: 5rem;
    left: 0;
    flex-direction: row;
    background-color: #18314fd0;
    align-items: center;
    justify-content: center;

    

    a{
        text-decoration: none;
        font-size: 1.5rem;
        color: var(--app-dark-text-color);
    }
    .router-link-exact-active{
        font-weight: bold;
    }
}
.navv{
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    color: #9FA4AF;
}
.addcartdiv{
  display: flex;
  position: relative;
  top: 10rem;
  left: 50rem ;

  button{
    background-color: transparent;
    border-radius: 15px;
    border: solid #ffffff8e;
    color: #ffffffdc;
    transition: all 0.5s;
    &:hover{
      transform: scale(1.1);
    }
  }

}
#add-cart{
  padding: 0.5rem 1rem;
}

.top-row{
  display: flex;
  justify-content: space-around;

  #a{
    left: -3rem;
    transform: scaleX(1.3);
    
  }
}

.middle-row{
  display: flex;
  justify-content: center;

  #b{
    left: 3.5rem;
    top: -2rem;
  }

  #c{
    margin-left: 3rem;
    scale: 0.6;
    top: -1.9rem;
    left: 0rem;
  }

  #d{
    display: flex;
    height: 10rem;
    transform:scaleY(1.5);
    left: -3rem;
    top: -4.5rem;
    
  }
}

.bottom-row{
  display: flex;
  justify-content: space-around;
}


</style>