import { ImageSourcePropType } from "react-native";

export interface Category {
  id: string;
  title: string;
  color: string;
  image: ImageSourcePropType;
}
