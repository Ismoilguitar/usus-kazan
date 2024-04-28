import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground shadow hover:bg-primary/90',
				destructive:
					'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
				outline:
					'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				primaryLink:
					'text-white inline-block relative border border-black transition hover:duration-40 hover:border-gray-200 focus:outline-none focus:border-gray-200 hover:transition duration-300 ease-linear',
				secondLink:
					'text-black inline-block relative border border-white transition hover:duration-40 hover:border-gray-400 focus:outline-none focus:border-gray-200 hover:transition duration-300 ease-linear',
				primaryBlack:
					'text-white hover:text-black inline-block relative bg-black transition hover:duration-40 hover:bg-[#ffec86] hover:border border-gray-400 focus:outline-none focus:border-gray-200 hover:transition duration-300 ease-linear',
				primaryWhite:
					'text-black inline-block relative border border-white transition hover:duration-40 hover:border-gray-400 focus:outline-none focus:border-gray-200 hover:transition duration-300 ease-linear',
				primaryOrange:
					'text-black inline-block bg-green-600 relative hover:bg-green-700 text-white transition hover:duration-40 focus:outline-none focus:border-gray-200 hover:transition duration-300 ease-linear',
				PrimaryTeal:"py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800",
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-10 rounded-md px-8',
				xl: 'px-6 py-3 me-2 mb-2 rounded-full',
				large: 'py-3 px-4',
				icon: 'h-9 w-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
