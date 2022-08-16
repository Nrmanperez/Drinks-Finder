import React from "react";
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
  useDisclosure
} from "@chakra-ui/react";

export default function Cards({drink}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    console.log(drink)
    const property = {
      imageUrl: drink.strDrinkThumb,
      imageAlt: 'Rear view of modern home with pool',
      title: drink.strDrink,
    }
  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={property.imageUrl} alt={property.imageAlt} />
  
        <Box p='6'>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {property.title}
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
          <Button onClick={Modal}>Open Modal</Button>
          </Box>
        </Box>
      </Box>
    )

    function Modal() {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button onClick={onOpen}>Open Modal</Button>
      
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontWeight='bold' mb='1rem'>
                    You can scroll the content behind the modal
                  </Text>
                  <Lorem count={2} />
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }
  }