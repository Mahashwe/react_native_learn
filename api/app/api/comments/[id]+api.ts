import { comments } from "@/data/comments";

export async function GET(req: Request, context: any) {
  const idParam = context?.params?.id;

  if (!idParam) {
    return Response.json({ error: "Missing id param" }, { status: 400 });
  }

  const id = Number(idParam);
  const comment = comments.find((c) => c.id === id);

  if (!comment) {
    return Response.json({ error: "Comment not found" }, { status: 404 });
  }

  return Response.json(comment);
}