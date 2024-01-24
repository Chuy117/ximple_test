import { Credit } from "./creditsInterface";

export interface modalProps {
    isVisible: boolean;
    hide: () => void;
    datos: Credit[];
}
