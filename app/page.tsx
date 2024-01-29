import { Footer } from "./components/Footer";
import FullPostList from "./components/FullPostList";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex flex-col justify-between antialiased">
      <div className="flexjustify-center p-8">
        <h1 className="font-bold text-lg">Ten Principles for Good Design</h1>
        <p>by Dieter Rams</p>
      </div>
      <div className="p-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <FullPostList />
        </div>
      </div>
      <Footer />
    </main>
  );
}
