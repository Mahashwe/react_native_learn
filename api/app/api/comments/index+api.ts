import { comments } from "@/data/comments";

export async function GET() {
  return Response.json({
    comments: comments, 
    },
);
}

export async function POST(request: Request) {
  const { text } = await request.json();
  const newComment = { id: comments.length + 1, text };
  comments.push(newComment);
  return Response.json(newComment);
}