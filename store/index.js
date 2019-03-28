import Vuex from "vuex";

export default () => {
  return new Vuex.Store({
    state: () => ({
      baseValue: 5,
      supplies: []
    }),
    mutations: {
      changeBaseValue(state, value) {
        state.baseValue = value;
      },
      setDummySupplies(state) {
        state.supplies = [
          {
            kingdom: {
              base: [
                { id: 1, name: "役人" },
                { id: 2, name: "地下貯蔵庫" },
                { id: 3, name: "礼拝堂" },
                { id: 4, name: "議事堂" },
                { id: 5, name: "祝祭" }
              ],
              nocturne: [
                { id: 1, name: "詩人", boon: true, willOWisp: true },
                { id: 2, name: "恵みの村", boon: true, willOWisp: true },
                { id: 3, name: "墓地", heirloom: "呪われた鏡", ghost: true },
                { id: 4, name: "取り替え子" },
                { id: 5, name: "カブラー" }
              ]
            }
          },
          {
            kingdom: {
              base: [
                { id: 6, name: "庭園" },
                { id: 7, name: "研究所" },
                { id: 8, name: "書庫" },
                { id: 9, name: "市場" }
              ],
              nocturne: [
                { id: 6, name: "コンクラーベ" },
                { id: 7, name: "納骨堂" },
                { id: 8, name: "呪われた村", hex: true },
                { id: 9, name: "悪人のアジト" },
                { id: 10, name: "悪魔の工房", imp: true },
                { id: 11, name: "ドルイド", druid: true }
              ]
            },
            druidBoons: [
              { id: 10, name: "太陽の恵み" },
              { id: 11, name: "沼の恵み", willOWisp: true },
              { id: 12, name: "風の恵み" }
            ]
          }
        ];
      }
    }
  });
};
