interface Props {
  question: string;
  answer: string;
}

export default function FaqElement(props: Props) {
  return (
    <div>
      <h6 className="text-xl font-bold">{props.question}</h6>
      <p>{props.answer}</p>
    </div>
  );
}
