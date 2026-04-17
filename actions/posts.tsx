"use server";

import { redirect } from "next/navigation";

import { storePost } from "@/lib/posts";

interface FormState {
  errors?: string[];
}

export async function createPost(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const title = formData.get("title") as string | null;
  const image = formData.get("image") as File | null;
  const content = formData.get("content") as string | null;

  let errors: string[] = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required");
  }

  if (errors.length > 0) {
    return { errors };
  }

  await storePost({
    imageUrl: "",
    title: title as string,
    content: content as string,
    userId: 1,
  });

  redirect("/feed");
}
