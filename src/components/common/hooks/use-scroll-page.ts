export const useScrollPage = () => {
  const scrollToRef = (elemRef?: React.RefObject<HTMLElement>) => {
    if (!elemRef) return;
    elemRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    scrollToRef,
  };
};
