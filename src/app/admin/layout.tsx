import { redirect } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Simple password protection - in production, use proper authentication
  const authHeader = typeof headers !== 'undefined' ? headers().get('authorization') : null;
  
  if (authHeader !== 'Bearer admin-token') {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}