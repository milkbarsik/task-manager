import { useState } from "react"

export const useError = () => {
	const [error, setError] = useState<string | null>(null);

	const fetchError = (foo: () => void) => {
		try {
			foo();
		} catch (e) {
			if (e instanceof Error) {
				setError(e.message);
			} else {
				setError('Thomething went wrong');
			}
		}
	}

	return {fetchError, error};
}