import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Quote } from "lucide-react"
import { motion } from "framer-motion"
import  { useState } from "react"

const testimonials = [
	{
		name: "Paul M.",
		image: "https://randomuser.me/api/portraits/men/32.jpg",
		role: "Refinanced homeowner",
		feedback: "Better made refinancing my home so easy and stress-free. The team was responsive and I got a great rate!",
	},
	{
		name: "Amanda T.",
		image: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
		role: "First-time homebuyer",
		feedback: "The speed with which I decided to go with Better Mortgage was a big improvement over other lenders. The process was simple with fast turnaround time. I was able to close on my dream home in just 21 days!",
	},
	{
		name: "Michael R.",
		image: "https://randomuser.me/api/portraits/men/44.jpg",
		role: "Repeat buyer",
		feedback: "I've bought homes before, but this was by far the smoothest experience. The digital process saved me so much time.",
	},
	{
		name: "Jennifer L.",
		image: "https://randomuser.me/api/portraits/women/65.jpg",
		role: "Investment property owner",
		feedback: "I was able to close on my investment property quickly and with no hidden fees. Highly recommend Better!",
	},
]

export default function Testimonial() {
	const [selected, setSelected] = useState(1) // Default to Amanda T.
	const t = testimonials[selected]

	return (
		<div className="container px-4 py-20 lg:px-40">
			<div className="grid md:grid-cols-2 md:gap-32 gap-12 items-center">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="relative"
				>
					<div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-full opacity-70 dark:opacity-20"></div>
					<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full opacity-70 dark:opacity-20"></div>

					<div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
						<div className="p-8">
							<div className="flex mb-6">
								<Quote className="h-12 w-12 text-purple-200 dark:text-purple-800" />
							</div>
							<p className="text-gray-700 dark:text-gray-300 mb-8 text-lg italic leading-relaxed">
								"{t.feedback}"
							</p>
							<div className="flex items-center">
								<div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mr-4 overflow-hidden">
									<img
										src={t.image}
										alt={t.name}
										width={100}
										height={100}
										className="w-full h-full object-cover"
									/>
								</div>
								<div>
									<div className="font-medium text-gray-900 dark:text-white text-lg">
										{t.name}
									</div>
									<div className="text-purple-600 dark:text-purple-400">
										{t.role}
									</div>
									<div className="flex mt-1">
										{[1, 2, 3, 4, 5].map((i) => (
											<Star
												key={i}
												className="h-4 w-4 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="bg-gray-50 dark:bg-gray-900 px-8 py-4 border-t border-gray-100 dark:border-gray-700">
							<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
								{testimonials.map((testimonial, index) => (
									<Button
										key={index}
										variant="outline"
										size="sm"
										className={`rounded-full border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-400 whitespace-nowrap ${
											selected === index
												? "bg-purple-600 text-white"
												: ""
										}`}
										onClick={() => setSelected(index)}
									>
										{testimonial.name}
									</Button>
								))}
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<div className="inline-block bg-purple-100 dark:bg-purple-900/50 rounded-lg px-3 py-1 text-sm font-medium text-purple-800 dark:text-purple-300 mb-4">
						Customer Stories
					</div>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
						Find out why
						<br />
						we're{" "}
						<span className="text-purple-600 dark:text-purple-400">better</span>
					</h2>
					<p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
						Our digital-first approach means faster closings, lower rates, and a
						completely transparent process—every
						<br className="hidden sm:block" /> step of the way. We've helped
						thousands of families achieve their homeownership dreams.
					</p>

					<div className="space-y-6">
						<div className="flex items-start">
							<div className="dark:bg-purple-900/50 rounded-full p-2 mr-4">
								<svg
									className="h-5 w-5 "
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="font-medium text-gray-900 dark:text-white text-lg mb-1">
									Lightning-fast pre-approvals
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Get pre-approved in as little as 3 minutes
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="rounded-full p-2 mr-4">
								<svg
									className="h-5 w-5 "
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="font-medium text-gray-900 dark:text-white text-lg mb-1">
									No lender fees
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Save thousands with no origination or lender fees
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="rounded-full p-2 mr-4">
								<svg
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="font-medium text-gray-900 dark:text-white text-lg mb-1">
									Secure and transparent
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Bank-level security with clear, upfront pricing
								</p>
							</div>
						</div>
					</div>

					<Button className="mt-8 bg-purple-600 text-white rounded-r-full rounded-l-full">
						See all our stories{" "}
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>

					<div className="flex items-center mt-6">
						<div className="flex">
							{[1, 2, 3, 4, 5].map((i) => (
								<Star
									key={i}
									className="h-4 w-4 fill-yellow-400 text-yellow-400"
								/>
							))}
						</div>
						<span className="text-sm ml-2 text-gray-600 dark:text-gray-300">
							Trustpilot · Excellent 4.8 out of 5
						</span>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
