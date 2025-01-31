<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { Label } from '$lib/components/ui/label';

	import { formFields } from '$lib';

	import type { FormData } from '$lib/types';
	const { formData }: { formData: { value: FormData } } = $props();
</script>

<div>
	<Label for="englishRating">Rate your English proficiency</Label>
	<Select.Root
		type="single"
		bind:value={() => `${formData.value.englishRating}`, (v) => (formData.value.englishRating = +v)}
	>
		<Select.Trigger>{formData.value.englishRating || 'Select English proficiency'}</Select.Trigger>
		<Select.Content>
			{#each formFields.englishRating as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="programmingRating">Rate your maths skills</Label>
	<Select.Root
		type="single"
		bind:value={() => `${formData.value.mathsRating}`, (v) => (formData.value.mathsRating = +v)}
	>
		<Select.Trigger>{formData.value.mathsRating || 'Select maths skills'}</Select.Trigger>
		<Select.Content>
			{#each formFields.mathsRating as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="programmingRating">Rate your programming skills</Label>
	<Select.Root
		type="single"
		bind:value={
			() => `${formData.value.programmingRating}`, (v) => (formData.value.programmingRating = +v)
		}
	>
		<Select.Trigger
			>{formData.value.programmingRating || 'Select programming skills'}</Select.Trigger
		>
		<Select.Content>
			{#each formFields.programmingRating as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="csRating">Rate your computer science knowledge</Label>
	<Select.Root
		type="single"
		bind:value={() => `${formData.value.csRating}`, (v) => (formData.value.csRating = +v)}
	>
		<Select.Trigger>{formData.value.csRating || 'Select computer science knowledge'}</Select.Trigger
		>
		<Select.Content>
			{#each formFields.csRating as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label>Your 1st year average</Label>
	<Select.Root
		type="single"
		bind:value={() => `${formData.value.annual1}`, (v) => (formData.value.annual1 = +v)}
	>
		<Select.Trigger>{formData.value.annual1 || 'First year average'}</Select.Trigger>
		<Select.Content>
			{#each formFields.annual1 as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
