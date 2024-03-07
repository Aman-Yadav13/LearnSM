export const isEducator = (userId?: string | null) => {
  const inEducatorList = process.env.NEXT_PUBLIC_EDUCATOR_ID?.includes(
    userId as string
  );

  return inEducatorList;
};
