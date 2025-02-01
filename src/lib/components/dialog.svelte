<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import Button from './ui/button/button.svelte';

	const {
		isOpen,
		closeDialog,
		predictResult
	}: { isOpen: boolean; closeDialog: (isOpen: boolean) => void; predictResult: string } = $props();
</script>

<Dialog.Root open={isOpen} onOpenChange={closeDialog}>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Prediction Result</Dialog.Title>
			<Dialog.Description>
				Your performance prediction based on the inputs provided is...
			</Dialog.Description>
		</Dialog.Header>

		<!-- result -->
		<pre>
			{predictResult}
		 </pre>

		<Dialog.Footer>
			<Button variant="destructive" onclick={() => closeDialog(false)}>Close</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
