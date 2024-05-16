interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PencilIcon = (props: IconProps) => {
  return (
    <svg
      width="60"
      height="61"
      viewBox="0 0 60 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.6877 9.77654C42.6167 6.84759 47.3655 6.84761 50.2942 9.77654L50.7232 10.2055C53.6522 13.1344 53.6522 17.8831 50.7232 20.8121L46.38 25.1553L21.7588 49.7767C21.4384 50.0969 21.0369 50.3242 20.5974 50.4342L10.5974 52.9342C9.74542 53.1472 8.8442 52.8974 8.22325 52.2767C7.6023 51.6557 7.35267 50.7544 7.56567 49.9024L10.0657 39.9024C10.1756 39.4629 10.4029 39.0614 10.7232 38.7409L35.4882 13.976L39.6877 9.77654ZM46.7587 13.3121C45.7825 12.3358 44.1995 12.3358 43.2232 13.3121L40.758 15.7774L44.6465 19.8178L47.1877 17.2765C48.164 16.3002 48.164 14.7173 47.1877 13.741L46.7587 13.3121ZM41.1102 23.354L37.2217 19.3135L14.7484 41.7869L13.4269 47.0729L18.7129 45.7514L41.1102 23.354Z"
        fill="black"
      />
    </svg>
  );
};

export const UploadIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
      />
    </svg>
  );
};

export const UserIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
};
