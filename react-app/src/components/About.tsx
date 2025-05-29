// const About = ()=>{
//     return (<>
// <div style={{color:"red",marginTop:"100px"}}>klj;l</div>
//     </>)
// }
// export default About
"use client"

import { Box, Typography, Button, Modal } from "@mui/material"
import { MusicNote, Upload, People } from "@mui/icons-material"
import { aboutStyles } from "../styles/AboutStyle"
import SignUp from "./user/SignUp"
import { useState } from "react"
import { modalStyle } from "../styles/MenuStyle"

const About = () => {
  const [open, setOpen] = useState(false);
  const handleSuccess = () => {
    setOpen(false)
  }
  const handleSignUpClick = () => {
    setOpen(true)
  }
  const steps = [
    {
      number: 1,
      title: "Sign Up / Login",
      description: "Create account or sign in",
    },
    {
      number: 2,
      title: "Upload & Convert",
      description: "Select PDF file and convert",
    },
    {
      number: 3,
      title: "Download Files",
      description: "Get audio files instantly",
    },
  ]

  const audienceItems = [
    { icon: "🎵", text: "Music enthusiasts who want to hear their sheet music" },
    { icon: "🎹", text: "Music teachers demonstrating melodies to students" },
    { icon: "📚", text: "Music students learning to read sheet music" },
    { icon: "🎼", text: "Musicians checking their compositions" },
  ]

  return (
    <Box sx={aboutStyles.mainContainer}>
      <Box sx={aboutStyles.contentContainer}>
        {/* Left Side - Description */}
        <Box sx={aboutStyles.descriptionSection}>
          <Box sx={aboutStyles.headerCard}>
            <Box sx={aboutStyles.headerContent}>
              <Typography sx={aboutStyles.mainTitle}>Music Sheet Converter</Typography>

              <Typography sx={aboutStyles.subtitle}>Convert sheet music to audio files easily and quickly</Typography>

              <Typography sx={aboutStyles.description}>
                Our website allows you to convert PDF files of sheet music into high-quality audio files. Simply upload
                your sheet music file, and the site will create an audio file that plays the melody for you. All files
                are stored securely and accessible to you at any time.
              </Typography>

              <Box sx={aboutStyles.targetAudience}>
                <Typography sx={aboutStyles.audienceTitle}>
                  <People sx={{ fontSize: "1.5rem" }} />
                  Who is this site for?
                </Typography>
                <Box component="ul" sx={aboutStyles.audienceList}>
                  {audienceItems.map((item, index) => (
                    <Box component="li" key={index} sx={aboutStyles.audienceItem}>
                      <Box sx={aboutStyles.audienceIcon}>{item.icon}</Box>
                      <Typography>{item.text}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={aboutStyles.ctaSection}>
                <Button onClick={handleSignUpClick} sx={aboutStyles.ctaButton}>
                  <Upload />
                  Get Started Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
     
        {/* Right Side - Steps */}
        <Box sx={aboutStyles.stepsSection}>
          <Typography sx={aboutStyles.stepsTitle}>How It Works?</Typography>

          {/* Desktop Steps */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, ...aboutStyles.stepsContainer }}>
            {steps.map((step, index) => (
              <Box key={step.number}>
                <Box sx={aboutStyles.triangleStep(step.number, index === 1)}>
                  <Box sx={aboutStyles.triangleShape(step.number)} />
                  <Box sx={aboutStyles.stepContent(index === 1)}>
                    <Typography sx={aboutStyles.stepNumber}>{step.number}</Typography>
                    <Typography sx={aboutStyles.stepTitle}>{step.title}</Typography>
                    <Typography sx={aboutStyles.stepDescription}>{step.description}</Typography>
                  </Box>
                </Box>
                {index < steps.length - 1 && <Box sx={aboutStyles.connectingLine} />}
              </Box>
            ))}
          </Box>

          {/* Mobile Steps */}
          <Box sx={aboutStyles.mobileStepsContainer}>
            {steps.map((step) => (
              <Box key={step.number} sx={aboutStyles.mobileTriangleStep(step.number)}>
                <Box sx={aboutStyles.mobileTriangleShape(step.number)} />
                <Box sx={aboutStyles.mobileStepContent}>
                  <Typography sx={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.4rem" }}>
                    {step.number}
                  </Typography>
                  <Typography sx={{ fontSize: "0.7rem", fontWeight: 700, lineHeight: 1.2 }}>{step.title}</Typography>
                  <Typography sx={{ fontSize: "0.6rem", fontWeight: 500, opacity: 0.9, lineHeight: 1.2 }}>
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Floating Musical Notes */}
          <MusicNote sx={aboutStyles.floatingNote(0)} style={{ top: "10%", right: "10%" }} />
          <MusicNote sx={aboutStyles.floatingNote(1)} style={{ top: "60%", left: "5%" }} />
          <MusicNote sx={aboutStyles.floatingNote(2)} style={{ bottom: "20%", right: "15%" }} />
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="auth-modal-title"
        aria-describedby="auth-modal-description"
      >
        <Box sx={modalStyle}>
          {<SignUp onSuccess={handleSuccess} />}
        </Box>
      </Modal>
    </Box>
  )
}

export default About
