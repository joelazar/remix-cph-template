import type { Note } from "@prisma/client";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import format from "date-fns/format";
import { prisma } from "~/db.server";

type LoaderData = {
  notes: Note[];
};

export const loader: LoaderFunction = async () => {
  const notes = await prisma.note.findMany({});
  return { notes };
};

export default function Problem() {
  const { notes } = useLoaderData<LoaderData>();

  return (
    <>
      {notes.map((note) => (
        <div
          key={note.id}
          className="p flex flex-auto flex-col p-4 sm:p-6 lg:p-8"
        >
          <h2 className="text-2xl font-bold ">{note.title}</h2>
          <ul className="text-lg">
            {/* <li>Created at: {format(note.createdAt, "yyyy-MM-dd")}</li> */}
            {/* <li>Updated at: {format(note.updatedAt, "yyyy-MM-dd")}</li> */}
            {/* stupid solution */}
            <li>
              Created at: {format(new Date(note.createdAt), "yyyy-MM-dd")}
            </li>
            <li>
              Updated at: {format(new Date(note.updatedAt), "yyyy-MM-dd")}
            </li>
            <li>Body: {note.body}</li>
          </ul>
        </div>
      ))}
    </>
  );
}
