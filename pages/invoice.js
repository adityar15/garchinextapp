import {Title} from '@adiranids/react-tailwind'
import InvoiceTable from '../components/cart/InvoiceTable'
import Meta from '../components/Meta'
import "@adiranids/react-tailwind/dist/style.css"
export default function Invoice() {
  return (
    <div>
    <>
      <Meta
        description="Enhance your web dev skills along with other technical and personal skills with Garchi's Bootcamp"
        url={process.env.NEXT_PUBLIC_URL}
        title="Garchi Bootcamp | Invoice"
      />
      <div className="w-full h-full mt-6 space-y-5">
        <Title size="h1" className="text-center font-semibold">
          Invoice
        </Title>
        <InvoiceTable />
        
      </div>
    </>
    </div>
  )
}
