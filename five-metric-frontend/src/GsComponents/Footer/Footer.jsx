import { Box } from "@chakra-ui/react";
import CopyrightSection from "./CopyrightSection";
import TopFooter from "./TopFooter";
import "./Styles.css"
export default function Footer() {
  return (
    <Box backgroundColor="#EBEDF0" className='footer'>
      <Box width="90%" marginInline="auto">
        <TopFooter />
        <CopyrightSection />
      </Box>
    </Box>
  );
}
