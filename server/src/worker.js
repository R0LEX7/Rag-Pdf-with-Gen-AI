import { Worker } from "bullmq";
import { OpenAIEmbeddings } from "@langchain/openai";
import { QdrantVectorStore } from "@langchain/qdrant";
import { Document } from "@langchain/core/documents";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { CharacterTextSplitter } from "@langchain/textsplitters";

const worker = new Worker(
  "file-upload-queue",
  async (job) => {
    console.log("job ", job.data);
    console.log("job name", job.name);

    const data = JSON.parse(job.data);
    const loader = new PDFLoader(data.path);
    const doc = await loader.load();
    console.log("docs ", doc);
  },
  {
    concurrency: 100,
    connection: {
      host: "localhost",
      port: "6380",
    },
  },
);
