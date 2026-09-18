import type { InputHTMLAttributes, ReactNode } from "react";

export const SectionHeading = ({
	title,
	subtitle,
}: {
	title: ReactNode;
	subtitle?: ReactNode;
}) => (
	<div>
		<h1 className="text-4xl font-bold">{title}</h1>
		{subtitle && <p className="text-sm text-gray-500 py-2">{subtitle}</p>}
	</div>
);

export const FieldLabel = ({ children }: { children: ReactNode }) => (
	<h1 className="font-bold text-xl text-start">{children}</h1>
);

export const FieldError = ({ children }: { children: ReactNode }) => (
	<p className="text-red-500 text-sm text-start">{children}</p>
);

export const FormInput = ({
	fullWidth,
	className = "",
	...props
}: InputHTMLAttributes<HTMLInputElement> & { fullWidth?: boolean }) => (
	<input
		className={`border p-3 rounded-lg${fullWidth ? " w-full" : ""}${className ? ` ${className}` : ""}`}
		{...props}
	/>
);
