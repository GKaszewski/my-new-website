interface Props {
  value?: string;
  onChange: (val: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  name?: string;
  required?: boolean;
  rows: number;
  className?: string;
}

export default function TextArea({
  rows,
  onChange,
  value,
  className,
  ...rest
}: Props) {
  return (
    <textarea
      rows={rows}
      style={{ resize: "none" }}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      {...rest}
      className={`rounded-xl w-full border-4 text-black py-1 px-2 outline-none appearance-none focus:border-yellow-400 h-full ${className}`}
    />
  );
}
