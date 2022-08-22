import Navigation from "../common/Navigation";
import InnerContainerLayout from "./InnerContainerLayout";

export default function MainLayout ({ children}) {
  return (
    <main
        className="flex flex-col min-h-screen w-full bg-gray-800 text-white"
      >
        <Navigation />
        <div className="flex-1">
          {children}
        </div>
        <footer className="bg-gray-900 py-4">
          <InnerContainerLayout>
            <div>
              <p className="text-sm">
                Made with ❤️ by{" "}
                <span className="font-bold">dobleb.cl</span>
              </p>
            </div>
          </InnerContainerLayout>
        </footer>
      </main>
  )
}