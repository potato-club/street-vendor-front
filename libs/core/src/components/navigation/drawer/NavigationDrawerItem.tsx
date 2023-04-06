import { customColor } from 'libs/core/src/constants';
import Link from 'next/link';
import React from 'react';
import { Typography } from '../../Typography';
import { useRouter } from 'next/router';

export interface NavigationDrawerItemProps {
  title: string;
  url: string;
}

export const NavigationDrawerItem: React.FC<NavigationDrawerItemProps> = (
  props
) => {
  const router = useRouter();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 48px',
        fill: customColor.orange2,
      }}
      onClick={() => router.push(props.url)}
    >
      <Typography size="16">{props.title}</Typography>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15.304"
        height="15.497"
        viewBox="0 0 15.304 15.497"
      >
        <path
          d="M292.352,42.946a3.548,3.548,0,0,1-.493-.033,1,1,0,1,1,.278-1.977,5.483,5.483,0,0,0,3.611-1.453A5.634,5.634,0,0,0,297.7,35.1a5.47,5.47,0,0,0-1.844-4.316,5.192,5.192,0,0,0-3.718-1.31,1,1,0,0,1-.288-1.975,7.124,7.124,0,0,1,5.312,1.776A7.411,7.411,0,0,1,299.7,35.1a7.579,7.579,0,0,1-2.642,5.9,8.433,8.433,0,0,1-2.712,1.578A6.167,6.167,0,0,1,292.352,42.946Z"
          transform="translate(-284.396 -27.449)"
        />
        <path
          d="M12.806.5H-.5a1,1,0,0,1-1-1,1,1,0,0,1,1-1H12.806a1,1,0,0,1,1,1A1,1,0,0,1,12.806.5Z"
          transform="translate(1.5 8.25)"
        />
      </svg>
    </div>
  );
};
