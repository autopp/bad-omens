import Vuex from "vuex";
import { kingdomList } from "@/lib/cardList";

export default () => {
  return new Vuex.Store({
    state: () => ({
      baseValue: 5,
      supplies: [],
      errors: []
    }),
    mutations: {
      changeBaseValue(state, value) {
        state.baseValue = value;
      },
      setErrors(state, errors) {
        state.errors = [...errors];
      },
      clearErrors(state) {
        state.errors = [];
      },
      addSupply(state, supply) {
        state.supplies = state.supplies.concat({ ...supply });
      },
      clearSupplies(state) {
        state.supplies = [];
      }
    },
    getters: {
      restCards: state => {
        const rest = {};
        Object.entries(kingdomList).forEach(([expansion, cards]) => {
          const usedCards = [].concat(
            ...state.supplies.map(supply => supply.kingdom[expansion])
          );

          rest[expansion] = cards.filter(card => {
            return !usedCards.some(usedCard => usedCard.name === card.name);
          });
        });
        return rest;
      },
      nocturneValue: state => 10 - state.baseValue,
      kingdomValues: state => ({
        base: state.baseValue,
        nocturne: 10 - state.baseValue
      })
    }
  });
};
