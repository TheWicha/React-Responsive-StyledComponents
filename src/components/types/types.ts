import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface CategoryBoxProps {
    icon: IconDefinition;
    name: string;
    key: number;
    click: () => void;
  }

  export interface AsideLeftProps{
    isVisible: boolean;
    click: () => void;
  }

  export interface HamburgerProps{
    click: () => void;
  }