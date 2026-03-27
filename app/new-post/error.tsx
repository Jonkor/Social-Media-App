'use client';

interface NewPostErrorProps {
  error: Error;
}

export default function NewPostError({ error }: NewPostErrorProps) {
  return (
    <>
      <h2>An error occurred!</h2>
      <p>Unfortunately, something went wrong.</p>
      <p>{error.message}</p>
    </>
  );
}