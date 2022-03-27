import Image from 'next/image'

export default function Logo() {
  return (
    <div className="relative h-32 w-32">
        <Image src="https://garchi.s3.eu-west-2.amazonaws.com/whitelabel_assets/WhitelabelerLogo/WlabelLogo96T-1618570885.png"
         layout="fill"
         objectFit='cover'
         objectPosition="center"
         alt="Logo" 
         />
    </div>
  )
}
