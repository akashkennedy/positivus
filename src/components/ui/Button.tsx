interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: "filled" | "outline";
  className?: string;
}

export default function Button({ className, type, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${className} h-12 w-52 rounded-lg border p-3 ${type === "filled" ? "text-white bg-black p-3" : "border-black bg-transparent"}`}
    >
      {props.children}
    </button>
  );
}
