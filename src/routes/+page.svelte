<script lang="ts">
	import { BarChart2, ChevronRight, TrendingUp } from 'lucide-svelte';

	const features = [
		{
			name: 'Accurate Predictions',
			description:
				'Our AI model uses multiple data points to provide highly accurate performance forecasts.',
			icon: TrendingUp
		},
		{
			name: 'Data-Driven Insights',
			description: 'Gain valuable insights into factors affecting student performance.',
			icon: BarChart2
		}
	];

	const steps = [
		{
			number: '01',
			title: 'Data Collection',
			description: 'Gather relevant student data from various sources.'
		},
		{
			number: '02',
			title: 'AI Analysis',
			description: 'Our advanced AI model analyzes the data to identify patterns.'
		},
		{
			number: '03',
			title: 'Performance Prediction',
			description: 'Generate accurate predictions of student performance.'
		},
		{
			number: '04',
			title: 'Intervention Planning',
			description: 'Develop targeted interventions based on predictions.'
		}
	];
</script>

<div class="min-h-screen bg-gray-50">
	<header class="bg-white shadow-sm">
		<nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
			<div class="flex items-center">
				<BarChart2 class="h-8 w-8 text-blue-600" />
				<span class="ml-2 text-xl font-bold text-gray-900"
					>ENSIA Student Performance Prediction</span
				>
			</div>
			<div class="flex space-x-4">
				<a href="#features" class="text-gray-500 hover:text-gray-900">Features</a>
				<a href="#how-it-works" class="text-gray-500 hover:text-gray-900">How It Works</a>
			</div>
		</nav>
	</header>

	<main>
		<section class="bg-white">
			<div class="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
				<h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
					Predict Student performance with <span class="text-blue-600">AI</span>
				</h1>
				<p
					class="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
				>
					Harness the power of AI to forecast student performance.
				</p>
				<div class="mt-10 flex justify-center">
					<a href="/form">
						<button
							class="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700"
						>
							Get Started
							<ChevronRight class="ml-2 h-5 w-5" />
						</button>
					</a>
				</div>
			</div>
		</section>

		<section id="features" class="bg-gray-50 py-16">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 class="mb-12 text-center text-3xl font-extrabold text-gray-900">Key Features</h2>
				<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{#each features as feature}
						<div class="rounded-lg bg-white p-6 shadow-md">
							<svelte:component this={feature.icon} class="mb-4 h-12 w-12 text-blue-600" />
							<h3 class="mb-2 text-xl font-semibold text-gray-900">{feature.name}</h3>
							<p class="text-gray-600">{feature.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section id="how-it-works" class="bg-white py-16">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 class="mb-12 text-center text-3xl font-extrabold text-gray-900">How It Works</h2>
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{#each steps as step}
						<div class="text-center">
							<div
								class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white"
							>
								{step.number}
							</div>
							<h3 class="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
							<p class="text-gray-600">{step.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>
	</main>

	<footer class="bg-gray-800 py-8 text-white">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<p>&copy; 2025. All rights reserved.</p>
		</div>
	</footer>
</div>
