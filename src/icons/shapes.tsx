import SVG from "../template";
import { SVGComponentProps } from "./home";

export const Circle: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Cube01: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Cube02: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M12 2.50008V12.0001M12 12.0001L20.5 7.27779M12 12.0001L3.5 7.27779M12 12.0001V21.5001M20.5 16.7223L12.777 12.4318C12.4934 12.2742 12.3516 12.1954 12.2015 12.1645C12.0685 12.1372 11.9315 12.1372 11.7986 12.1645C11.6484 12.1954 11.5066 12.2742 11.223 12.4318L3.5 16.7223M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Cube03: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M3.5 8H16M16 8V20.5M16 8L20.5 3.5M21 15.3373V3.8C21 3.51997 21 3.37996 20.9455 3.273C20.8976 3.17892 20.8211 3.10243 20.727 3.0545C20.62 3 20.48 3 20.2 3H8.66274C8.41815 3 8.29586 3 8.18077 3.02763C8.07873 3.05213 7.98119 3.09253 7.89172 3.14736C7.7908 3.2092 7.70432 3.29568 7.53137 3.46863L3.46863 7.53137C3.29568 7.70432 3.2092 7.7908 3.14736 7.89172C3.09253 7.98119 3.05213 8.07873 3.02763 8.18077C3 8.29586 3 8.41815 3 8.66274V20.2C3 20.48 3 20.62 3.0545 20.727C3.10243 20.8211 3.17892 20.8976 3.273 20.9455C3.37996 21 3.51997 21 3.8 21H15.3373C15.5818 21 15.7041 21 15.8192 20.9724C15.9213 20.9479 16.0188 20.9075 16.1083 20.8526C16.2092 20.7908 16.2957 20.7043 16.4686 20.5314L20.5314 16.4686C20.7043 16.2957 20.7908 16.2092 20.8526 16.1083C20.9075 16.0188 20.9479 15.9213 20.9724 15.8192C21 15.7041 21 15.5818 21 15.3373Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Cube04: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M20.5 16H8M8 16V3.5M8 16L3.5 20.5M3.5 8H16M16 8V20.5M16 8L20.5 3.5M21 15.3373V3.8C21 3.51997 21 3.37996 20.9455 3.273C20.8976 3.17892 20.8211 3.10243 20.727 3.0545C20.62 3 20.48 3 20.2 3H8.66274C8.41815 3 8.29586 3 8.18077 3.02763C8.07873 3.05213 7.98119 3.09253 7.89172 3.14736C7.7908 3.2092 7.70432 3.29568 7.53137 3.46863L3.46863 7.53137C3.29568 7.70432 3.2092 7.7908 3.14736 7.89172C3.09253 7.98119 3.05213 8.07873 3.02763 8.18077C3 8.29586 3 8.41815 3 8.66274V20.2C3 20.48 3 20.62 3.0545 20.727C3.10243 20.8211 3.17892 20.8976 3.273 20.9455C3.37996 21 3.51997 21 3.8 21H15.3373C15.5818 21 15.7041 21 15.8192 20.9724C15.9213 20.9479 16.0188 20.9075 16.1083 20.8526C16.2092 20.7908 16.2957 20.7043 16.4686 20.5314L20.5314 16.4686C20.7043 16.2957 20.7908 16.2092 20.8526 16.1083C20.9075 16.0188 20.9479 15.9213 20.9724 15.8192C21 15.7041 21 15.5818 21 15.3373Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const CubeOutline: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M9.75 20.7501L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L14.25 20.7501M5.25 18.2501L3.82297 17.4573C3.52346 17.2909 3.37368 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V14.5001M3 9.50009V7.94153C3 7.59889 3 7.42757 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37368 6.79248 3.52345 6.70928 3.82297 6.54288L5.25 5.75009M9.75 3.25008L11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7986 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L14.25 3.25008M18.75 5.75008L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42757 21 7.59889 21 7.94153V9.50008M21 14.5001V16.0586C21 16.4013 21 16.5726 20.9495 16.7254C20.9049 16.8606 20.8318 16.9847 20.7354 17.0893C20.6263 17.2077 20.4766 17.2909 20.177 17.4573L18.75 18.2501M9.75 10.7501L12 12.0001M12 12.0001L14.25 10.7501M12 12.0001V14.5001M3 7.00008L5.25 8.25008M18.75 8.25008L21 7.00008M12 19.5001V22.0001"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Dice01: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M12 11.75H12.005M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21ZM12.25 11.75C12.25 11.8881 12.1381 12 12 12C11.8619 12 11.75 11.8881 11.75 11.75C11.75 11.6119 11.8619 11.5 12 11.5C12.1381 11.5 12.25 11.6119 12.25 11.75Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Dice02: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M15.25 8.75H15.255M8.75 15.25H8.755M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21ZM15.5 8.75C15.5 8.88807 15.3881 9 15.25 9C15.1119 9 15 8.88807 15 8.75C15 8.61193 15.1119 8.5 15.25 8.5C15.3881 8.5 15.5 8.61193 15.5 8.75ZM9 15.25C9 15.3881 8.88807 15.5 8.75 15.5C8.61193 15.5 8.5 15.3881 8.5 15.25C8.5 15.1119 8.61193 15 8.75 15C8.88807 15 9 15.1119 9 15.25Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Dice03: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M16.25 7.75H16.255M12 11.75H12.005M7.75 16.25H7.755M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21ZM16.5 7.75C16.5 7.88807 16.3881 8 16.25 8C16.1119 8 16 7.88807 16 7.75C16 7.61193 16.1119 7.5 16.25 7.5C16.3881 7.5 16.5 7.61193 16.5 7.75ZM12.25 11.75C12.25 11.8881 12.1381 12 12 12C11.8619 12 11.75 11.8881 11.75 11.75C11.75 11.6119 11.8619 11.5 12 11.5C12.1381 11.5 12.25 11.6119 12.25 11.75ZM8 16.25C8 16.3881 7.88807 16.5 7.75 16.5C7.61193 16.5 7.5 16.3881 7.5 16.25C7.5 16.1119 7.61193 16 7.75 16C7.88807 16 8 16.1119 8 16.25Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Dice04: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M16.25 7.75H16.255M16.25 16.25H16.255M7.75 7.75H7.755M7.75 16.25H7.755M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21ZM16.5 7.75C16.5 7.88807 16.3881 8 16.25 8C16.1119 8 16 7.88807 16 7.75C16 7.61193 16.1119 7.5 16.25 7.5C16.3881 7.5 16.5 7.61193 16.5 7.75ZM16.5 16.25C16.5 16.3881 16.3881 16.5 16.25 16.5C16.1119 16.5 16 16.3881 16 16.25C16 16.1119 16.1119 16 16.25 16C16.3881 16 16.5 16.1119 16.5 16.25ZM8 7.75C8 7.88807 7.88807 8 7.75 8C7.61193 8 7.5 7.88807 7.5 7.75C7.5 7.61193 7.61193 7.5 7.75 7.5C7.88807 7.5 8 7.61193 8 7.75ZM8 16.25C8 16.3881 7.88807 16.5 7.75 16.5C7.61193 16.5 7.5 16.3881 7.5 16.25C7.5 16.1119 7.61193 16 7.75 16C7.88807 16 8 16.1119 8 16.25Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Dice05: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M16.25 7.75H16.255M16.25 16.25H16.255M7.75 7.75H7.755M12 11.75H12.005M7.75 16.25H7.755M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21ZM16.5 7.75C16.5 7.88807 16.3881 8 16.25 8C16.1119 8 16 7.88807 16 7.75C16 7.61193 16.1119 7.5 16.25 7.5C16.3881 7.5 16.5 7.61193 16.5 7.75ZM16.5 16.25C16.5 16.3881 16.3881 16.5 16.25 16.5C16.1119 16.5 16 16.3881 16 16.25C16 16.1119 16.1119 16 16.25 16C16.3881 16 16.5 16.1119 16.5 16.25ZM8 7.75C8 7.88807 7.88807 8 7.75 8C7.61193 8 7.5 7.88807 7.5 7.75C7.5 7.61193 7.61193 7.5 7.75 7.5C7.88807 7.5 8 7.61193 8 7.75ZM12.25 11.75C12.25 11.8881 12.1381 12 12 12C11.8619 12 11.75 11.8881 11.75 11.75C11.75 11.6119 11.8619 11.5 12 11.5C12.1381 11.5 12.25 11.6119 12.25 11.75ZM8 16.25C8 16.3881 7.88807 16.5 7.75 16.5C7.61193 16.5 7.5 16.3881 7.5 16.25C7.5 16.1119 7.61193 16 7.75 16C7.88807 16 8 16.1119 8 16.25Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Dice06: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M16.25 7.75H16.255M16.25 11.75H16.255M16.25 16.25H16.255M7.75 7.75H7.755M7.75 11.75H7.755M7.75 16.25H7.755M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21ZM16.5 7.75C16.5 7.88807 16.3881 8 16.25 8C16.1119 8 16 7.88807 16 7.75C16 7.61193 16.1119 7.5 16.25 7.5C16.3881 7.5 16.5 7.61193 16.5 7.75ZM16.5 11.75C16.5 11.8881 16.3881 12 16.25 12C16.1119 12 16 11.8881 16 11.75C16 11.6119 16.1119 11.5 16.25 11.5C16.3881 11.5 16.5 11.6119 16.5 11.75ZM16.5 16.25C16.5 16.3881 16.3881 16.5 16.25 16.5C16.1119 16.5 16 16.3881 16 16.25C16 16.1119 16.1119 16 16.25 16C16.3881 16 16.5 16.1119 16.5 16.25ZM8 7.75C8 7.88807 7.88807 8 7.75 8C7.61193 8 7.5 7.88807 7.5 7.75C7.5 7.61193 7.61193 7.5 7.75 7.5C7.88807 7.5 8 7.61193 8 7.75ZM8 11.75C8 11.8881 7.88807 12 7.75 12C7.61193 12 7.5 11.8881 7.5 11.75C7.5 11.6119 7.61193 11.5 7.75 11.5C7.88807 11.5 8 11.6119 8 11.75ZM8 16.25C8 16.3881 7.88807 16.5 7.75 16.5C7.61193 16.5 7.5 16.3881 7.5 16.25C7.5 16.1119 7.61193 16 7.75 16C7.88807 16 8 16.1119 8 16.25Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Hexagon01: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7985 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42756 21 7.59889 21 7.94153V16.0586C21 16.4013 21 16.5726 20.9495 16.7254C20.9049 16.8606 20.8318 16.9847 20.7354 17.0893C20.6263 17.2077 20.4766 17.2909 20.177 17.4573L12.777 21.5684C12.4934 21.726 12.3516 21.8047 12.2015 21.8356C12.0685 21.863 11.9315 21.863 11.7985 21.8356C11.6484 21.8047 11.5066 21.726 11.223 21.5684L3.82297 17.4573C3.52345 17.2909 3.37369 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V7.94153C3 7.59889 3 7.42756 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37369 6.79248 3.52345 6.70928 3.82297 6.54288L11.223 2.43177Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Hexagon02: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M21.5679 11.223C21.7255 11.5066 21.8042 11.6484 21.8351 11.7985C21.8625 11.9315 21.8625 12.0685 21.8351 12.2015C21.8042 12.3516 21.7255 12.4934 21.5679 12.777L17.4568 20.177C17.2904 20.4766 17.2072 20.6263 17.0889 20.7354C16.9842 20.8318 16.8601 20.9049 16.7249 20.9495C16.5721 21 16.4008 21 16.0582 21H7.94104C7.5984 21 7.42708 21 7.27428 20.9495C7.1391 20.9049 7.01502 20.8318 6.91033 20.7354C6.79199 20.6263 6.70879 20.4766 6.54239 20.177L2.43128 12.777C2.27372 12.4934 2.19494 12.3516 2.16406 12.2015C2.13672 12.0685 2.13672 11.9315 2.16406 11.7985C2.19494 11.6484 2.27372 11.5066 2.43128 11.223L6.54239 3.82297C6.70879 3.52345 6.79199 3.37369 6.91033 3.26463C7.01502 3.16816 7.1391 3.09515 7.27428 3.05048C7.42708 3 7.5984 3 7.94104 3L16.0582 3C16.4008 3 16.5721 3 16.7249 3.05049C16.8601 3.09515 16.9842 3.16816 17.0889 3.26463C17.2072 3.37369 17.2904 3.52345 17.4568 3.82297L21.5679 11.223Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Octagon: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M7.39137 2.46863C7.56432 2.29568 7.6508 2.2092 7.75172 2.14736C7.84119 2.09253 7.93873 2.05213 8.04077 2.02763C8.15586 2 8.27815 2 8.52274 2H15.4773C15.7218 2 15.8441 2 15.9592 2.02763C16.0613 2.05213 16.1588 2.09253 16.2483 2.14736C16.3492 2.2092 16.4357 2.29568 16.6086 2.46863L21.5314 7.39137C21.7043 7.56432 21.7908 7.6508 21.8526 7.75172C21.9075 7.84119 21.9479 7.93873 21.9724 8.04077C22 8.15586 22 8.27815 22 8.52274V15.4773C22 15.7218 22 15.8441 21.9724 15.9592C21.9479 16.0613 21.9075 16.1588 21.8526 16.2483C21.7908 16.3492 21.7043 16.4357 21.5314 16.6086L16.6086 21.5314C16.4357 21.7043 16.3492 21.7908 16.2483 21.8526C16.1588 21.9075 16.0613 21.9479 15.9592 21.9724C15.8441 22 15.7218 22 15.4773 22H8.52274C8.27815 22 8.15586 22 8.04077 21.9724C7.93873 21.9479 7.84119 21.9075 7.75172 21.8526C7.6508 21.7908 7.56432 21.7043 7.39137 21.5314L2.46863 16.6086C2.29568 16.4357 2.2092 16.3492 2.14736 16.2483C2.09253 16.1588 2.05213 16.0613 2.02763 15.9592C2 15.8441 2 15.7218 2 15.4773V8.52274C2 8.27815 2 8.15586 2.02763 8.04077C2.05213 7.93873 2.09253 7.84119 2.14736 7.75172C2.2092 7.6508 2.29568 7.56432 2.46863 7.39137L7.39137 2.46863Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Square: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Star01: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M11.2827 3.45332C11.5131 2.98638 11.6284 2.75291 11.7848 2.67831C11.9209 2.61341 12.0791 2.61341 12.2152 2.67831C12.3717 2.75291 12.4869 2.98638 12.7174 3.45332L14.9041 7.88328C14.9721 8.02113 15.0061 8.09006 15.0558 8.14358C15.0999 8.19096 15.1527 8.22935 15.2113 8.25662C15.2776 8.28742 15.3536 8.29854 15.5057 8.32077L20.397 9.03571C20.9121 9.11099 21.1696 9.14863 21.2888 9.27444C21.3925 9.38389 21.4412 9.5343 21.4215 9.68377C21.3988 9.85558 21.2124 10.0372 20.8395 10.4004L17.3014 13.8464C17.1912 13.9538 17.136 14.0076 17.1004 14.0715C17.0689 14.128 17.0487 14.1902 17.0409 14.2545C17.0321 14.3271 17.0451 14.403 17.0711 14.5547L17.906 19.4221C17.994 19.9355 18.038 20.1922 17.9553 20.3445C17.8833 20.477 17.7554 20.57 17.6071 20.5975C17.4366 20.6291 17.2061 20.5078 16.7451 20.2654L12.3724 17.9658C12.2361 17.8942 12.168 17.8584 12.0962 17.8443C12.0327 17.8318 11.9673 17.8318 11.9038 17.8443C11.832 17.8584 11.7639 17.8942 11.6277 17.9658L7.25492 20.2654C6.79392 20.5078 6.56341 20.6291 6.39297 20.5975C6.24468 20.57 6.11672 20.477 6.04474 20.3445C5.962 20.1922 6.00603 19.9355 6.09407 19.4221L6.92889 14.5547C6.95491 14.403 6.96793 14.3271 6.95912 14.2545C6.95132 14.1902 6.93111 14.128 6.89961 14.0715C6.86402 14.0076 6.80888 13.9538 6.69859 13.8464L3.16056 10.4004C2.78766 10.0372 2.60121 9.85558 2.57853 9.68377C2.55879 9.5343 2.60755 9.38389 2.71125 9.27444C2.83044 9.14863 3.08797 9.11099 3.60304 9.03571L8.49431 8.32077C8.64642 8.29854 8.72248 8.28742 8.78872 8.25662C8.84736 8.22935 8.90016 8.19096 8.94419 8.14358C8.99391 8.09006 9.02793 8.02113 9.09597 7.88328L11.2827 3.45332Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Star02: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M11.3063 3.20693C11.5338 2.81107 11.6476 2.61315 11.7962 2.54681C11.9259 2.48895 12.074 2.48895 12.2037 2.54681C12.3524 2.61315 12.4661 2.81107 12.6936 3.20693L14.6487 6.60925C14.733 6.75579 14.7751 6.82906 14.8341 6.88231C14.8863 6.92942 14.9479 6.96498 15.0148 6.98666C15.0905 7.01117 15.175 7.011 15.344 7.01065L19.2681 7.00272C19.7246 7.00179 19.9529 7.00133 20.0847 7.09691C20.1996 7.18028 20.2737 7.30858 20.2884 7.4498C20.3053 7.61171 20.1908 7.80918 19.9617 8.20412L17.9928 11.5985C17.908 11.7447 17.8656 11.8178 17.849 11.8955C17.8343 11.9643 17.8343 12.0355 17.849 12.1043C17.8656 12.182 17.908 12.2551 17.9928 12.4013L19.9617 15.7957C20.1908 16.1906 20.3053 16.3881 20.2884 16.55C20.2737 16.6912 20.1996 16.8195 20.0847 16.9029C19.9529 16.9985 19.7246 16.998 19.2681 16.9971L15.344 16.9891C15.175 16.9888 15.0905 16.9886 15.0148 17.0131C14.9479 17.0348 14.8863 17.0704 14.8341 17.1175C14.7751 17.1707 14.733 17.244 14.6487 17.3905L12.6936 20.7929C12.4661 21.1887 12.3524 21.3867 12.2037 21.453C12.074 21.5108 11.9259 21.5108 11.7962 21.453C11.6476 21.3867 11.5338 21.1887 11.3063 20.7929L9.35116 17.3905C9.26695 17.244 9.22485 17.1707 9.16581 17.1175C9.11357 17.0704 9.05198 17.0348 8.98507 17.0131C8.90943 16.9886 8.82493 16.9888 8.65592 16.9891L4.73183 16.9971C4.27527 16.998 4.04699 16.9985 3.91521 16.9029C3.80027 16.8195 3.7262 16.6912 3.71147 16.55C3.69458 16.3881 3.80913 16.1906 4.03821 15.7957L6.00712 12.4013C6.09193 12.2551 6.13433 12.182 6.15092 12.1043C6.1656 12.0355 6.1656 11.9643 6.15092 11.8955C6.13433 11.8178 6.09192 11.7447 6.00712 11.5985L4.03821 8.20411C3.80913 7.80918 3.69458 7.61171 3.71147 7.4498C3.7262 7.30858 3.80027 7.18028 3.91521 7.09691C4.04699 7.00133 4.27527 7.00179 4.73184 7.00272L8.65592 7.01065C8.82493 7.011 8.90943 7.01117 8.98507 6.98666C9.05198 6.96498 9.11357 6.92942 9.16581 6.88231C9.22485 6.82906 9.26695 6.75579 9.35116 6.60925L11.3063 3.20693Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Star03: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M11.2896 3.36637C11.5193 2.92427 11.6342 2.70323 11.7881 2.63139C11.9221 2.56883 12.077 2.56883 12.211 2.63139C12.3649 2.70323 12.4798 2.92427 12.7095 3.36637L14.2225 6.27865C14.3216 6.46934 14.3711 6.56468 14.4454 6.62803C14.511 6.68394 14.5899 6.72195 14.6745 6.73837C14.7704 6.75697 14.8758 6.73625 15.0867 6.69481L18.3069 6.06197C18.7958 5.9659 19.0402 5.91786 19.1923 5.99342C19.3248 6.05921 19.4214 6.18027 19.456 6.32406C19.4958 6.4892 19.3946 6.71681 19.1922 7.17203L17.8586 10.1707C17.7713 10.3671 17.7276 10.4653 17.7244 10.5628C17.7216 10.649 17.7411 10.7344 17.781 10.8108C17.8262 10.8973 17.9082 10.9668 18.072 11.1058L20.5746 13.229C20.9545 13.5513 21.1445 13.7124 21.1803 13.8785C21.2114 14.0231 21.177 14.174 21.0862 14.2908C20.9819 14.4249 20.7408 14.4876 20.2587 14.6132L17.0827 15.4402C16.8748 15.4944 16.7708 15.5215 16.6925 15.5798C16.6234 15.6313 16.5688 15.6998 16.534 15.7786C16.4945 15.868 16.4912 15.9754 16.4847 16.1901L16.3851 19.4705C16.37 19.9685 16.3624 20.2175 16.2549 20.349C16.1613 20.4635 16.0218 20.5307 15.8739 20.5325C15.704 20.5345 15.5047 20.3852 15.1059 20.0865L12.4791 18.1191C12.3071 17.9903 12.2211 17.9259 12.1267 17.9011C12.0434 17.8791 11.9558 17.8791 11.8724 17.9011C11.778 17.9259 11.692 17.9903 11.52 18.1191L8.8932 20.0865C8.49444 20.3852 8.29506 20.5345 8.12521 20.5325C7.97731 20.5307 7.8378 20.4635 7.74418 20.349C7.63667 20.2175 7.62911 19.9685 7.61399 19.4705L7.51439 16.1901C7.50787 15.9754 7.50461 15.868 7.46514 15.7786C7.43031 15.6998 7.37569 15.6313 7.30658 15.5798C7.22829 15.5215 7.12432 15.4944 6.91636 15.4402L3.74042 14.6132C3.2583 14.4876 3.01724 14.4249 2.91295 14.2908C2.82214 14.174 2.78768 14.0231 2.81884 13.8785C2.85463 13.7124 3.04458 13.5513 3.42448 13.229L5.92706 11.1058C6.09093 10.9668 6.17286 10.8973 6.21808 10.8108C6.258 10.7344 6.27749 10.649 6.27467 10.5628C6.27148 10.4653 6.22782 10.3671 6.1405 10.1707L4.80694 7.17203C4.6045 6.71681 4.50328 6.4892 4.54309 6.32406C4.57775 6.18027 4.6743 6.05921 4.80677 5.99342C4.95891 5.91786 5.20333 5.9659 5.69219 6.06197L8.91245 6.69481C9.1233 6.73625 9.22873 6.75697 9.32458 6.73837C9.4092 6.72195 9.48812 6.68394 9.55371 6.62803C9.62802 6.56468 9.67755 6.46934 9.77662 6.27865L11.2896 3.36637Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Star04: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M12 2L14.012 7.23109C14.294 7.96432 14.435 8.33093 14.6542 8.63931C14.8486 8.91262 15.0874 9.15141 15.3607 9.34575C15.6691 9.56503 16.0357 9.70603 16.7689 9.98804L22 12L16.7689 14.012C16.0357 14.294 15.6691 14.435 15.3607 14.6542C15.0874 14.8486 14.8486 15.0874 14.6542 15.3607C14.435 15.6691 14.294 16.0357 14.012 16.7689L12 22L9.98804 16.7689C9.70603 16.0357 9.56503 15.6691 9.34575 15.3607C9.15141 15.0874 8.91262 14.8486 8.63931 14.6542C8.33093 14.435 7.96432 14.294 7.23109 14.012L2 12L7.23108 9.98804C7.96431 9.70603 8.33093 9.56503 8.63931 9.34575C8.91262 9.15141 9.15141 8.91262 9.34575 8.63931C9.56503 8.33093 9.70603 7.96431 9.98804 7.23108L12 2Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Star05: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Star06: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.84281 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Star07: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M22 12H20M19.071 19.0711L17.6567 17.6569M4 12H2M6.34292 6.34317L4.92871 4.92896M12 4V2M17.6567 6.34317L19.071 4.92896M12 22V20M4.92871 19.0711L6.34292 17.6569M12 7L13.545 10.13L17 10.635L14.5 13.07L15.09 16.51L12 14.885L8.91 16.51L9.5 13.07L7 10.635L10.455 10.13L12 7Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export const Triangle: SVGComponentProps = ({ ...props }) => {
  return (
    <SVG {...props}>
      <path
        d="M2.39019 18.0983L10.6151 3.89171C11.0696 3.10655 11.2969 2.71396 11.5935 2.58211C11.8521 2.4671 12.1474 2.4671 12.4061 2.58211C12.7026 2.71396 12.9299 3.10654 13.3844 3.89171L21.6093 18.0983C22.0655 18.8863 22.2936 19.2803 22.2599 19.6037C22.2305 19.8857 22.0827 20.142 21.8534 20.3088C21.5904 20.5 21.1352 20.5 20.2246 20.5H3.77487C2.86435 20.5 2.40908 20.5 2.14613 20.3088C1.91677 20.142 1.769 19.8857 1.73959 19.6037C1.70588 19.2803 1.93398 18.8863 2.39019 18.0983Z"
        stroke="inherit"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
};
