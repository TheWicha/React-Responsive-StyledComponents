import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface CategoryBoxProps {
    icon: IconDefinition;
    name: string;
    key: number;
  }

  export interface AsideLeftProps{
    isVisible: boolean;
  }

  export interface HamburgerProps{
    click: () => void;
  }