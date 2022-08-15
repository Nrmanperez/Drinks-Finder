import useCategorias from "../hooks/useCategorias";
import useBebidas from "../hooks/useBebidas";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
  Stack,
  Select,
  Flex,
} from "@chakra-ui/react";
import Cards from "../components/sections/Cards";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function HookForm() {
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const { categorias } = useCategorias();

  const handleSubmit = () => {
    console.log("Hola mundo");
  };
  return (
    <Container minH="78.5vh">
      <FormControl>
        <Form onSubmit={handleSubmit}>
          <Flex gap="2" direction={{ base: "column", md: "row" }}>
            <FormLabel marginTop="2">Select</FormLabel>
            <Stack flex="1" spacing={3}>
              <Input placeholder="Name of drink" size="md" />
            </Stack>
            <Stack flex="1">
              <Select
                id="category"
                placeholder="Select Category"
                name="categoria"
                value={busqueda.categoria}
                onChange={(e) =>
                  setBusqueda({
                    ...busqueda,
                    [e.target.name]: e.target.value,
                  })
                }
              >
                {categorias.map((categoria) => (
                  <option
                    key={categoria.strCategory}
                    value={categoria.strCategory}
                  >
                    {categoria.strCategory}
                  </option>
                ))}
              </Select>
              <Button colorScheme="teal" variant="solid" type="buttom">
                Button
              </Button>
            </Stack>
          </Flex>
        </Form>
      </FormControl>
    </Container>
  );
}
