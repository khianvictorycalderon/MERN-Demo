import { CreateSection } from "./sections/create";
import { ReadSection } from "./sections/read";

export default function App() {

  return (
    // This is container
    <div>
      <div className="p-4 md:p-16">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          MERN stack basic CRUD
        </h1>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>MondoDB</li>
          <li>Express JS</li>
          <li>React (Vite)</li>
          <li>Nodejs</li>
        </ul>
        <hr className="mb-4 md:mb-4"/>
        
        <CreateSection />
        <ReadSection />

      </div>
    </div>
  )
}