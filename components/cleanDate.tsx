import { format, parseISO } from "date-fns";

export default function CleanDate({
  dateString,
}: {
  dateString: string;
}): JSX.Element {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "yyyy LLLL dd")}</time>;
}
