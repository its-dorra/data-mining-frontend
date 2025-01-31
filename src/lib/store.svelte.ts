import { browser } from '$app/environment';

export const persistData = <T>(key: string, initialData: T) => {
	// eslint-disable-next-line prefer-const
	let storage = $state<{ value: T }>({ value: initialData });

	if (browser) {
		const item = localStorage.getItem(key);
		if (item) storage.value = JSON.parse(item);
	}

	$effect(() => {
		localStorage.setItem(key, JSON.stringify(storage.value));
	});

	return storage;
};
