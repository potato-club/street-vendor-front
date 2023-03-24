import { customColor } from '@street-vendor/core';
import React from 'react'

export const Star = () => {
  return (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.857 0L17.421 7.1L25.714 9.165L20.242 15.62L20.8 24L12.854 20.887L4.911 24L5.472 15.622L0 9.167L8.293 7.1L12.857 0Z"
        fill={customColor.orange3}
      />
    </svg>
  );
}
