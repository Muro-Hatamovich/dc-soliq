import { useState, useEffect } from "react";

export const useFetchData = (endpoint) => {
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	const [data, setData] = useState(null);

	// Fetch data
	useEffect(() => {
		fetch(`https://swapi.dev/${endpoint}`)
			.then((response) => response.json())
			.then((data) => {
				setIsLoading(false);
				setData(data);
			})
			.catch((error) => {
				setErrorMessage(error.message);
			});
	}, [endpoint]);

	return { isLoading, errorMessage, data };
};
