import { ref } from "vue";

interface UseButtonHandlerProps<T> {
    handler: T
}

type FunctionArgs<T> = T extends (...args: infer A) => any ? A : never;

function useButtonHandler<T extends (...args: any[]) => any>(props: UseButtonHandlerProps<T>) {
    const pending = ref(false);

    async function handle(...args: FunctionArgs<T>) {
        pending.value = true;

        try {
            await props.handler(...args);
        } finally {
            pending.value = false;
        }
    }

    return {
        pending,
        handle,
    }
}

export default useButtonHandler;