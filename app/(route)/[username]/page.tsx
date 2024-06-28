'use client'

import { useEffect, useState } from 'react';
import User from '@/components/User';
import { useRouter } from 'next/navigation';
import Unsigned from '@/components/User/Unsigned';

interface UsernamePageProps {
  params: {
    username: string;
  };
}

const UsernamePage: React.FC<UsernamePageProps> = ({ params }) => {
  const { username } = params;
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserExists = async () => {
      const response = await fetch(`/api/user/${username}`);
      const data = await response.json();

      if (!data.exists) {
        router.push('/register');
      } else {
        setLoading(false);
      }
    };

    checkUserExists();
  }, [username, router]);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <main>
        <Unsigned />
    </main>
  );
};

export default UsernamePage;
