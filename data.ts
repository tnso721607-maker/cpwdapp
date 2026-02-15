import { SORSubHead, ProjectSummary, ApprovedMake } from './types';

export const projectSummary: ProjectSummary = {
  name: "SITC of UPS, CCTV System, AFAS, Desktop, Information Kiosk, Digital Lobby Display, Trolley Mounted Smart Interactive Flat Panel and Desktop Computer System and Water Purifier etc. in the Newly Constructed, Extension of 1st Floor of Annex. Building of Central Library, Visva-Bharati.",
  location: "Central Library Annex, Visva-Bharati, Shantiniketan",
  estimatedCost: {
    civil: 0,
    electrical: 6932650.00,
    total: 6932650.00
  },
  nitNo: "47/EE (E)/DED/CPWD/2025-26",
  emd: 138653.00,
  completionPeriod: "01 (One) Month",
  bidSubmissionDate: "21/02/2026, 3:00 PM"
};

export const civilSorData: SORSubHead[] = [];

export const electricalSorData: SORSubHead[] = [
  {
    id: "SH-I",
    title: "IT & DISPLAY SYSTEMS",
    items: [
      { id: "1", dsrCode: "Non-DSR", description: "Supply, installation, testing & commissioning of 32\" Interactive Touch Information Kiosk, commercial grade display with floor standing enclosure, tempered glass protection, Android/Windows based system, network connectivity and necessary accessories complete.", qty: 4, unit: "Each", rate: 74258, amount: 297032, make: "Panasonic / Sony / Samsung / LG" },
      { id: "2", dsrCode: "Non-DSR", description: "SITC of 98\" 4K Smart Interactive Panel, UHD resolution, inbuilt Android OS, multi-touch capability, HDMI/USB inputs, wall mounting arrangement and complete integration.", qty: 1, unit: "Each", rate: 642100, amount: 642100, make: "Panasonic / Sony / Samsung / LG" },
      { id: "3", dsrCode: "Non-DSR", description: "SITC of 43\" Vertical Digital Lobby Display, commercial signage display, high brightness panel, media player compatibility, wall mount kit complete.", qty: 4, unit: "Each", rate: 61611, amount: 246444, make: "Panasonic / Sony / Samsung / LG" },
      { id: "4", dsrCode: "Non-DSR", description: "Supply of Desktop PC – 12th Gen Intel i5 Processor, 16GB RAM, 512GB SSD, Windows OS, keyboard & mouse complete.", qty: 40, unit: "Each", rate: 81672, amount: 3266880, make: "HP / Dell / Lenovo" }
    ]
  },
  {
    id: "SH-II",
    title: "CCTV SURVEILLANCE SYSTEM",
    items: [
      { id: "5", dsrCode: "DSR (26.2.2)", description: "SITC of 5/6 MP IP IR Dome Camera, vandal resistant housing, 30m IR range, PoE enabled, complete with mounting and configuration.", qty: 8, unit: "Each", rate: 14080, amount: 112640, make: "Honeywell / Bosch / Mobotix / Axis / Wisenet / Sparsh / CP Plus / Prama / Matrix" },
      { id: "6", dsrCode: "DSR (40.12.3)", description: "SITC of 5/6 MP IP IR Bullet Camera, weatherproof IP66 rating, long range IR, PoE enabled complete.", qty: 4, unit: "Each", rate: 13778, amount: 55110, make: "Honeywell / Bosch / Mobotix / Axis / Wisenet / Sparsh / CP Plus / Prama / Matrix" },
      { id: "7", dsrCode: "DSR (42.4.1)", description: "Supply & installation of 16 Channel Network Video Recorder (NVR) with HDMI/VGA output and storage integration.", qty: 1, unit: "Each", rate: 14079, amount: 14079, make: "Honeywell / Bosch / Mobotix / Axis / Wisenet / Sparsh / CP Plus / Prama / Matrix" },
      { id: "8", dsrCode: "DSR (42.2)", description: "SITC of 20 KVA Online UPS, true double conversion, 30–60 min backup with battery bank and panel.", qty: 1, unit: "Each", rate: 375949, amount: 375949, make: "APC / Numeric / Vertiv / Eaton / Mitsubishi / Toshiba / Pegasus" },
      { id: "9", dsrCode: "DSR (28.1.2)", description: "Supply of 8TB Surveillance Grade Hard Disk Drive for continuous recording.", qty: 1, unit: "Each", rate: 22131, amount: 22131, make: "WD / Seagate / Hitachi" },
      { id: "10", dsrCode: "DSR (1.17.2)", description: "SITC of 32\" Industrial LED Monitor, 24x7 rated, HDMI compatible.", qty: 1, unit: "Each", rate: 43549, amount: 43549, make: "Sony / Samsung / LG / Panasonic" },
      { id: "11", dsrCode: "DSR (1.20.1)", description: "Supply of Client PC (Intel i7 based) for CCTV monitoring with required software.", qty: 1, unit: "Each", rate: 99768, amount: 99768, make: "Dell / HP / Lenovo" }
    ]
  },
  {
    id: "SH-III",
    title: "FIRE ALARM SYSTEM",
    items: [
      { id: "12", dsrCode: "DSR (39.12.1)", description: "Supply & fixing of Photoelectric Smoke Detectors complete with base and wiring.", qty: 30, unit: "Each", rate: 1345, amount: 40350, make: "Honeywell / System Sensor / Apollo / Agni" }
    ]
  },
  {
    id: "SH-IV",
    title: "CABLING & CONDUITING WORKS",
    items: [
      { id: "13", dsrCode: "DSR (39.17.2)", description: "Providing & laying 2x1.5 sq.mm FRLS Copper Cable in conduit/trunking.", qty: 200, unit: "Mtr", rate: 84.7, amount: 16940, make: "Finolex / Havells / RR Kabel / KEI / Polycab" },
      { id: "14", dsrCode: "DSR (39.17.3)", description: "Providing & fixing 20mm dia MS Steel Conduit surface/concealed.", qty: 200, unit: "Mtr", rate: 279.4, amount: 55880, make: "AKG / BEC / RM CON / Precision" },
      { id: "19.1", dsrCode: "DSR (39.17.4)", description: "Laying of Cat6 UTP Cable – Single Run complete.", qty: 300, unit: "Mtr", rate: 66, amount: 19800, make: "AMP / Avaya / Belden / Legrand / Molex / Schneider / D-Link / Polycab" },
      { id: "19.2", dsrCode: "DSR (39.23.1)", description: "Cat6 Cable – Double Run", qty: 100, unit: "Mtr", rate: 106, amount: 10600, make: "AMP / Avaya / Belden / Legrand / Molex / Schneider / D-Link / Polycab" },
      { id: "19.3", dsrCode: "DSR (1.17.21)", description: "Cat6 Cable – Triple Run", qty: 100, unit: "Mtr", rate: 144, amount: 14400, make: "AMP / Avaya / Belden / Legrand / Molex / Schneider / D-Link / Polycab" },
      { id: "19.4", dsrCode: "DSR (1.17.24)", description: "Cat6 Cable – Four Run", qty: 50, unit: "Mtr", rate: 184, amount: 9200, make: "AMP / Avaya / Belden / Legrand / Molex / Schneider / D-Link / Polycab" }
    ]
  },
  {
    id: "SH-V",
    title: "NETWORKING COMPONENTS",
    items: [
      { id: "15", dsrCode: "Non-DSR (MR)", description: "24 Port Layer-2 Managed PoE Switch", qty: 2, unit: "Each", rate: 137932, amount: 275864, make: "HP / Cisco / Digisol / Juniper / Zyxel / Netgear / D-Link" },
      { id: "16", dsrCode: "DSR (2.5.1)", description: "24 Port Cat6 Patch Panel", qty: 2, unit: "Each", rate: 5806, amount: 11612, make: "Belden / Systimax / Panduit / Molex / HP" },
      { id: "17", dsrCode: "DSR (2.4.3)", description: "Cat6 Patch Cord 1m", qty: 48, unit: "Each", rate: 166, amount: 7968, make: "AMP / Molex / D-Link / Schneider" },
      { id: "18", dsrCode: "DSR (2.10.1)", description: "Cat6 Information Outlet", qty: 48, unit: "Each", rate: 233, amount: 11184, make: "Legrand / Molex / Schneider / D-Link" },
      { id: "20", dsrCode: "DSR (2.13.1)", description: "6U Wall Mount Networking Rack", qty: 2, unit: "Each", rate: 7633, amount: 15266, make: "Valrack / Net Rack / Panduit / APC" }
    ]
  },
  {
    id: "SH-VI",
    title: "POWER CABLING",
    items: [
      { id: "21.1", dsrCode: "Non-DSR (MR)", description: "3x4 sq.mm Copper Cable", qty: 200, unit: "Mtr", rate: 244, amount: 48800, make: "Finolex / RR Kabel / KEI / Havells / Polycab" },
      { id: "21.2", dsrCode: "Non-DSR (MR)", description: "6x4 sq.mm Copper Cable", qty: 200, unit: "Mtr", rate: 466, amount: 93200, make: "Finolex / RR Kabel / KEI / Havells / Polycab" },
      { id: "21.3", dsrCode: "DSR (1.56)", description: "2x6 sq.mm Copper Cable", qty: 30, unit: "Mtr", rate: 257, amount: 7710, make: "Finolex / RR Kabel / KEI / Havells / Polycab" },
      { id: "21.4", dsrCode: "DSR (1.27.1)", description: "6x6 sq.mm Copper Cable", qty: 50, unit: "Mtr", rate: 705, amount: 35250, make: "Finolex / RR Kabel / KEI / Havells / Polycab" },
      { id: "21.5", dsrCode: "DSR/Non-DSR", description: "4x10 sq.mm Cable", qty: 30, unit: "Mtr", rate: 1037, amount: 31110, make: "Finolex / RR Kabel / KEI / Havells / Polycab" }
    ]
  },
  {
    id: "SH-VII",
    title: "DISTRIBUTION BOARDS & PROTECTION",
    items: [
      { id: "22", dsrCode: "Non-DSR (MR)", description: "4 Way TPN MCB DB", qty: 1, unit: "Each", rate: 8746, amount: 8746, make: "Legrand / C&S / Siemens / Schneider / ABB / L&T" },
      { id: "23", dsrCode: "Non-DSR (MR)", description: "8 Way TPN MCB DB", qty: 2, unit: "Each", rate: 6971, amount: 13942, make: "Legrand / C&S / Siemens / Schneider / ABB / L&T" },
      { id: "24", dsrCode: "Non-DSR (MR)", description: "SP MCB", qty: 48, unit: "Each", rate: 314, amount: 15072, make: "Legrand (DX3) / Siemens (Betaguard) / Schneider (Acti 9) / ABB (SB) / C&S (Wintrip 2) / L&T" },
      { id: "25.1", dsrCode: "Non-DSR (MR)", description: "40A 4P Isolator", qty: 2, unit: "Each", rate: 1154, amount: 2308, make: "Legrand (DX3) / Siemens (Betaguard) / Schneider (Acti 9) / ABB (SB) / C&S (Wintrip 2) / L&T" },
      { id: "25.2", dsrCode: "Non-DSR (MR)", description: "100A 4P Isolator", qty: 1, unit: "Each", rate: 1449, amount: 1449, make: "Legrand (DX3) / Siemens (Betaguard) / Schneider (Acti 9) / ABB (SB) / C&S (Wintrip 2) / L&T" },
      { id: "26", dsrCode: "Non-DSR (MR)", description: "63A FP MCCB", qty: 1, unit: "Each", rate: 10867, amount: 10867, make: "Legrand (DX3) / Siemens (Betaguard) / Schneider (Acti 9) / ABB (SB) / C&S (Wintrip 2) / L&T" },
      { id: "27", dsrCode: "Non-DSR (MR)", description: "40A TP MCB", qty: 4, unit: "Each", rate: 2015, amount: 8060, make: "Legrand (DX3) / Siemens (Betaguard) / Schneider (Acti 9) / ABB (SB) / C&S (Wintrip 2) / L&T" }
    ]
  },
  {
    id: "SH-VIII",
    title: "SOCKETS & BOXES",
    items: [
      { id: "28", dsrCode: "DSR/Non-DSR", description: "GI Box with 2x6A Socket", qty: 40, unit: "Each", rate: 833, amount: 33320, make: "Legrand (Arteor) / MK (Blenz Plus) / ABB (Ivie) / Havells (Murano) / Schneider (Unika Pure)" },
      { id: "29", dsrCode: "Non-DSR (MR)", description: "1/2 Module GI Box", qty: 48, unit: "Each", rate: 389, amount: 18672, make: "Legrand (Arteor) / MK (Blenz Plus) / ABB (Ivie) / Havells (Murano) / Schneider (Unika Pure)" }
    ]
  },
  {
    id: "SH-IX",
    title: "PVC CABLE MANAGEMENT SYSTEM",
    items: [
      { id: "30.1", dsrCode: "Non-DSR (MR)", description: "32×12.5 mm Trunking", qty: 300, unit: "Meter", rate: 204, amount: 61200, make: "MK / Schneider Electric / Legrand" },
      { id: "30.2", dsrCode: "Non-DSR (MR)", description: "100×50 mm Trunking", qty: 250, unit: "Meter", rate: 1189, amount: 297250, make: "MK / Schneider Electric / Legrand" },
      { id: "30.2.2", dsrCode: "Non-DSR (MR)", description: "End Cap", qty: 5, unit: "Each", rate: 196, amount: 980, make: "MK / Schneider Electric / Legrand" },
      { id: "30.2.3", dsrCode: "Non-DSR (MR)", description: "Internal Angle", qty: 10, unit: "Each", rate: 549, amount: 5490, make: "MK / Schneider Electric / Legrand" },
      { id: "30.2.4", dsrCode: "Non-DSR (MR)", description: "External Angle", qty: 5, unit: "Each", rate: 397, amount: 1985, make: "MK / Schneider Electric / Legrand" },
      { id: "30.2.5", dsrCode: "Non-DSR (MR)", description: "Flat Angle", qty: 5, unit: "Each", rate: 507, amount: 2535, make: "MK / Schneider Electric / Legrand" },
      { id: "30.2.6", dsrCode: "Non-DSR (MR)", description: "Flat Tee", qty: 5, unit: "Each", rate: 507, amount: 2535, make: "MK / Schneider Electric / Legrand" },
      { id: "30.2.7", dsrCode: "Non-DSR (MR)", description: "Joint Cover", qty: 30, unit: "Each", rate: 235, amount: 7050, make: "MK / Schneider Electric / Legrand" }
    ]
  },
  {
    id: "SH-X",
    title: "DRINKING WATER SYSTEM",
    items: [
      { id: "31", dsrCode: "Non-DSR (MR)", description: "Drinking Water Cooler cum Purifier", qty: 4, unit: "Each", rate: 140069, amount: 560276, make: "Blue Star / Voltas / Kent / Aquaguard" }
    ]
  }
];

export const approvedMakesData: ApprovedMake[] = [
  // A. Internal Electrical Installation (IEI), Cables & Wiring Accessories
  { id: "1", item: "MCB DB (Items 22, 23)", manufacturers: "Legrand / C&S / Siemens / Schneider / ABB / L&T", category: "Electrical Accessories" },
  { id: "2", item: "MCB / MCCB / Isolator (Items 24-27)", manufacturers: "Legrand (DX3) / Siemens (Betaguard) / Schneider (Acti 9) / ABB (SB) / C&S (Wintrip 2) / L&T", category: "Electrical Accessories" },
  { id: "3", item: "FRLS Copper Cable (Item 13)", manufacturers: "Finolex / Havells / RR Kabel / KEI / Polycab", category: "Electrical Accessories" },
  { id: "4", item: "XLPE Power Cables (Items 21.1–21.5)", manufacturers: "Finolex / RR Kabel / KEI / Havells / Polycab", category: "Electrical Accessories" },
  { id: "5", item: "MS Conduit (Item 14)", manufacturers: "AKG / BEC / RM CON / Precision", category: "Electrical Accessories" },
  { id: "6", item: "Modular Switch/Socket/Data Outlet (Items 28, 29)", manufacturers: "Legrand (Arteor) / MK (Blenz Plus) / ABB (Ivie) / Havells (Murano) / Schneider (Unika Pure)", category: "Electrical Accessories" },
  { id: "7", item: "DLP / PVC Trunking (Item 30)", manufacturers: "MK / Schneider Electric / Legrand", category: "Electrical Accessories" },
  { id: "8", item: "Terminal Blocks & Connectors", manufacturers: "Elmex / Wago / Hensel / Connectwell", category: "Electrical Accessories" },
  { id: "9", item: "Cable Glands (Double Compression)", manufacturers: "Comet / Cosmos / Dowells / Gripwell", category: "Electrical Accessories" },
  { id: "10", item: "Cable Lugs (Copper/Bimetallic)", manufacturers: "Comet / Dowells / Hax Brass / Jainson / Action", category: "Electrical Accessories" },

  // B. Sub-Station / Power Equipment
  { id: "11", item: "LT Panels / Feeder Pillar", manufacturers: "Amit Projects & Controls / Green Galaxy Electrotech / Associated Switchgears / C&S / ETC Electric", category: "Power Equipment" },
  { id: "12", item: "LED Indicating Lamps / Push Buttons", manufacturers: "Schneider Electric / L&T / Siemens / C&S", category: "Power Equipment" },
  { id: "13", item: "Fasteners / GI Clamps", manufacturers: "Hilti / Fisher / GMGR", category: "Power Equipment" },

  // C. CCTV System
  { id: "14", item: "Dome / Bullet Camera (Items 5, 6)", manufacturers: "Honeywell / Bosch / Mobotix / Axis / Wisenet / Sparsh / CP Plus / Prama / Matrix", category: "CCTV System" },
  { id: "15", item: "NVR (Item 7)", manufacturers: "Honeywell / Bosch / Mobotix / Axis / Wisenet / Sparsh / CP Plus / Prama / Matrix", category: "CCTV System" },
  { id: "16", item: "Workstation / Client PC (Item 11)", manufacturers: "Dell / HP / Lenovo", category: "CCTV System" },
  { id: "17", item: "HDD (Item 9)", manufacturers: "WD / Seagate / Hitachi", category: "CCTV System" },
  { id: "18", item: "LED Monitor (Item 10)", manufacturers: "Sony / Samsung / LG / Panasonic", category: "CCTV System" },
  { id: "19", item: "PoE Switch (Item 15)", manufacturers: "HP / Cisco / Digisol / Juniper / Zyxel / Netgear / D-Link", category: "CCTV System" },
  { id: "20", item: "Online UPS (Item 8)", manufacturers: "APC / Numeric / Vertiv / Eaton / Mitsubishi / Toshiba / Pegasus", category: "CCTV System" },
  { id: "21", item: "HDMI Cable", manufacturers: "Lapcare / Honeywell / MX", category: "CCTV System" },

  // D. LAN System
  { id: "22", item: "Networking Rack (Item 20)", manufacturers: "Valrack / Net Rack / Panduit / APC", category: "LAN System" },
  { id: "23", item: "Patch Panel (Item 16)", manufacturers: "Belden / Systimax / Panduit / Molex / HP", category: "LAN System" },
  { id: "24", item: "Network Switch", manufacturers: "Cisco / HP / Allied Telesis / Digisol", category: "LAN System" },
  { id: "25", item: "Cat-6 Cable (Items 19.1–19.4)", manufacturers: "AMP / Avaya / Belden / Legrand / Molex / Schneider / D-Link / Polycab", category: "LAN System" },
  { id: "26", item: "Patch Cord (Item 17)", manufacturers: "AMP / Molex / D-Link / Schneider", category: "LAN System" },
  { id: "27", item: "Information Outlet (Item 18)", manufacturers: "Legrand / Molex / Schneider / D-Link", category: "LAN System" },

  // E. Desktop Systems
  { id: "28", item: "Desktop PC (Items 4 & 11)", manufacturers: "HP / Dell / Lenovo", category: "Desktop Systems" },

  // F. Kiosk & Digital Display Systems
  { id: "29", item: "Touch Information Kiosk (Item 1)", manufacturers: "Panasonic / Sony / Samsung / LG", category: "Kiosk & Display" },
  { id: "30", item: "Smart Interactive Flat Panel (Item 2)", manufacturers: "Panasonic / Sony / Samsung / LG", category: "Kiosk & Display" },
  { id: "31", item: "Digital Lobby Display (Item 3)", manufacturers: "Panasonic / Sony / Samsung / LG", category: "Kiosk & Display" }
];