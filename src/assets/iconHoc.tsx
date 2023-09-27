export const iconHoc = (svg: string) => {
  return () => {
    return (
      <svg href={svg}>
        {/* <use xlinkHref={svg} /> */}
      </svg>
    );

    {
      /* <img src={svg} alt="icon" />; */
    }
  };
};
