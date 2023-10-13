import * as SecureStore from "expo-secure-store";

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function getValueFor(key, setState) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    setState(parseInt(result));
  } else {
    setState(0);
  }
}

export const shuffleRandNum = (max) => {
  return Math.floor(Math.random() * max);
};
