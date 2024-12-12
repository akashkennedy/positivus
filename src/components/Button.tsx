interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: "filled" | "outline";
  className: string;
}

export default function Button({ className, type, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${className} h-12 w-52 rounded-lg border border-black bg-transparent ${type === "filled" ? "text-white bg-black" : ""}`}
    >
      {props.children}
    </button>
  );
}
