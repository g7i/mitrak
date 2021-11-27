import { getStorage } from "firebase/storage";

export const storage = getStorage();

export const Collections = {
  departments: {
    machanical: "mechanical",
    electrical : "electrical",
    civil : "civil"
  },
};
