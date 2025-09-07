"use client"

import Calendar31 from "@/components/calendar-31"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"

export default function Home() {
  
  return (
    <div className="min-h-screen p-1">
      <main className="flex flex-col items-center justify-center">
        <div className="sticky top-2 px-2 flex flex-row items-center justify-between gap-5">
          <ModeToggle />
          <h1>Calendar</h1>
          <Button>+</Button>
        </div>
        <div className="w-full p-2 my-1 mx-2">
          <Calendar31 />
        </div>
      </main>
    </div>
  )
}
