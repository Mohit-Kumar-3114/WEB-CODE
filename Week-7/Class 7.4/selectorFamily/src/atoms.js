import { atomFamily, selectorFamily } from "recoil";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async () => {
      const res = await fetch(`http://localhost:3000/todo/?id=${id}`);
      const result=await res.json()
      return result;
    },
  })
});