"use client"

import { signOut } from 'next-auth/react'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const LogoutPage = () => {
  const router = useRouter()

  useEffect(() => {
    const handleLogout = async () => {
      // Oturumu kapatma işlemi
      await signOut({ redirect: false, callbackUrl: '/' }) // Yönlendirme yapmadan çıkış yapılıyor
      router.push('/login') // Giriş yapılacak sayfaya yönlendirme istenirse
    }

    handleLogout() // Sayfa yüklendiğinde oturumu kapat
  }, [router])

  return (
    <div>
      {/* İsteğe bağlı sayfa içeriği */}
    </div>
  )
}

export default LogoutPage
