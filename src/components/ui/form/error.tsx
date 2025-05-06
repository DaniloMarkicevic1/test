type Props = { text: string };

export const ErrorText = ({ text }: Props) => {
  return <p className="text-red-600">{text}</p>;
};
