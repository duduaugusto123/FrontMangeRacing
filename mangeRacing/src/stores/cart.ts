import { defineStore } from "pinia";
import { ItemCart, Cart } from "@/models/Cart";

export const useCart = defineStore("motor-cart", {
  state: (): Cart => ({
    motors: [],
    cost: 0.0,
  }),
  persist: true,
  actions: {
    addCart(motor: ItemCart) {
      this.motors.push(motor);
      this.updateCost();
    },
    updateCost() {
      this.cost = this.motors.reduce((total, motor) => total + motor.cost, 0);
    },
    removeMotors(index: number) {
      this.motors.splice(index, 1);
      this.updateCost();
    },
  },
});
