<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { Label } from '$lib/components/ui/label';
	import { formFields } from '$lib';
	import type { FormData } from '$lib/types';
	const { formData }: { formData: { value: FormData } } = $props();
</script>

<div>
	<Label for="schoolProgramSatisfaction">Rate your satisfaction with the school program</Label>
	<Select.Root
		type="single"
		bind:value={
			() => `${formData.value.schoolProgramSatisfaction}`,
			(v) => (formData.value.schoolProgramSatisfaction = +v)
		}
	>
		<Select.Trigger>
			{formData.value.schoolProgramSatisfaction || 'Select satisfaction level'}
		</Select.Trigger>
		<Select.Content>
			{#each formFields.schoolProgramSatisfaction as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="externalActivities">Do you participate in external activities?</Label>
	<Select.Root type="single" bind:value={formData.value.externalActivities}>
		<Select.Trigger>
			{formData.value.externalActivities || 'Select external activities'}
		</Select.Trigger>
		<Select.Content>
			{#each formFields.externalActivities as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="motivationLevel">Rate your motivation level</Label>
	<Select.Root
		type="single"
		bind:value={
			() => `${formData.value.motivationLevel}`, (v) => (formData.value.motivationLevel = +v)
		}
	>
		<Select.Trigger>{formData.value.motivationLevel || 'Select motivation level'}</Select.Trigger>
		<Select.Content>
			{#each formFields.motivationLevel as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="aiInterest">Rate your interest in AI</Label>
	<Select.Root
		type="single"
		bind:value={() => `${formData.value.aiInterest}`, (v) => (formData.value.aiInterest = +v)}
	>
		<Select.Trigger>{formData.value.aiInterest || 'Select AI interest'}</Select.Trigger>
		<Select.Content>
			{#each formFields.aiInterest as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="feedbackInfluence">How does feedback influence you?</Label>
	<Select.Root type="single" bind:value={formData.value.feedbackInfluence}>
		<Select.Trigger
			>{formData.value.feedbackInfluence || 'Select feedback influence'}</Select.Trigger
		>
		<Select.Content>
			{#each formFields.feedbackInfluence as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="sleepHours">How many hours of sleep do you get on average?</Label>
	<Select.Root type="single" bind:value={formData.value.sleepHours}>
		<Select.Trigger>{formData.value.sleepHours || 'Select sleep hours'}</Select.Trigger>
		<Select.Content>
			{#each formFields.sleepHours as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="stressHandling">Rate your stress handling abilities</Label>
	<Select.Root
		type="single"
		bind:value={
			() => `${formData.value.stressHandling}`, (v) => (formData.value.stressHandling = +v)
		}
	>
		<Select.Trigger>{formData.value.stressHandling || 'Select stress handling'}</Select.Trigger>
		<Select.Content>
			{#each formFields.stressHandling as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
