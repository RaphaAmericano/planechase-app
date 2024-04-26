"use client"
export default function ErrorPlanechase({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
}){
    console.log(error)
    return <div>Erro ao carregar Planos</div>
}