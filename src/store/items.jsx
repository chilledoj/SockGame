import BouncyBall from "../icons/bouncyBall"
import Button from "../icons/Button"
import ChessPiece from "../icons/chessPiece"
import Dice from "../icons/dice"
import Domino from "../icons/domino"
import DraughtPiece from "../icons/draughtPiece"
import ElasticBand from "../icons/elasticBand"
import Hairband from "../icons/hairband"
import Hotel from "../icons/hotel"
import LetterTile from "../icons/letterTile"
import Marble from "../icons/marble"
import PingPongBall from "../icons/pingPongBall"
import PotLuckCube from "../icons/PotLuckCube"
import TiddlyWink from "../icons/tiddlywink"
import ToyBrick from "../icons/toyBrick"
import Wheel from "../icons/wheel"
import WoodenBead from "../icons/woodenBead"
import WoodenPawn from "../icons/woodenPawn"

const items = [
  { txt: "Hair Band", icon: {cmp: <Hairband />} },
  { txt: "Chess Piece", icon: {cmp: <ChessPiece />} },
  { txt: "Pot Luck White Cube", icon: {cmp: <PotLuckCube color="white" />} },
  { txt: "Domino" , icon: {cmp: <Domino />}},
  { txt: "Dice" , icon: {cmp: <Dice />}},
  { txt: "Glass Pebble" },
  { txt: "Key Ring" },
  { txt: "Button", icon: {cmp: <Button />} },
  { txt: "Tiddlywink" , icon: {cmp: <TiddlyWink />}},
  { txt: "Lucky Clover", bg: "green", col: "white" },
  { txt: "Pot Luck Red Cube", icon: {cmp: <PotLuckCube color="red" />} },
  { txt: "Toy Car" },
  { txt: "Poker Chip" },
  { txt: "Golf Tee" },
  { txt: "Plectrum" },
  { txt: "Wheel" , icon: {cmp: <Wheel />}},
  { txt: "Ping Pong Ball" , icon: {cmp: <PingPongBall />}},
  { txt: "Letter Tile" , icon: {cmp: <LetterTile />}},
  { txt: "Wooden Pawn", icon: {cmp: <WoodenPawn />} },
  { txt: "Wrong Handed", bg: "red", col: "white", modifier: "spin" },
  { txt: "Pot Luck Blue Cube", icon: {cmp: <PotLuckCube color="blue" />} },
  { txt: "Pig" },
  { txt: "Toy Brick", icon: {cmp: <ToyBrick />} },
  { txt: "Wooden Bead" , icon: {cmp: <WoodenBead />}},
  { txt: "Draught Piece" , icon: {cmp: <DraughtPiece />}},
  { txt: "Bouncy Ball" , icon: {cmp: <BouncyBall />}},
  { txt: "Hotel" , icon: {cmp: <Hotel />}},
  { txt: "Elastic Band", icon: {cmp: <ElasticBand />} },
  { txt: "Marble" , icon: {cmp: <Marble />}},
  { txt: "Cork" },
  { txt: "Find Your Feet", bg: "teal", col: "white" }
];

export default items;
