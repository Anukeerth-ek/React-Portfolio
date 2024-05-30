import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeInBottomVariant } from '../utils/Variants';
import { PaddingContainer, Heading, BlueText, FlexContainer, Button } from '../styles/Global.styles';
import { ContactForm, FormInput, FormLabel } from '../styles/Footer.styled';
// import emailjs from 'emailjs-com'; // Import emailjs-com instead of @emailjs/browser
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Footer = () => {
  const form = useRef(); // Create a ref for the form

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h7moot3', 'template_cv4vg5f', form.current, 'ckvAf3gJD1IAJl-Ls')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          // Add your success handling logic here, like showing a success message to the user
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          // Add your error handling logic here, like showing an error message to the user
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Message sented successfully",
        showConfirmButton: false,
        timer: 3000
      });
  };

  return (
    <PaddingContainer id="Contact" top="5%" bottom="10%">
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        MY CONTACT
      </Heading>

      <Heading
        as={motion.h2}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Contact <BlueText>Me Here</BlueText>
      </Heading>
      <PaddingContainer top="3rem">
        <FlexContainer justify="center">
            

                 <ContactForm
            as={motion.form}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            onSubmit={sendEmail } // Call sendEmail function on form submission
            ref={form} // Attach the ref to the form
          >
        <PaddingContainer bottom="2rem">
        <FormLabel>Name:</FormLabel>
        <FormInput type="text" placeholder="Enter your name" name="from_name" required/>
      </PaddingContainer>
      <PaddingContainer bottom="2rem">
      <FormLabel>Email:</FormLabel>
      <FormInput type="email" placeholder="Enter your email" name="from_email" required/>
      </PaddingContainer>
      <PaddingContainer bottom="2rem">
      <FormLabel>Message:</FormLabel>
      <FormInput as="textarea" placeholder="Enter your message" name="message" required/>
      </PaddingContainer>
      <FlexContainer justify="center" responsiveFlex>
      <input type="submit" value="Send Message"  className='submit-btn'/>
      </FlexContainer>
   
    </ContactForm>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Footer;
