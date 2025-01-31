<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { Label } from '$lib/components/ui/label';

	import { formFields } from '$lib';

	import type { FormData } from '$lib/types';
	const { formData }: { formData: { value: FormData } } = $props();
</script>

<div>
	<Label for="hoursPerWeek">How many hours do you study per week?</Label>
	<Select.Root type="single" bind:value={formData.value.hoursPerWeek}>
		<Select.Trigger>{formData.value.hoursPerWeek || 'Select hours per week'}</Select.Trigger>
		<Select.Content>
			{#each formFields.hoursPerWeek as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="studyPlace">Where do you usually study?</Label>
	<Select.Root type="single" bind:value={formData.value.studyPlace}>
		<Select.Trigger>{formData.value.studyPlace || 'Select study place'}</Select.Trigger>
		<Select.Content>
			{#each formFields.studyPlace as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="studyCompanion">Do you study alone or with others?</Label>
	<Select.Root type="single" bind:value={formData.value.studyCompanion}>
		<Select.Trigger>{formData.value.studyCompanion || 'Select study companion'}</Select.Trigger>
		<Select.Content>
			{#each formFields.studyCompanion as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="learningMethods">What are your preferred learning methods?</Label>
	<Select.Root type="multiple" bind:value={formData.value.learningMethods}>
		<Select.Trigger>
			{formData.value.learningMethods.length === 0
				? 'Select learning methods'
				: `${formData.value.learningMethods.length} selected`}
		</Select.Trigger>
		<Select.Content>
			{#each formFields.learningMethods as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="resourceTypes">What resources do you use for learning?</Label>
	<Select.Root type="multiple" bind:value={formData.value.resourceTypes}>
		<Select.Trigger>
			{formData.value.resourceTypes.length === 0
				? 'Select resource types'
				: `${formData.value.resourceTypes.length} selected`}
		</Select.Trigger>
		<Select.Content>
			{#each formFields.resourceTypes as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="planar">Do you use a planner?</Label>
	<Select.Root type="single" bind:value={formData.value.planar}>
		<Select.Trigger>{formData.value.planar || 'Select planner usage'}</Select.Trigger>
		<Select.Content>
			{#each formFields.planar as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
<div>
	<Label for="problems">What problems do you face while studying?</Label>
	<Select.Root type="multiple" bind:value={formData.value.problems}>
		<Select.Trigger>
			{formData.value.problems.length === 0
				? 'Select problems'
				: `${formData.value.problems.length} selected`}
		</Select.Trigger>
		<Select.Content>
			{#each formFields.problems as value}
				<Select.Item {value} label={value}>{value}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
