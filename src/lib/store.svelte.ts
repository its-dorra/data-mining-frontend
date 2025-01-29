import { browser } from '$app/environment';

export const persistData = <T>(key: string, initialData: T) => {
	if (!browser) return initialData;

	const storedData = localStorage.getItem(key);

	const data = storedData ? (JSON.parse(storedData) as T) : initialData;

	const store = $state(data);

	$effect(() => {
		localStorage.setItem(key, JSON.stringify(store));
	});

	return store;
};
