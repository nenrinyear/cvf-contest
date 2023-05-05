
import { createClient } from "microcms-js-sdk";

export const microcmsClient = createClient({
    serviceDomain: "cvf",
    apiKey: process.env.NEXT_PUBLIC_CVF2023_MICROCMS_API_KEY,
    customFetch: async (input, init) => {
        if (typeof input === 'string') {
            const newInput = new URL(input);
            const time = new Date().getTime();
            newInput.searchParams.set('cacheclearparam', time.toString());
            return await fetch(newInput, init);
        }
        return await fetch(input, init);
    },
});
