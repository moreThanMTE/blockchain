import Header from "./components/Header";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto w-10/12 flex flex-col">
        <SideBar />
      </div>
    </>
  );
}
