import React, { useState } from 'react'
import {motion} from 'framer-motion'
// IMGPORTING GLOBAL STYLES HERE
import { PaddingContainer, Heading, FlexContainer, ParaText, IconContainer, Button } from '../../styles/Global.styles'
import { FaGithub } from 'react-icons/fa'
import { TechStackCard, ProjectImage } from '../../styles/MyProject.styled'
import { ProjectImageContainer } from '../../styles/MyProject.styled'
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants'

const Project = ({data}) => {

  const [showSourceCode, setShowSourceCode] = useState(false)

  const [showLiveLink, setShowLiveLink] = useState(false)
  const handleSourceCode = ()=> {
   setShowSourceCode(true)
   window.open(data. source_code, '_blank');
  }

  const handleSiteRedirect = ()=> {
    setShowLiveLink(true)
    window.open(data.live_link, '_blank')
  }
 
  return (
    <FlexContainer
     direction={data.reverse ? 'row-reverse' : false}
     fullWidthChild>
        {/* LEFT SECTION PROJECT-CONTENT */}
        <motion.div
          variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
            <FlexContainer  gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">
                   {data.project_name}
                </Heading>
                <IconContainer color='blue' size="2rem">
                    <FaGithub/>
                </IconContainer>
            </FlexContainer>
            <PaddingContainer top="1rem">
                <FlexContainer gap="1.5rem">
                  {data.tech_stack.map((stack, index)=> (
                    <TechStackCard key={index}>{stack}</TechStackCard>
                  ))}
    
                </FlexContainer>
            </PaddingContainer>
            <ParaText top="1.5rem" bottom="2rem">
                    {data.project_desc}
            </ParaText>
           <Button onClick={()=> handleSourceCode()}>View Source Code</Button>
           <Button onClick={()=> handleSiteRedirect()}>Visit Website</Button>
        </motion.div>

        {/* RIGHT SECTION PROJECT-IMAGE */}
        <ProjectImageContainer
        //   as={motion.div}
        // variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
        // initial="hidden"
        // whileInView="visible"
        >
            <ProjectImage src={data.project_img}/>
        </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project
