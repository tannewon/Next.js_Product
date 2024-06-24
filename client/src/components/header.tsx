'use client'
import { useAppContext } from '@/app/app-provider'
import ButtonLogout from '@/components/button-logout'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'

export default function Header() {
  const { user } = useAppContext()
  return (
    <div className='flex space-x-4 mt-5' style={{ backgroundColor:"black", color:"white", height:"80px", }}>
      <ul className='flex space-x-4 mt-5'>
        <li style={{ marginLeft:"400px" }} >
          <Link href='/products'>Sản phẩm</Link>
        </li>

        {user ? (
          <>
            <li style={{ marginLeft:"200px" }}>
              <Link href={'/me'}  >
                Xin chào <strong>{user.name}</strong>
              </Link>
            </li>
            <li style={{ marginLeft:"200px" }}>
              <ButtonLogout />
            </li>
          </>
        ) : (
          <>
            <li style={{ marginLeft:"200px" }}>
              <Link href='/login'>Đăng nhập</Link>
            </li>
            <li style={{ marginLeft:"200px" }}>
              <Link href='/register'>Đăng ký</Link>
            </li>
          </>
        )}
      </ul>
      <div style={{ marginLeft:"300px",marginTop:"10px" }}>
      <ModeToggle />
      </div>
      
    </div>
  )
}
