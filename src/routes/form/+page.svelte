<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';

	import { persistData } from '$lib/store.svelte';

	import Progress from '$lib/components/ui/progress/progress.svelte';
	import Step1 from '$lib/components/step1.svelte';
	import Step2 from '$lib/components/step2.svelte';
	import Step3 from '$lib/components/step3.svelte';
	import Step4 from '$lib/components/step4.svelte';
	import type { FormData } from '$lib/types';
	import Dialog from '$lib/components/dialog.svelte';

	let step = persistData('step', 1);

	export const formData = persistData('form-state', {} as FormData);

	let error = $state('');

	let loading = $state(false);

	let isDialogOpen = $state(false);

	let predictResult = $state('');

	const closeDialog = (isOpen: boolean) => {
		isDialogOpen = isOpen;
	};

	const checkFormData = () => {
		error = '';
		if (step.value === 1) {
			if (!formData.value.gender || !formData.value.currentYear || !formData.value.bacSpecialty) {
				error = 'Please fill all the fields in this step.';
			}
		} else if (step.value === 2) {
			if (
				!formData.value.hoursPerWeek ||
				!formData.value.studyPlace ||
				!formData.value.studyCompanion ||
				formData.value.learningMethods.length === 0 ||
				formData.value.resourceTypes.length === 0 ||
				!formData.value.planar ||
				formData.value.problems.length === 0
			) {
				error = 'Please fill all the fields in this step.';
			}
		} else if (step.value === 3) {
			if (
				!formData.value.schoolProgramSatisfaction ||
				!formData.value.externalActivities ||
				!formData.value.motivationLevel ||
				!formData.value.aiInterest ||
				!formData.value.feedbackInfluence ||
				!formData.value.sleepHours ||
				!formData.value.stressHandling
			) {
				error = 'Please fill all the fields in this step.';
			}
		} else if (step.value === 4) {
			if (
				!formData.value.englishRating ||
				!formData.value.mathsRating ||
				!formData.value.csRating ||
				!formData.value.programmingRating ||
				!formData.value.annual1
			) {
				error = 'Please fill all the fields in this step.';
			}
		}
	};

	const handleNext = async () => {
		checkFormData();
		if (error) return;
		if (step.value === 4) return;
		step.value++;
	};

	const handlePrev = () => {
		if (step.value === 1) return;
		step.value--;
	};

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		checkFormData();
		if (error) return;
		loading = true;
		await fetch('https://data-mining-backend.vercel.app/api/submit-survey', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData.value)
		})
			.then((res) => res.json())
			.then((data) => {
				predictResult = JSON.stringify(data, null, 2);
				formData.value = {} as FormData;
				step.value = 1;
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {
				loading = false;
				isDialogOpen = true;
			});
		loading = false;
		isDialogOpen = true;
		console.log(formData.value);
	};
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-100">
	<Card.Card class="w-full max-w-lg shadow-lg">
		<Card.Header>
			<Card.Title>
				{#if step.value === 1}
					Personal Information & Academic Background
				{:else if step.value === 2}
					Study Habits & Learning Environment
				{:else if step.value === 3}
					Academic Well-being & Personal Factors
				{:else}
					Academic Performance & Skills Assessment
				{/if}
			</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="space-y-6">
				{#if error}
					<div class="text-red-500">{error}</div>
				{/if}
				{#if step.value === 1}
					<Step1 {formData} />
				{/if}
				{#if step.value === 2}
					<Step2 {formData} />
				{/if}
				{#if step.value === 3}
					<Step3 {formData} />
				{/if}
				{#if step.value === 4}
					<Step4 {formData} />
				{/if}
			</div>
		</Card.Content>
		<Card.Footer class="flex justify-between">
			{#if step.value > 1}
				<Button
					onclick={handlePrev}
					variant="outline"
					type="button"
					class="border-gray-300 bg-white text-gray-900">Previous</Button
				>
			{/if}
			{#if step.value < 4}
				<Button type="button" onclick={handleNext} class="bg-gray-900 text-white hover:bg-gray-800"
					>Next</Button
				>
			{:else}
				<Button
					disabled={loading}
					type="button"
					onclick={handleSubmit}
					class="bg-gray-900 text-white hover:bg-gray-800">Submit</Button
				>
			{/if}
		</Card.Footer>
	</Card.Card>
	<Progress class="max-w-lg shadow-lg" value={step.value} max={4} />
</div>
<Dialog {predictResult} {closeDialog} isOpen={isDialogOpen} />
