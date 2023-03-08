import { customColor } from '@street-vendor/core';

interface Props {
  name: string;
  isSelected?: boolean;
}

export const SVGs = ({ name, isSelected }: Props) => {
  const color = isSelected ? customColor.beige : customColor.orange4;
  switch (name) {
    case '떡볶이':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1.688C7.55385 1.68823 6.14024 2.11721 4.93786 2.92073C3.73548 3.72424 2.79833 4.86621 2.24488 6.20226C1.69143 7.53832 1.54653 9.00847 1.82849 10.4269C2.11046 11.8453 2.80663 13.1482 3.829 14.171C5.20292 15.5305 7.05917 16.2908 8.99201 16.2857C10.9249 16.2806 12.7771 15.5105 14.1438 14.1438C15.5105 12.7771 16.2806 10.9249 16.2857 8.99201C16.2908 7.05917 15.5305 5.20292 14.171 3.829C13.4934 3.14797 12.6875 2.60808 11.7999 2.24057C10.9123 1.87307 9.96067 1.68526 9 1.688ZM9 0C10.78 0 12.5201 0.527841 14.0001 1.51677C15.4802 2.50571 16.6337 3.91131 17.3149 5.55585C17.9961 7.20038 18.1743 9.00998 17.8271 10.7558C17.4798 12.5016 16.6226 14.1053 15.364 15.364C14.1053 16.6226 12.5016 17.4798 10.7558 17.8271C9.00998 18.1743 7.20038 17.9961 5.55585 17.3149C3.91131 16.6337 2.50571 15.4802 1.51677 14.0001C0.527841 12.5201 0 10.78 0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0Z"
            fill={color}
          />
          <path
            d="M5.32161 11.4551C5.15191 11.3023 5.04987 11.0883 5.03791 10.8603C5.02596 10.6323 5.10509 10.4088 5.25789 10.2391L9.84478 5.14485C9.99757 4.97515 10.2115 4.8731 10.4396 4.86115C10.6676 4.8492 10.891 4.92833 11.0607 5.08113C11.2304 5.23392 11.3325 5.44787 11.3444 5.67591C11.3564 5.90395 11.2773 6.1274 11.1245 6.2971L6.53758 11.3914C6.38478 11.5611 6.17083 11.6631 5.9428 11.6751C5.71476 11.687 5.49131 11.6079 5.32161 11.4551Z"
            fill={color}
          />
          <path
            d="M3.54671 9.85706C3.37701 9.70426 3.27496 9.49031 3.26301 9.26227C3.25106 9.03423 3.33019 8.81079 3.48298 8.64109L8.06987 3.54683C8.22267 3.37713 8.43662 3.27508 8.66466 3.26313C8.8927 3.25118 9.11615 3.33031 9.28584 3.4831C9.45554 3.6359 9.55759 3.84985 9.56954 4.07789C9.58149 4.30593 9.50237 4.52937 9.34957 4.69907L4.76268 9.79333C4.60988 9.96303 4.39593 10.0651 4.16789 10.077C3.93986 10.089 3.71641 10.0099 3.54671 9.85706Z"
            fill={color}
          />
          <path
            d="M7.09774 13.0541C6.92804 12.9013 6.82599 12.6873 6.81404 12.4593C6.80209 12.2313 6.88121 12.0078 7.03401 11.8381L11.6209 6.74385C11.7737 6.57415 11.9876 6.4721 12.2157 6.46015C12.4437 6.4482 12.6672 6.52733 12.8369 6.68013C13.0066 6.83292 13.1086 7.04687 13.1206 7.27491C13.1325 7.50295 13.0534 7.7264 12.9006 7.89609L8.3137 12.9904C8.16091 13.1601 7.94696 13.2621 7.71892 13.2741C7.49088 13.286 7.26743 13.2069 7.09774 13.0541Z"
            fill={color}
          />
          <path
            d="M8.87264 14.6521C8.70294 14.4993 8.60089 14.2854 8.58894 14.0573C8.57699 13.8293 8.65611 13.6058 8.80891 13.4361L13.3958 8.34187C13.5486 8.17218 13.7626 8.07013 13.9906 8.05818C14.2186 8.04622 14.4421 8.12535 14.6118 8.27815C14.7815 8.43094 14.8835 8.6449 14.8955 8.87293C14.9074 9.10097 14.8283 9.32442 14.6755 9.49412L10.0886 14.5884C9.93581 14.7581 9.72186 14.8601 9.49382 14.8721C9.26578 14.884 9.04234 14.8049 8.87264 14.6521Z"
            fill={color}
          />
        </svg>
      );
    case '타코야끼':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1.68799C7.31556 1.69087 5.68415 2.2774 4.38347 3.34772C3.08278 4.41804 2.1932 5.90599 1.86612 7.55838C1.53903 9.21077 1.79467 10.9255 2.58951 12.4106C3.38435 13.8957 4.66928 15.0595 6.2256 15.7039C7.78192 16.3482 9.51345 16.4334 11.1255 15.9448C12.7375 15.4562 14.1304 14.4241 15.0671 13.0241C16.0039 11.6242 16.4265 9.94286 16.2631 8.26636C16.0997 6.58985 15.3604 5.02178 14.171 3.82901C12.7994 2.45791 10.9394 1.68776 9 1.68799ZM9 0C10.78 0 12.5201 0.527852 14.0001 1.51678C15.4802 2.50572 16.6337 3.91131 17.3149 5.55585C17.9961 7.20038 18.1743 9.00997 17.8271 10.7558C17.4798 12.5016 16.6226 14.1053 15.364 15.364C14.1053 16.6226 12.5016 17.4798 10.7558 17.8271C9.00997 18.1743 7.20038 17.9961 5.55585 17.3149C3.91131 16.6337 2.5057 15.4802 1.51677 14.0001C0.527837 12.5201 0 10.78 0 9C0 6.61305 0.948205 4.32387 2.63603 2.63605C4.32386 0.94822 6.61305 0 9 0Z"
            fill={color}
          />
          <path
            d="M6.45411 7.52502C7.2742 7.52661 8.06025 7.85309 8.64014 8.43299C9.22004 9.01288 9.54652 9.79893 9.54811 10.619C9.54652 11.4391 9.22004 12.2252 8.64014 12.8051C8.06025 13.385 7.2742 13.7114 6.45411 13.713C5.63401 13.7114 4.84796 13.385 4.26807 12.8051C3.68818 12.2252 3.36169 11.4391 3.36011 10.619C3.36169 9.79893 3.68818 9.01288 4.26807 8.43299C4.84796 7.85309 5.63401 7.52661 6.45411 7.52502ZM6.45411 12.033C6.82896 12.0325 7.18831 11.8834 7.45337 11.6183C7.71843 11.3532 7.86758 10.9939 7.86811 10.619C7.86758 10.2442 7.71843 9.88482 7.45337 9.61976C7.18831 9.3547 6.82896 9.20555 6.45411 9.20502C6.07925 9.20555 5.7199 9.3547 5.45484 9.61976C5.18978 9.88482 5.04064 10.2442 5.04011 10.619C5.04064 10.9939 5.18978 11.3532 5.45484 11.6183C5.7199 11.8834 6.07925 12.0325 6.45411 12.033Z"
            fill={color}
          />
          <path
            d="M11.666 7.52502C12.4861 7.52661 13.2722 7.85309 13.8521 8.43299C14.432 9.01288 14.7584 9.79893 14.76 10.619C14.7584 11.4391 14.432 12.2252 13.8521 12.8051C13.2722 13.385 12.4861 13.7114 11.666 13.713C10.8459 13.7114 10.0599 13.385 9.47998 12.8051C8.90009 12.2252 8.57361 11.4391 8.57202 10.619C8.57361 9.79893 8.90009 9.01288 9.47998 8.43299C10.0599 7.85309 10.8459 7.52661 11.666 7.52502ZM11.666 12.033C12.0409 12.0325 12.4002 11.8834 12.6653 11.6183C12.9303 11.3532 13.0795 10.9939 13.08 10.619C13.0795 10.2442 12.9303 9.88482 12.6653 9.61976C12.4002 9.3547 12.0409 9.20555 11.666 9.20502C11.2912 9.20555 10.9318 9.3547 10.6668 9.61976C10.4017 9.88482 10.2526 10.2442 10.252 10.619C10.2526 10.9939 10.4017 11.3532 10.6668 11.6183C10.9318 11.8834 11.2912 12.0325 11.666 12.033Z"
            fill={color}
          />
          <path
            d="M9.06006 3.46594C9.88016 3.46753 10.6662 3.79401 11.2461 4.37391C11.826 4.9538 12.1525 5.73985 12.1541 6.55994C12.1525 7.38004 11.826 8.16609 11.2461 8.74598C10.6662 9.32587 9.88016 9.65236 9.06006 9.65394C8.23997 9.65236 7.45392 9.32587 6.87403 8.74598C6.29413 8.16609 5.96765 7.38004 5.96606 6.55994C5.96765 5.73985 6.29413 4.9538 6.87403 4.37391C7.45392 3.79401 8.23997 3.46753 9.06006 3.46594ZM9.06006 7.97394C9.43492 7.97341 9.79427 7.82427 10.0593 7.55921C10.3244 7.29415 10.4735 6.9348 10.4741 6.55994C10.4735 6.18509 10.3244 5.82574 10.0593 5.56068C9.79427 5.29562 9.43492 5.14647 9.06006 5.14594C8.68521 5.14647 8.32586 5.29562 8.0608 5.56068C7.79574 5.82574 7.64659 6.18509 7.64606 6.55994C7.64659 6.9348 7.79574 7.29415 8.0608 7.55921C8.32586 7.82427 8.68521 7.97341 9.06006 7.97394Z"
            fill={color}
          />
        </svg>
      );
    case '붕어빵':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1.68799C7.31556 1.69087 5.68414 2.2774 4.38345 3.34772C3.08277 4.41804 2.1932 5.90599 1.86612 7.55838C1.53903 9.21077 1.79467 10.9255 2.58951 12.4106C3.38435 13.8957 4.66926 15.0595 6.22559 15.7039C7.78191 16.3482 9.51345 16.4334 11.1255 15.9448C12.7375 15.4562 14.1304 14.4241 15.0671 13.0241C16.0039 11.6242 16.4265 9.94286 16.2631 8.26636C16.0997 6.58985 15.3604 5.02178 14.171 3.82901C12.7994 2.45791 10.9394 1.68776 9 1.68799ZM9 0C10.78 0 12.5201 0.527852 14.0001 1.51678C15.4802 2.50572 16.6337 3.91131 17.3149 5.55585C17.9961 7.20038 18.1743 9.00997 17.8271 10.7558C17.4798 12.5016 16.6226 14.1053 15.364 15.364C14.1053 16.6226 12.5016 17.4798 10.7558 17.8271C9.00997 18.1743 7.20038 17.9961 5.55585 17.3149C3.91131 16.6337 2.50569 15.4802 1.51675 14.0001C0.527821 12.5201 0 10.78 0 9C0 6.61305 0.94822 4.32387 2.63605 2.63605C4.32387 0.94822 6.61305 0 9 0Z"
            fill={color}
          />
          <path
            d="M8.58156 5.03664L10.413 6.86804C10.8921 7.3472 11.1613 7.99707 11.1613 8.6747C11.1613 9.35233 10.8921 10.0022 10.413 10.4814C9.93381 10.9605 9.28394 11.2297 8.60631 11.2297C7.92868 11.2297 7.27881 10.9605 6.79965 10.4814L4.96824 8.64995C4.48909 8.1708 4.2199 7.52092 4.2199 6.8433C4.2199 6.16567 4.48909 5.51579 4.96824 5.03664C5.4474 4.55748 6.09727 4.2883 6.7749 4.2883C7.45253 4.2883 8.1024 4.55748 8.58156 5.03664ZM7.89708 9.38393C8.08527 9.57212 8.34052 9.67785 8.60666 9.67785C8.87281 9.67785 9.12805 9.57212 9.31624 9.38393C9.50444 9.19574 9.61016 8.94049 9.61016 8.67435C9.61016 8.4082 9.50444 8.15296 9.31624 7.96477L7.48484 6.13336C7.29664 5.94517 7.0414 5.83944 6.77526 5.83944C6.50911 5.83944 6.25387 5.94517 6.06567 6.13336C5.87748 6.32155 5.77176 6.5768 5.77176 6.84294C5.77176 7.10909 5.87748 7.36433 6.06567 7.55252L7.89708 9.38393Z"
            fill={color}
          />
          <path
            d="M11.5 13.3C12.4941 13.3 13.3 12.4941 13.3 11.5C13.3 10.5058 12.4941 9.69995 11.5 9.69995C10.5058 9.69995 9.69995 10.5058 9.69995 11.5C9.69995 12.4941 10.5058 13.3 11.5 13.3Z"
            stroke={color}
            stroke-width="1.4"
          />
        </svg>
      );
    case '호떡':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1.68799C7.31556 1.69087 5.68415 2.2774 4.38347 3.34772C3.08278 4.41804 2.1932 5.90599 1.86612 7.55838C1.53903 9.21077 1.79467 10.9255 2.58951 12.4106C3.38435 13.8957 4.66928 15.0595 6.2256 15.7039C7.78192 16.3482 9.51345 16.4334 11.1255 15.9448C12.7375 15.4562 14.1304 14.4241 15.0671 13.0241C16.0039 11.6242 16.4265 9.94286 16.2631 8.26636C16.0997 6.58985 15.3604 5.02178 14.171 3.82901C12.7994 2.45791 10.9394 1.68776 9 1.68799ZM9 0C10.78 0 12.5201 0.527852 14.0001 1.51678C15.4802 2.50572 16.6337 3.91131 17.3149 5.55585C17.9961 7.20038 18.1743 9.00997 17.8271 10.7558C17.4798 12.5016 16.6226 14.1053 15.364 15.364C14.1053 16.6226 12.5016 17.4798 10.7558 17.8271C9.00997 18.1743 7.20038 17.9961 5.55585 17.3149C3.91131 16.6337 2.5057 15.4802 1.51677 14.0001C0.527837 12.5201 0 10.78 0 9C0 6.61305 0.948205 4.32387 2.63603 2.63605C4.32386 0.94822 6.61305 0 9 0Z"
            fill={color}
          />
          <path
            d="M8.99995 14.3C11.9271 14.3 14.3 11.9271 14.3 8.99995C14.3 6.07284 11.9271 3.69995 8.99995 3.69995C6.07284 3.69995 3.69995 6.07284 3.69995 8.99995C3.69995 11.9271 6.07284 14.3 8.99995 14.3Z"
            stroke={color}
            stroke-width="1.4"
          />
        </svg>
      );
    case '계란빵':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1.68799C7.31556 1.69087 5.68415 2.2774 4.38347 3.34772C3.08278 4.41804 2.1932 5.90599 1.86612 7.55838C1.53903 9.21077 1.79467 10.9255 2.58951 12.4106C3.38435 13.8957 4.66928 15.0595 6.2256 15.7039C7.78192 16.3482 9.51345 16.4334 11.1255 15.9448C12.7375 15.4562 14.1304 14.4241 15.0671 13.0241C16.0039 11.6242 16.4265 9.94286 16.2631 8.26636C16.0997 6.58985 15.3604 5.02178 14.171 3.82901C12.7994 2.45791 10.9394 1.68776 9 1.68799ZM9 0C10.78 0 12.5201 0.527852 14.0001 1.51678C15.4802 2.50572 16.6337 3.91131 17.3149 5.55585C17.9961 7.20038 18.1743 9.00997 17.8271 10.7558C17.4798 12.5016 16.6226 14.1053 15.364 15.364C14.1053 16.6226 12.5016 17.4798 10.7558 17.8271C9.00997 18.1743 7.20038 17.9961 5.55585 17.3149C3.91131 16.6337 2.5057 15.4802 1.51677 14.0001C0.527837 12.5201 0 10.78 0 9C0 6.61305 0.948205 4.32387 2.63603 2.63605C4.32386 0.94822 6.61305 0 9 0Z"
            fill={color}
          />
          <path
            d="M7.12673 6.27761L8.95813 8.10901C9.43729 8.58817 9.70647 9.23804 9.70647 9.91567C9.70647 10.5933 9.43729 11.2432 8.95813 11.7223C8.47898 12.2015 7.8291 12.4707 7.15147 12.4707C6.47385 12.4707 5.82397 12.2015 5.34482 11.7223L3.51341 9.89092C3.03426 9.41177 2.76507 8.76189 2.76507 8.08426C2.76507 7.40663 3.03425 6.75676 3.51341 6.27761C3.99257 5.79845 4.64244 5.52926 5.32007 5.52926C5.9977 5.52926 6.64757 5.79845 7.12673 6.27761ZM6.44225 10.6249C6.63044 10.8131 6.88568 10.9188 7.15183 10.9188C7.41797 10.9188 7.67322 10.8131 7.86141 10.6249C8.0496 10.4367 8.15533 10.1815 8.15533 9.91532C8.15533 9.64917 8.0496 9.39393 7.86141 9.20573L6.03 7.37433C5.84181 7.18613 5.58657 7.08041 5.32042 7.08041C5.05428 7.08041 4.79903 7.18613 4.61084 7.37433C4.42265 7.56252 4.31692 7.81776 4.31692 8.08391C4.31692 8.35005 4.42265 8.6053 4.61084 8.79349L6.44225 10.6249Z"
            fill={color}
          />
          <path
            d="M12.6558 6.27761L14.4872 8.10901C14.9663 8.58817 15.2355 9.23804 15.2355 9.91567C15.2355 10.5933 14.9663 11.2432 14.4872 11.7223C14.008 12.2015 13.3582 12.4707 12.6805 12.4707C12.0029 12.4707 11.353 12.2015 10.8739 11.7223L9.04246 9.89092C8.56331 9.41177 8.29412 8.76189 8.29412 8.08426C8.29412 7.40663 8.56331 6.75676 9.04246 6.27761C9.52162 5.79845 10.1715 5.52926 10.8491 5.52926C11.5267 5.52926 12.1766 5.79845 12.6558 6.27761ZM11.9713 10.6249C12.1595 10.8131 12.4147 10.9188 12.6809 10.9188C12.947 10.9188 13.2023 10.8131 13.3905 10.6249C13.5787 10.4367 13.6844 10.1815 13.6844 9.91532C13.6844 9.64917 13.5787 9.39393 13.3905 9.20573L11.5591 7.37433C11.3709 7.18613 11.1156 7.08041 10.8495 7.08041C10.5833 7.08041 10.3281 7.18613 10.1399 7.37433C9.9517 7.56252 9.84597 7.81776 9.84597 8.08391C9.84597 8.35005 9.9517 8.6053 10.1399 8.79349L11.9713 10.6249Z"
            fill={color}
          />
        </svg>
      );
    case '순대':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1.68799C7.31556 1.69087 5.68415 2.2774 4.38347 3.34772C3.08278 4.41804 2.1932 5.90599 1.86612 7.55838C1.53903 9.21077 1.79467 10.9255 2.58951 12.4106C3.38435 13.8957 4.66928 15.0595 6.2256 15.7039C7.78192 16.3482 9.51345 16.4334 11.1255 15.9448C12.7375 15.4562 14.1304 14.4241 15.0671 13.0241C16.0039 11.6242 16.4265 9.94286 16.2631 8.26636C16.0997 6.58985 15.3604 5.02178 14.171 3.82901C12.7994 2.45791 10.9394 1.68776 9 1.68799ZM9 0C10.78 0 12.5201 0.527852 14.0001 1.51678C15.4802 2.50572 16.6337 3.91131 17.3149 5.55585C17.9961 7.20038 18.1743 9.00997 17.8271 10.7558C17.4798 12.5016 16.6226 14.1053 15.364 15.364C14.1053 16.6226 12.5016 17.4798 10.7558 17.8271C9.00997 18.1743 7.20038 17.9961 5.55585 17.3149C3.91131 16.6337 2.5057 15.4802 1.51677 14.0001C0.527837 12.5201 0 10.78 0 9C0 6.61305 0.948205 4.32387 2.63603 2.63605C4.32386 0.94822 6.61305 0 9 0Z"
            fill={color}
          />
          <path
            d="M5.99995 11.3C7.27021 11.3 8.29995 10.2702 8.29995 8.99995C8.29995 7.7297 7.27021 6.69995 5.99995 6.69995C4.7297 6.69995 3.69995 7.7297 3.69995 8.99995C3.69995 10.2702 4.7297 11.3 5.99995 11.3Z"
            stroke={color}
            stroke-width="1.4"
          />
          <path
            d="M11.5 8.77849L10.4375 10.6H12.5625L11.5 8.77849ZM11.5 6L15 12H8L11.5 6Z"
            fill={color}
          />
        </svg>
      );
    case '핫도그':
      return (
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 2.18799C7.31556 2.19087 5.68414 2.7774 4.38345 3.84772C3.08277 4.91804 2.1932 6.40599 1.86612 8.05838C1.53903 9.71077 1.79467 11.4255 2.58951 12.9106C3.38435 14.3957 4.66926 15.5595 6.22559 16.2039C7.78191 16.8482 9.51345 16.9334 11.1255 16.4448C12.7375 15.9562 14.1304 14.9241 15.0671 13.5241C16.0039 12.1242 16.4265 10.4429 16.2631 8.76636C16.0997 7.08985 15.3604 5.52178 14.171 4.32901C12.7994 2.95791 10.9394 2.18776 9 2.18799ZM9 0.5C10.78 0.5 12.5201 1.02785 14.0001 2.01678C15.4802 3.00572 16.6337 4.41131 17.3149 6.05585C17.9961 7.70038 18.1743 9.50997 17.8271 11.2558C17.4798 13.0016 16.6226 14.6053 15.364 15.864C14.1053 17.1226 12.5016 17.9798 10.7558 18.3271C9.00997 18.6743 7.20038 18.4961 5.55585 17.8149C3.91131 17.1337 2.50569 15.9802 1.51675 14.5001C0.527821 13.0201 0 11.28 0 9.5C0 7.11305 0.94822 4.82387 2.63605 3.13605C4.32387 1.44822 6.61305 0.5 9 0.5Z"
            fill={color}
          />
          <path
            d="M12.3391 13.8201C12.2287 13.8202 12.1194 13.7986 12.0175 13.7564C11.9156 13.7141 11.823 13.6522 11.7451 13.5741L10.0791 11.9081C10.0011 11.8301 9.93918 11.7375 9.89696 11.6355C9.85474 11.5336 9.83301 11.4244 9.83301 11.3141C9.83301 11.2037 9.85474 11.0945 9.89696 10.9926C9.93918 10.8907 10.0011 10.7981 10.0791 10.7201C10.1571 10.642 10.2497 10.5802 10.3516 10.5379C10.4535 10.4957 10.5628 10.474 10.6731 10.474C10.7834 10.474 10.8926 10.4957 10.9945 10.5379C11.0965 10.5802 11.1891 10.642 11.2671 10.7201L12.9331 12.3861C13.0111 12.4641 13.073 12.5567 13.1152 12.6586C13.1574 12.7605 13.1791 12.8697 13.1791 12.9801C13.1791 13.0904 13.1574 13.1996 13.1152 13.3015C13.073 13.4035 13.0111 13.4961 12.9331 13.5741C12.8552 13.6522 12.7626 13.7141 12.6606 13.7564C12.5587 13.7986 12.4494 13.8202 12.3391 13.8201Z"
            fill={color}
          />
          <path
            d="M9.03051 5.68662L11.0104 7.66652C11.513 8.18864 11.7908 8.88712 11.7839 9.61183C11.777 10.3365 11.486 11.0296 10.9736 11.5421C10.4611 12.0546 9.76802 12.3455 9.04331 12.3524C8.3186 12.3593 7.62011 12.0816 7.09799 11.5789L5.11809 9.59904C4.85313 9.34396 4.64167 9.03862 4.49609 8.70086C4.35051 8.3631 4.27373 7.99971 4.27023 7.63194C4.26674 7.26416 4.3366 6.89937 4.47573 6.55891C4.61486 6.21845 4.82048 5.90914 5.08054 5.64907C5.34061 5.389 5.64992 5.18339 5.99039 5.04426C6.33085 4.90512 6.69563 4.83526 7.06341 4.83876C7.43119 4.84225 7.79458 4.91904 8.13233 5.06462C8.47009 5.2102 8.77544 5.42165 9.03051 5.68662ZM8.28593 10.391C8.49171 10.5847 8.76483 10.6906 9.04738 10.6863C9.32993 10.682 9.5997 10.5679 9.79952 10.368C9.99933 10.1682 10.1135 9.89845 10.1178 9.6159C10.1221 9.33335 10.0161 9.06024 9.82247 8.85445L7.84257 6.87456C7.74284 6.76858 7.62285 6.68371 7.48971 6.62498C7.35656 6.56625 7.21298 6.53485 7.06748 6.53264C6.92197 6.53044 6.77751 6.55747 6.64264 6.61213C6.50778 6.6668 6.38527 6.74799 6.28237 6.85089C6.17947 6.95379 6.09828 7.0763 6.04361 7.21117C5.98894 7.34603 5.96191 7.4905 5.96412 7.636C5.96632 7.78151 5.99773 7.92509 6.05646 8.05823C6.11519 8.19137 6.20006 8.31137 6.30603 8.4111L8.28593 10.391Z"
            fill={color}
          />
        </svg>
      );
    default:
      return <></>;
  }
};