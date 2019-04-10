// DataContext.js
import React from "react";

/**
 * This creates two components: The Provider Component and a Consumer Component.
 * The provider is going to make the data you pass in the Provider available, everywhere underneath it and the consumer is going to read from the provider
 * These are dummy methods. They don't do anything You are just describing to React what they look like.
 */
const DataContext = React.createContext({
	hobby: 'Blogging',
	employer: 'rtCamp',
	handleHobbyChange() {},
	handleEmploymentChange() {}
});

export const Provider = DataContext.Provider;
export const Consumer = DataContext.Consumer;
