import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

export default async function Notes() {
  const initialData = await fetchNotes({});

  return <NotesClient initialData={initialData} />;
}
