import Link from "next/link";
import Container from "./Container";

const ShortFooter = () => {
  return (
    <>
      <div className="bg-[#0F172A] pt-4 pb-4">
        <Container>
          {" "}
          <div className="flex flex-col md:flex-row justify-between items-center gap-1 md:gap-4 text-sm text-white">
            <div>
              © {new Date().getFullYear()} Prime Flight Agency. All Rights
              Reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/terms-conditions"
                className="text-blue-200 hover:text-white"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ShortFooter;
