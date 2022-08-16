import useCategorys from "../hooks/useCategorys";
import { useFormik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  FormControl,
  Input,
  Button,
  Container,
  Select,
  Flex,
  FormErrorMessage,
  Box,
  HStack,
} from "@chakra-ui/react";
import Cards from "../components/sections/Cards";
import * as Yup from "yup";

export default function HookForm() {
  const { categorys } = useCategorys();
  const [drinks, setDrinks] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      category: Yup.string().required("Category is required"),
    }),
    onSubmit: async (values, actions) => {
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${values.name}&c=${values.category}`;

        const { data } = await axios(url);
        const { drinks } = data;
        setDrinks(drinks);
      } catch (error) {
        console.log(error);
      }
      actions.resetForm();
    },
  });

  const random = async () => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=margarita&c=Cocktail`;

      const { data } = await axios(url);
      const { drinks } = data;
      setDrinks(drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    random();
  }, []);

  return (
    <>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <Flex
            gap="2"
            direction={{ base: "column", md: "row" }}
            minWidth="max-content"
            alignItems="center"
          >
            <FormControl isInvalid={formik.errors.name && formik.touched.name}>
              <Input
                placeholder="Name of drink"
                borderColor="blue.700"
                name="name"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.category && formik.touched.category}
            >
              <Select
                id="category"
                placeholder="Select Category"
                name="category"
                borderColor="blue.700"
                onChange={formik.handleChange}
                value={formik.values.search}
                onBlur={formik.handleBlur}
              >
                {categorys.map((categoria) => (
                  <option
                    key={categoria.strCategory}
                    value={categoria.strCategory}
                  >
                    {categoria.strCategory}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{formik.errors.category}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="teal" width="full">
              Search Drink
            </Button>
          </Flex>
        </form>
      </Container>

      <HStack w="100vw" p={4} mt={4} color="black">
        <Flex wrap="wrap" justifyContent="space-evenly">
          {drinks.map((drink) => (
            <Cards key={drink.idDrink} drink={drink} />
          ))}
        </Flex>
      </HStack>
    </>
  );
}
