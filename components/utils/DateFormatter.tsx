import { format, parse } from "date-fns";
import esLocale from "date-fns/locale/es";

interface Props {
  date: string;
}

const FormattedDate: React.FC<Props> = ({ date }) => {
  const parsedDate = parse(date, "dd-MM-yyyy", new Date());
  const formattedDate = format(parsedDate, "dd MMM yyyy", {
    locale: esLocale,
  });

  return <span>{formattedDate}</span>;
};

export default FormattedDate;
