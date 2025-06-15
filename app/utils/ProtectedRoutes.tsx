'use client';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '../redux/hook/hook';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const uid = useAppSelector((state) => state.UserUid.id);
  const router = useRouter();
console.log(uid);
  useEffect(() => {
    if (!uid) {
      router.push('/login');
    }
  }, [uid]);

  if (!uid) return null; // or loading indicator

  return <>{children}</>;
}
