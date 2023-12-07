import Image from "next/image";
import { Inter } from "next/font/google";
import Lottie from "lottie-react";
import animationData from "../lotties/hammer.json";
import Banner from "@/components/card/banner";
import {
  Button,
  Card,
  CardBody,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About", "Projects", "Skills", "Contact"];
  return (
    <main className="dark text-foreground">
      <h1><i>The website is under construction.</i></h1>
      <section className="py-10">
        <div className="container flex items-center justify-center">
          <Card
            isBlurred
            className="lg:w-2/3 border-none bg-background/60 dark:bg-default-100/50"
          >
            {/* navbar */}
            <Navbar onMenuOpenChange={setIsMenuOpen}>
              <NavbarContent>
                <NavbarMenuToggle
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  className="sm:hidden"
                />
                <NavbarBrand>
                  <p className="font-bold text-inherit">DZIKRI</p>
                </NavbarBrand>
              </NavbarContent>

              <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                  <Link color="foreground" href="#">
                    About
                  </Link>
                </NavbarItem>
                <NavbarItem isActive>
                  <Link href="#" aria-current="page">
                    Projects
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color="foreground" href="#">
                    Skills
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color="foreground" href="#">
                    Contact
                  </Link>
                </NavbarItem>
              </NavbarContent>
              <NavbarContent justify="end">
                <NavbarItem>
                  <Button as={Link} color="primary" href="#" variant="flat">
                    Hello
                  </Button>
                </NavbarItem>
              </NavbarContent>
              <NavbarMenu>
                {menuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                      color={
                        index === 2
                          ? "primary"
                          : index === menuItems.length - 1
                          ? "danger"
                          : "foreground"
                      }
                      className="w-full"
                      href="#"
                      size="lg"
                    >
                      {item}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </NavbarMenu>
            </Navbar>

            <CardBody className="overflow-visible py-2">
              <div className="flex">
                {/* <Image alt='Shoe' className='flex-1 object-cover' src={shoe} /> */}
                <Lottie animationData={animationData} />
                <div className="flex-2 pr-5 py-5">
                  <center>
                    <Image
                      src="/Dzikri.jpg"
                      alt="My Image"
                      width={250}
                      height={250}
                      className="rounded-full"
                    />
                  </center>

                  <div className=" mt-2">
                    <span className="font-bold">
                      <center>Dzikri Faza Hauna Kusnadi</center>
                    </span>
                  </div>

                  <Banner />

                  <div className="mt-3">
                    <center>
                    <Button className="mr-3" color="primary">See My CV</Button>
                    <Button color="primary" variant="bordered" radius="full">
                      Portfolio
                    </Button>
                    </center>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      <p id="under-consruction">dzikrifaza.my.id</p>
    </main>
  );
}
