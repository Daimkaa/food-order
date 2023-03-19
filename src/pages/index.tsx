import Image from "next/image"
import Menu from "./components/Menu"

export default function Home(){

  const IMG = "https://scontent.fsin4-1.fna.fbcdn.net/v/t1.6435-9/70426902_2548503128539331_366089526113730560_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nzUXIXsLJwAAX9fTIOY&_nc_ht=scontent.fsin4-1.fna&oh=00_AfCLeiQSAuV6NPLYJq_BP7weUvlPxWxrVu1wNcEEAjrqVQ&oe=643ED0A1"

  return(
    <>
      <div className="xl:place-content-start place-content-center grid text-center bg-black">
          <Image src={IMG} alt="" width={300} height={300}></Image>
      </div>
      <div>
        <Menu/>
      </div>
    </>
  )
}