<script lang="ts">
	import { formFields } from '$lib';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import * as Select from '$lib/components/ui/select';

	import { formSchema, type FormSchema } from '$lib/zod-schemas';
	import { type FormData } from '$lib/types';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { persistData } from '$lib/store.svelte';
	import Progress from '$lib/components/ui/progress/progress.svelte';

	let step = $state(1);

	let { data }: { data: { form: SuperValidated<Infer<FormSchema>> } } = $props();

	const formData = persistData('form-state', {
		step1: {},
		step2: {},
		step3: {},
		step4: {}
	} as FormData);

	const form = superForm(data.form, {
		validators: zodClient(formSchema),
		dataType: 'json'
	});

	const { enhance, validateForm, errors } = form;

	const handleNext = async () => {
		if (step === 4) return;
		const result = await validateForm();
		if (!result.valid) {
			console.log(result.errors);
			// return;
		}
		step++;
	};
	const handlePrev = () => {
		if (step === 1) return;
		step--;
	};
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-100">
	<Card.Card class="w-full max-w-lg shadow-lg">
		<Card.Header
			><Card.Title>
				{#if step === 1}
					Personal Information & Academic Background
				{:else if step === 2}
					Study Habits & Learning Environment
				{:else if step === 3}
					Academic Well-being & Personal Factors
				{:else}
					Academic Performance & Skills Assessment
				{/if}
			</Card.Title>
		</Card.Header>
		<Card.Content>
			<form method="POST" use:enhance>
				{#if step === 1}
					<Form.Field {form} name="step1.gender">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step1.gender}>
									<Select.Trigger>What is your gender</Select.Trigger>
									<Select.Content>
										{#each formFields.gender as gender}
											<Select.Item value={gender} label={gender}>{gender}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step1.currentYear">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step1.gender}>
									<Select.Trigger
										>In which year of your studies are you currently enrolled</Select.Trigger
									>
									<Select.Content>
										{#each formFields.currentYear as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step1.bacSpecialty">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step1.gender}>
									<Select.Trigger>What was your BAC specialty</Select.Trigger>
									<Select.Content>
										{#each formFields.bacSpecialty as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				{/if}
				{#if step === 2}
					<Form.Field {form} name="step2.hoursPerWeek">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step2.hoursPerWeek}>
									<Select.Trigger>How many hours do you study per week?</Select.Trigger>
									<Select.Content>
										{#each formFields.hoursPerWeek as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<Form.Field {form} name="step2.studyPlace">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step2.studyPlace}>
									<Select.Trigger>Where do you usually study?</Select.Trigger>
									<Select.Content>
										{#each formFields.studyPlace as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<Form.Field {form} name="step2.studyCompanion">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step2.studyCompanion}>
									<Select.Trigger>Do you study alone or with others?</Select.Trigger>
									<Select.Content>
										{#each formFields.studyCompanion as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<Form.Field {form} name="step2.learningMethods">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="multiple" {...props} bind:value={formData.step2.learningMethods}>
									<Select.Trigger>What are your preferred learning methods?</Select.Trigger>
									<Select.Content>
										{#each formFields.learningMethods as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<Form.Field {form} name="step2.resourceTypes">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="multiple" {...props} bind:value={formData.step2.resourceTypes}>
									<Select.Trigger>What resources do you use for learning?</Select.Trigger>
									<Select.Content>
										{#each formFields.resourceTypes as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<Form.Field {form} name="step2.planar">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step2.planar}>
									<Select.Trigger>Do you use a planner?</Select.Trigger>
									<Select.Content>
										{#each formFields.planar as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<Form.Field {form} name="step2.problems">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="multiple" {...props} bind:value={formData.step2.problems}>
									<Select.Trigger>What problems do you face while studying?</Select.Trigger>
									<Select.Content>
										{#each formFields.problems as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				{/if}
				{#if step === 3}
					<Form.Field {form} name="step3.schoolProgramSatisfaction">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root
									type="single"
									{...props}
									bind:value={formData.step3.schoolProgramSatisfaction}
								>
									<Select.Trigger>Rate your satisfaction with the school program</Select.Trigger>
									<Select.Content>
										{#each formFields.schoolProgramSatisfaction as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step3.externalActivities">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root
									type="single"
									{...props}
									bind:value={formData.step3.externalActivities}
								>
									<Select.Trigger>Do you participate in external activities?</Select.Trigger>
									<Select.Content>
										{#each formFields.externalActivities as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step3.motivationLevel">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step3.motivationLevel}>
									<Select.Trigger>Rate your motivation level</Select.Trigger>
									<Select.Content>
										{#each formFields.motivationLevel as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step3.aiInterest">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step3.aiInterest}>
									<Select.Trigger>Rate your interest in AI</Select.Trigger>
									<Select.Content>
										{#each formFields.aiInterest as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step3.feedbackInfluence">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step3.feedbackInfluence}>
									<Select.Trigger>How does feedback influence you?</Select.Trigger>
									<Select.Content>
										{#each formFields.feedbackInfluence as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step3.sleepHours">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step3.sleepHours}>
									<Select.Trigger>How many hours of sleep do you get on average?</Select.Trigger>
									<Select.Content>
										{#each formFields.sleepHours as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step3.stressHandling">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step3.stressHandling}>
									<Select.Trigger>Rate your stress handling abilities</Select.Trigger>
									<Select.Content>
										{#each formFields.stressHandling as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				{/if}

				{#if step === 4}
					<Form.Field {form} name="step4.englishRating">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step4.englishRating}>
									<Select.Trigger>Rate your English proficiency</Select.Trigger>
									<Select.Content>
										{#each formFields.englishRating as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step4.programmingRating">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step4.programmingRating}>
									<Select.Trigger>Rate your programming skills</Select.Trigger>
									<Select.Content>
										{#each formFields.programmingRating as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step4.csRating">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step4.csRating}>
									<Select.Trigger>Rate your computer science knowledge</Select.Trigger>
									<Select.Content>
										{#each formFields.csRating as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step4.mathsRating">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step4.mathsRating}>
									<Select.Trigger>Rate your mathematics skills</Select.Trigger>
									<Select.Content>
										{#each formFields.mathsRating as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step4.s1">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step4.s1}>
									<Select.Trigger>Enter your S1 grade</Select.Trigger>
									<Select.Content>
										{#each formFields.s1 as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step4.s2">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step4.s2}>
									<Select.Trigger>Enter your S2 grade</Select.Trigger>
									<Select.Content>
										{#each formFields.s2 as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step4.s3">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step4.s3}>
									<Select.Trigger>Enter your S3 grade</Select.Trigger>
									<Select.Content>
										{#each formFields.s3 as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step4.s4">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step4.s4}>
									<Select.Trigger>Enter your S4 grade</Select.Trigger>
									<Select.Content>
										{#each formFields.s4 as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="step4.s5">
						<Form.Control>
							{#snippet children({ props })}
								<Select.Root type="single" {...props} bind:value={formData.step4.s5}>
									<Select.Trigger>Enter your S5 grade</Select.Trigger>
									<Select.Content>
										{#each formFields.s5 as value}
											<Select.Item {value} label={value}>{value}</Select.Item>
										{/each}
									</Select.Content>
								</Select.Root>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				{/if}
			</form>
		</Card.Content>
		<Card.Footer class="flex justify-between">
			{#if step > 1}
				<Button
					onclick={handlePrev}
					variant="outline"
					type="button"
					class="border-gray-300 bg-white text-gray-900">Previous</Button
				>
			{/if}
			{#if step < 4}
				<Button type="button" onclick={handleNext} class="bg-gray-900 text-white hover:bg-gray-800">
					Next
				</Button>
			{:else}
				<Button type="submit" class="bg-gray-900 text-white hover:bg-gray-800"
					><Form.Button>Submit</Form.Button></Button
				>
			{/if}
		</Card.Footer>
	</Card.Card>
	<Progress class="max-w-lg shadow-lg" value={step} max={4} />
</div>
