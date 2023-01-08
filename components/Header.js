import { Navbar, Container, Link, Text, Input } from "@nextui-org/react";
import { SearchIcon } from "../static/SearchIcon";




export function Header() {
  return (
    <Container>
      <Navbar isBordered="false">

        <Navbar.Brand>
        <Text>📋</Text>
        <Text b color="inherit" hideIn="xs" css={{ml: "$4"}}>
            XKCD
          </Text>
        </Navbar.Brand>

        <Navbar.Content variant="highlight">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/">About</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item >
        </Navbar.Content>
      </Navbar>
    </Container>
  );
}
