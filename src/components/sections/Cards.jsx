import React, {useEffect, useState} from 'react'
import {
  Box,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from '@chakra-ui/react'
import axios from 'axios'

export default function Cards({drink, idDrink}) {
  const [recipe, setRecipe] = useState({})
  const {isOpen, onOpen, onClose} = useDisclosure()

  const getRecipe = async (idDrink) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
      const {data} = await axios(url)
      setRecipe(data.drinks[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRecipe(idDrink)
  }, [idDrink])

  const property = {
    imageUrl: drink.strDrinkThumb,
    imageAlt: 'Drink',
    title: drink.strDrink,
    imageRecipe: recipe.strDrinkThumb,
    nameRecipe: recipe.strDrink,
    instructionsRecipe: recipe.strInstructions,
    ingredientOne: recipe.strIngredient1,
    ingredientTwo: recipe.strIngredient2,
    ingredientThree: recipe.strIngredient3,
  }

  return (
    <>
      <Box
        maxW="sm"
        borderWidth="3px"
        borderRadius="lg"
        overflow="hidden"
        marginBottom="10"
        borderColor="teal"
        backgroundColor="blackAlpha.500"
      >
        <Image src={property.imageUrl} alt={property.imageAlt} />
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            noOfLines={1}
            alignItems="center"
            fontSize="20px"
            color="white"
          >
            {property.title}
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            <Button
              colorScheme="teal"
              variant="solid"
              size="md"
              height="48px"
              width="100%"
              onClick={onOpen}
            >
              Show instructions
            </Button>
          </Box>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent alignItems="center">
          <Image src={property.imageRecipe} alt={property.imageAlt} />
          <ModalHeader fontWeight="bold" fontSize="3xl">
            {property.nameRecipe}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" fontSize="4xl">
              Instructions
            </Text>
            <Text fontWeight="light" fontSize="sm">
              {property.instructionsRecipe}
            </Text>
            <Text fontWeight="bold" fontSize="4xl">
              Ingredients
            </Text>
            <Text fontWeight="light" fontSize="sm">
              <li>{property.ingredientOne}</li>
              <li>{property.ingredientTwo}</li>
              <li>{property.ingredientThree}</li>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
