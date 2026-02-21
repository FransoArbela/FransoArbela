import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string
}

export default function Input({ label, error, className = "", ...props }: InputProps) {
	const inputId = props.id || `input-${label?.replace(/\s+/g, "-").toLowerCase()}`

	return (
		<div className="w-full">
			{label && (
				<label
					htmlFor={inputId}
					className="block mb-1 font-medium text-[var(--color-text)] text-sm"
				>
					{label}
				</label>
			)}
			<input
				id={inputId}
				className={`w-full px-3 py-2 border rounded-sm bg-[var(--color-content-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
					error ? "border-red-500" : "border-[var(--color-secondary)]"
				} ${className}`}
				{...props}
			/>
			{error && <p className="mt-1 text-red-600 text-sm">{error}</p>}
		</div>
	)
}
