import { Button, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import {ViewIcon} from "@chakra-ui/icons"
import React from 'react'

const ProfileModal = ({user, children}) => {

  console.log(user)

  const{isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton display={{base : "flex"}} icon={<ViewIcon />} onClick={onOpen}/>
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent h="410px">
            <ModalHeader
              fontSize="40px"
              fontFamily="work sans"
              display="flex"
              justifyContent="center"
            >
              {user.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody 
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Image 
                borderRadius="full"
                boxSize="150px"
                src={user.pic}
                alt={user.name}
                objectFit="cover"  
                borderColor="teal.700"
                border="6px solid teal"
              />
              <Text
                fontSize={{base : "20px", md: "20px"}}
              >
                email : {user.email}
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileModal;
