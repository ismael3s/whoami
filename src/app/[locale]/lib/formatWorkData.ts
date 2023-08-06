const formatDate = (date: string | Date, locale?: string) => new Intl.DateTimeFormat(locale || "en", {
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export const formatWorkingPeriod = (
  startDate: string | Date,
  endDate: string | Date | null,
  locale?: string
) => {
  const startPeriod = formatDate(startDate, locale)
  const actual = locale === "pt-br" ? "Atualmente" : "Present";
  const endPeriod = endDate ? formatDate(endDate, locale) : actual;
  return `${startPeriod} - ${endPeriod}`
};
