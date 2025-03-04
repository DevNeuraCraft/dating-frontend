export const getYears = (): number[] => {
  const currentYear = new Date().getFullYear() - 16;
  return Array.from(
    { length: currentYear - 1975 + 1 },
    (_, i) => currentYear - i
  );
};
