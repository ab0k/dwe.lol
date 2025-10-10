"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-2">
      <h1 className="text-6xl font-extrabold">
        404
      </h1>
      <p className="text-muted-foreground">
        A página que você está procurando não foi encontrada.
      </p>
      <div className="flex gap-2">
        <Button onClick={() => history.go(-1)} variant="outline">
          <ArrowLeft />
          Voltar
        </Button>
      </div>
    </main>
  )
}