import { Image } from "@chakra-ui/react";
import logo from "./navbarLogo.jpg";

 function BrandLogo() {
  return (
    <Image width={{base:"40%",md:"20%",lg:"50%"}} src={logo} />
  );
}
export default BrandLogo
