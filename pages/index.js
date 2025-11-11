import React, { useRef, useState, useEffect, use } from "react"
import * as tf from "@tensorflow/tfjs"
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam"
import { drawHand } from "../components/handposeutil"
import * as fp from "fingerpose"
import Handsigns from "../components/handsigns"

import {
  Text,
  Heading,
  Button,
  Image,
  Stack,
  Container,
  Box,
  VStack,
  ChakraProvider,
} from "@chakra-ui/react"

import { Signimage, Signpass } from "../components/handimage"

import Metatags from "../components/metatags"

// import "../styles/App.css"

// import "@tensorflow/tfjs-backend-webgl"

import { RiCameraFill, RiCameraOffFill, RiDeleteBin5Line } from "react-icons/ri"
import HeadLetter from "../components/HeadLetter"
import DisplaySigns from "../components/DisplaySigns"
import HeroSection from "../components/HeroSection"
import WordShow from "../components/WordShow"

export default function Home() {
const scrollRef = useRef(null);

  



  const [word, setWord] = useState("")
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  const [camState, setCamState] = useState("off")

  const [sign, setSign] = useState(null)

  let signList = []
  let currentSign = 0

  let gamestate = "started"

  // let net;

  async function runHandpose() {
    const net = await handpose.load()
    _signList()

    // window.requestAnimationFrame(loop);

    setInterval(() => {
      detect(net)
    }, 800)
  }

  function _signList() {
    signList = generateSigns()
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  function generateSigns() {
    const password = shuffle(Signpass)
    return password
  }

  async function detect(net) {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video
      const videoWidth = webcamRef.current.video.videoWidth
      const videoHeight = webcamRef.current.video.videoHeight

      // Set video width
      webcamRef.current.video.width = videoWidth
      webcamRef.current.video.height = videoHeight

      // Set canvas height and width
      canvasRef.current.width = videoWidth
      canvasRef.current.height = videoHeight

      // Make Detections
      const hand = await net.estimateHands(video)

      if (hand.length > 0) {
        //loading the fingerpose model
        const GE = new fp.GestureEstimator([
          fp.Gestures.ThumbsUpGesture,
          Handsigns.aSign,
          Handsigns.bSign,
          Handsigns.cSign,
          Handsigns.dSign,
          Handsigns.eSign,
          Handsigns.fSign,
          Handsigns.gSign,
          Handsigns.hSign,
          Handsigns.iSign,
          Handsigns.jSign,
          Handsigns.kSign,
          Handsigns.lSign,
          Handsigns.mSign,
          Handsigns.nSign,
          Handsigns.oSign,
          Handsigns.pSign,
          Handsigns.qSign,
          Handsigns.rSign,
          Handsigns.sSign,
          Handsigns.tSign,
          Handsigns.uSign,
          Handsigns.vSign,
          Handsigns.wSign,
          Handsigns.xSign,
          Handsigns.ySign,
          Handsigns.zSign,
        ])

        const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5)
        // document.querySelector('.pose-data').innerHTML =JSON.stringify(estimatedGestures.poseData, null, 2);

        if (gamestate === "started") {
          document.querySelector("#app-title").innerText =
            "Make a 👍 gesture with your hand to start"
        }

        if (
          estimatedGestures.gestures !== undefined &&
          estimatedGestures.gestures.length > 0
        ) {
          const confidence = estimatedGestures.gestures.map(p => p.confidence)
          const maxConfidence = confidence.indexOf(
            Math.max.apply(undefined, confidence)
          )

          //setting up game state, looking for thumb emoji
          if (
            estimatedGestures.gestures[maxConfidence].name === "thumbs_up" &&
            gamestate !== "played"
          ) {
            _signList()
            gamestate = "played"

          } else if (gamestate === "played") {

            //looping the sign list
            if (currentSign === signList.length) {
              _signList()
              currentSign = 0
              return
            }

            // console.log(signList[currentSign].src.src)

            //game play state

            if (
              typeof signList[currentSign].src.src === "string" ||
              signList[currentSign].src.src instanceof String
            ) {
              document
                .getElementById("emojimage")
                .setAttribute("src", signList[currentSign].src.src)
              if (
                signList[currentSign].alt ===
                estimatedGestures.gestures[maxConfidence].name
              ) {
                currentSign++
              }
              setSign(estimatedGestures.gestures[maxConfidence].name)
            }
          } else if (gamestate === "finished") {
            return
          }
        }
      }
      // Draw hand lines
      const ctx = canvasRef.current.getContext("2d")
      drawHand(hand, ctx)
    }
  }
  console.log(sign)

  useEffect(() => {
    if (sign && sign !== "thumbs_up") {
      setWord(prevWord => prevWord + sign)
    }
  }, [sign])

  //   if (sign) {
  //     console.log(sign, Signimage[sign])
  //   }

  useEffect(() => {
    runHandpose()
  }, [])

  function turnOffCamera() {
    if (camState === "on") {
      setCamState("off")
    } else {
      setCamState("on")
    }
  }

  // delete fucntion
  const handleDetele = () => {
    setWord("")
  }
  const addSpace = () => {
    setWord(prevWord => prevWord + " ")
  }
  const deleteOne = () => {
    setWord(prevWord => prevWord.slice(0, -1))
  }

  return (
    <ChakraProvider>
      <Metatags />
      <Box bgColor="#111">
        <Container centerContent maxW="100%" width="100%" height="100vh" pt="0" pb="0">

          <VStack spacing={4} align="center">
            <Box h="20px"></Box>
            <Heading
              as="h3"
              size="md"
              className="tutor-text"
              color="white"
              textAlign="center"
            ></Heading>
            <Box h="20px"></Box>
          </VStack>


          {/*--------------- header displaying the start gesture --------------- */}
          <Heading
            as="h3"
            size="sm"
            id="app-title"
            color="blue.300"
            textAlign="center"
            mt="100px"

          >
          </Heading>
{/* ------------ header component ----------------- */}
          <HeadLetter />
          


{/*----------------- hero section ----------------- */}
{camState !== "on" && <HeroSection />
}{/*---------------- handsign options ------------------ */}
{camState === "on" && <DisplaySigns/>}

{/*------------ word display --------------- */}
{word && <WordShow word={word} />}

          <Box id="webcam-container">
            {camState === "on" ? (
              <Webcam id="webcam" ref={webcamRef} />
            ) : (
              <div id="webcam" background="black"></div>
            )}

            {sign && camState === "on" ? (
              <div
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  right: "calc(50% - 100px)",
                  bottom: 180,
                  textAlign: "-webkit-center",
                }}
              >
                <p
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1.6rem', // 18px
                    background: 'linear-gradient(to right, #06b6d4, #3b82f6)', // cyan to blue
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text', // for non-webkit browsers
                    color: 'transparent',    // ensure fallback for non-webkit
                  }}
                >
                  Detected gestures :
                </p>

                <img
                  alt="signImage"
                  src={
                    Signimage[sign]?.src
                      ? Signimage[sign].src
                      : "/loveyou_emoji.svg"
                  }
                  style={{
                    height: 30,
                    marginTop: 10,
                  }}
                />

                {/*----------------------------- word disply section ------------------------ */}
              


              </div>
            ) : (
              " "
            )}
          </Box>

          <canvas id="gesture-canvas" ref={canvasRef} style={{}} />
          <Box
            id="singmoji"
            style={{
              zIndex: 9,
              position: "fixed",
              top: "50px",
              right: "30px",
            }}
          ></Box>

          <Image h="150px" objectFit="cover" id="emojimage" />
          {/* <pre className="pose-data" color="white" style={{position: 'fixed', top: '150px', left: '10px'}} >Pose data</pre> */}
        </Container>

        <Stack id="start-button"
          spacing={4}
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
          position="absolute"       // absolute positioning
          bottom="20px"             // distance from bottom
          left="50%"                // start from horizontal center
          transform="translateX(-14%)" // center it horizontally
          w="auto"         >
          <Button
            leftIcon={
              camState === "on" ? (
                <RiCameraFill size={20} />
              ) : (
                <RiCameraOffFill size={20} />
              )
            }
            onClick={turnOffCamera}
            colorScheme="blue"
            borderRadius="lg"
            px={8}  // horizontal padding
            py={5}  // vertical padding
            fontWeight="bold"
            fontSize={{ base: "xs", md: "xs" }}
            shadow="md"

          >
            Camera
          </Button>




          <Button
            borderRadius="lg"
            px={8}  // horizontal padding
            py={5}  // vertical padding
            fontWeight="bold"
            fontSize={{ base: "xs", md: "xs" }}
            shadow="md"

            leftIcon={
              <RiDeleteBin5Line size={20} />

            }
            onClick={addSpace}
            colorScheme="blue"
          >
            Space
          </Button>

          <Button
            borderRadius="lg"
            px={8}  // horizontal padding
            py={5}  // vertical padding
            fontWeight="bold"
            fontSize={{ base: "xs", md: "xs" }}
            shadow="md"
            leftIcon={
              <RiDeleteBin5Line size={20} />

            }
            onClick={deleteOne}
            colorScheme="blue"
          >
            Back
          </Button>



          <Button
            borderRadius="lg"
            px={8}  // horizontal padding
            py={5}  // vertical padding
            fontWeight="bold"
            fontSize={{ base: "xs", md: "xs" }}
            shadow="md"
            leftIcon={
              <RiDeleteBin5Line size={20} />

            }
            onClick={handleDetele}
            colorScheme="blue"
          >
            Delete
          </Button>



        </Stack>
      </Box>
    </ChakraProvider>
  )
}
