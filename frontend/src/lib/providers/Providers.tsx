"use client"
import { ReactNode, useState } from "react"
import { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { getAllPlanes } from "@/actions/actions"

export default function Provider({ children } : { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient} >
            <ReactQueryDevtools initialIsOpen={false} />
            { children }
        </QueryClientProvider>
    )
}