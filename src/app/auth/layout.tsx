export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full min-h-screen bg-cinder-950 flex items-center justify-center">
      {children}
    </main>
  );
}
