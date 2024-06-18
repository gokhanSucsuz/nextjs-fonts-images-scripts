
import { cherry, inter, oranienbaum, peralta } from "@/app/layout"
import Script from "next/script";
import ImageComp from "./image/page";
import ScriptFile from "./script/page";


export default function Home() {


  return (
    <main className="flex flex-wrap p-8 text-3xl">
      <div className="border p-4 m-4 shadow-xl">
        <h1 className="text-6xl">FONTS</h1>
        <h1>Font Roboto</h1>
        <h1 className={inter.className}>Font Inter</h1>
        <h1 className={cherry.className}>Font Cherry_swash</h1>
        <h1 className={peralta.className}>Font Peralta</h1>
        <h1 className={oranienbaum.className}>Font Oranienbaum</h1>
      </div>
      <div className="border p-4 m-4 shadow-xl">
        <ImageComp />
      </div>
      <div>
        <ScriptFile />
      </div>
    </main>
  );
}
