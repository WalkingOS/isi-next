'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>404 - Die Seite wurde nicht gefunden</h2>
        <button onClick={() => reset()}>Versuche es nocheinmal</button>
        <p>{error.message}</p>
      </body>
    </html>
  );
}
