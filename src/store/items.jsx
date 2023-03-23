import BouncyBall from "../icons/bouncyBall"
import Button from "../icons/Button"
import Car from "../icons/car"
import ChessPiece from "../icons/chessPiece"
import Clover from "../icons/clover"
import Cork from "../icons/cork"
import Dice from "../icons/dice"
import Domino from "../icons/domino"
import DraughtPiece from "../icons/draughtPiece"
import ElasticBand from "../icons/elasticBand"
import Foot from "../icons/foot"
import GlassPebble from "../icons/glassPebble"
import GolfTee from "../icons/golfTee"
import Hairband from "../icons/hairband"
import Hand from "../icons/hand"
import Hotel from "../icons/hotel"
import KeyRing from "../icons/keyRing"
import LetterTile from "../icons/letterTile"
import Marble from "../icons/marble"
import Pig from "../icons/pig"
import PingPongBall from "../icons/pingPongBall"
import Plectrum from "../icons/plectrum"
import PokerChip from "../icons/pokerChip"
import PotLuckCube from "../icons/PotLuckCube"
import TiddlyWink from "../icons/tiddlywink"
import ToyBrick from "../icons/toyBrick"
import Wheel from "../icons/wheel"
import WoodenBead from "../icons/woodenBead"
import WoodenPawn from "../icons/woodenPawn"

const items = [
  { txt: "Hair Band", icon: {cmp: (size)=><Hairband size={size} />} },
  { txt: "Chess Piece", icon: {cmp: (size)=><ChessPiece size={size} />} },
  { txt: "Pot Luck White Cube", icon: {cmp: (size)=><PotLuckCube color="white" size={size} />} },
  { txt: "Domino" , icon: {cmp: (size)=><Domino size={size} />}},
  { txt: "Dice" , icon: {cmp: (size)=><Dice size={size} />}},
  { txt: "Glass Pebble", icon:{cmp: (size)=><GlassPebble size={size} />} },
  { txt: "Key Ring", icon: {cmp: (size)=><KeyRing size={size} />} },
  { txt: "Button", icon: {cmp: (size)=><Button size={size} />} },
  { txt: "Tiddlywink" , icon: {cmp: (size)=><TiddlyWink size={size} />}},
  { txt: "Lucky Clover", icon: {cmp: (size)=><Clover size={size} />} },
  { txt: "Pot Luck Red Cube", icon: {cmp: (size)=><PotLuckCube color="red" size={size} />} },
  { txt: "Toy Car", icon: {cmp: (size)=><Car size={size} />} },
  { txt: "Poker Chip", icon: {cmp: (size)=><PokerChip size={size} />} },
  { txt: "Golf Tee", icon: {cmp: (size)=><GolfTee size={size} />} },
  { txt: "Plectrum", icon: {cmp: (size)=><Plectrum size={size} />} },
  { txt: "Wheel" , icon: {cmp: (size)=><Wheel size={size} />}},
  { txt: "Ping Pong Ball" , icon: {cmp: (size)=><PingPongBall size={size} />}},
  { txt: "Letter Tile" , icon: {cmp: (size)=><LetterTile size={size} />}},
  { txt: "Wooden Pawn", icon: {cmp: (size)=><WoodenPawn size={size} />} },
  { txt: "Wrong Handed", icon: {cmp: (size)=><Hand size={size} />} },
  { txt: "Pot Luck Blue Cube", icon: {cmp: (size)=><PotLuckCube color="blue" size={size} />} },
  { txt: "Pig" , icon: {cmp: (size)=><Pig size={size} />}},
  { txt: "Toy Brick", icon: {cmp: (size)=><ToyBrick size={size} />} },
  { txt: "Wooden Bead" , icon: {cmp: (size)=><WoodenBead size={size} />}},
  { txt: "Draught Piece" , icon: {cmp: (size)=><DraughtPiece size={size} />}},
  { txt: "Bouncy Ball" , icon: {cmp: (size)=><BouncyBall size={size} />}},
  { txt: "Hotel" , icon: {cmp: (size)=><Hotel size={size} />}},
  { txt: "Elastic Band", icon: {cmp: (size)=><ElasticBand size={size} />} },
  { txt: "Marble" , icon: {cmp: (size)=><Marble size={size} />}},
  { txt: "Cork", icon: {cmp: (size)=><Cork size={size} />} },
  { txt: "Find Your Feet", bg: "teal", col: "white", icon: {cmp: (size)=><Foot filled={true}size={size} />} }
];

export default items;
