<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { Label } from '$lib/components/ui/label';
	import { formFields } from '$lib';
	import type { FormData } from '$lib/types';

	const { formData }: { formData: { value: FormData } } = $props();
</script>

<div>
	<Label for="gender">What is your gender</Label>
	<Select.Root type="single" bind:value={formData.value.gender}>
		<Select.Trigger>{formData.value.gender || 'Select your gender'}</Select.Trigger>
		<Select.Content>
			{#each formFields.gender as gender}
				<Select.Item value={gender} label={gender}>{gender}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="currentYear">In which year of your studies are you currently enrolled</Label>
	<Select.Root type="single" bind:value={formData.value.currentYear}>
		<Select.Trigger>{formData.value.currentYear || 'Select your current year'}</Select.Trigger>
		<Select.Content>
			{#each formFields.currentYear as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="bacSpecialty">What was your BAC specialty</Label>
	<Select.Root type="single" bind:value={formData.value.bacSpecialty}>
		<Select.Trigger>{formData.value.bacSpecialty || 'Select your BAC specialty'}</Select.Trigger>
		<Select.Content>
			{#each formFields.bacSpecialty as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
