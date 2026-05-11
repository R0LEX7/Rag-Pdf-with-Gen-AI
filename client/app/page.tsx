import FileUploadComponent from "./components/file-upload";


export default function Home() {
  return (
    <div className="min-h-screen w-100vw  p-2 flex justify-center items-center">
      <div className="w-[30vw] min-h-screen  flex justify-center items-center px-2  border-r-2 border-slate-600">
        <FileUploadComponent/>
      </div>
      <div className="w-[70vw] min-h-screen  ">1</div>

    </div>
  );
}
