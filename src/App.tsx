import { Button } from "@/components/ui/button"

interface Exp {
  job: string;
  description: string;
  company: string;
  startDate: string;
  endDate: string;
}

interface Edu {
  institute: string;
  speciality: string;
  startDate: string;
  endDate: string;
}

interface Skill {
  beginner: number;
  program_language: string;
}

interface About {
  descripion_me: string;
  little_about_me: string;
}
function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Main Content</h1>
      <Button>Click me</Button>
    </div>
  )
}

export default App
