import React, { useState } from "react";
import { Container, VStack, Heading, Input, Button, Textarea, useToast } from "@chakra-ui/react";

const Index = () => {
  const [file, setFile] = useState(null);
  const [conversionResult, setConversionResult] = useState("");
  const toast = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a PDF file to convert.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate file processing and result
    setConversionResult("Simulated conversion result text...");
    toast({
      title: "Conversion Successful",
      description: "The file has been converted.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">
          Lao PDF to Word Converter
        </Heading>
        <Input type="file" accept=".pdf" onChange={handleFileChange} />
        <Button colorScheme="blue" type="submit">
          Convert
        </Button>
        <Textarea value={conversionResult} placeholder="Conversion results will appear here..." readOnly />
      </VStack>
    </Container>
  );
};

export default Index;
