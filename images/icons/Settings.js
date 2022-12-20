import React from 'react';

const Settings = () => {
  return (
    <svg
      width={32}
      height={32}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.4761 9.33681C11.3928 9.92998 10.0641 9.92146 8.98916 9.31445L8.94182 9.26877C8.45813 8.97869 8.30977 8.36522 8.61044 7.89855C8.91111 7.43189 9.54696 7.28874 10.0306 7.57883C10.2466 7.70038 10.4909 7.76716 10.7408 7.77295C11.1238 7.7884 11.4975 7.65626 11.7794 7.40566C12.0614 7.15505 12.2284 6.80655 12.2438 6.43698C12.2365 4.58008 13.764 3.05569 15.6878 3H17.3092C19.2701 3 20.8597 4.53368 20.8597 6.42556C20.8566 6.66636 20.9221 6.90337 21.0491 7.11067C21.2376 7.4316 21.5513 7.66648 21.9203 7.76299C22.2893 7.85951 22.683 7.80964 23.0137 7.62451C24.6798 6.74943 26.7646 7.29251 27.7478 8.85771C28.0195 9.33536 27.8524 9.93477 27.369 10.2165C26.8778 10.4871 26.2526 10.3299 25.9607 9.86254C25.5595 9.20343 24.6829 8.97924 23.996 9.36012C22.9092 9.93429 21.5908 9.92027 20.5173 9.32313C19.4439 8.72599 18.7707 7.63212 18.7413 6.43698C18.7541 6.0627 18.6089 5.69942 18.3389 5.43035C18.069 5.16128 17.6974 5.00946 17.3092 5.00966H15.6878C15.2986 5.00955 14.9259 5.16101 14.6541 5.42972C14.3823 5.69842 14.2344 6.06162 14.2439 6.43698C14.233 7.63863 13.5593 8.74364 12.4761 9.33681ZM14.2439 25.6087C14.2504 26.3736 14.895 26.9904 15.6878 26.9903L15.676 27.0132C16.0438 27.0132 16.3838 27.2025 16.5677 27.5099C16.7516 27.8172 16.7516 28.1959 16.5677 28.5033C16.3838 28.8107 16.0438 29 15.676 29C13.7151 29 12.1255 27.4663 12.1255 25.5744C12.1286 25.3336 12.0631 25.0966 11.9361 24.8893C11.539 24.2261 10.6614 23.9965 9.97147 24.3755C8.30539 25.2506 6.22062 24.7075 5.23744 23.1423L4.43266 21.7835C3.52566 20.176 4.08855 18.1646 5.71084 17.2161C5.92587 17.094 6.10509 16.9211 6.23159 16.7137C6.46895 16.3945 6.55425 15.9929 6.46616 15.6093C6.37807 15.2258 6.12492 14.8966 5.77002 14.704C4.14772 13.7554 3.58484 11.744 4.49183 10.1366C4.64359 9.91647 4.88003 9.76379 5.14881 9.71236C5.41759 9.66092 5.69652 9.71497 5.92388 9.86254C6.37299 10.1572 6.5032 10.7401 6.21975 11.1871C5.82804 11.8493 6.06639 12.6925 6.75233 13.0711C7.2677 13.3758 7.69191 13.8048 7.98318 14.3158C8.89017 15.9232 8.32729 17.9346 6.70499 18.8832C6.01905 19.2618 5.7807 20.105 6.17241 20.7672L6.98903 22.126C7.17484 22.4498 7.48952 22.6865 7.86033 22.7813C8.23114 22.8762 8.626 22.821 8.95366 22.6285C9.48197 22.3328 10.0827 22.1791 10.6934 22.1831C12.6543 22.1831 14.2439 23.7168 14.2439 25.6087ZM27.2744 17.2047C26.9437 17.0209 26.7028 16.7174 26.605 16.3615C26.5073 16.0056 26.5608 15.6268 26.7536 15.3092C26.8801 15.1017 27.0593 14.9288 27.2744 14.8068C27.7601 14.5252 27.9187 13.918 27.6294 13.448C27.3419 12.984 26.7282 12.8184 26.2329 13.0711C24.6106 14.0197 24.0477 16.0311 24.9547 17.6386C25.2428 18.2001 25.6901 18.6713 26.2447 18.9974C26.5745 19.1789 26.8153 19.4804 26.9131 19.8344C27.011 20.1884 26.9578 20.5655 26.7655 20.8814L25.9607 22.2402C25.7669 22.5582 25.453 22.7915 25.0849 22.8911C24.7161 22.986 24.3231 22.9324 23.996 22.7426C22.9074 22.1676 21.5865 22.1828 20.5124 22.7827C19.4382 23.3825 18.7667 24.48 18.7413 25.6772C18.7979 26.1878 19.2446 26.5751 19.7768 26.5751C20.3091 26.5751 20.7557 26.1878 20.8124 25.6772C20.8026 25.1783 21.0747 24.7138 21.5227 24.4644C21.9706 24.2151 22.5237 24.2204 22.9664 24.4783C24.6325 25.3533 26.7172 24.8103 27.7004 23.2451L28.5052 21.8863C29.499 20.2647 28.9491 18.1732 27.2744 17.2047ZM16.4926 11.7123C14.6917 11.7123 13.0683 12.7596 12.3802 14.3654C11.6922 15.9711 12.075 17.8186 13.3502 19.0456C14.6253 20.2726 16.5413 20.6371 18.2038 19.969C19.8662 19.3008 20.9474 17.7318 20.9426 15.9943C20.9426 14.8567 20.4734 13.7658 19.6385 12.9625C18.8036 12.1591 17.6717 11.7093 16.4926 11.7123ZM16.4926 18.2894C15.1853 18.2894 14.1256 17.267 14.1256 16.0057C14.1256 14.7445 15.1853 13.722 16.4926 13.722C17.7999 13.722 18.8596 14.7445 18.8596 16.0057C18.8596 17.267 17.7999 18.2894 16.4926 18.2894Z'
        fill='#161616'
      />
    </svg>
  );
};

export default Settings;
