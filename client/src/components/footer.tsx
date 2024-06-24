'use client'
import { useAppContext } from '@/app/app-provider'

export default function Footer() {
  const { user } = useAppContext()
  return (
    <div className='' style={{ backgroundColor:"black", color:"white", height:"80px",marginTop:"400px" }}>
    <div>
        <p className=" text-center mt-5 " style={{ marginTop:"100px" }}>All Product favrite </p>
    </div>
      
    </div>
  )
}
