'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import productApiRequest from '@/apiRequests/product'
import ProductAddForm from '@/app/products/_components/product-add-form'

type Props = {
  params: { id: string }
}

export default function ProductEdit({ params }: Props) {
  const router = useRouter()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { payload } = await productApiRequest.getDetail(Number(params.id))
        setProduct(payload.data)
      } catch (error) {
        setProduct(null)
      }
    }
    fetchProduct()
  }, [params.id])

  const handleSuccess = () => {
    router.push('/products') // Redirect to the products page
  }

  return (
    <div>
      {!product && <div>Không tìm thấy sản phẩm</div>}
      {product && <ProductAddForm product={product} onSuccess={handleSuccess} />}
    </div>
  )
}
