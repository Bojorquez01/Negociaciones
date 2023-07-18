
import { Imprimible } from "../utils/imprimible.js";
import { Comparable } from "./comparable.js";

export interface Modelo<T> extends Imprimible, Comparable<T> {
    
}