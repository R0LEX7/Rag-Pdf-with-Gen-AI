"use client";
import * as React from "react";

const FileUploadComponent: React.FC = () => {
  const handleOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file) {
        const formData = new FormData();

        formData.append("pdf", file);

        const res = await fetch("http://localhost:8000/upload-pdf", {
          method: "POST",
          body: formData,
        });
        console.log("file uploaded", res);
      }
    }
  };
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border-slate-300 border-2 border-default-strong rounded-lg cursor-pointer hover:bg-neutral-tertiary-medium"
        >
          <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm">
              <span className="font-semibold">Click to upload Pdf</span> or drag
              and drop
            </p>
            <p className="text-xs">Pdfs (MAX. 800x400px)</p>
          </div>
          <input
            id="dropzone-file"
            onChange={(e) => {
              console.log("triggered");
              handleOnChange(e);
            }}
            type="file"
            className="hidden"
            accept=".pdf"
          />
        </label>
      </div>
    </>
  );
};

export default FileUploadComponent;
