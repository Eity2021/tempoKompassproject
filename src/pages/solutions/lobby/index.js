import React from "react";
import LobbyBackground from "./LobbyBackground";
import LobbyDesigned from "./LobbyDesigned";
import Receptionist from "./Receptionist";
import LobbyBooking from "./LobbyBooking";
import Interface from "./Interface";
import ManageTeam from "./ManageTeam";
import Newsletter from "../../home/Newsletter";

export default function Lobby() {
  return (
    <div>
      <LobbyBackground></LobbyBackground>
      <Interface></Interface>
      <LobbyDesigned></LobbyDesigned>
      <LobbyBooking></LobbyBooking>
      <ManageTeam></ManageTeam>
      <Receptionist></Receptionist>
       <Newsletter />
    </div>
  );
}
